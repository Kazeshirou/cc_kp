// Generated from MyGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MyGrammarParser.
function MyGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MyGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MyGrammarListener.prototype.constructor = MyGrammarListener;

// Enter a parse tree produced by MyGrammarParser#atom_boolean.
MyGrammarListener.prototype.enterAtom_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_boolean.
MyGrammarListener.prototype.exitAtom_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_empty_array.
MyGrammarListener.prototype.enterAtom_empty_array = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_empty_array.
MyGrammarListener.prototype.exitAtom_empty_array = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_empty_cell.
MyGrammarListener.prototype.enterAtom_empty_cell = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_empty_cell.
MyGrammarListener.prototype.exitAtom_empty_cell = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_end.
MyGrammarListener.prototype.enterAtom_end = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_end.
MyGrammarListener.prototype.exitAtom_end = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_semicolon.
MyGrammarListener.prototype.enterAtom_semicolon = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_semicolon.
MyGrammarListener.prototype.exitAtom_semicolon = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_comma.
MyGrammarListener.prototype.enterAtom_comma = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_comma.
MyGrammarListener.prototype.exitAtom_comma = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_float.
MyGrammarListener.prototype.enterAtom_float = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_float.
MyGrammarListener.prototype.exitAtom_float = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_imaginary.
MyGrammarListener.prototype.enterAtom_imaginary = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_imaginary.
MyGrammarListener.prototype.exitAtom_imaginary = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_index_all.
MyGrammarListener.prototype.enterAtom_index_all = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_index_all.
MyGrammarListener.prototype.exitAtom_index_all = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_integer.
MyGrammarListener.prototype.enterAtom_integer = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_integer.
MyGrammarListener.prototype.exitAtom_integer = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_meta.
MyGrammarListener.prototype.enterAtom_meta = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_meta.
MyGrammarListener.prototype.exitAtom_meta = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_string.
MyGrammarListener.prototype.enterAtom_string = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_string.
MyGrammarListener.prototype.exitAtom_string = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_var.
MyGrammarListener.prototype.enterAtom_var = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_var.
MyGrammarListener.prototype.exitAtom_var = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#matlab_file.
MyGrammarListener.prototype.enterMatlab_file = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#matlab_file.
MyGrammarListener.prototype.exitMatlab_file = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#def_class.
MyGrammarListener.prototype.enterDef_class = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#def_class.
MyGrammarListener.prototype.exitDef_class = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_property.
MyGrammarListener.prototype.enterClass_property = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_property.
MyGrammarListener.prototype.exitClass_property = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_attribute.
MyGrammarListener.prototype.enterClass_attribute = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_attribute.
MyGrammarListener.prototype.exitClass_attribute = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_attribute_boolean.
MyGrammarListener.prototype.enterClass_attribute_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_attribute_boolean.
MyGrammarListener.prototype.exitClass_attribute_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_attribute_meta.
MyGrammarListener.prototype.enterClass_attribute_meta = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_attribute_meta.
MyGrammarListener.prototype.exitClass_attribute_meta = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_property_attribute.
MyGrammarListener.prototype.enterClass_property_attribute = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_property_attribute.
MyGrammarListener.prototype.exitClass_property_attribute = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_property_attribute_boolean.
MyGrammarListener.prototype.enterClass_property_attribute_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_property_attribute_boolean.
MyGrammarListener.prototype.exitClass_property_attribute_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_property_attribute_access.
MyGrammarListener.prototype.enterClass_property_attribute_access = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_property_attribute_access.
MyGrammarListener.prototype.exitClass_property_attribute_access = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_method_attribute.
MyGrammarListener.prototype.enterClass_method_attribute = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_method_attribute.
MyGrammarListener.prototype.exitClass_method_attribute = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_method_attribute_boolean.
MyGrammarListener.prototype.enterClass_method_attribute_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_method_attribute_boolean.
MyGrammarListener.prototype.exitClass_method_attribute_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#class_method_attribute_access.
MyGrammarListener.prototype.enterClass_method_attribute_access = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#class_method_attribute_access.
MyGrammarListener.prototype.exitClass_method_attribute_access = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#super_classes.
MyGrammarListener.prototype.enterSuper_classes = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#super_classes.
MyGrammarListener.prototype.exitSuper_classes = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#def_function.
MyGrammarListener.prototype.enterDef_function = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#def_function.
MyGrammarListener.prototype.exitDef_function = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_class_boolean.
MyGrammarListener.prototype.enterAttrib_class_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_class_boolean.
MyGrammarListener.prototype.exitAttrib_class_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_class_meta.
MyGrammarListener.prototype.enterAttrib_class_meta = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_class_meta.
MyGrammarListener.prototype.exitAttrib_class_meta = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_property_boolean.
MyGrammarListener.prototype.enterAttrib_property_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_property_boolean.
MyGrammarListener.prototype.exitAttrib_property_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_property_access.
MyGrammarListener.prototype.enterAttrib_property_access = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_property_access.
MyGrammarListener.prototype.exitAttrib_property_access = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_method_boolean.
MyGrammarListener.prototype.enterAttrib_method_boolean = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_method_boolean.
MyGrammarListener.prototype.exitAttrib_method_boolean = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#attrib_method_access.
MyGrammarListener.prototype.enterAttrib_method_access = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#attrib_method_access.
MyGrammarListener.prototype.exitAttrib_method_access = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#atom_access.
MyGrammarListener.prototype.enterAtom_access = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#atom_access.
MyGrammarListener.prototype.exitAtom_access = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_assign.
MyGrammarListener.prototype.enterSt_assign = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_assign.
MyGrammarListener.prototype.exitSt_assign = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_assign_left.
MyGrammarListener.prototype.enterSt_assign_left = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_assign_left.
MyGrammarListener.prototype.exitSt_assign_left = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_command.
MyGrammarListener.prototype.enterSt_command = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_command.
MyGrammarListener.prototype.exitSt_command = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_if.
MyGrammarListener.prototype.enterSt_if = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_if.
MyGrammarListener.prototype.exitSt_if = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_else_if.
MyGrammarListener.prototype.enterSt_else_if = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_else_if.
MyGrammarListener.prototype.exitSt_else_if = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_else.
MyGrammarListener.prototype.enterSt_else = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_else.
MyGrammarListener.prototype.exitSt_else = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_for.
MyGrammarListener.prototype.enterSt_for = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_for.
MyGrammarListener.prototype.exitSt_for = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_switch.
MyGrammarListener.prototype.enterSt_switch = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_switch.
MyGrammarListener.prototype.exitSt_switch = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_case.
MyGrammarListener.prototype.enterSt_case = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_case.
MyGrammarListener.prototype.exitSt_case = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_otherwize.
MyGrammarListener.prototype.enterSt_otherwize = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_otherwize.
MyGrammarListener.prototype.exitSt_otherwize = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_try.
MyGrammarListener.prototype.enterSt_try = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_try.
MyGrammarListener.prototype.exitSt_try = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_catch.
MyGrammarListener.prototype.enterSt_catch = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_catch.
MyGrammarListener.prototype.exitSt_catch = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#st_while.
MyGrammarListener.prototype.enterSt_while = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#st_while.
MyGrammarListener.prototype.exitSt_while = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#function_params.
MyGrammarListener.prototype.enterFunction_params = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#function_params.
MyGrammarListener.prototype.exitFunction_params = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#function_returns.
MyGrammarListener.prototype.enterFunction_returns = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#function_returns.
MyGrammarListener.prototype.exitFunction_returns = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#statement.
MyGrammarListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#statement.
MyGrammarListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_tree.
MyGrammarListener.prototype.enterXpr_tree = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_tree.
MyGrammarListener.prototype.exitXpr_tree = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_array.
MyGrammarListener.prototype.enterXpr_array = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_array.
MyGrammarListener.prototype.exitXpr_array = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_cell.
MyGrammarListener.prototype.enterXpr_cell = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_cell.
MyGrammarListener.prototype.exitXpr_cell = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_array_index.
MyGrammarListener.prototype.enterXpr_array_index = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_array_index.
MyGrammarListener.prototype.exitXpr_array_index = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_cell_index.
MyGrammarListener.prototype.enterXpr_cell_index = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_cell_index.
MyGrammarListener.prototype.exitXpr_cell_index = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_field.
MyGrammarListener.prototype.enterXpr_field = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_field.
MyGrammarListener.prototype.exitXpr_field = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_function.
MyGrammarListener.prototype.enterXpr_function = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_function.
MyGrammarListener.prototype.exitXpr_function = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#xpr_function_paramer.
MyGrammarListener.prototype.enterXpr_function_paramer = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#xpr_function_paramer.
MyGrammarListener.prototype.exitXpr_function_paramer = function(ctx) {
};


// Enter a parse tree produced by MyGrammarParser#command_argument.
MyGrammarListener.prototype.enterCommand_argument = function(ctx) {
};

// Exit a parse tree produced by MyGrammarParser#command_argument.
MyGrammarListener.prototype.exitCommand_argument = function(ctx) {
};



exports.MyGrammarListener = MyGrammarListener;