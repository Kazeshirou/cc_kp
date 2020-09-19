// Generated from /home/ntl/projects/nodejs_cc_kp/MyGrammar.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class algol60Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, STRING=54, LETTER=55, DIGIT=56, ARITHMETIC_OPERATOR=57, RELATIONAL_OPERATOR=58, 
		LOGICAL_OPERATOR=59, SEQUENTIAL_OPERATOR=60, SEPARATOR=61, DECLARATOR=62, 
		WS=63;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
			"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
			"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
			"T__49", "T__50", "T__51", "T__52", "STRING", "LETTER", "DIGIT", "ARITHMETIC_OPERATOR", 
			"RELATIONAL_OPERATOR", "LOGICAL_OPERATOR", "SEQUENTIAL_OPERATOR", "SEPARATOR", 
			"DECLARATOR", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'begin'", "';'", "'end'", "'own'", "'real'", "'integer'", 
			"'boolean'", "','", "'array'", "'switch'", "':='", "'procedure'", "'('", 
			"')'", "'value'", "'label'", "'goto'", "'else'", "'if'", "'then'", "'for'", 
			"'do'", "'step'", "'until'", "'while'", "'+'", "' \u2013'", "'\u00D7'", 
			"'/'", "'\u00F7'", "'\u2191'", "'.'", "'10'", "'\u2013'", "'\u2263'", 
			"'\u2283'", "'\u22C1'", "'\u22C0'", "'\u00AC'", "'<'", "'\u2264'", "'='", 
			"'\u2260'", "'>'", "'\u2265'", "'['", "']'", "'true'", "'false'", "'`'", 
			"'''", "'string'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "STRING", "LETTER", "DIGIT", "ARITHMETIC_OPERATOR", 
			"RELATIONAL_OPERATOR", "LOGICAL_OPERATOR", "SEQUENTIAL_OPERATOR", "SEPARATOR", 
			"DECLARATOR", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public algol60Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MyGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2A\u01ba\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3"+
		"\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3"+
		"\27\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3"+
		"\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3("+
		"\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3"+
		"\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\65\3\65\3"+
		"\66\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\7\67\u0145\n\67\f\67\16\67"+
		"\u0148\13\67\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3=\3=\3=\3"+
		"=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\5=\u0169\n=\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\5"+
		">\u0187\n>\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3"+
		"?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\5?\u01b2"+
		"\n?\3@\6@\u01b5\n@\r@\16@\u01b6\3@\3@\2\2A\3\3\5\4\7\5\t\6\13\7\r\b\17"+
		"\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+"+
		"\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+"+
		"U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\3\2\t"+
		"\5\2\f\f\17\17$$\4\2C\\c|\b\2--\61\61\u00d9\u00d9\u00f9\u00f9\u2015\u2015"+
		"\u2193\u2193\5\2>@\u2262\u2262\u2266\u2267\6\2\u00ae\u00ae\u2265\u2265"+
		"\u2285\u2285\u22c2\u22c3\4\2..\60\60\5\2\13\f\17\17\"\"\2\u01ce\2\3\3"+
		"\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2"+
		"\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3"+
		"\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2"+
		"%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61"+
		"\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2"+
		"\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I"+
		"\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2"+
		"\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2"+
		"\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o"+
		"\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2"+
		"\2\2\2}\3\2\2\2\2\177\3\2\2\2\3\u0081\3\2\2\2\5\u0083\3\2\2\2\7\u0089"+
		"\3\2\2\2\t\u008b\3\2\2\2\13\u008f\3\2\2\2\r\u0093\3\2\2\2\17\u0098\3\2"+
		"\2\2\21\u00a0\3\2\2\2\23\u00a8\3\2\2\2\25\u00aa\3\2\2\2\27\u00b0\3\2\2"+
		"\2\31\u00b7\3\2\2\2\33\u00ba\3\2\2\2\35\u00c4\3\2\2\2\37\u00c6\3\2\2\2"+
		"!\u00c8\3\2\2\2#\u00ce\3\2\2\2%\u00d4\3\2\2\2\'\u00d9\3\2\2\2)\u00de\3"+
		"\2\2\2+\u00e1\3\2\2\2-\u00e6\3\2\2\2/\u00ea\3\2\2\2\61\u00ed\3\2\2\2\63"+
		"\u00f2\3\2\2\2\65\u00f8\3\2\2\2\67\u00fe\3\2\2\29\u0100\3\2\2\2;\u0103"+
		"\3\2\2\2=\u0105\3\2\2\2?\u0107\3\2\2\2A\u0109\3\2\2\2C\u010b\3\2\2\2E"+
		"\u010d\3\2\2\2G\u0110\3\2\2\2I\u0112\3\2\2\2K\u0114\3\2\2\2M\u0116\3\2"+
		"\2\2O\u0118\3\2\2\2Q\u011a\3\2\2\2S\u011c\3\2\2\2U\u011e\3\2\2\2W\u0120"+
		"\3\2\2\2Y\u0122\3\2\2\2[\u0124\3\2\2\2]\u0126\3\2\2\2_\u0128\3\2\2\2a"+
		"\u012a\3\2\2\2c\u012c\3\2\2\2e\u0131\3\2\2\2g\u0137\3\2\2\2i\u0139\3\2"+
		"\2\2k\u013b\3\2\2\2m\u0142\3\2\2\2o\u014b\3\2\2\2q\u014d\3\2\2\2s\u014f"+
		"\3\2\2\2u\u0151\3\2\2\2w\u0153\3\2\2\2y\u0168\3\2\2\2{\u0186\3\2\2\2}"+
		"\u01b1\3\2\2\2\177\u01b4\3\2\2\2\u0081\u0082\7<\2\2\u0082\4\3\2\2\2\u0083"+
		"\u0084\7d\2\2\u0084\u0085\7g\2\2\u0085\u0086\7i\2\2\u0086\u0087\7k\2\2"+
		"\u0087\u0088\7p\2\2\u0088\6\3\2\2\2\u0089\u008a\7=\2\2\u008a\b\3\2\2\2"+
		"\u008b\u008c\7g\2\2\u008c\u008d\7p\2\2\u008d\u008e\7f\2\2\u008e\n\3\2"+
		"\2\2\u008f\u0090\7q\2\2\u0090\u0091\7y\2\2\u0091\u0092\7p\2\2\u0092\f"+
		"\3\2\2\2\u0093\u0094\7t\2\2\u0094\u0095\7g\2\2\u0095\u0096\7c\2\2\u0096"+
		"\u0097\7n\2\2\u0097\16\3\2\2\2\u0098\u0099\7k\2\2\u0099\u009a\7p\2\2\u009a"+
		"\u009b\7v\2\2\u009b\u009c\7g\2\2\u009c\u009d\7i\2\2\u009d\u009e\7g\2\2"+
		"\u009e\u009f\7t\2\2\u009f\20\3\2\2\2\u00a0\u00a1\7d\2\2\u00a1\u00a2\7"+
		"q\2\2\u00a2\u00a3\7q\2\2\u00a3\u00a4\7n\2\2\u00a4\u00a5\7g\2\2\u00a5\u00a6"+
		"\7c\2\2\u00a6\u00a7\7p\2\2\u00a7\22\3\2\2\2\u00a8\u00a9\7.\2\2\u00a9\24"+
		"\3\2\2\2\u00aa\u00ab\7c\2\2\u00ab\u00ac\7t\2\2\u00ac\u00ad\7t\2\2\u00ad"+
		"\u00ae\7c\2\2\u00ae\u00af\7{\2\2\u00af\26\3\2\2\2\u00b0\u00b1\7u\2\2\u00b1"+
		"\u00b2\7y\2\2\u00b2\u00b3\7k\2\2\u00b3\u00b4\7v\2\2\u00b4\u00b5\7e\2\2"+
		"\u00b5\u00b6\7j\2\2\u00b6\30\3\2\2\2\u00b7\u00b8\7<\2\2\u00b8\u00b9\7"+
		"?\2\2\u00b9\32\3\2\2\2\u00ba\u00bb\7r\2\2\u00bb\u00bc\7t\2\2\u00bc\u00bd"+
		"\7q\2\2\u00bd\u00be\7e\2\2\u00be\u00bf\7g\2\2\u00bf\u00c0\7f\2\2\u00c0"+
		"\u00c1\7w\2\2\u00c1\u00c2\7t\2\2\u00c2\u00c3\7g\2\2\u00c3\34\3\2\2\2\u00c4"+
		"\u00c5\7*\2\2\u00c5\36\3\2\2\2\u00c6\u00c7\7+\2\2\u00c7 \3\2\2\2\u00c8"+
		"\u00c9\7x\2\2\u00c9\u00ca\7c\2\2\u00ca\u00cb\7n\2\2\u00cb\u00cc\7w\2\2"+
		"\u00cc\u00cd\7g\2\2\u00cd\"\3\2\2\2\u00ce\u00cf\7n\2\2\u00cf\u00d0\7c"+
		"\2\2\u00d0\u00d1\7d\2\2\u00d1\u00d2\7g\2\2\u00d2\u00d3\7n\2\2\u00d3$\3"+
		"\2\2\2\u00d4\u00d5\7i\2\2\u00d5\u00d6\7q\2\2\u00d6\u00d7\7v\2\2\u00d7"+
		"\u00d8\7q\2\2\u00d8&\3\2\2\2\u00d9\u00da\7g\2\2\u00da\u00db\7n\2\2\u00db"+
		"\u00dc\7u\2\2\u00dc\u00dd\7g\2\2\u00dd(\3\2\2\2\u00de\u00df\7k\2\2\u00df"+
		"\u00e0\7h\2\2\u00e0*\3\2\2\2\u00e1\u00e2\7v\2\2\u00e2\u00e3\7j\2\2\u00e3"+
		"\u00e4\7g\2\2\u00e4\u00e5\7p\2\2\u00e5,\3\2\2\2\u00e6\u00e7\7h\2\2\u00e7"+
		"\u00e8\7q\2\2\u00e8\u00e9\7t\2\2\u00e9.\3\2\2\2\u00ea\u00eb\7f\2\2\u00eb"+
		"\u00ec\7q\2\2\u00ec\60\3\2\2\2\u00ed\u00ee\7u\2\2\u00ee\u00ef\7v\2\2\u00ef"+
		"\u00f0\7g\2\2\u00f0\u00f1\7r\2\2\u00f1\62\3\2\2\2\u00f2\u00f3\7w\2\2\u00f3"+
		"\u00f4\7p\2\2\u00f4\u00f5\7v\2\2\u00f5\u00f6\7k\2\2\u00f6\u00f7\7n\2\2"+
		"\u00f7\64\3\2\2\2\u00f8\u00f9\7y\2\2\u00f9\u00fa\7j\2\2\u00fa\u00fb\7"+
		"k\2\2\u00fb\u00fc\7n\2\2\u00fc\u00fd\7g\2\2\u00fd\66\3\2\2\2\u00fe\u00ff"+
		"\7-\2\2\u00ff8\3\2\2\2\u0100\u0101\7\"\2\2\u0101\u0102\7\u2015\2\2\u0102"+
		":\3\2\2\2\u0103\u0104\7\u00d9\2\2\u0104<\3\2\2\2\u0105\u0106\7\61\2\2"+
		"\u0106>\3\2\2\2\u0107\u0108\7\u00f9\2\2\u0108@\3\2\2\2\u0109\u010a\7\u2193"+
		"\2\2\u010aB\3\2\2\2\u010b\u010c\7\60\2\2\u010cD\3\2\2\2\u010d\u010e\7"+
		"\63\2\2\u010e\u010f\7\62\2\2\u010fF\3\2\2\2\u0110\u0111\7\u2015\2\2\u0111"+
		"H\3\2\2\2\u0112\u0113\7\u2265\2\2\u0113J\3\2\2\2\u0114\u0115\7\u2285\2"+
		"\2\u0115L\3\2\2\2\u0116\u0117\7\u22c3\2\2\u0117N\3\2\2\2\u0118\u0119\7"+
		"\u22c2\2\2\u0119P\3\2\2\2\u011a\u011b\7\u00ae\2\2\u011bR\3\2\2\2\u011c"+
		"\u011d\7>\2\2\u011dT\3\2\2\2\u011e\u011f\7\u2266\2\2\u011fV\3\2\2\2\u0120"+
		"\u0121\7?\2\2\u0121X\3\2\2\2\u0122\u0123\7\u2262\2\2\u0123Z\3\2\2\2\u0124"+
		"\u0125\7@\2\2\u0125\\\3\2\2\2\u0126\u0127\7\u2267\2\2\u0127^\3\2\2\2\u0128"+
		"\u0129\7]\2\2\u0129`\3\2\2\2\u012a\u012b\7_\2\2\u012bb\3\2\2\2\u012c\u012d"+
		"\7v\2\2\u012d\u012e\7t\2\2\u012e\u012f\7w\2\2\u012f\u0130\7g\2\2\u0130"+
		"d\3\2\2\2\u0131\u0132\7h\2\2\u0132\u0133\7c\2\2\u0133\u0134\7n\2\2\u0134"+
		"\u0135\7u\2\2\u0135\u0136\7g\2\2\u0136f\3\2\2\2\u0137\u0138\7b\2\2\u0138"+
		"h\3\2\2\2\u0139\u013a\7)\2\2\u013aj\3\2\2\2\u013b\u013c\7u\2\2\u013c\u013d"+
		"\7v\2\2\u013d\u013e\7t\2\2\u013e\u013f\7k\2\2\u013f\u0140\7p\2\2\u0140"+
		"\u0141\7i\2\2\u0141l\3\2\2\2\u0142\u0146\7$\2\2\u0143\u0145\n\2\2\2\u0144"+
		"\u0143\3\2\2\2\u0145\u0148\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3\2"+
		"\2\2\u0147\u0149\3\2\2\2\u0148\u0146\3\2\2\2\u0149\u014a\7$\2\2\u014a"+
		"n\3\2\2\2\u014b\u014c\t\3\2\2\u014cp\3\2\2\2\u014d\u014e\4\62;\2\u014e"+
		"r\3\2\2\2\u014f\u0150\t\4\2\2\u0150t\3\2\2\2\u0151\u0152\t\5\2\2\u0152"+
		"v\3\2\2\2\u0153\u0154\t\6\2\2\u0154x\3\2\2\2\u0155\u0156\7i\2\2\u0156"+
		"\u0157\7q\2\2\u0157\u0158\7v\2\2\u0158\u0169\7q\2\2\u0159\u015a\7k\2\2"+
		"\u015a\u0169\7h\2\2\u015b\u015c\7v\2\2\u015c\u015d\7j\2\2\u015d\u015e"+
		"\7g\2\2\u015e\u0169\7p\2\2\u015f\u0160\7g\2\2\u0160\u0161\7n\2\2\u0161"+
		"\u0162\7u\2\2\u0162\u0169\7g\2\2\u0163\u0164\7h\2\2\u0164\u0165\7q\2\2"+
		"\u0165\u0169\7t\2\2\u0166\u0167\7f\2\2\u0167\u0169\7q\2\2\u0168\u0155"+
		"\3\2\2\2\u0168\u0159\3\2\2\2\u0168\u015b\3\2\2\2\u0168\u015f\3\2\2\2\u0168"+
		"\u0163\3\2\2\2\u0168\u0166\3\2\2\2\u0169z\3\2\2\2\u016a\u0187\t\7\2\2"+
		"\u016b\u016c\7\63\2\2\u016c\u0187\7\62\2\2\u016d\u0187\4<=\2\u016e\u016f"+
		"\7<\2\2\u016f\u0187\7?\2\2\u0170\u0187\7a\2\2\u0171\u0172\7u\2\2\u0172"+
		"\u0173\7v\2\2\u0173\u0174\7g\2\2\u0174\u0187\7r\2\2\u0175\u0176\7w\2\2"+
		"\u0176\u0177\7p\2\2\u0177\u0178\7v\2\2\u0178\u0179\7k\2\2\u0179\u0187"+
		"\7n\2\2\u017a\u017b\7y\2\2\u017b\u017c\7j\2\2\u017c\u017d\7k\2\2\u017d"+
		"\u017e\7n\2\2\u017e\u0187\7g\2\2\u017f\u0180\7e\2\2\u0180\u0181\7q\2\2"+
		"\u0181\u0182\7o\2\2\u0182\u0183\7o\2\2\u0183\u0184\7g\2\2\u0184\u0185"+
		"\7p\2\2\u0185\u0187\7v\2\2\u0186\u016a\3\2\2\2\u0186\u016b\3\2\2\2\u0186"+
		"\u016d\3\2\2\2\u0186\u016e\3\2\2\2\u0186\u0170\3\2\2\2\u0186\u0171\3\2"+
		"\2\2\u0186\u0175\3\2\2\2\u0186\u017a\3\2\2\2\u0186\u017f\3\2\2\2\u0187"+
		"|\3\2\2\2\u0188\u0189\7q\2\2\u0189\u018a\7y\2\2\u018a\u01b2\7p\2\2\u018b"+
		"\u018c\7d\2\2\u018c\u018d\7q\2\2\u018d\u018e\7q\2\2\u018e\u018f\7n\2\2"+
		"\u018f\u0190\7g\2\2\u0190\u0191\7c\2\2\u0191\u01b2\7p\2\2\u0192\u0193"+
		"\7k\2\2\u0193\u0194\7p\2\2\u0194\u0195\7v\2\2\u0195\u0196\7g\2\2\u0196"+
		"\u0197\7i\2\2\u0197\u0198\7g\2\2\u0198\u01b2\7t\2\2\u0199\u019a\7t\2\2"+
		"\u019a\u019b\7g\2\2\u019b\u019c\7c\2\2\u019c\u01b2\7n\2\2\u019d\u019e"+
		"\7c\2\2\u019e\u019f\7t\2\2\u019f\u01a0\7t\2\2\u01a0\u01a1\7c\2\2\u01a1"+
		"\u01b2\7{\2\2\u01a2\u01a3\7u\2\2\u01a3\u01a4\7y\2\2\u01a4\u01a5\7k\2\2"+
		"\u01a5\u01a6\7v\2\2\u01a6\u01a7\7e\2\2\u01a7\u01b2\7j\2\2\u01a8\u01a9"+
		"\7r\2\2\u01a9\u01aa\7t\2\2\u01aa\u01ab\7q\2\2\u01ab\u01ac\7e\2\2\u01ac"+
		"\u01ad\7g\2\2\u01ad\u01ae\7f\2\2\u01ae\u01af\7w\2\2\u01af\u01b0\7t\2\2"+
		"\u01b0\u01b2\7g\2\2\u01b1\u0188\3\2\2\2\u01b1\u018b\3\2\2\2\u01b1\u0192"+
		"\3\2\2\2\u01b1\u0199\3\2\2\2\u01b1\u019d\3\2\2\2\u01b1\u01a2\3\2\2\2\u01b1"+
		"\u01a8\3\2\2\2\u01b2~\3\2\2\2\u01b3\u01b5\t\b\2\2\u01b4\u01b3\3\2\2\2"+
		"\u01b5\u01b6\3\2\2\2\u01b6\u01b4\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b8"+
		"\3\2\2\2\u01b8\u01b9\b@\2\2\u01b9\u0080\3\2\2\2\b\2\u0146\u0168\u0186"+
		"\u01b1\u01b6\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}