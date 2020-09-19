grammar MyGrammar;

@lexer::members {
	this.maybeString = false;
}

//// LEXER RULES

// Match all newline characters
NL: ('\r' '\n' | '\r' | '\n') -> channel(HIDDEN);

// Match comments and send them to the HIDDEN channel
BLOCKCOMMENT: '%{' .*? '%}' -> channel(HIDDEN);
COMMENT: '%' .*? NL -> channel(HIDDEN);

// Match whitespace characters and skip
WS: [ \t] { this.maybeString = true; } -> skip;

// Match the multiline break and skip it
ELLIPSIS: '...' -> skip;

// Keywords
BREAK: 'break';
CASE: 'case';
CATCH: 'catch';
CLASSDEF: 'classdef';
CONTINUE: 'continue';
ELSE: 'else';
ELSEIF: 'elseif';
END: 'end';
FOR: 'for';
FUNCTION: 'function';
GET: 'get';
GLOBAL: 'global';
IF: 'if';
OTHERWISE: 'otherwise';
PERSISTENT: 'persistent';
PROPERTIES: 'properties';
RETURN: 'return';
SET: 'set';
SWITCH: 'switch';
TRY: 'try';
WHILE: 'while';

// Special Keywords // ////////////////////

STATIC: 'Static';

// Two Character Operators
ELMENT_WISE_LEFT_DIVIDE: './';
ELMENT_WISE_POWER: '.^';
ELMENT_WISE_RIGHT_DIVIDE: '.\\';
ELMENT_WISE_TIMES: '.*';
ELMENT_WISE_TRANSPOSE: '.\'';
EQUALS: '==' {this.maybeString = true;};
GREATER_THAN_OR_EQUAL: '>=';
LESS_THAN_OR_EQUAL: '<=';
LOGICAL_AND: '&&';
LOGICAL_OR: '||';
NOT_EQUAL: '~=';

// Single Character Operators
ASSIGN: '=' { this.maybeString = true; };
BINARY_AND: '&';
BINARY_OR: '|';
COLON: ':';
GREATER_THAN: '>' { this.maybeString = true; };
LEFT_DIVIDE: '/';
LESS_THAN: '<' { this.maybeString = true; };
MINUS: '-';
NOT: '~';
PLUS: '+';
POWER: '^';
RIGHT_DIVIDE: '\\';
TIMES: '*';
TRANSPOSE: '\'';

// Special Characters
AT: '@';
COMMA: ',' {this.maybeString = true;};
DOT: '.';
SEMI_COLON: ';' {this.maybeString = true;};
LEFT_BRACE: '{' {this.maybeString = true;};
LEFT_PARENTHESIS: '(' {this.maybeString = true;};
LEFT_SQUARE_BRACKET: '[' {this.maybeString = true;};
QUESTION: '?';
RIGHT_BRACE: '}' {this.maybeString = false;};
RIGHT_PARENTHESIS: ')' {this.maybeString = false;};
RIGHT_SQUARE_BRACKET: ']' {this.maybeString = false;};

// Atoms - identifiers, strings, numbers, whitespace
ID: [a-zA-Z] [a-zA-Z0-9_]* { this.maybeString = false; };

IMAGINARY: INT 'i' | FLOAT 'i';

INT: DIGIT+;

FLOAT:
	DIGIT+ '.' DIGIT* EXPONENT?
	| DIGIT+ EXPONENT
	| '.' DIGIT+ EXPONENT?;

fragment EXPONENT: ('e' | 'E') ('+' | '-')? DIGIT+;

fragment DIGIT: [0-9];

STRING:
	{this.maybeString}? (
		'\'' (~('\'' | '\r' | '\n') | '\'\'')* '\''
	)
	| ('"' (~('"' | '\r' | '\n') | '\'\'')* '"');

//// Parser Rules //// ////////////////////

// Atoms // /////////

atom_boolean: 'true' | 'false';

atom_empty_array: LEFT_SQUARE_BRACKET RIGHT_SQUARE_BRACKET;

atom_empty_cell: LEFT_BRACE RIGHT_BRACE;

atom_end: END;

atom_float: FLOAT;

atom_imaginary: IMAGINARY;

atom_index_all: COLON;

atom_integer: INT;

