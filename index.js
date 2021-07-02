console.log('Probando 1. 2.3 ...');

const dotenv = require("dotenv");
dotenv.config();

const Twitter = require("./twitter.js");

const config = {
consumer_key:'Add consumer key',
consumer_secret:'Add consumer secret' ,
token:'Add token' ,
token_secret:'Add token secret' ,
env:'test',
ngrok:'test',

};

var pronouns =['El','La','A','Esta','Esa','Este','Eso','Ella','Aquella', 'Aquel'];
var sustantives =['belleza',	'escepticismo',	'nostalgia','justicia',	'esperanza',	'tentación', 'nación',	'espiritualidad',	'infinito','pobreza',	'hambre',	'arrogancia',
'gula',	'honradez',	'compañerismo','terror','imaginación','fe','rencor','obsesión',	'dulzura','cariño',	'pasión',	'amargura','verdad','paz','guerra','ansiedad',	'pereza',	'rabia',
'creatividad',	'pobreza',	'sonido', 'esperanza',	'pureza',	'afición', 'vitalidad',	'respeto',	'lujuria', 'religión',	'salud',	'riqueza', 'pasión',	'soledad',	'dureza',
'astucia',	'piedad',	'rudeza', 'dicha',	'maldad',	'verano','fealdad',	'miedo',	'otoño', 'virtud',	'justicia',	'invierno', 'honradez',	'injusticia',	'primavera', 'inteligencia',
'ingenio',	'abundancia', 'pensamiento',	'ira',	'escasez', 'razonamiento',	'poder',	'contradicción', 'abuso',	'salud',	'diversidad', 'afecto',	'solidaridad',	'biodiversidad',
'alegría',	'rencor',	'movimiento', 'ambición',	'templanza',	'aceptación', 'amor',	'temor',	'actuación', 'amistad',	'terror',	'ansiedad',
'odio',	'tiempo',	'nobleza', 'dolor',	'drama',	'sabiduría', 'cariño',	'verdad',	'serenidad', 'certeza',	'suerte',	'venganza', 'carisma',	'virtud',	'ternura',
'contento',	'valentía',	'responsabilidad', 'felicidad',	'idiotez',	'nación', 'creencia',	'niñez',	'patria','deseo',	'mentira',	'ceremonia',
'dogma',	'ciencia',	'ritual', 'avaricia',	'alma',	'verdor', 'empatía',	'calidad',	'gordura','ego',	'codicia',	'altura', 'añoranza',	'admiración',	'estima'];
var  verbs =['vigila','aporta','afecta','detecta', 'negocia', 'pelea', 'propone', 'dispara', 'quiere','soluciona', 'concede', 'reune', 'afronta', 'respira','aclara','intercambia',
'estimula','exige', 'ama', 'arregla','intensifica', 'moviliza','difunde', 'admite','describe', 'actualiza', 'impulsa', 'coge','experimenta','contiene',
'correge', 'brinda', 'acaba', 'agrega','sube', 'queda','halla', 'disminuye', 'subraya', 'practica', 'importa', 'restablece', 'debate', 'contrata', 'coloca',
'ocurre', 'refleja','erradica', 'sufre','prosigue', 'recurre','adapta','ataca', 'alivia','libera', 'fija', 'lanza', 'entrega', 'justifica','finaliza', 'huye','colabora',
'sustituye','enseña', 'dispone', 'sucede', 'escoge', 'alimenta', 'armoniza', 'baja', 'representa', 'calcula', 'retira', 'juzga', 'oculta', 'ajusta', 'renuncia', 'salta',
'prohibe', 'diseña', 'llena', 'conecta', 'descansa', 'comete', 'provoca', 'convence', 'emprende', 'comunica', 'compara', 'registra', 'recomienda', 'compite',
'favorece', 'interviene', 'rechaza', 'invita', 'mitiga', 'respalda', 'sostiene', 'cruza', 'tira', 'aparece', 'repite', 'declara', 'asigna', 'reforma', 'transfiere',
'golpea', 'carga', 'constituye','quita', 'reemplaza', 'combina', 'afirma', 'restaura', 'autoriza', 'planifica', 'explota', 'contacta', 'nada', 'anuncia', 'levanta', 'suprime',
'montar','repara', 'eleva', 'ahorra','influye', 'agradece', 'efectua', 'grita', 'felicita', 'intenta', 'opera', 'ordena', 'niega', 'vence','mueve', 'emplea', 'alquila',
'despierta', 'desaparece', 'revela', 'complementa', 'aprecia', 'reitera', 'interpreta', 'procede', 'extiende', 'salvaguarda', 'reserva', 'reconstruye', 'regula', 'extrae',
'provee', 'simplifica', 'imprime', 'configura', 'implementa', 'existe', 'reflexiona', 'atrapa', 'minimiza', 'especifica', 'varia', 'distribuye', 'nombra', 'distingue',
'cocina', 'compensa','procesa', 'acoge', 'curar', 'suspende', 'localiza', 'resiste', 'devuelve', 'graba', 'preocupa', 'manifiesta', 'contesta', 'cancela', 'abarca','optimiza',
'nota', 'navega', 'otorga', 'renueva', 'ratifica', 'excluye', 'prevee', 'echa', 'borra','pinta', 'posee', 'marca', 'rie', 'gira', 'potencia', 'une', 'reza', 'plantea',
'educa', 'supone', 'mete', 'almacena', 'ora', 'engaña', 'viste', 'ignora', 'orienta', 'gasta', 'quema', 'reacciona', 'redacta', 'emite', 'fabrica', 'centra',
'denuncia', 'captura','sugiere', 'suena', 'castiga', 'obliga', 'separa', 'persigue', 'activa', 'nace', 'convoca', 'dedica', 'finge', 'ocupa', 'edita', 'bloquea',
'insiste', 'esconde','cultiva', 'reclama', 'divide', 'restringe', 'designa', 'guia', 'arruina', 'miente', 'significa', 'reafirma'];

