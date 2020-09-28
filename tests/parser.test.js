process.env.NODE_ENV = 'test'

var antlr4 = require('antlr4');
var MyGrammarLexer = require('../generated/MyGrammarLexer').MyGrammarLexer;
var MyGrammarParser = require('../generated/MyGrammarParser').MyGrammarParser;
var Visitor = require('../MyGrammarVisitor');
var assert = require('assert');

describe('parser test', () => {
    describe('assign tests', () => {
        it('simple assign test', () => {
            var input = `res = true`;
            var chars = new antlr4.InputStream(input.toString());
            var lexer = new MyGrammarLexer(chars);
            var tokens = new antlr4.CommonTokenStream(lexer);

            var parser = new MyGrammarParser(tokens);

            var tree = parser.matlab_file();

            const { statements } = tree.accept(new Visitor());
            const assign = statements[0];
            assert.equal(assign.type, "AssignStatement");
            assert.equal(assign.left.length, 1);
            assert.equal(assign.left[0].value, "res");
            assert.equal(assign.right.value, "true");

        });

    });


    it('if test', () => {
        var input = `if n > 5
    res = true;
    end`;
        var chars = new antlr4.InputStream(input.toString());
        var lexer = new MyGrammarLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);

        var parser = new MyGrammarParser(tokens);

        var tree = parser.matlab_file();

        const { statements } = tree.accept(new Visitor());
        const if_statement = statements[0];
        assert.equal(if_statement.type, "IfStatement");
        assert.equal(if_statement.condition.type, "BinaryExpression");
        assert.equal(if_statement.trueBody.length, 1);
        assert.equal(if_statement.trueBody[0].type, "AssignStatement");
        assert.equal(if_statement.elseBody.length, 0);
        assert.equal(if_statement.caseBodies.length, 0);

    });

});
