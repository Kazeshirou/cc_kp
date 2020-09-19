const MyGrammarVisitor = require('./generated/MyGrammarVisitor').MyGrammarVisitor;

class ASTNode {
    constructor() {
        this.type = this.constructor.name;
    }
}

class Atom extends ASTNode {
    constructor() {
        super();
        this.value = null;
    }
}

class BooleanAtom extends Atom { }
class EmptyArrayAtom extends Atom { }
class EmptyCellAtom extends Atom { }
class IndexAllAtom extends Atom { }
class IntegerAtom extends Atom { }
class ImaginaryAtom extends Atom { }
class FloatAtom extends Atom { }
class StringAtom extends Atom { }
class VarAtom extends Atom { }



class Expression extends ASTNode { }
class SubExpression extends Expression {
    constructor() {
        super();
        this.subexpression = null;
    }
}
class TransposeExpression extends Expression {
    constructor() {
        super();
        this.operator = null;
        this.operand = null;
    }
}

class UnaryExpression extends Expression {
    constructor() {
        super();
        this.operator = null;
        this.operand = null;
    }
}

class BinaryExpression extends Expression {
    constructor() {
        super();
        this.operator = null;
        this.operand1 = null;
        this.operand2 = null;
    }
}


class Terminal extends ASTNode {
    constructor(value) {
        super();
        this.value = value;
    }
}

class ClassAttribute extends ASTNode {
    constructor() {
        super();
        this.name = null;
        this.value = undefined;
    }
}

class ClassBoolAttrubute extends ClassAttribute { }
class ClassMetaAttrubute extends ClassAttribute { }

class ClassPropertyAttribute extends ASTNode {
    constructor() {
        super();
        this.name = null;
        this.value = undefined;
    }
}

class ClassPropertyBoolAttribute extends ClassPropertyAttribute { }
class ClassPropertyAccessAttribute extends ClassPropertyAttribute { }

class ClassMethodAttribute extends ASTNode {
    constructor() {
        super();
        this.name = null;
        this.value = undefined;
    }
}

class ClassMethodBoolAttribute extends ClassMethodAttribute { }
class ClassMethodAccessAttribute extends ClassMethodAttribute { }

class Program extends ASTNode {
    constructor() {
        super();
        this.classDefinitions = [];
        this.functionDefinitions = [];
        this.statements = [];
    }
}

class ProgramItem extends ASTNode { }

class FunctionDefinition extends ProgramItem {
    constructor() {
        super();
        this.name = null;
        this.specificators = [];
        this.returnValues = [];
        this.params = [];
        this.body = [];
    }
}

class MetodDefinition extends FunctionDefinition {
    constructor() {
        super();
        this.attributes = [];
    }
}

class ClassDefinition extends ProgramItem {
    constructor() {
        super();
        this.name = null;
        this.attributes = [];
        this.superClasses = [];
        this.propertyAttributes = [];
        this.properties = [];
        this.metodAttributes = [];
        this.methods = [];
    }
}

class Statement extends ProgramItem { }

class AssignStatement extends Statement {
    constructor() {
        super();
        this.left = null;
        this.right = null;
    }
}

class CommandStatement extends Statement {
    constructor() {
        super();
        this.command = null;
        this.arguments = [];
    }
}

class IfStatement extends Statement {
    constructor() {
        super();
        this.condition = null;
        this.trueBody = [];
        this.caseBodies = [];
        this.elseBody = [];
    }
}

class ElseIfStatement extends Statement {
    constructor() {
        super();
        this.condition = null;
        this.body = [];
    }
}

class ForStatement extends Statement {
    constructor() {
        super();
        this.index = null
        this.range = null;
        this.body = [];
    }
}

class SwitchStatement extends Statement {
    constructor() {
        super();
        this.condition = null;
        this.caseBodies = [];
        this.defaultBody = [];
    }
}

class CaseStatement extends Statement {
    constructor() {
        super();
        this.condition = null;
        this.body = [];
    }
}

class TryStatement extends Statement {
    constructor() {
        super();
        this.body = [];
        this.catch = [];
    }
}

class CatchStatement extends Statement {
    constructor() {
        super();
        this.targetError = null;
        this.body = [];
    }
}

