<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const leyendas = [
  {
    "id": "curva",
    "titulo": "La niña de la curva",
    "origen": "España · tradición de carretera",
    "historia": [
      "Vas por una carretera de noche cuando los faros alumbran a una chica en el arcén. Paras. Ella sube, se sienta y te pide que sigas. Durante unos kilómetros apenas habla. Al acercarte a una curva, de pronto te dice que frenes.",
      "En una de las versiones, añade que murió en esa misma curva. Te vuelves y el asiento está vacío. En otra, deja que conduzcas hasta su casa. Allí, alguien abre la puerta y te dice que la joven a la que acabas de traer lleva años muerta.",
      "En España, la misma historia se ha contado en carreteras distintas. En el Bajo Deba, por ejemplo, se asocia con la curva de la Pólvora. Cada versión tiene su propio tramo de carretera y el mismo instante en que el conductor se queda solo."
    ],
    "registros": [
      {
        "titulo": "Jerry Palus · variante de Chicago",
        "texto": "En una entrevista grabada en 1986, Palus recordó que en 1939 conoció a una mujer en un salón de baile. Aseguró que la llevó en coche y la vio desaparecer cerca del cementerio de Resurrection. Su historia pertenece a una variante estadounidense de la autoestopista fantasma.",
        "fuente": "https://www.cbsnews.com/chicago/news/chicago-hauntings-resurrection-mary-most-famous-ghost/"
      },
      {
        "titulo": "Ralph, taxista · variante de Chicago",
        "texto": "Contó al columnista Bill Geist que recogió a una mujer con vestido blanco en Archer Road. Dijo que, al llegar a la altura del cementerio, desapareció del taxi. Su declaración se publicó en 1979.",
        "fuente": "https://www.cbsnews.com/chicago/news/chicago-hauntings-resurrection-mary-most-famous-ghost/"
      },
      {
        "titulo": "Taxista sin identificar · Chicago, 1973",
        "texto": "Según el relato recogido por CBS, un taxista dijo que una pasajera vestida de blanco había desaparecido sin pagar.",
        "fuente": "https://www.cbsnews.com/amp/chicago/news/chicago-hauntings-resurrection-mary-most-famous-ghost/"
      }
    ],
    "fotos": [
      "curva-1.jpg",
      "curva-2.jpg",
      "curva-3.jpg"
    ],
    "miru": {
      "pose": "asustada",
      "frase": "Si alguien dice que conoce la curva, yo bajo la ventanilla y le pregunto desde cuándo."
    },
    "fuenteHistoria": "https://funjdiaz.net/folklore/07ficha.php?ID=2313&NUM=231"
  },
  {
    "id": "llorona",
    "titulo": "La Llorona",
    "origen": "México y otras comunidades hispanohablantes · tradición oral",
    "historia": [
      "En una de las versiones mexicanas, la mujer se llama María. Tiene dos hijos y el hombre con el que los tuvo acaba abandonándola. Una noche, en un momento de desesperación, los lleva al río. Cuando el agua se los lleva, María sale tras ellos. En el relato, muere sin encontrarlos y desde entonces vuelve a la orilla, llamándolos.",
      "En Parral, Chihuahua, había quien situaba aquel llanto en el río y en los canales del pueblo. Otras familias le daban a María otra razón para llegar al agua. En unas versiones la mueve la rabia tras el abandono y en otras pesa la pobreza o el arrepentimiento. El lugar exacto depende de quién lo cuenta.",
      "En casa, la historia podía empezar como una advertencia para que los niños volvieran antes de oscurecer. Fuera, junto al agua, bastaba oír llorar a alguien para recordarla. La banshee irlandesa también se oye antes de verse, aunque su lamento cumple otra función en su propia tradición."
    ],
    "registros": [
      {
        "titulo": "Marina · río Magdalena, México",
        "texto": "En una entrevista recogida por el archivo de folclore de USC, Marina afirmó haber oído a La Llorona varias veces. Recordó una madrugada en que vio junto al río a una mujer de aspecto harapiento que lloraba. Corrió de vuelta al campamento.",
        "fuente": "https://folklore.usc.edu/marinas-la-llorona/"
      },
      {
        "titulo": "Informante entrevistado en el archivo de USC · Colima",
        "texto": "El informante dijo que de niño oyó, junto a su madre, un llanto que ambos asociaron con La Llorona. La ficha del archivo recoge su experiencia como un recuerdo personal.",
        "fuente": "https://folklore.usc.edu/author/garc101usc-edu/"
      }
    ],
    "fotos": [
      "llorona-1.jpg",
      "llorona-2.jpg",
      "llorona-3.jpg"
    ],
    "miru": {
      "pose": "mirando-abajo",
      "frase": "Cada pueblo le presta un río distinto. A veces eso da más miedo que saber dónde empezó."
    },
    "fuenteHistoria": "https://blogs.loc.gov/folklife/2021/10/growing-up-with-la-llorona/"
  },
  {
    "id": "chupacabras",
    "titulo": "El Chupacabras",
    "origen": "Puerto Rico · 1995",
    "historia": [
      "En Puerto Rico empiezan a aparecer animales muertos en los corrales. En 1995, las noticias sobre los ataques corren de un pueblo a otro. Los vecinos intentan averiguar qué ha pasado y los periódicos le dan un nombre al supuesto responsable: el Chupacabras.",
      "En Canóvanas, Madelyne Tolentino dice que vio algo extraño cerca de su casa. Tenía patas traseras potentes y se movía erguido. Misael Negrón habla de ojos rojos y espinas. Sus relatos dan a la gente algo concreto que imaginar la próxima vez que un corral amanece revuelto.",
      "Cuando la historia sale de Puerto Rico, aparecen descripciones de animales que corren a cuatro patas y casi no tienen pelo. Algunos resultaron ser cánidos con sarna. El nombre ya viajaba por su cuenta, y dos personas podían decir «Chupacabras» pensando en figuras muy distintas."
    ],
    "registros": [
      {
        "titulo": "Madelyne Tolentino · Canóvanas, 1995",
        "texto": "Declaró que vio una figura de dos patas desde su casa. En una entrevista describió sus ojos y sus extremidades, y señaló que su madre estaba con ella.",
        "fuente": "https://pome-mag.com/wp-content/uploads/2017/01/MadelyneTolentinoInterview.pdf"
      },
      {
        "titulo": "Misael Negrón · Canóvanas, 1995",
        "texto": "Dijo al periodista Karl Ross que, desde el balcón, vio una figura de ojos rojos y espinas salir de una luz intensa en el patio. También atribuyó a esa figura un ataque contra la cabra de su familia.",
        "fuente": "https://www.washingtonpost.com/archive/politics/1995/12/26/mystery-creature-ravages-puerto-rican-livestock/b7704250-dae0-4fa3-a886-561db637b463/"
      }
    ],
    "fotos": [
      "chupacabras-1.jpg",
      "chupacabras-2.jpg",
      "chupacabras-3.jpg"
    ],
    "miru": {
      "pose": "preguntona",
      "frase": "Encontrar al animal y encontrar las huellas de un ataque son dos cosas distintas. En los titulares se juntaron enseguida."
    },
    "fuenteHistoria": "https://pome-mag.com/wp-content/uploads/2017/01/MadelyneTolentinoInterview.pdf"
  },
  {
    "id": "wendigo",
    "titulo": "Los dos perros del bosque",
    "origen": "Tradición ojibwe · América del Norte",
    "historia": [
      "Una mujer va por el bosque con dos perros. En el relato ojibwe que recoge el Milwaukee Public Museum, los animales se adelantan. Cuando se topan con el perro del windigo, lo matan. La viajera sabe que algo ha cambiado en el camino antes de encontrarse cara a cara con lo que lo recorre.",
      "En esa tradición, el peligro tiene mucho que ver con el hambre y el invierno. El diccionario del pueblo ojibwe recoge el nombre wiindigoo para un ser caníbal asociado a esa estación. Otras comunidades tienen sus propias maneras de contarlo.",
      "En esta versión, los perros llevan la historia. Son los primeros en notar que alguien va por delante. Quien escucha sigue a la mujer por un camino donde cada paso la acerca a algo que sus perros ya conocen."
    ],
    "registros": [],
    "fotos": [
      "wendigo-1.jpg",
      "wendigo-2.jpg",
      "wendigo-3.jpg"
    ],
    "miru": null,
    "fuenteHistoria": "https://www.mpm.org/index.php/educators/wirp/nations/ojibwe/oral-tradition"
  },
  {
    "id": "kelpie",
    "titulo": "El pescador del río",
    "origen": "Escocia · relato de Stanley Robertson",
    "historia": [
      "Un muchacho se acerca al río y ve a un hombre pescando en la otra orilla. Hablan. El pescador consigue que entre en el agua. Al principio el chico hace pie, pero a cada paso el río va cubriéndolo un poco más.",
      "Esa es la versión que contó Stanley Robertson. La señal que delata al pescador son sus pezuñas. El muchacho entiende con quién está hablando y consigue escapar. En otras versiones, el espíritu, conocido como kelpie, espera junto al agua con forma de caballo.",
      "La escena acaba al dar con tierra firme. En la historia del caballo, en cambio, quien lo monta descubre demasiado tarde que no puede bajarse. Las dos versiones arrancan con algo que parece inofensivo en la otra orilla."
    ],
    "registros": [],
    "fotos": [
      "kelpie-1.jpg",
      "kelpie-2.jpg",
      "kelpie-3.jpg"
    ],
    "miru": {
      "pose": "no",
      "frase": "Si un desconocido me dice que el agua no cubre, prefiero que cruce él primero."
    },
    "fuenteHistoria": "https://blog.historicenvironment.scot/2018/10/supernatural-creatures-scottish-folklore/"
  },
  {
    "id": "mascarilla",
    "titulo": "La mujer de la boca cortada",
    "origen": "Japón · rumor de 1979",
    "historia": [
      "En una calle vacía, una mujer con mascarilla te para y te pregunta si es guapa. Antes de que puedas irte, se quita la mascarilla. Tiene la boca cortada. Entonces te hace la misma pregunta otra vez.",
      "En Japón, el rumor sobre Kuchisake-onna se extendió en 1979. Algunas investigaciones vinculan los primeros relatos a Gifu. Entre los niños circulaban respuestas que supuestamente permitían escapar y otras que dejaban a quien contestaba en peligro.",
      "Cada grupo podía situar a la mujer en su propio camino de vuelta de la escuela. Cambiaban las calles y el desenlace. La pregunta seguía siendo la misma."
    ],
    "registros": [],
    "fotos": [
      "mascarilla-1.jpg",
      "mascarilla-2.jpg",
      "mascarilla-3.jpg"
    ],
    "miru": null,
    "fuenteHistoria": "https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/98/76/2020719876/2020719876.pdf"
  },
  {
    "id": "compana",
    "titulo": "La Santa Compaña",
    "origen": "Galicia · tradición oral",
    "historia": [
      "Vuelves de noche por un camino conocido y ves unas luces que avanzan juntas. Al principio parecen personas con velas. Al acercarse, la fila pasa en silencio. En los relatos de la Santa Compaña, los que caminan son las ánimas de los muertos.",
      "En una versión, la figura que abre la marcha está viva y carga con la obligación de guiar a la procesión. En otra, las luces anuncian la muerte de alguien de la parroquia. La historia cambia de aldea en aldea, pero casi siempre encuentra al testigo en un camino que pensaba recorrer solo.",
      "Años después, algunos entrevistados describen luces o figuras que asociaron con la Compaña. El relato se sigue contando incluso fuera de Galicia, en lugares donde la gente pone otros nombres a esas procesiones."
    ],
    "registros": [
      {
        "titulo": "Testigos entrevistados por Cuarto Milenio · Galicia",
        "texto": "El programa reúne a personas que aseguran haber presenciado una procesión que interpretaron como la Santa Compaña. Los relatos se presentan en el propio reportaje.",
        "fuente": "https://www.cuatro.com/cuarto-milenio/santa-compana-testigos-galicia_18_3275220571.html?amp=true"
      },
      {
        "titulo": "Testigos entrevistados en Villarrubia de los Ojos",
        "texto": "En otro reportaje, entrevistados de un pueblo de Castilla-La Mancha cuentan encuentros que relacionan con una comitiva de figuras. Uno describe a alguien que se acercaba con aspecto de monje.",
        "fuente": "https://www.cuatro.com/television/20241110/apariciones-santa-compana-villarubia-ojos_18_013898704.html"
      },
      {
        "titulo": "Entrevistados en Lagunilla · Salamanca",
        "texto": "Vecinos dijeron a Cuarto Milenio que habían visto apariciones que asociaron con la Huestía, una tradición emparentada con la Compaña.",
        "fuente": "https://www.cuatro.com/cuarto-milenio/huestia-procesion-animas-santa-compana_18_2635530024.html"
      }
    ],
    "fotos": [
      "compana-1.jpg",
      "compana-2.jpg",
      "compana-3.jpg"
    ],
    "miru": null,
    "fuenteHistoria": "https://emigracion.xunta.gal/files/revistas/2022/05/irmande-galega-rubi-opardao-2022.pdf"
  },
  {
    "id": "espejo",
    "titulo": "Bloody Mary",
    "origen": "Folclore infantil · mundo anglófono",
    "historia": [
      "Cierras la puerta del baño y los demás se quedan fuera. El espejo apenas recoge la luz que entra por debajo de la puerta. Dices el nombre que te han dicho que digas y esperas. El silencio hace que te acerques un poco más al cristal.",
      "Bloody Mary circuló como un reto entre amigos. Los nombres, los desenlaces y la cara que alguien asegura haber visto cambian según el grupo. Para cuando se abre la puerta, quienes estaban fuera ya quieren saber si el grito fue de miedo o si había algo en el espejo.",
      "La historia vuelve a empezar cada vez que otro grupo se atreve a entrar. A menudo, quienes se quedan fuera reconstruyen lo ocurrido antes incluso de que el participante consiga explicarlo."
    ],
    "registros": [
      {
        "titulo": "Oyente anónimo · Believing the Bizarre",
        "texto": "En un relato enviado al programa, una persona dijo que vio por un instante una cara que le pareció de mujer al acercarse a un baño, tiempo después de haber jugado a Bloody Mary. El programa publica su declaración como relato de un oyente.",
        "fuente": "https://believingthebizarre.com/the-urban-legend-of-bloody-mary/"
      }
    ],
    "fotos": [
      "espejo-2.jpg",
      "espejo-1.jpg",
      "espejo-3.jpg"
    ],
    "miru": null,
    "fuenteHistoria": "https://discovery.ucl.ac.uk/id/eprint/10206508/1/Playing-the-Archive.pdf"
  },
  {
    "id": "hanako",
    "titulo": "La última puerta del baño",
    "origen": "Japón · leyenda escolar",
    "historia": [
      "La escuela está casi vacía. En el baño, una puerta sigue cerrada. Quien se ha quedado en el pasillo espera oír el pestillo. En algunas versiones, alguien pregunta por Hanako y una voz responde desde dentro.",
      "Los relatos de Hanako-san circulan entre escolares en Japón. A veces la puerta está en otro piso. A veces quien la abre no consigue ver nada. Quien cuenta la historia suele señalar el baño que todos conocen.",
      "El susto se pasa de un grupo a otro. Basta que alguien se retrase un poco al volver del baño para que los que esperan empiecen a construir su propia versión."
    ],
    "registros": [],
    "fotos": [
      "hanako-1.jpg",
      "hanako-2.jpg",
      "hanako-3.jpg"
    ],
    "miru": {
      "pose": "no",
      "frase": "Yo esperaría a que alguien saliera de la última puerta. Y si responde sin abrir, me voy."
    },
    "fuenteHistoria": "https://read.upcolorado.com/read/haunting-experiences-ghosts-in-contemporary-folklore/section/44f30611-e723-4750-b20d-dc9a51ad470a"
  },
  {
    "id": "point-pleasant",
    "titulo": "Los ojos de Point Pleasant",
    "origen": "Virginia Occidental · noviembre de 1966",
    "historia": [
      "La noche del 15 de noviembre de 1966, dos parejas conducen cerca de una antigua zona industrial de Point Pleasant. Los faros iluminan algo con ojos rojos. Al contar lo ocurrido después, los cuatro insisten en que parece alado y que ha seguido al coche.",
      "La prensa local publica su relato. En los días siguientes, otros conductores y vecinos dicen haber visto figuras parecidas. Uno cree primero que se trata de un helicóptero. Otros hablan de un pájaro enorme o de algo con forma humana.",
      "La figura acaba recibiendo un nombre, Mothman. Con los años se vuelve fácil reconocerla en dibujos y estatuas. Al volver a los testimonios de esos primeros días, lo llamativo es cuánto cambia el aspecto de un encuentro a otro."
    ],
    "registros": [
      {
        "titulo": "Linda y Roger Scarberry, Steve y Mary Mallette · 15 de noviembre",
        "texto": "Las dos parejas describieron una figura con ojos rojos cerca de la zona conocida como TNT Area. El encuentro fue publicado por la prensa local.",
        "fuente": "https://www.forteanarchives.org/datasheets-1966-1967/"
      },
      {
        "titulo": "Paul Yoder y Benjamin Enochs · 18 de noviembre",
        "texto": "Dos bomberos voluntarios dijeron haber visto un animal enorme parecido a un ave, también con ojos rojos, en la misma zona.",
        "fuente": "https://www.forteanarchives.org/datasheets-1966-1967/"
      },
      {
        "titulo": "Thomas Ury · 25 de noviembre",
        "texto": "Mientras iba a trabajar, contó que vio algo volar sobre su coche. Al principio lo confundió con un helicóptero y después lo describió como un ave de gran tamaño.",
        "fuente": "https://www.forteanarchives.org/datasheets-1966-1967/"
      }
    ],
    "fotos": [
      "point-pleasant-2.jpg",
      "point-pleasant-1.jpg",
      "point-pleasant-3.jpg"
    ],
    "miru": {
      "pose": "sorprendida",
      "frase": "De todos los detalles, el que acabó en la estatua fueron los ojos."
    },
    "fuenteHistoria": "https://www.forteanarchives.org/datasheets-1966-1967/"
  },
  {
    "id": "bungay",
    "titulo": "La tormenta de Bungay",
    "origen": "Suffolk, Inglaterra · panfleto de 1577",
    "historia": [
      "La tormenta cae sobre Bungay mientras la congregación está dentro de la iglesia. En el relato que se imprimió en 1577, un animal oscuro cruza el lugar entre el ruido y la confusión. Quienes han acudido a refugiarse se encuentran con el peligro dentro.",
      "Abraham Fleming contó el episodio en un panfleto que recoge también lo que se decía de Blythburgh, una localidad cercana. Con el tiempo, ambos lugares quedaron asociados a Black Shuck, un perro espectral que aparece en leyendas del este de Inglaterra.",
      "En testimonios posteriores, el perro reaparece lejos de las iglesias. Un motorista dice que le siguió por una carretera. Una adolescente asegura haber visto una figura pasar junto a unos coches. Los detalles cambian con el paisaje."
    ],
    "registros": [
      {
        "titulo": "Keith Flory · Woodbridge, 1973",
        "texto": "Años después del encuentro, Flory contó que un perro negro de gran tamaño le siguió mientras conducía su moto. El investigador Matt Salusbury publicó un resumen de su relato.",
        "fuente": "https://mattsalusbury.blogspot.com/2021/12/?m=0"
      },
      {
        "titulo": "Alice · Suffolk",
        "texto": "El boletín de la Aylsham Local History Society recoge el relato de una adolescente de catorce años. Afirmó ver, mientras viajaba con su familia, una figura negra grande que adelantaba a los coches.",
        "fuente": "https://aylshamhistory.org/wp-content/uploads/2023/04/Vol11.2.pdf"
      },
      {
        "titulo": "Graham Grant · Gorleston, 1972",
        "texto": "El guardacostas declaró haber visto un perro negro en la playa. El archivo de Black Shuck remite a una noticia de abril de 1972.",
        "fuente": "https://blackshuck.org/archive"
      }
    ],
    "fotos": [
      "bungay-1.jpg",
      "bungay-2.jpg",
      "bungay-3.jpg"
    ],
    "miru": null,
    "fuenteHistoria": "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/A00943"
  },
  {
    "id": "slenderman",
    "titulo": "Slender Man",
    "origen": "Internet · creepypasta nacida en 2009",
    "historia": [
      "En junio de 2009, alguien abre un hilo en Something Awful para que los usuarios inventen imágenes paranormales. Eric Knudsen, que firma como Victor Surge, sube dos fotografías manipuladas. Si miras al fondo, entre los árboles y detrás de los niños, distingues una figura demasiado alta y sin cara.",
      "Otros usuarios empiezan a añadir sus propias fotos, expedientes y grabaciones. El juego consiste en presentar cada aportación como si alguien acabara de encontrarla. Así creció esta creepypasta, una historia de terror que se comparte y se transforma en internet.",
      "En 2014, la ficción apareció en la investigación de una agresión real en Waukesha, Wisconsin. Morgan Geyser y Anissa Weier atacaron a su compañera Payton Leutner. Payton sobrevivió. Las declaraciones del caso muestran lo que dijeron sobre el personaje y cómo vivió ella la agresión."
    ],
    "registros": [
      {
        "titulo": "Payton Leutner · entrevista de 2019",
        "texto": "Leutner habló públicamente con ABC News sobre el ataque que sobrevivió y sobre cómo lo recuerda años después. Su testimonio trata de la agresión.",
        "fuente": "https://abcnews.com/US/slender-man-stabbing-victim-speaks-publicly-time-situation/story?id=66268385"
      },
      {
        "titulo": "Anissa Weier · declaración recogida en el expediente",
        "texto": "Según la resolución de apelación, Weier contó a una detective que Geyser le había dicho que tenían que convertirse en servidoras de Slender Man. Es una declaración sobre lo que afirmaron creer, dentro de un caso de agresión real.",
        "fuente": "https://www.courthousenews.com/wp-content/uploads/2020/08/18ap1897-geyser-slenderman-appeals-court-decision-8.12.20.pdf"
      },
      {
        "titulo": "Morgan Geyser · entrevista policial",
        "texto": "Geyser dio a la policía una versión distinta de la de Weier sobre quién le había dicho que tenían que actuar. Su declaración trata de la agresión y del papel que atribuían al personaje ficticio.",
        "fuente": "https://abcnews.com/US/investigators-slender-man-case-discuss-chilling-interviews-12/story?id=66320806"
      }
    ],
    "fotos": [
      "slenderman-1.jpg",
      "slenderman-2.jpg",
      "slenderman-3.jpg"
    ],
    "miru": {
      "pose": "preguntona",
      "frase": "La foto estaba trucada. Lo raro es lo fácil que es seguir mirando el fondo en busca de algo."
    },
    "fuenteHistoria": "https://scholarworks.iu.edu/journals/index.php/cl/article/download/35099/38290/94528"
  }
] as const
const carpeta = import.meta.env.BASE_URL + 'LeyendasUrbanas/'
const carpetaMiru = import.meta.env.BASE_URL + 'Miru/'
const activa = ref<(typeof leyendas)[number]>(leyendas[0])
const candidatas = leyendas.filter(leyenda => leyenda.miru)
const apariciones = new Set<string>()
while (apariciones.size < 4 && candidatas.length) {
  const [elegida] = candidatas.splice(Math.floor(Math.random() * candidatas.length), 1)
  if (elegida) apariciones.add(elegida.id)
}
const mostrarMiru = computed(() => apariciones.has(activa.value.id))
const indiceFoto = ref(0)
const reproduccion = ref(false)