atom_meta:
	QUESTION atom_var
	| LEFT_BRACE (QUESTION atom_var (COMMA? QUESTION atom_var)*)? RIGHT_BRACE;

atom_string: STRING;

atom_var: ID | GET | SET | STATIC;

// Entry point
matlab_file: ( def_class | statement | def_function)*;

// # Definitions
// 
// Definitions are MATLAB language constructs that only 'define' something. A definition when
// evaluated does not result in a value. A definition is a template only.

def_class:
	CLASSDEF (
		LEFT_PARENTHESIS class_attribute* RIGHT_PARENTHESIS
	)* atom_var super_classes? (
		PROPERTIES (
			LEFT_PARENTHESIS class_property_attribute (
				COMMA class_property_attribute
			)* RIGHT_PARENTHESIS
		)? // Zero or one property attribute blocks
		class_property* END
	)* // Zero or more property blocks
	(
		'methods' (
			LEFT_PARENTHESIS class_method_attribute (
				COMMA class_method_attribute
			)* RIGHT_PARENTHESIS
		)? // Zero or one property attribute blocks
		def_function* END
	)* // Zero or more property blocks
	(RETURN | END)?;

class_property: atom_var | st_assign;

class_attribute: class_attribute_boolean | class_attribute_meta;
class_attribute_boolean:
	attrib_class_boolean (ASSIGN atom_boolean)?;
class_attribute_meta: attrib_class_meta (ASSIGN atom_meta)?;

class_property_attribute:
	class_property_attribute_boolean
	| class_property_attribute_access;
class_property_attribute_boolean:
	attrib_property_boolean (ASSIGN atom_boolean)?;
class_property_attribute_access:
	attrib_property_access (ASSIGN atom_access)?;

class_method_attribute:
	class_method_attribute_boolean
	| class_method_attribute_access;
class_method_attribute_boolean:
	attrib_method_boolean (ASSIGN atom_boolean)?;
class_method_attribute_access:
	attrib_method_access (ASSIGN atom_access)?;

super_classes: LESS_THAN atom_var (BINARY_AND atom_var)*;

def_function:
	FUNCTION (function_returns ASSIGN)? ((GET | SET) DOT)? atom_var function_params? statement* (
		END
		| RETURN
	)?;

attrib_class_boolean:
	'Abstract'
	| 'ConstructOnLoad'
	| 'HandleCompatible'
	| 'Hidden'
	| 'Sealed';

attrib_class_meta: 'AllowedSubclasses' | 'InferiorClasses';

attrib_property_boolean:
	'AbortSet'
	| 'Abstract'
	| 'Constant'
	| 'Dependent'
	| 'GetObservable'
	| 'Hidden'
	| 'NonCopyable'
	| 'SetObservable'
	| 'Transient';

attrib_property_access: 'Access' | 'GetAccess' | 'SetAccess';

attrib_method_boolean:
	'Abstract'
	| 'Hidden'
	| 'Sealed'
	| STATIC;

attrib_method_access: 'Access';

atom_access: 'public' | 'protected' | 'private' | atom_meta;

st_assign:
	st_assign_left ASSIGN (
		atom_empty_cell
		| xpr_tree
		| xpr_handle
	);

st_assign_left: (
		atom_var
		| xpr_array_index
		| xpr_cell_index
		| xpr_field
	)
	| LEFT_SQUARE_BRACKET (
		NOT
		| atom_var
		| xpr_array_index
		| xpr_cell_index
		| xpr_field
	) (
		COMMA (
			NOT
			| atom_var
			| xpr_array_index
			| xpr_cell_index
			| xpr_field
		)
	)* RIGHT_SQUARE_BRACKET ASSIGN (
		atom_empty_cell
		| xpr_tree
		| xpr_handle
	);

st_command: atom_var command_argument+;

// if_statement can be multiline or single line
st_if:
	IF xpr_tree (COMMA | SEMI_COLON)? statement+ (
		COMMA
		| SEMI_COLON
		| (st_else_if* (st_else)?)
	) END;

st_else_if: ELSEIF xpr_tree COMMA? statement*;

st_else: ELSE statement*;

st_for: FOR atom_var ASSIGN xpr_tree COMMA? statement* END;

st_switch: SWITCH xpr_tree st_case* st_otherwize? END;

