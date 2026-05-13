import AnalizadorVisitor from './generated/AnalizadorVisitor.js';
import AnalizadorParser from './generated/AnalizadorParser.js';

class CustomAnalizadorVisitor extends AnalizadorVisitor {

    constructor() {

        super();

        // Almacena los campos analizados
        this.campos = {};
    }

    // =========================================
    // metadata : campo* EOF ;
    // =========================================

    visitMetadata(ctx) {

        console.log("\nProcesando metadata...\n");

        return this.visitChildren(ctx);
    }

    // =========================================
    // campo : nombreCampo ':' valorCampo finCampo ;
    // =========================================

    visitCampo(ctx) {

        const nombre =
            ctx.nombreCampo().getText();

        const valor =
            this.visit(ctx.valorCampo());

        // Guardar en estructura
        this.campos[nombre] = valor;

        console.log(
            `Campo detectado -> ${nombre}: ${valor}`
        );

        return valor;
    }

    // =========================================
    // valorCampo
    // =========================================

    visitValorCampo(ctx) {

        // TEXTO
        if (ctx.TEXTO()) {

            return ctx.TEXTO().getText();
        }

        // NUMERO
        if (ctx.NUMERO()) {

            return Number(
                ctx.NUMERO().getText()
            );
        }

        // FECHA
        if (ctx.FECHA()) {

            return ctx.FECHA().getText();
        }

        // listaTextos
        if (ctx.listaTextos()) {

            return this.visit(
                ctx.listaTextos()
            );
        }

        return null;
    }

    // =========================================
    // listaTextos
    // =========================================

    visitListaTextos(ctx) {

        const lista = [];

        const textos = ctx.TEXTO();

        for (let texto of textos) {

            lista.push(
                texto.getText()
            );
        }

        return lista;
    }
}

export default CustomAnalizadorVisitor;