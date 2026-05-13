import AnalizadorLexer from "./generated/AnalizadorLexer.js";
import AnalizadorParser from "./generated/AnalizadorParser.js";
// import CustomAnalizadorVisitor from "./CustomAnalizadorVisitor.js";

import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {

    let input;

    // Intentar leer desde input.txt
    try {

        input = fs.readFileSync('input.txt', 'utf8');

    } catch (err) {

        // Si falla, leer por teclado
        input = await leerCadena();

        console.log(input);
    }

    // Crear stream de entrada
    let inputStream = CharStreams.fromString(input);

    // Crear lexer
    let lexer = new AnalizadorLexer(inputStream);

    // ===============================
    // VERIFICAR TOKENS GENERADOS
    // ===============================

    console.log("Verificando tokens generados por el lexer...");

    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {

        console.error("No se generaron tokens.");
        return;
    }

    // ===============================
    // TABLA DE TOKENS
    // ===============================

    console.log("\nTabla de Tokens y Lexemas:");

    console.log("--------------------------------------------------");
    console.log("| Lexema                 | Token                 |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {

        const tokenType =
            AnalizadorLexer.symbolicNames[token.type]
            || `UNKNOWN (${token.type})`;

        const lexema = token.text;

        console.log(
            `| ${lexema.padEnd(22)} | ${tokenType.padEnd(22)} |`
        );
    }

    console.log("--------------------------------------------------");

    // ==================================================
    // REPROCESAR TOKENS (getAllTokens vacía el lexer)
    // ==================================================

    inputStream = CharStreams.fromString(input);

    lexer = new AnalizadorLexer(inputStream);

    let tokenStream = new CommonTokenStream(lexer);

    // Crear parser
    let parser = new AnalizadorParser(tokenStream);

    // Regla inicial
    let tree = parser.metadata();

    // ===============================
    // ERRORES SINTÁCTICOS
    // ===============================

    if (parser.syntaxErrorsCount > 0) {

        console.error(
            "\nSe encontraron errores sintácticos."
        );

    } else {

        console.log("\nEntrada válida.");

        // Árbol de derivación
        const cadena_tree =
            tree.toStringTree(parser.ruleNames);

        console.log(
            `\nÁrbol de derivación:\n${cadena_tree}`
        );

        // ====================================
        // VISITOR (opcional)
        // ====================================

        /*
        const visitor = new CustomAnalizadorVisitor();
        visitor.visit(tree);
        */
    }
}

// ====================================
// LEER CADENA POR TECLADO
// ====================================

function leerCadena() {

    const rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question(
            "Ingrese una cadena: ",
            (answer) => {

                rl.close();

                resolve(answer);
            }
        );
    });
}

// Ejecutar programa
main();