class WhileStatement extends Statement {
    constructor() {
        super();
        this.condition = null;
        this.body = [];
    }
}

class FunctionCallStatement extends Statement {
    constructor() {
        super();
        this.name = null;
        this.params = [];
    }
}

class FieldStatement extends Statement {
    constructor() {
        super();
        this.object = null;
        this.field = null
    }
}


class Visitor extends MyGrammarVisitor {
    start(ctx) {
        return this.visitMatlab_file(ctx);
    }

    visitMatlab_file(ctx) {
        let file = new Program();

        let i = 0;
        while (true) {
            let func = ctx.def_function(i++);
            if (!func) {
                break;
            }
            file.functionDefinitions.push(this.visitDef_function(func));
        }
        i = 0;
        while (true) {
            let classDef = ctx.def_class(i++);
            if (!classDef) {
                break;
            }
            file.classDefinitions.push(this.visitDef_class(classDef));
        }
        i = 0;
        while (true) {
            let stat = ctx.statement(i++);
            if (!stat) {
                break;
            }
            file.statements.push(this.visitStatement(stat));
        }
        return file;
    }

    visitDef_function(ctx) {
        let func = new FunctionDefinition();
        func.name = this.visitAtom_var(ctx.atom_var());
        let retvals = ctx.function_returns();
        if (retvals) {
            func.returnValues = this.visitFunction_returns(retvals);
        }
        let params = ctx.function_params();
        if (params) {
            func.params = this.visitFunction_params(params);
        }
        if (ctx.GET()) {
            func.specificator.push('get');
        } else if (ctx.SET()) {
            func.specificator.push('set');
        }

        let i = 0;
        while (true) {
            let stat = ctx.statement(i++);
            if (!stat) {
                break;
            }
            func.body.push(this.visitStatement(stat));
        }

        return func;
    }

    visitDef_class(ctx) {
        let classDef = new ClassDefinition();
        let i = 0;
        while (true) {
            let attr = ctx.class_attribute(i++);
            if (!attr) {
                break;
            }
            classDef.attributes.push(this.visitClass_attribute(attr));
        }
        classDef.name = this.visitAtom_var(ctx.atom_var(0));
        let superClasses = ctx.super_classes();
        if (superClasses) {
            classDef.superClasses = this.visitSuper_classes(superClasses);
        }
        i = 0;
        while (true) {
            let attr = ctx.class_property_attribute(i++);
            if (!attr) {
                break;
            }
            classDef.propertyAttributes.push(this.visitClass_property_attribute(attr));
        }
        i = 0;
        while (true) {
            let property = ctx.class_property(i++);
            if (!property) {
                break;
            }
            classDef.properties.push(this.visitClass_property(property));
        }
        i = 0;
        while (true) {
            let attr = ctx.class_method_attribute(i++);
            if (!attr) {
                break;
            }
            classDef.methodAttributes.push(this.visitClass_method_attribute(attr));
        }
        i = 0;
        while (true) {
            let method = ctx.def_function(i++);
            if (!method) {
                break;
            }
            classDef.methods.push(this.visitDef_function(method));
        }


        return classDef;
    }

    visitClass_property(ctx) {
        let atom_var = ctx.atom_var();
        if (atom_var) {
            return this.visitAtom_var(atom_var);
        }
        let st_assign = ctx.st_assign();
        if (st_assign) {
            return this.visitSt_assign(st_assign);
        }
    }

    visitClass_attribute_boolean(ctx) {
        let attr = new ClassBoolAttrubute();
        attr.name = this.visitTerminal(ctx.attrib_class_boolean());
        let value = ctx.atom_boolean();
        if (value) {
            attr.value = this.visitAtom_boolean(value);
        }
        return attr;
    }

    visitClass_attribute_meta(ctx) {
        let attr = new ClassMetaAttrubute();
        attr.name = this.visitTerminal(ctx.attrib_class_meta());
        let value = ctx.atom_meta();
        if (value) {
            attr.value = [];
            let i = 0;
            while (true) {
                let meta = value.atom_var(i++);
                if (!meta) {
                    break;
                }
                attr.value.push(this.visitAtom_var(meta));
            }
        }
        return attr;
    }

