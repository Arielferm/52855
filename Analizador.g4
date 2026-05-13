grammar Analizador;

// Gramatica

metadata
    : campo* EOF
    ;

campo
    : nombreCampo ':' valorCampo finCampo
    ;

nombreCampo
    : NOMBRE
    | TIPO
    | TAMANIO
    | CREADO
    | MODIFICADO
    | AUTOR
    | DESCRIPCION
    | ETIQUETAS
    ;

valorCampo
    : TEXTO
    | NUMERO
    | FECHA
    | listaTextos
    ;

listaTextos
    : '[' TEXTO (',' TEXTO)* ']'
    ;

finCampo
    : ';'
    ;

 // Lexema: TOKENS

NOMBRE      : 'nombre';
TIPO        : 'tipo';
TAMANIO     : 'tamano';
CREADO      : 'creado';
MODIFICADO  : 'modificado';
AUTOR       : 'autor';
DESCRIPCION : 'descripcion';
ETIQUETAS   : 'etiquetas';



FECHA
    : DIGITO DIGITO DIGITO DIGITO
      '-'
      DIGITO DIGITO
      '-'
      DIGITO DIGITO
      (
          ' '
          DIGITO DIGITO
          ':'
          DIGITO DIGITO
          (
              ':'
              DIGITO DIGITO
          )?
      )?
    ;



NUMERO
    : DIGITO+
    ;



TEXTO
    : (LETRA | DIGITO | '_' | '-' | '.')+
    ;



fragment LETRA
    : [a-zA-Z]
    ;

fragment DIGITO
    : [0-9]
    ;



WS
    : [ \t\r\n]+ -> skip
    ;