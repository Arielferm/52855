// Generated from c:/Users/arfem/Desktop/analizador-antlr/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,17,47,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,
1,2,1,3,1,3,1,3,1,3,3,3,32,8,3,1,4,1,4,1,4,1,4,5,4,38,8,4,10,4,12,4,41,9,
4,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,6,13,45,0,15,1,0,0,0,2,
20,1,0,0,0,4,25,1,0,0,0,6,31,1,0,0,0,8,33,1,0,0,0,10,44,1,0,0,0,12,14,3,
2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,
0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,3,4,2,0,21,22,5,1,0,0,
22,23,3,6,3,0,23,24,3,10,5,0,24,3,1,0,0,0,25,26,7,0,0,0,26,5,1,0,0,0,27,
32,5,16,0,0,28,32,5,15,0,0,29,32,5,14,0,0,30,32,3,8,4,0,31,27,1,0,0,0,31,
28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,7,1,0,0,0,33,34,5,2,0,0,34,39,
5,16,0,0,35,36,5,3,0,0,36,38,5,16,0,0,37,35,1,0,0,0,38,41,1,0,0,0,39,37,
1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,4,0,0,43,9,1,0,
0,0,44,45,5,5,0,0,45,11,1,0,0,0,3,15,31,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "':'", "'['", "','", "']'", "';'", "'nombre'", 
                            "'tipo'", "'tamano'", "'creado'", "'modificado'", 
                            "'autor'", "'descripcion'", "'etiquetas'" ];
    static symbolicNames = [ null, null, null, null, null, null, "NOMBRE", 
                             "TIPO", "TAMANIO", "CREADO", "MODIFICADO", 
                             "AUTOR", "DESCRIPCION", "ETIQUETAS", "FECHA", 
                             "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "listaTextos", "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16320) !== 0)) {
	            this.state = 12;
	            this.campo();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(AnalizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.nombreCampo();
	        this.state = 21;
	        this.match(AnalizadorParser.T__0);
	        this.state = 22;
	        this.valorCampo();
	        this.state = 23;
	        this.finCampo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16320) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_valorCampo);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(AnalizadorParser.TEXTO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(AnalizadorParser.NUMERO);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.match(AnalizadorParser.FECHA);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.listaTextos();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(AnalizadorParser.T__1);
	        this.state = 34;
	        this.match(AnalizadorParser.TEXTO);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 35;
	            this.match(AnalizadorParser.T__2);
	            this.state = 36;
	            this.match(AnalizadorParser.TEXTO);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(AnalizadorParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(AnalizadorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.T__0 = 1;
AnalizadorParser.T__1 = 2;
AnalizadorParser.T__2 = 3;
AnalizadorParser.T__3 = 4;
AnalizadorParser.T__4 = 5;
AnalizadorParser.NOMBRE = 6;
AnalizadorParser.TIPO = 7;
AnalizadorParser.TAMANIO = 8;
AnalizadorParser.CREADO = 9;
AnalizadorParser.MODIFICADO = 10;
AnalizadorParser.AUTOR = 11;
AnalizadorParser.DESCRIPCION = 12;
AnalizadorParser.ETIQUETAS = 13;
AnalizadorParser.FECHA = 14;
AnalizadorParser.NUMERO = 15;
AnalizadorParser.TEXTO = 16;
AnalizadorParser.WS = 17;

AnalizadorParser.RULE_metadata = 0;
AnalizadorParser.RULE_campo = 1;
AnalizadorParser.RULE_nombreCampo = 2;
AnalizadorParser.RULE_valorCampo = 3;
AnalizadorParser.RULE_listaTextos = 4;
AnalizadorParser.RULE_finCampo = 5;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_metadata;
    }

	EOF() {
	    return this.getToken(AnalizadorParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitMetadata(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitMetadata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_nombreCampo;
    }

	NOMBRE() {
	    return this.getToken(AnalizadorParser.NOMBRE, 0);
	};

	TIPO() {
	    return this.getToken(AnalizadorParser.TIPO, 0);
	};

	TAMANIO() {
	    return this.getToken(AnalizadorParser.TAMANIO, 0);
	};

	CREADO() {
	    return this.getToken(AnalizadorParser.CREADO, 0);
	};

	MODIFICADO() {
	    return this.getToken(AnalizadorParser.MODIFICADO, 0);
	};

	AUTOR() {
	    return this.getToken(AnalizadorParser.AUTOR, 0);
	};

	DESCRIPCION() {
	    return this.getToken(AnalizadorParser.DESCRIPCION, 0);
	};

	ETIQUETAS() {
	    return this.getToken(AnalizadorParser.ETIQUETAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_valorCampo;
    }

	TEXTO() {
	    return this.getToken(AnalizadorParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(AnalizadorParser.NUMERO, 0);
	};

	FECHA() {
	    return this.getToken(AnalizadorParser.FECHA, 0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitValorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitValorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_listaTextos;
    }

	TEXTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.TEXTO);
	    } else {
	        return this.getToken(AnalizadorParser.TEXTO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitListaTextos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitListaTextos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_finCampo;
    }


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitFinCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitFinCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.MetadataContext = MetadataContext; 
AnalizadorParser.CampoContext = CampoContext; 
AnalizadorParser.NombreCampoContext = NombreCampoContext; 
AnalizadorParser.ValorCampoContext = ValorCampoContext; 
AnalizadorParser.ListaTextosContext = ListaTextosContext; 
AnalizadorParser.FinCampoContext = FinCampoContext; 