    visitClass_property_attribute_boolean(ctx) {
        let attr = new ClassPropertyBoolAttribute();
        attr.name = this.visitTerminal(ctx.attrib_property_boolean());
        let value = ctx.atom_boolean();
        if (value) {
            attr.value = this.visitAtom_boolean(value);
        }
        return attr;
    }

    visitClass_property_attribute_access(ctx) {
        let attr = new ClassPropertyAccessAttribute();
        attr.name = this.visitTerminal(ctx.attrib_property_access());
        let access = ctx.atom_access();
        if (!access) {
            return attr;
        }
        let value = access.atom_meta();
        if (value) {
            attr.value = [];
            let i = 0;
            while (true) {
                let meta = value.atom_var(i++);
                if (!meta) {
                    break;
                }
                attr.value.push(this.visitAtom_var(meta));
            }
        } else {
            attr.value = this.visitTerminal(access);
        }
        return attr;
    }

    visitClass_method_attribute_boolean(ctx) {
        let attr = new ClassMethodBoolAttribute();
        attr.name = this.visitTerminal(ctx.attrib_method_boolean());
        let value = ctx.atom_boolean();
        if (value) {
            attr.value = this.visitAtom_boolean(value);
        }
        return attr;
    }

    visitClass_method_attribute_access(ctx) {
        let attr = new ClassMethodAccessAttribute();
        attr.name = this.visitTerminal(ctx.attrib_method_access());
        let access = ctx.atom_access();
        if (!access) {
            return attr;
        }
        let value = access.atom_meta();
        if (value) {
            attr.value = [];
            let i = 0;
            while (true) {
                let meta = value.atom_var(i++);
                if (!meta) {
                    break;
                }
                attr.value.push(this.visitAtom_var(meta));
            }
        } else {
            attr.value = this.visitTerminal(access);
        }
        return attr;
    }


    visitSuper_classes(ctx) {
        let superClasses = [];
        let i = 0;
        while (true) {
            let attr = ctx.atom_var(i++);
            if (!attr) {
                break;
            }
            superClasses.push(this.visitAtom_var(attr));
        }
        return superClasses;
    }

    visitFunction_returns(ctx) {
        let retvals = [];
        let i = 0;
        while (true) {
            let val = ctx.atom_var(i++);
            if (!val) {
                break;
            }
            retvals.push(this.visitAtom_var(val));
        }
        return retvals;
    }

    visitFunction_params(ctx) {
        let params = [];
        let i = 0;
        while (true) {
            let val = ctx.atom_var(i++);
            if (!val) {
                break;
            }
            params.push(this.visitAtom_var(val));
        }
        return params;
    }

    visitStatement(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitSt_command(ctx) {
        let cmd = new CommandStatement();

        cmd.command = this.visitAtom_var(ctx.atom_var());
        let i = 0;
        while (true) {
            let arg = ctx.command_argument(i++);
            if (!arg) {
                break;
            }
            cmd.arguments.push(arg.getText());
        }
    }

    visitSt_assign(ctx) {
        let stat = new AssignStatement();
        stat.left = this.visitSt_assign_left(ctx.st_assign_left());
        stat.right = this.visit(ctx.getChild(ctx.getChildCount() - 1));
        return stat;
    }

    visitSt_if(ctx) {
        let stat = new IfStatement();
        stat.condition = this.visitXpr_tree(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            stat.trueBody.push(this.visit(bodyStat));
        }
        i = 0;
        while (true) {
            let elifStat = ctx.st_else_if(i++);
            if (!elifStat) {
                break;
            }
            stat.caseBodies.push(this.visitSt_else_if(elifStat));
        }
        let elseStat = ctx.st_else();
        if (elseStat) {
            stat.elseBody = this.visitSt_else(elseStat);
        }

        return stat;
    }

    visitSt_else_if(ctx) {
        let elseif = new ElseIfStatement();
        elseif.condition = this.visitXpr_tree(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            elseif.body.push(this.visit(bodyStat));
        }
        return elseif;
    }

    visitSt_else(ctx) {
        let body = [];
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            body.push(this.visit(bodyStat));
        }
        return body;
    }

    visitSt_for(ctx) {
        let stat = new ForStatement();
        stat.index = this.visitAtom_var(ctx.atom_var());
        stat.range = this.visitStatement(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            stat.body.push(this.visit(bodyStat));
        }
        return stat;
    }

