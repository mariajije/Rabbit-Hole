<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { RouterLink } from 'vue-router'

const leyendas = [
  {
    "id": "curva",
    "titulo": "La niña de la curva",
    "origen": "España · tradición de carretera",
    "historia": [
      "Una noche, una chica hace autostop en una carretera solitaria. Le dice al conductor que va un poco más lejos. Durante el trayecto parece una pasajera cualquiera. Todo cambia cuando reconoce una curva y le pide que reduzca la velocidad.",
      "En la versión del aviso, la joven explica que murió allí y desaparece del vehículo. En otra, el conductor llega a la dirección que ella dio y descubre por su familia que llevaba tiempo muerta. La historia puede acabar como advertencia o como un encuentro que solo se entiende después.",
      "La Fundación Joaquín Díaz recoge versiones situadas en carreteras diferentes. Cada localidad puede señalar su propia curva. Esa facilidad para cambiar de escenario explica parte de la fuerza del relato: quien lo escucha puede imaginar la carretera exacta por la que vuelve a casa."
    ],
    "registros": [
      {
        "titulo": "Carlos y Ana · versión recogida",
        "texto": "El relato los sitúa en el País Vasco. Ven a una chica pálida haciendo autostop y la escena se convierte en una historia de apariciones en carretera.",
        "fuente": "https://funjdiaz.net/folklore/07ficha.php?ID=2313&NUM=231"
      },
      {
        "titulo": "La curva de la Pólvora · tradición local",
        "texto": "Roberto Moso cuenta la versión que se asocia a un tramo de la N-634 en el Bajo Deba. Es una localización que circula en el relato oral.",
        "fuente": "https://www.eitb.eus/es/audios/detalle/577405/la-chica-curva/"
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
    }
  },
  {
    "id": "llorona",
    "titulo": "La Llorona",
    "origen": "México y otras comunidades hispanohablantes · tradición oral",
    "historia": [
      "Una de las versiones mexicanas cuenta que María tuvo dos hijos con un hombre que acabó abandonándola. Desesperada, lleva a los niños al río de noche y los ahoga. Cuando comprende lo que ha hecho, sale a buscarlos. Al morir, queda condenada a recorrer las orillas llamándolos.",
      "¿Dónde pasó? Cada comunidad sitúa el relato en su propia geografía. En Parral, Chihuahua, se contaba junto al río y los canales. El motivo también cambia: en unas versiones pesa el abandono, en otras los celos, la rabia o el arrepentimiento. La orilla y el lamento tienen más continuidad que el nombre de la mujer o el lugar exacto.",
      "Con el tiempo, el relato se convirtió además en una advertencia familiar para que los niños volvieran pronto y se mantuvieran lejos del agua. El llanto nocturno recuerda a la banshee irlandesa, aunque allí el lamento suele anunciar una muerte. La búsqueda de los hijos pertenece a la historia de La Llorona."
    ],
    "registros": [
      {
        "titulo": "Parral, Chihuahua · memoria de infancia",
        "texto": "Un informante recuerda oír la leyenda allí a finales de los años cincuenta. La gente de su entorno situaba los lamentos en el río y los canales y decía haber visto figuras en la niebla.",
        "fuente": "https://blogs.loc.gov/folklife/2021/10/growing-up-with-la-llorona/"
      },
      {
        "titulo": "La madre de Camille Acosta · versión familiar",
        "texto": "Acosta recogió la historia que le contaba su madre. En esa versión cambian el motivo y la responsabilidad de María, un ejemplo de cómo se transforma el relato de familia en familia.",
        "fuente": "https://blogs.loc.gov/folklife/2021/10/growing-up-with-la-llorona/"
      },
      {
        "titulo": "La banshee · comparación de archivo",
        "texto": "La colección escolar de Dúchas conserva un relato en el que se oye un lamento alrededor de la casa de alguien que va a morir.",
        "fuente": "https://www.duchas.ie/en/cbes/4921706/4892230/5188226"
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
    }
  },
  {
    "id": "chupacabras",
    "titulo": "El Chupacabras",
    "origen": "Puerto Rico · 1995",
    "historia": [
      "En 1995 se difundieron noticias de animales encontrados muertos en Puerto Rico. Vecinos y periódicos empezaron a reunir ataques diferentes bajo un mismo nombre: el Chupacabras. El salto de los corrales a los telediarios convirtió el rumor local en una leyenda que empezó a viajar.",
      "En Canóvanas, Madelyne Tolentino contó que ella y su madre habían visto una figura cerca de su casa. Describió un animal erguido con patas traseras poderosas. Ese relato dio a los titulares una silueta reconocible. Conviene distinguir a quien dijo ver una figura de quien encontró animales muertos después de un ataque.",
      "Cuando la historia llegó a otras regiones, aparecieron descripciones de animales de cuatro patas. Benjamin Radford comparó esas versiones con la puertorriqueña y señaló que algunos ejemplares posteriores eran cánidos con sarna. El cambio de aspecto muestra cómo el nombre acabó aplicándose a sucesos muy distintos."
    ],
    "registros": [
      {
        "titulo": "Madelyne Tolentino · avistamiento declarado",
        "texto": "Contó que observó con su madre una figura en la acera de su casa en Canóvanas. Su entrevista describe cómo se movía y qué recuerda de sus patas y sus ojos.",
        "fuente": "https://pome-mag.com/wp-content/uploads/2017/01/MadelyneTolentinoInterview.pdf"
      },
      {
        "titulo": "Francisco Soto · examen de animales",
        "texto": "El veterinario describió al Washington Post las lesiones que encontró al examinar animales muertos. Su observación se refiere a restos, no al animal que los atacó.",
        "fuente": "https://www.washingtonpost.com/archive/politics/1995/12/26/mystery-creature-ravages-puerto-rican-livestock/b7704250-dae0-4fa3-a886-561db637b463/"
      },
      {
        "titulo": "Vecinos entrevistados por AP · 1996",
        "texto": "El reportaje contemporáneo conserva las explicaciones que circulaban entre vecinos. Sirve para oír cómo se estaba contando la historia mientras todavía era noticia.",
        "fuente": "https://www.youtube.com/watch?v=PhDbEev8OPM"
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
    }
  },
  {
    "id": "wendigo",
    "titulo": "Los dos perros del bosque",
    "origen": "Tradición ojibwe · América del Norte",
    "historia": [
      "En una versión que recoge el Milwaukee Public Museum, una mujer viaja con dos perros. Los animales se adelantan y se enfrentan al perro del windigo. Ella todavía no ha visto a la figura que amenaza el camino, pero sus acompañantes ya han encontrado un rastro.",
      "La escena forma parte de una tradición oral en la que el invierno, el aislamiento y el hambre tienen peso en la historia. El diccionario del pueblo ojibwe registra wiindigoo como un ser caníbal asociado al invierno. Otras comunidades y narradores conservan versiones propias.",
      "La historia de los perros es una manera concreta de entrar en esa tradición. La viajera se entera del peligro por lo que hacen los perros antes de tenerlo delante. Ese detalle se pierde cuando todo el relato se reduce a cómo dibujar a la criatura."
    ],
    "registros": [
      {
        "titulo": "La viajera y sus perros · relato recogido",
        "texto": "El museo reproduce una narración en la que los perros se adelantan y matan al perro del windigo. Es un episodio de tradición oral.",
        "fuente": "https://www.mpm.org/index.php/educators/wirp/nations/ojibwe/oral-tradition"
      },
      {
        "titulo": "John Manatuwaba · relato oral archivado",
        "texto": "Una recopilación canadiense recoge otro relato atribuido a Manatuwaba, contado en el contexto de las tradiciones ojibwe de Georgian Bay.",
        "fuente": "https://publications.gc.ca/collections/collection_2022/rncan-nrcan/NM3-2-78-1935-eng.pdf"
      }
    ],
    "fotos": [
      "wendigo-1.jpg",
      "wendigo-2.jpg",
      "wendigo-3.jpg"
    ],
    "miru": null
  },
  {
    "id": "kelpie",
    "titulo": "El pescador del río",
    "origen": "Escocia · relato de Stanley Robertson",
    "historia": [
      "Un muchacho ve a un hombre pescando al otro lado del río. En la versión narrada por Stanley Robertson, el desconocido lo convence de acercarse hasta donde el agua es más profunda. Solo entonces el chico ve que el hombre tiene pezuñas y huye.",
      "El pescador es un kelpie, un espíritu acuático que en otras historias aparece como caballo. En esa variante, parece dócil hasta que alguien se sube al lomo. Entonces se precipita al agua. El pescador y el caballo son dos formas distintas de contar el peligro de confiar en lo que espera junto a la orilla.",
      "Historic Environment Scotland conserva, junto a la historia de Robertson, una canción interpretada por Kate Nicolson. La letra presenta a una muchacha que pide al caballo de agua que la deje volver a casa con su madre."
    ],
    "registros": [
      {
        "titulo": "Stanley Robertson · narración conservada",
        "texto": "El narrador de Aberdeen cuenta el encuentro del muchacho con el pescador y la señal que le permite reconocerlo.",
        "fuente": "https://blog.historicenvironment.scot/2018/10/supernatural-creatures-scottish-folklore/"
      },
      {
        "titulo": "Kate Nicolson · canción tradicional",
        "texto": "La grabación de la cantante de South Uist conserva la petición de una muchacha que quiere escapar del caballo de agua.",
        "fuente": "https://blog.historicenvironment.scot/2018/10/supernatural-creatures-scottish-folklore/"
      }
    ],
    "fotos": [
      "kelpie-1.jpg",
      "kelpie-2.jpg",
      "kelpie-3.jpg"
    ],
    "miru": {
      "pose": "no",
      "frase": "Si un desconocido me dice que el agua no cubre, prefiero que cruce él primero."
    }
  },
  {
    "id": "mascarilla",
    "titulo": "La mujer de la boca cortada",
    "origen": "Japón · rumor de 1979",
    "historia": [
      "Cerca de una calle vacía, una mujer con mascarilla detiene a alguien y le pregunta si es guapa. Cuando se la quita, deja ver una boca cortada y repite la pregunta. Las versiones juegan con qué respuesta puede salvar a quien se encuentra delante de ella.",
      "La historia de Kuchisake-onna se extendió con fuerza por Japón en 1979. La investigación folclórica recoge versiones relacionadas con Gifu, aunque su circulación llegó mucho más lejos. Entre los niños, el relato se adaptó a calles y caminos que conocían.",
      "Como ocurre con muchas leyendas escolares, cada nueva persona puede cambiar la respuesta, el desenlace o el lugar del encuentro. La mascarilla y la pregunta mantienen reconocible la historia aunque cambie lo demás."
    ],
    "registros": [
      {
        "titulo": "Gifu · versiones de origen",
        "texto": "Noriko T. Reider resume la investigación sobre los relatos que vinculan el comienzo del rumor a Gifu.",
        "fuente": "https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/98/76/2020719876/2020719876.pdf"
      },
      {
        "titulo": "Circulación entre escolares · versiones comparadas",
        "texto": "El folclorista Yoshiyuki Iikura explica cómo el relato se difundió y cómo cambiaron sus variantes al pasar a otros lugares.",
        "fuente": "https://www.nippon.com/en/articles/-/15901"
      }
    ],
    "fotos": [
      "mascarilla-1.jpg",
      "mascarilla-2.jpg",
      "mascarilla-3.jpg"
    ],
    "miru": null
  },
  {
    "id": "compana",
    "titulo": "La Santa Compaña",
    "origen": "Galicia · tradición oral",
    "historia": [
      "Un caminante distingue varias luces a lo lejos. Al acercarse, descubre que avanzan en fila y que el camino se ha quedado en silencio. Lo que ve, según el relato, es una procesión de ánimas que recorre la parroquia cuando los vecinos ya se han recogido.",
      "En versiones gallegas se cuenta que al frente va una persona viva obligada a guiar a la comitiva. Otras ponen el énfasis en que las luces anuncian una muerte o en que el testigo debe apartarse del camino. La procesión cambia de detalles según quién cuenta el encuentro.",
      "El relato funciona porque el escenario es reconocible: un cruce, un camino entre aldeas, el trayecto nocturno de vuelta a casa. Una luz lejana puede ser cualquier cosa hasta que quien la vio recuerda la historia que escuchó de pequeño."
    ],
    "registros": [
      {
        "titulo": "O Pardao · tradición gallega recogida",
        "texto": "La publicación recoge la versión de una procesión nocturna de ánimas y sus vínculos con Galicia y el noroeste peninsular.",
        "fuente": "https://emigracion.xunta.gal/files/revistas/2022/05/irmande-galega-rubi-opardao-2022.pdf"
      },
      {
        "titulo": "La guía de la comitiva · variante oral",
        "texto": "En una de las variantes, una persona viva va delante de la procesión. Es una forma distinta de contar el encuentro.",
        "fuente": "https://emigracion.xunta.gal/files/revistas/2022/05/irmande-galega-rubi-opardao-2022.pdf"
      }
    ],
    "fotos": [
      "compana-1.jpg",
      "compana-2.jpg",
      "compana-3.jpg"
    ],
    "miru": null
  },
  {
    "id": "espejo",
    "titulo": "Bloody Mary",
    "origen": "Folclore infantil · mundo anglófono",
    "historia": [
      "El reto comienza entre amigos. Una persona se queda sola frente al espejo de un baño oscuro. Desde fuera esperan a oír un grito o a que la puerta vuelva a abrirse. Quien está dentro, mientras tanto, intenta distinguir una cara entre las sombras.",
      "El relato circuló como un juego de miedo, con cambios en el nombre que se pronuncia y en lo que dicen ver en el cristal. Los estudios sobre folclore infantil recogen versiones en escuelas y hogares, transmitidas entre participantes y espectadores.",
      "La escena se termina de construir al salir del baño. Un reflejo confuso, el ruido de alguien al otro lado o la reacción de quien se asustó acaban formando parte de lo que el siguiente grupo cuenta."
    ],
    "registros": [
      {
        "titulo": "Versiones recopiladas por Alan Dundes",
        "texto": "El análisis folclórico recoge distintos nombres y desenlaces del juego del espejo, a partir de relatos ya en circulación.",
        "fuente": "https://discovery.ucl.ac.uk/id/eprint/10206508/1/Playing-the-Archive.pdf"
      },
      {
        "titulo": "Escolares de Sheffield · juego emparentado",
        "texto": "La investigadora Julia Bishop recuerda que unos escolares contaron que había un fantasma en los aseos. Algunos fueron al baño y volvieron diciendo que habían visto algo. Es una práctica relacionada que el estudio distingue de Bloody Mary.",
        "fuente": "https://discovery.ucl.ac.uk/id/eprint/10206508/1/Playing-the-Archive.pdf"
      }
    ],
    "fotos": [
      "espejo-1.jpg",
      "espejo-2.jpg",
      "espejo-3.jpg"
    ],
    "miru": null
  },
  {
    "id": "hanako",
    "titulo": "La última puerta del baño",
    "origen": "Japón · leyenda escolar",
    "historia": [
      "El pasillo está vacío y la escuela casi ha cerrado. En el baño hay una puerta cerrada desde dentro. En algunas versiones, quien llama pregunta si está Hanako y oye una respuesta. Lo que ocurre al abrirla depende de quién cuente la historia.",
      "Hanako-san es una figura del folclore escolar japonés. Los niños cambian de planta, de baño y de desenlace al contarla. El resultado es una historia que parece haber ocurrido en el edificio que conoce quien la escucha.",
      "Como Bloody Mary, el relato puede salir de la conversación y convertirse en reto. Y cuando un grupo vuelve corriendo del baño, el susto de unos sirve para convencer a los demás de que había algo detrás de la puerta."
    ],
    "registros": [
      {
        "titulo": "Linda Spetter · folclore escolar estudiado",
        "texto": "El estudio de 2004 citado en Haunting Experiences recoge a Hanako como una aparición temida entre escolares japoneses.",
        "fuente": "https://read.upcolorado.com/read/haunting-experiences-ghosts-in-contemporary-folklore/section/44f30611-e723-4750-b20d-dc9a51ad470a"
      },
      {
        "titulo": "Elizabeth Kenny · otra lectura de la leyenda",
        "texto": "El mismo volumen recoge una interpretación de Kenny sobre por qué los relatos usan un baño escolar. Su aportación se refiere a la transmisión de la historia.",
        "fuente": "https://read.upcolorado.com/read/haunting-experiences-ghosts-in-contemporary-folklore/section/44f30611-e723-4750-b20d-dc9a51ad470a"
      }
    ],
    "fotos": [
      "hanako-1.jpg",
      "hanako-2.jpg",
      "hanako-3.jpg"
    ],
    "miru": {
      "pose": "no",
      "frase": "Yo esperaría a que alguien saliera de la última puerta. Y si responde sin abrir, me voy."
    }
  },
  {
    "id": "point-pleasant",
    "titulo": "Los ojos de Point Pleasant",
    "origen": "Virginia Occidental · noviembre de 1966",
    "historia": [
      "La noche del 15 de noviembre de 1966, dos parejas conducen cerca de una antigua zona industrial de Point Pleasant. Aseguran haber visto una figura alada con ojos rojos. Según cuentan, la figura siguió el coche y el encuentro acabó en la prensa local.",
      "En los días siguientes, otras personas llamaron o hablaron con periodistas para contar que habían visto algo parecido, aunque las descripciones no coincidían del todo. El nombre Mothman acabó reuniendo esos encuentros y dio una forma reconocible a la historia.",
      "La estatua y las versiones posteriores fijaron la silueta que mucha gente conoce hoy. Los testimonios son más variados: algunos hablan de un ave enorme y otros de algo más humano. Esa diferencia importa cuando vuelves a las fechas y lees lo que se dijo en cada caso."
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
      "point-pleasant-1.jpg",
      "point-pleasant-2.jpg",
      "point-pleasant-3.jpg"
    ],
    "miru": {
      "pose": "sorprendida",
      "frase": "De todos los detalles, el que acabó en la estatua fueron los ojos."
    }
  },
  {
    "id": "bungay",
    "titulo": "La tormenta de Bungay",
    "origen": "Suffolk, Inglaterra · panfleto de 1577",
    "historia": [
      "Una tormenta sorprende a la congregación dentro de la iglesia de Bungay. Según el relato impreso después, entre el estruendo aparece una figura oscura parecida a un perro que atraviesa el lugar. El miedo del relato viene de que ocurre a plena vista, en un sitio donde la gente se había refugiado.",
      "Abraham Fleming publicó un panfleto sobre lo que se decía que había pasado en Bungay y en la cercana Blythburgh. El mismo texto interpreta los sucesos con el lenguaje religioso de su época. Con el tiempo, la aparición se asoció con Black Shuck, el perro espectral del folclore del este de Inglaterra.",
      "La tormenta y el panfleto permiten seguir la historia en dos planos. Por un lado está el episodio contado en el siglo XVI. Por otro, la leyenda que lo conecta con otros perros negros vistos en caminos e iglesias."
    ],
    "registros": [
      {
        "titulo": "Bungay · episodio narrado en el panfleto",
        "texto": "Fleming describe la aparición durante la tormenta. El texto conserva lo que se imprimió en 1577; su autor no se presenta aquí como testigo ocular verificado.",
        "fuente": "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/A00943"
      },
      {
        "titulo": "Blythburgh · segundo episodio del mismo texto",
        "texto": "El panfleto también sitúa una aparición en la iglesia de Blythburgh. Es un segundo relato de la misma publicación.",
        "fuente": "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/A00943"
      }
    ],
    "fotos": [
      "bungay-1.jpg",
      "bungay-2.jpg",
      "bungay-3.jpg"
    ],
    "miru": null
  },
  {
    "id": "slenderman",
    "titulo": "Slender Man",
    "origen": "Internet · creepypasta nacida en 2009",
    "historia": [
      "En junio de 2009, el foro Something Awful propuso un concurso de imágenes paranormales. Eric Knudsen, con el alias Victor Surge, publicó dos fotografías manipuladas con una figura alta y sin rostro en el fondo. Las acompañó de pies de foto escritos como si documentaran un caso real.",
      "Otros participantes añadieron imágenes, historias y supuestos documentos. La figura empezó a aparecer en bosques, parques o fotografías familiares inventadas. En ese momento, la historia dejó de depender de una sola publicación: cada aportación podía fingir que había encontrado otra pista.",
      "Las creepypastas son historias de terror que circulan y se comparten en internet. Slender Man muestra cómo pueden crecer: un hilo de foro pasa a vídeos de metraje encontrado como Marble Hornets y distintos autores imaginan versiones. Sus supuestos testimonios forman parte de la ficción."
    ],
    "registros": [
      {
        "titulo": "Victor Surge · publicación original ficticia",
        "texto": "Las dos imágenes de Knudsen llevan pies de foto que imitan la voz de un expediente. El origen del personaje está documentado en el concurso del foro.",
        "fuente": "https://scholarworks.iu.edu/journals/index.php/cl/article/download/35099/38290/94528"
      },
      {
        "titulo": "Marble Hornets · metraje encontrado ficticio",
        "texto": "La serie empezó en 2009 y desarrolló su propia versión a través de grabaciones presentadas como hallazgos.",
        "fuente": "https://scholarworks.iu.edu/journals/index.php/cl/article/download/35099/38290/94528"
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
    }
  }
] as const
const carpeta = import.meta.env.BASE_URL + 'LeyendasUrbanas/'
const carpetaMiru = import.meta.env.BASE_URL + 'Miru/'
const activa = ref<(typeof leyendas)[number]>(leyendas[0])
const titulo = ref<HTMLHeadingElement | null>(null)
const indiceFoto = ref(0)
const foto = computed(() => activa.value.fotos[indiceFoto.value] ?? activa.value.fotos[0])

async function abrir(leyenda: (typeof leyendas)[number]) {
  activa.value = leyenda
  indiceFoto.value = 0
  await nextTick()
  titulo.value?.focus({ preventScroll: true })
  titulo.value?.scrollIntoView({ block: 'nearest' })
}

function moverFoto(paso: number) {
  const total = activa.value.fotos.length
  indiceFoto.value = (indiceFoto.value + paso + total) % total
}
</script>

<template>
  <main class="cronica">
    <div class="volumen">
      <RouterLink to="/">← Volver a la madriguera</RouterLink>
      <header>
        <h1>Leyendas urbanas</h1>
        <p>Doce historias que cambiaron cada vez que alguien volvió a contarlas, desde una pasajera que desaparece hasta una figura escondida en una fotografía de internet.</p>
      </header>

      <div class="lectura">
        <nav class="indice" aria-label="Elegir una leyenda">
          <button v-for="leyenda in leyendas" :key="leyenda.id" type="button"
            :aria-pressed="activa.id === leyenda.id" aria-controls="leyenda-abierta" @click="abrir(leyenda)">
            {{ leyenda.titulo }}
          </button>
        </nav>

        <article id="leyenda-abierta" class="relato">
          <header class="ficha-titulo">
            <p class="origen">{{ activa.origen }}</p>
            <h2 ref="titulo" tabindex="-1">{{ activa.titulo }}</h2>
          </header>

          <div class="apertura">
            <section class="historia" aria-label="La historia">
              <p v-for="parrafo in activa.historia" :key="parrafo">{{ parrafo }}</p>
            </section>

            <figure class="galeria">
              <div class="visor">
                <img :key="foto" :src="carpeta + foto" :alt="'Imagen de ambiente para ' + activa.titulo" />
              </div>
              <figcaption class="mandos">
                <button type="button" aria-label="Foto anterior" @click="moverFoto(-1)">←</button>
                <span aria-live="polite">{{ indiceFoto + 1 }} / {{ activa.fotos.length }}</span>
                <button type="button" aria-label="Foto siguiente" @click="moverFoto(1)">→</button>
              </figcaption>
            </figure>
          </div>

          <aside v-if="activa.miru" class="miru" aria-label="Comentario de Miru">
            <img :src="carpetaMiru + 'miru-' + activa.miru.pose + '.png'" alt="" loading="lazy" />
            <p><strong>Miru</strong>{{ activa.miru.frase }}</p>
          </aside>

          <section class="archivo" aria-labelledby="archivo-titulo">
            <h3 id="archivo-titulo">{{ activa.id === 'slenderman' ? 'Cómo creció la ficción' : 'Testimonios y versiones recogidas' }}</h3>
            <article v-for="registro in activa.registros" :key="registro.titulo" class="registro">
              <h4>{{ registro.titulo }}</h4>
              <p>{{ registro.texto }}</p>
              <a :href="registro.fuente">Consultar la fuente ↗</a>
            </article>
          </section>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cronica {
  min-height: 100vh;
  padding: clamp(1rem, 4vw, 4rem);
  color: #f1dae5;
  background: radial-gradient(ellipse at 50% 0%, #4d2338, transparent 32rem), #140e15;
}
.volumen { max-width: 78rem; margin-inline: auto; }
a { color: #ffc4df; text-decoration: underline; text-underline-offset: .2em; }
header { padding: clamp(1.75rem, 5vw, 4.5rem) 0 1.75rem; border-bottom: 4px double #b57999; }
h1, h2, h3 { font-family: Georgia, serif; }
h1 { color: #ffd3e6; font-size: clamp(2.6rem, 8vw, 7rem); font-weight: bold; line-height: .95; letter-spacing: -.05em; }
header p { max-width: 58ch; margin-top: 1rem; line-height: 1.55; }
.lectura { display: grid; align-items: start; gap: 1.2rem; margin-top: 1.5rem; }
.indice { display: grid; gap: .35rem; }
.indice button { min-height: 2.7rem; padding: .5rem .75rem; border-left: 2px solid #74455f; background: #241423; color: #f4d4e5; text-align: left; cursor: pointer; }
.indice button[aria-pressed='true'] { border-color: #ffb8d9; background: #4b2840; color: #fff0f6; }
:focus-visible { outline: 2px solid #ffe1ee; outline-offset: 3px; }
.relato { position: relative; isolation: isolate; overflow: hidden; min-height: 25rem; border: 1px solid #75465f; background: radial-gradient(ellipse at 85% 0%, #472234, transparent 62%), #1f1422; }
.curva { background: repeating-linear-gradient(160deg, #ffbed20b 0 1px, transparent 1px 19px), radial-gradient(ellipse at 95% 35%, #4b2336, transparent 53%), #1a1320; }
.mascarilla { background: radial-gradient(ellipse at 100% 10%, #7b314750, transparent 56%), #211420; }
.compana { background: radial-gradient(ellipse at 100% 90%, #75523f50, transparent 65%), #1b131d; }
.texto { max-width: 48rem; padding: clamp(1rem, 4vw, 3rem); }
.origen { color: #f3a9cb; font-size: .85rem; }
h2 { margin-top: .35rem; color: #ffe1ee; font-size: clamp(2rem, 5vw, 4.3rem); font-weight: bold; line-height: 1.03; }
h3 { margin-top: .65rem; color: #f5b7d3; font-size: 1.35rem; font-style: italic; }
.texto > p:not(.origen) { max-width: 56ch; margin-top: 1rem; line-height: 1.65; }
.escena { font-size: 1.12rem; }
.texto a { display: block; width: fit-content; margin-top: 1rem; font-size: .86rem; }
@media (min-width: 850px) {
  .lectura { grid-template-columns: minmax(12rem, 15rem) minmax(0, 1fr); }

}

header.ficha-titulo { padding: 0; border: 0; }
.relato { display: block; padding: clamp(1rem, 3vw, 2.4rem); }
.apertura { display: grid; gap: 1.2rem; margin-top: 1.3rem; align-items: start; }
.historia p, .registro p { margin-top: .65rem; max-width: 72ch; line-height: 1.7; }
.galeria { min-width: 0; margin: 0; }
.visor { position: relative; aspect-ratio: 4 / 3; background: #140d17; border: 1px solid #684158; }
.visor img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.mandos { display: flex; align-items: center; justify-content: space-between; gap: .6rem; margin-top: .45rem; color: #f7b8d6; }
.mandos button { min-width: 2.75rem; min-height: 2.75rem; border: 1px solid #a76b8a; background: #311b2d; color: #ffe4f1; cursor: pointer; }
.mandos button:hover { background: #57314b; }
.archivo { margin-top: 1.7rem; padding-top: 1.25rem; border-top: 4px double #98647f; }
.registro { padding: 1rem 0; border-bottom: 1px solid #71465f; }
.registro h4 { color: #ffc9df; font-weight: 700; }
.registro a { display: inline-block; margin-top: .55rem; font-size: .85rem; }
.miru { display: flex; align-items: start; justify-content: flex-end; gap: .6rem; margin-top: 1rem; }
.miru img { width: clamp(5rem, 12vw, 9rem); flex: 0 0 auto; }
.miru p { position: relative; margin-top: 1rem; max-width: 29ch; padding: .65rem .8rem; border: 1px solid #b9819f; border-radius: .8rem; background: #462639; line-height: 1.4; }
.miru p::before { position: absolute; top: 1rem; left: -.35rem; width: .6rem; height: .6rem; border-left: 1px solid #b9819f; border-bottom: 1px solid #b9819f; background: #462639; transform: rotate(45deg); content: ''; }
.miru strong { display: block; color: #ffbdda; }
@media (min-width: 1024px) {
  .apertura { grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); }
}
</style>