var antlr4 = require('antlr4');
var fs = require('fs');
var MyGrammarLexer = require('./generated/MyGrammarLexer').MyGrammarLexer;
var MyGrammarParser = require('./generated/MyGrammarParser').MyGrammarParser;
var Visitor = require('./MyGrammarVisitor');
// var RuleContext = require('./node_modules/antlr4/RuleContext').RuleContext;
// var INVALID_ALT_NUMBER = require('./node_modules/antlr4/atn/ATN').INVALID_ALT_NUMBER;

var input = fs.readFileSync('input.m');
var chars = new antlr4.InputStream(input.toString());
var lexer = new MyGrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);

var parser = new MyGrammarParser(tokens);

var tree = parser.matlab_file();

var res = tree.accept(new Visitor());
fs.writeFile("output.json", JSON.stringify(res),
    (err) => {
        if (err) {
            throw err;
        }
        console.log('complete');
    }
);

for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.get(i);
    console.log(`${token.line}:${token.column} type=${token.type} text='${token.text}'`);
}