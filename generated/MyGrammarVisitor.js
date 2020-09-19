// Generated from MyGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MyGrammarParser.

function MyGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MyGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MyGrammarVisitor.prototype.constructor = MyGrammarVisitor;

// Visit a parse tree produced by MyGrammarParser#atom_boolean.
MyGrammarVisitor.prototype.visitAtom_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_empty_array.
MyGrammarVisitor.prototype.visitAtom_empty_array = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_empty_cell.
MyGrammarVisitor.prototype.visitAtom_empty_cell = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_end.
MyGrammarVisitor.prototype.visitAtom_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_semicolon.
MyGrammarVisitor.prototype.visitAtom_semicolon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_comma.
MyGrammarVisitor.prototype.visitAtom_comma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_float.
MyGrammarVisitor.prototype.visitAtom_float = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_imaginary.
MyGrammarVisitor.prototype.visitAtom_imaginary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_index_all.
MyGrammarVisitor.prototype.visitAtom_index_all = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_integer.
MyGrammarVisitor.prototype.visitAtom_integer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_meta.
MyGrammarVisitor.prototype.visitAtom_meta = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_string.
MyGrammarVisitor.prototype.visitAtom_string = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_var.
MyGrammarVisitor.prototype.visitAtom_var = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#matlab_file.
MyGrammarVisitor.prototype.visitMatlab_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#def_class.
MyGrammarVisitor.prototype.visitDef_class = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_property.
MyGrammarVisitor.prototype.visitClass_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_attribute.
MyGrammarVisitor.prototype.visitClass_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_attribute_boolean.
MyGrammarVisitor.prototype.visitClass_attribute_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_attribute_meta.
MyGrammarVisitor.prototype.visitClass_attribute_meta = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_property_attribute.
MyGrammarVisitor.prototype.visitClass_property_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_property_attribute_boolean.
MyGrammarVisitor.prototype.visitClass_property_attribute_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_property_attribute_access.
MyGrammarVisitor.prototype.visitClass_property_attribute_access = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_method_attribute.
MyGrammarVisitor.prototype.visitClass_method_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_method_attribute_boolean.
MyGrammarVisitor.prototype.visitClass_method_attribute_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#class_method_attribute_access.
MyGrammarVisitor.prototype.visitClass_method_attribute_access = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#super_classes.
MyGrammarVisitor.prototype.visitSuper_classes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#def_function.
MyGrammarVisitor.prototype.visitDef_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_class_boolean.
MyGrammarVisitor.prototype.visitAttrib_class_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_class_meta.
MyGrammarVisitor.prototype.visitAttrib_class_meta = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_property_boolean.
MyGrammarVisitor.prototype.visitAttrib_property_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_property_access.
MyGrammarVisitor.prototype.visitAttrib_property_access = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_method_boolean.
MyGrammarVisitor.prototype.visitAttrib_method_boolean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#attrib_method_access.
MyGrammarVisitor.prototype.visitAttrib_method_access = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#atom_access.
MyGrammarVisitor.prototype.visitAtom_access = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_assign.
MyGrammarVisitor.prototype.visitSt_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_assign_left.
MyGrammarVisitor.prototype.visitSt_assign_left = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_command.
MyGrammarVisitor.prototype.visitSt_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_if.
MyGrammarVisitor.prototype.visitSt_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_else_if.
MyGrammarVisitor.prototype.visitSt_else_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_else.
MyGrammarVisitor.prototype.visitSt_else = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_for.
MyGrammarVisitor.prototype.visitSt_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_switch.
MyGrammarVisitor.prototype.visitSt_switch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_case.
MyGrammarVisitor.prototype.visitSt_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_otherwize.
MyGrammarVisitor.prototype.visitSt_otherwize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_try.
MyGrammarVisitor.prototype.visitSt_try = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_catch.
MyGrammarVisitor.prototype.visitSt_catch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#st_while.
MyGrammarVisitor.prototype.visitSt_while = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#function_params.
MyGrammarVisitor.prototype.visitFunction_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#function_returns.
MyGrammarVisitor.prototype.visitFunction_returns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#statement.
MyGrammarVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_tree.
MyGrammarVisitor.prototype.visitXpr_tree = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_array.
MyGrammarVisitor.prototype.visitXpr_array = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_cell.
MyGrammarVisitor.prototype.visitXpr_cell = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_array_index.
MyGrammarVisitor.prototype.visitXpr_array_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_cell_index.
MyGrammarVisitor.prototype.visitXpr_cell_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_field.
MyGrammarVisitor.prototype.visitXpr_field = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_function.
MyGrammarVisitor.prototype.visitXpr_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#xpr_function_paramer.
MyGrammarVisitor.prototype.visitXpr_function_paramer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyGrammarParser#command_argument.
MyGrammarVisitor.prototype.visitCommand_argument = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MyGrammarVisitor = MyGrammarVisitor;