var adjetives =['simpático',	'lento',	'rígidos','simnple',	'tenebrosa',	'hábil', 'limpio',	'fuerte',	'especial', 'impulsivo',	'intrépida',	'amable', 'ansioso', 'redondo',	'moderno',
'ruidoso',	'pequeña',	'delgada', 'irresponsable',	'grande',	'maduro', 'enfermo',	'grandes',	'curioso', 'nueva',	'cordial',	'alto', 'sutil',	'pequeño',	'monótonos', 'amarillento',	'estudioso',	'modesto',
'entrometida',	'vulgar',	'felíz', 'feo',	'antiguos',	'simples', 'verde',	'extraordinario',	'imperfecto', 'inteligentes',	'generoso',	'maravilloso', 'fría',	'ardiente',	'distante',
'sensibles',	'apasionado',	'mediano', 'negro',	'nuevo',	'ansiada', 'colorido',	'odioso',	'cuidadoso', 'blanca',	'ambicioso',	'obsecuente', 'arrugado',	'bellos',	'viejo', 'sencillos',	'agradable',	'gordo',
'dura',	'desordenado',	'horrible', 'prolijo',	'pacífico',	'rosado', 'refinado',	'ácida',	'duro', 'celoso',	'alargado',	'angelical', 'estresante',	'contento',	'sucio', 'valiente',	'enfermiza',	'lindo',
'transparente',	'flaco',	'frágil', 'gris',	'incómoda',	'diferente', 'triste',	'corto',	'fugaz', 'crocante',	'engreídas',	'ancha', 'débil',	'libre',	'tímida', 'caliente',	'agotador',	'complicados',
'cálido',	'desconfiado',	'quebrado', 'bonito',	'realista',	'suave', 'complejos',	'chiquito',	'azul', 'violeta',	'azulado',	'cansado', 'marrón',	'peludo',	'cuadrado', 'apático',	'luminoso',	'coherente',
'helado',	'amarillo',	'malo', 'interesante',	'brillante',	'aburrido', 'directo',	'cultos',	'atento', 'alegres',	'cauto',	'afectuoso', 'insensible',	'inmensas',	'malcriado', 'grueso',	'ágil',	'dulce',
'burlón',	'ordenado',	'celeste', 'cómodo',	'abstracto',	'considerado', 'rápido',	'sobrio','negra', 'cruel',	'largo',	'difícil', 'ancho',	'amargado',	'perfecto', 'extrovertida',	'infantil',	'rojo', 'dicvertida'];



const eideasFrases = new Twitter(config);

testTweet();

setInterval(testTweet, 60*5*1000);

async function testTweet()
{

   const pronounsg = pronouns[Math.floor(Math.random() * pronouns.length)];
   const sustsg=  sustantives[Math.floor(Math.random() * sustantives.length)];
   const verbsg = verbs[Math.floor(Math.random() * verbs.length)];
   const adjetiveg = adjetives [Math.floor(Math.random() * adjetives.length)];
   const sustsg2=  sustantives[Math.floor(Math.random() * sustantives.length)];
   const pronounsg2 = pronouns[Math.floor(Math.random() * pronouns.length)];

   const response = await eideasFrases.tweet('Un bot dice:'+' ' + pronounsg +' '+sustsg+' '+verbsg+' '+pronounsg2+' '+ adjetiveg+' ' +sustsg2+'.'+' '+'#eideasFrases #Unbotdice');
   console.log(response.id);
   console.log (response.text);

}