st_case: CASE xpr_tree statement*;

st_otherwize: OTHERWISE statement*;

st_try: TRY COMMA? statement* st_catch* END;

st_catch: CATCH atom_var? statement*;

st_while: WHILE xpr_tree COMMA? statement* END;

function_params:
	LEFT_PARENTHESIS (atom_var (COMMA atom_var)*)? RIGHT_PARENTHESIS;

function_returns:
	atom_var
	| LEFT_SQUARE_BRACKET atom_var (COMMA atom_var)* RIGHT_SQUARE_BRACKET;

statement:
	(
		st_assign
		| st_command
		| st_if
		| st_for
		| st_switch
		| st_try
		| st_while
		| xpr_function
		| xpr_field
		| xpr_tree
		| atom_var
		| BREAK
		| CONTINUE
		| RETURN
	) (COMMA | SEMI_COLON)?;

// ## Expression Trees
// 
// Expression trees model a generic expression in MATLAB. The difference between `xpr_tree` and
// `xpr_tree_` (with underscore) is that `xpr_tree_` includes the `end` keyword can can be used for
// array or cell indexing. To make this work we also need `xpr_array_` and `xpr_cell_` which are
// analogous.
xpr_tree:
	atom_boolean
	| atom_empty_array
	| atom_float
	| atom_imaginary
	| atom_integer
	| atom_string
	| atom_var
	| xpr_array
	| xpr_array_index
	| xpr_cell
	| xpr_cell_index
	| xpr_field
	| xpr_function
	| LEFT_PARENTHESIS xpr_tree RIGHT_PARENTHESIS
	| xpr_tree (ELMENT_WISE_TRANSPOSE | TRANSPOSE)
	| xpr_tree (ELMENT_WISE_POWER | POWER) xpr_tree
	| (PLUS | MINUS | NOT) xpr_tree
	| xpr_tree (
		ELMENT_WISE_TIMES
		| ELMENT_WISE_RIGHT_DIVIDE
		| ELMENT_WISE_LEFT_DIVIDE
	) xpr_tree
	| xpr_tree (TIMES | RIGHT_DIVIDE | LEFT_DIVIDE) xpr_tree
	| xpr_tree (PLUS | MINUS) xpr_tree
	| xpr_tree COLON xpr_tree
	| xpr_tree LESS_THAN xpr_tree
	| xpr_tree LESS_THAN_OR_EQUAL xpr_tree
	| xpr_tree GREATER_THAN xpr_tree
	| xpr_tree GREATER_THAN_OR_EQUAL xpr_tree
	| xpr_tree EQUALS xpr_tree
	| xpr_tree NOT_EQUAL xpr_tree
	| xpr_tree BINARY_AND xpr_tree
	| xpr_tree BINARY_OR xpr_tree
	| xpr_tree LOGICAL_AND xpr_tree
	| xpr_tree LOGICAL_OR xpr_tree;

xpr_tree_:
	atom_boolean
	| atom_empty_array
	| atom_end
	| atom_float
	| atom_imaginary
	| atom_integer
	| atom_string
	| atom_var
	| xpr_array_
	| xpr_array_index
	| xpr_cell_
	| xpr_cell_index
	| xpr_field
	| xpr_function
	| LEFT_PARENTHESIS xpr_tree_ RIGHT_PARENTHESIS
	| xpr_tree_ (ELMENT_WISE_TRANSPOSE | TRANSPOSE)
	| xpr_tree_ (ELMENT_WISE_POWER | POWER) xpr_tree_
	| (PLUS | MINUS | NOT) xpr_tree_
	| xpr_tree_ (
		ELMENT_WISE_TIMES
		| ELMENT_WISE_RIGHT_DIVIDE
		| ELMENT_WISE_LEFT_DIVIDE
	) xpr_tree_
	| xpr_tree_ (TIMES | RIGHT_DIVIDE | LEFT_DIVIDE) xpr_tree_
	| xpr_tree_ (PLUS | MINUS) xpr_tree_
	| xpr_tree_ COLON xpr_tree_
	| xpr_tree_ LESS_THAN xpr_tree_
	| xpr_tree_ LESS_THAN_OR_EQUAL xpr_tree_
	| xpr_tree_ GREATER_THAN xpr_tree_
	| xpr_tree_ GREATER_THAN_OR_EQUAL xpr_tree_
	| xpr_tree_ EQUALS xpr_tree_
	| xpr_tree_ NOT_EQUAL xpr_tree_
	| xpr_tree_ BINARY_AND xpr_tree_
	| xpr_tree_ BINARY_OR xpr_tree_
	| xpr_tree_ LOGICAL_AND xpr_tree_
	| xpr_tree_ LOGICAL_OR xpr_tree_;