    visitSt_while(ctx) {
        let stat = new WhileStatement();
        stat.condition = this.visitXpr_tree(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            stat.body.push(this.visit(bodyStat));
        }
        return stat;
    }

    visitSt_switch(ctx) {
        let stat = new SwitchStatement();
        stat.condition = this.visitXpr_tree(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let caseStat = ctx.st_case(i++);
            if (!caseStat) {
                break;
            }
            stat.caseBodies.push(this.visitSt_case(caseStat));
        }
        let otherwizeStat = ctx.st_otherwize();
        if (otherwizeStat) {
            stat.elseBody = this.visitSt_otherwize(otherwizeStat);
        }
        return stat;
    }

    visitSt_case(ctx) {
        let caseStat = new CaseStatement();
        caseStat.condition = this.visitXpr_tree(ctx.xpr_tree());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            caseStat.body.push(this.visit(bodyStat));
        }
        return caseStat;
    }

    visitSt_otherwize(ctx) {
        let body = [];
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            body.push(this.visit(bodyStat));
        }
        return body;
    }

    visitSt_try(ctx) {
        let stat = new TryStatement();
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            stat.body.push(this.visit(bodyStat));
        }
        i = 0;
        while (true) {
            let catchStat = ctx.st_catch(i++);
            if (!catchStat) {
                break;
            }
            stat.catch.push(this.visit(catchStat));
        }
        return stat;
    }


    visitSt_catch(ctx) {
        let stat = new CatchStatement();
        stat.targetError = this.visitAtom_var(ctx.atom_var());
        let i = 0;
        while (true) {
            let bodyStat = ctx.statement(i++);
            if (!bodyStat) {
                break;
            }
            stat.body.push(this.visit(bodyStat));
        }
        return stat;
    }

    visitXpr_function(ctx) {
        let stat = new FunctionCallStatement();
        stat.name = this.visitAtom_var(ctx.atom_var());
        let i = 0;
        while (true) {
            let param = ctx.xpr_function_paramer(i++);
            if (!param) {
                break;
            }
            stat.params.push(this.visit(param));
        }
        return stat;
    }

    visitXpr_field(ctx) {
        let stat = new FieldStatement();
        stat.object = this.visit(ctx.getChild(0));
        stat.field = this.visit(ctx.getChild(2));
        return stat;
    }

    visitXpr_tree(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.getChild(0));
        }
        if (ctx.getChildCount() === 2) {
            if (ctx.TRANSPOSE() || ctx.ELMENT_WISE_TRANSPOSE()) {
                let transpose = new TransposeExpression();
                transpose.operator = ctx.getChild(1).getText();
                transpose.operand = this.visit(ctx.getChild(0));
                return transpose;
            } else {
                let unary = new UnaryExpression();
                unary.operator = ctx.getChild(0).getText();
                unary.operand = this.visit(ctx.getChild(0));
                return unary;
            }
        }
        if (ctx.LEFT_PARENTHESIS()) {
            let sub = new SubExpression();
            sub.subexpression = this.visit(ctx.xpr_tree());
            return sub;
        }
        let binary = new BinaryExpression();
        binary.operator = ctx.getChild(1).getText();
        binary.operand1 = this.visit(ctx.xpr_tree(0));
        binary.operand2 = this.visit(ctx.xpr_tree(1));
        return binary;

    }

    visitAtom_boolean(ctx) {
        let atom = new BooleanAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_empty_array(ctx) {
        let atom = new EmptyArrayAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_empty_cell(ctx) {
        let atom = new EmptyCellAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_end() {
    }

    visitAtom_float(ctx) {
        let atom = new FloatAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_imaginary(ctx) {
        let atom = new ImaginaryAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_index_all(ctx) {
        let atom = new IndexAllAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_integer(ctx) {
        let atom = new IntegerAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_string(ctx) {
        let atom = new StringAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_var(ctx) {
        let atom = new VarAtom();
        atom.value = ctx.getText();
        return atom;
    }

    visitAtom_semicolon() {
    }

    visitAtom_comma() {
    }

    visitErrorNode(ctx) {
        return { name: 'error', value: ctx.toString() };
    }

    visitTerminal(ctx) {
        return new Terminal(ctx.getText());
    }
}

module.exports = Visitor;