onMounted(() => {
  reproduccion.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

watch([activa, reproduccion], ([, reproducir], _, onCleanup) => {
  if (!reproducir) return
  const intervalo = window.setInterval(() => moverFoto(1), 5000)
  onCleanup(() => window.clearInterval(intervalo))
})

function abrir(leyenda: (typeof leyendas)[number]) {
  activa.value = leyenda
  indiceFoto.value = 0
}

function moverFoto(paso: number) {
  const total = activa.value.fotos.length
  indiceFoto.value = (indiceFoto.value + paso + total) % total
}
</script>

<template>
  <main class="cronica">
    <div class="volumen">
      <header class="cabecera">
        <RouterLink class="volver" to="/">← Volver a la madriguera</RouterLink>
        <h1>Leyendas urbanas</h1>
        <p>Doce historias que cambiaron cada vez que alguien volvió a contarlas, desde una pasajera que desaparece hasta una figura escondida en una fotografía de internet.</p>
      </header>

      <nav class="selector" aria-label="Elegir una leyenda">
        <button v-for="leyenda in leyendas" :key="leyenda.id" type="button"
          :aria-pressed="activa.id === leyenda.id" aria-controls="ficha-leyenda" @click="abrir(leyenda)">
          <span>{{ leyenda.titulo }}</span>
        </button>
      </nav>

      <article id="ficha-leyenda" class="lectura" aria-labelledby="titulo-leyenda">
        <div class="composicion">
          <header class="titulo-leyenda">
            <p class="origen">{{ activa.origen }}</p>
            <h2 id="titulo-leyenda" aria-live="polite">{{ activa.titulo }}</h2>
          </header>
          <figure class="galeria">
            <div class="foto">
              <img
                v-for="(imagen, indice) in activa.fotos"
                :key="imagen"
                :class="{
                  visible: indice === indiceFoto,
                  'enfoque-chupacabras': imagen === 'chupacabras-1.jpg',
                  'enfoque-bungay': imagen === 'bungay-1.jpg',
                }"
                :src="carpeta + imagen"
                :alt="indice === indiceFoto ? 'Imagen de ambiente para ' + activa.titulo : ''"
                :aria-hidden="indice !== indiceFoto"
                decoding="async"
              />
            </div>
            <figcaption class="mandos">
              <button type="button" @click="reproduccion = !reproduccion">
                {{ reproduccion ? 'Pausar fotos' : 'Reproducir fotos' }}
              </button>
            </figcaption>
          </figure>
          <section class="historia" aria-label="La historia">
            <h3>La historia</h3>
            <p v-for="parrafo in activa.historia" :key="parrafo">{{ parrafo }}</p>
            <a :href="activa.fuenteHistoria">Fuente del relato ↗</a>
          </section>
        </div>

        <aside v-if="mostrarMiru && activa.miru" class="miru" aria-label="Comentario de Miru">
          <img :src="carpetaMiru + 'miru-' + activa.miru.pose + '.png'" alt="" loading="lazy" />
          <p><strong>Miru</strong>{{ activa.miru.frase }}</p>
        </aside>

        <section class="archivo" aria-labelledby="archivo-titulo">
          <h2 id="archivo-titulo">{{ activa.id === 'slenderman' ? 'El caso de Waukesha' : 'Testimonios de experiencias' }}</h2>
          <p v-if="!activa.registros.length" class="nota">
            Las fuentes de esta ficha recogen la tradición oral y cómo circuló la historia. Falta una declaración personal atribuible a un testigo.
          </p>
          <article v-for="registro in activa.registros" :key="registro.titulo" class="registro">
            <h3>{{ registro.titulo }}</h3>
            <p>{{ registro.texto }}</p>
            <a :href="registro.fuente">Consultar la fuente ↗</a>
          </article>
        </section>
      </article>
    </div>
  </main>
</template>

<style scoped>
.cronica {
  min-height: 100vh;
  padding: clamp(.9rem, 3vw, 3rem);
  color: #f2dde4;
  background: radial-gradient(ellipse at 55% 0%, #3b1c26, transparent 34rem), #120c11;
}
.volumen { max-width: 88rem; margin-inline: auto; }
a { color: #ffbdd9; text-decoration: underline; text-underline-offset: .2em; }
:focus-visible { outline: 2px solid #ffd6e7; outline-offset: 3px; }
.cabecera { padding-bottom: 1rem; }
.cabecera h1 {
  margin-top: .9rem;
  color: #ffdcdf;
  font: bold clamp(2rem, 5vw, 4.1rem)/1 Georgia, serif;
  letter-spacing: -.035em;
}
.cabecera p { margin-top: .6rem; width: 100%; line-height: 1.6; }

.selector { display: flex; flex-wrap: wrap; gap: .4rem; margin-block: 1rem 1.4rem; }
.selector button { border: 1px solid #976680; padding: .5rem .7rem; background: #281522; color: #ffe1ee; cursor: pointer; }
.selector button:hover, .selector button[aria-pressed='true'] { background: #523044; border-color: #ffbcd8; }
.lectura { border: 1px solid #926079; border-radius: 1.1rem; padding: clamp(.85rem, 2.8vw, 2.5rem); background: #211421; }
.composicion { display: grid; align-items: start; gap: clamp(1rem, 2vw, 2rem); }
.origen { color: #f1aacb; font-size: .85rem; }
.titulo-leyenda h2 { margin-top: .45rem; color: #fff0e9; font: 900 clamp(2rem, 4vw, 4.8rem)/.95 'Arial Narrow', Impact, sans-serif; text-transform: uppercase;  }
.galeria { min-width: 0; margin: 0; }
.foto { position: relative; aspect-ratio: 4 / 5; border-radius: .8rem; overflow: hidden; background: #130c15; }
.foto img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.mandos { display: flex; align-items: center; justify-content: space-between; gap: .55rem; margin-top: .55rem; }
.mandos button { min-width: 2.75rem; min-height: 2.75rem; border: 1px solid #a06d89; border-radius: .35rem; color: #ffe4ec; background: #331c2c; cursor: pointer; }
.mandos button:hover { background: #63364d; }
.historia h3, .archivo h2 { color: #ffcede; font: bold clamp(1.3rem, 2.6vw, 2rem) Georgia, serif; }
.lectura p { line-height: 1.7; }
.historia p, .registro p, .nota { margin-top: .65rem; }
.historia a, .registro a { display: inline-block; margin-top: .65rem; font-size: .87rem; }
.registro p, .nota { max-width: 72ch; }
.archivo { margin-top: 1.7rem; padding-top: 1.2rem; border-top: 1px solid #805269; }
.registro { margin-top: .8rem; padding-block: .75rem; border-bottom: 1px solid #6c435a; }
.registro h3 { color: #ffc2d7; font-weight: 700; }
.miru { display: flex; justify-content: flex-end; align-items: flex-start; gap: .65rem; margin-top: 1rem; }
.miru img { width: clamp(5rem, 12vw, 9rem); flex: 0 0 auto; }
.miru p { position: relative; max-width: 29ch; padding: .6rem .8rem; border: 1px solid #ad7696; border-radius: .75rem; background: #422639; line-height: 1.45; }
.miru p::before { position: absolute; top: .75rem; left: -.35rem; width: .6rem; height: .6rem; border-left: 1px solid #ad7696; border-bottom: 1px solid #ad7696; background: #422639; transform: rotate(45deg); content: ''; }
.miru strong { display: block; color: #ffbdd7; }
@media (min-width: 1080px) {
  .composicion { grid-template-columns: minmax(0, .8fr) minmax(0, 1.15fr) minmax(0, 1.36fr); }
}
@media (min-width: 680px) and (max-width: 1079px) {
  .composicion { grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr); }
  .titulo-leyenda { grid-column: 1 / -1; }
}

.cabecera { text-align: center; }
.cabecera p { width: 100%; max-width: none; margin-inline: auto; text-align: center; }
.selector { justify-content: center; }
.selector button { border: 0; border-bottom: 1px solid transparent; background: transparent; }
.selector button:hover, .selector button[aria-pressed='true'] {
  background: transparent;
  color: #ffc6df;
  border-color: currentColor;
}
.lectura { border: 0; border-radius: 0; background: transparent; padding-inline: 0; }
.titulo-leyenda h2 {
  font-size: clamp(1.85rem, 3.05vw, 3.4rem);
  line-height: 1.02;
  letter-spacing: -.022em;
  overflow-wrap: normal;
  word-break: normal;
  hyphens: none;
  text-wrap: balance;
  text-transform: none;
}
.foto { border: 0; border-radius: 0; background: transparent; overflow: visible; isolation: isolate; }
.foto img {
  object-fit: cover;
  opacity: 0;
  mask-image: radial-gradient(ellipse 67% 65% at center, #000 32%, #000e 49%, #0008 65%, transparent 84%);
  transition: opacity 800ms ease;
}
.foto img.visible { opacity: .96; }
.mandos { justify-content: center; margin-top: 0; }
.mandos button {
  width: auto;
  min-height: 0;
  padding: .35rem .5rem;
  border: 0;
  color: #edb7d1;
  background: transparent;
  font-size: .8rem;
  text-decoration: underline;
  text-underline-offset: .2em;
}
.mandos button:hover { color: #ffecf5; background: transparent; }
@media (min-width: 1080px) {
  .composicion { grid-template-columns: minmax(13rem, .9fr) minmax(0, 1.2fr) minmax(0, 1.4fr); }
}
@media (max-width: 1079px) { .titulo-leyenda { text-align: center; } }
@media (max-width: 679px) {
  .foto { width: min(100%, 25rem); margin-inline: auto; }
}
@media (prefers-reduced-motion: reduce) { .foto img { transition: none; } }

.selector {
  justify-content: center;
  gap: .55rem;
}
.selector button {
  min-height: 2.65rem;
  border: 1px solid #a46485;
  border-radius: .45rem;
  padding: .45rem .75rem;
  background: #3a2032;
  color: #f2c5d9;
  font: 650 .86rem/1.25 system-ui, sans-serif;
  text-align: center;
}
.selector button:hover {
  border-color: #f0a9c9;
  background: #583249;
  color: #ffe1ed;
}
.selector button[aria-pressed='true'] {
  border-color: #ffcee2;
  background: #efb5ce;
  color: #351523;
}
.titulo-leyenda, .historia { text-align: center; }
.titulo-leyenda h2, .historia p { margin-inline: auto; }
.historia p { max-width: 52ch; }
@media (min-width: 1080px) {
  .composicion { align-items: center; }
}

.foto img.enfoque-chupacabras { object-position: 32% 50%; }
.foto img.enfoque-bungay {
  object-position: left center;
  mask-image: radial-gradient(ellipse 62% 67% at 44% 46%, #000 27%, #000e 43%, #0007 62%, transparent 87%);
}
</style>