// Apparently MATLAB doesn't care whether you add commas to an array definition or not. E.g. [0 0 8]
// [[0 0 8] [9 0 8]] [[0 0 8],[9 0 8]] [[0 0, 8],[9 0 8]] and [0 8 9, 10, 40 50 60] are all valid
// matlab expressions. The caveat is that you can't have two simultaneous commas. That throws an
// error. E.g. [0,,1] is not allowed.
xpr_array:
	LEFT_SQUARE_BRACKET xpr_tree (COMMA? xpr_tree)* RIGHT_SQUARE_BRACKET
	| LEFT_SQUARE_BRACKET xpr_tree (COMMA? xpr_tree)* (
		SEMI_COLON xpr_tree (COMMA? xpr_tree)*
	)* RIGHT_SQUARE_BRACKET;

xpr_array_:
	LEFT_SQUARE_BRACKET xpr_tree_ (COMMA? xpr_tree_)* RIGHT_SQUARE_BRACKET
	| LEFT_SQUARE_BRACKET xpr_tree_ (COMMA? xpr_tree_)* (
		SEMI_COLON xpr_tree_ (COMMA? xpr_tree_)*
	)* RIGHT_SQUARE_BRACKET;

xpr_cell:
	LEFT_BRACE (xpr_tree | xpr_handle) (
		COMMA? (xpr_tree | xpr_handle)
	)* RIGHT_BRACE
	| LEFT_BRACE (xpr_tree | xpr_handle) (
		COMMA? (xpr_tree | xpr_handle)
	)* (
		SEMI_COLON (xpr_tree | xpr_handle) (
			COMMA? (xpr_tree | xpr_handle)
		)*
	)* RIGHT_BRACE;

xpr_cell_:
	LEFT_BRACE xpr_tree_ (COMMA? xpr_tree_)* RIGHT_BRACE
	| LEFT_BRACE xpr_tree_ (COMMA? xpr_tree_)* (
		SEMI_COLON xpr_tree_ (COMMA? xpr_tree_)*
	)* RIGHT_BRACE;

// SYNTAX identifier (index_express [, indexexpression] ...)
xpr_array_index: (xpr_cell_index | atom_var) LEFT_PARENTHESIS (
		atom_index_all
		| xpr_tree_
	) (COMMA (atom_index_all | xpr_tree_))* RIGHT_PARENTHESIS;

xpr_cell_index:
	atom_var LEFT_BRACE (atom_index_all | xpr_tree_) (
		COMMA (atom_index_all | xpr_tree_)
	)* RIGHT_BRACE;

// a.b == identifier DOT identifier a.b.c == (a.b).c == field_access DOT identifier a.b.c.f() ==
// ((a.b).c).f()
xpr_field:
	atom_var DOT atom_var
	| atom_var DOT xpr_array_index
	| atom_var DOT xpr_cell_index
	| atom_var DOT xpr_function
	| xpr_array_index DOT atom_var
	| xpr_array_index DOT xpr_array_index
	| xpr_array_index DOT xpr_cell_index
	| xpr_array_index DOT xpr_function
	| xpr_cell_index DOT atom_var
	| xpr_cell_index DOT xpr_array_index
	| xpr_cell_index DOT xpr_cell_index
	| xpr_cell_index DOT xpr_function
	| xpr_field DOT atom_var
	| xpr_field DOT xpr_array_index
	| xpr_field DOT xpr_cell_index
	| xpr_field DOT xpr_function;

xpr_function:
	atom_var LEFT_PARENTHESIS (
		xpr_function_paramer (COMMA xpr_function_paramer)*
	)? RIGHT_PARENTHESIS;

xpr_function_paramer: xpr_tree | xpr_handle | atom_empty_cell;

xpr_handle: AT atom_var | AT function_params statement;

command_argument: ID;