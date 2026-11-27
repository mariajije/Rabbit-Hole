<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { RouterLink } from 'vue-router'

const grupos = ['Audios y llamadas', 'Vídeos y cámaras', 'Rincones de internet']
const fichas = [
  {
    "id": "area-51",
    "title": "La llamada del Área 51",
    "meta": "11 de septiembre de 1997 · Radio nocturna",
    "story": "Durante una edición de Coast to Coast AM, Art Bell abrió los teléfonos a personas que decían haber trabajado en el Área 51. Un hombre llamó con la voz entrecortada. Dijo que lo perseguían y habló de seres extradimensionales. En mitad de la conversación, la señal del programa se interrumpió.",
    "context": "Al retomar la emisión, Bell habló del fallo del enlace por satélite. Meses después, otro interlocutor dijo que él había hecho la llamada como una actuación. El corte quedó registrado. La identidad del primer hombre y sus afirmaciones quedaron sin autenticar.",
    "source": "https://artbellarchive.org/episode/september-11-1997-open-lines-with-area-51-employees-call-in?t=0",
    "kind": "embed",
    "media": "https://www.youtube-nocookie.com/embed/3X5BUBgXy9s",
    "credit": "https://artbellarchive.org/episode/september-11-1997-open-lines-with-area-51-employees-call-in?t=0",
    "warning": "",
    "group": 0
  },
  {
    "id": "kitsap",
    "title": "La llamada al 911 de Kitsap",
    "meta": "Años noventa, atribución · Washington",
    "story": "Un hombre habla con una operadora de emergencias mientras intenta describir una figura grande que se mueve afuera, cerca de su casa. En la grabación se oye la dificultad de explicar por teléfono algo que solo él está viendo.",
    "context": "La BFRO sitúa la llamada en la península de Kitsap y explica que el fragmento público fue editado para quitar pausas y datos personales. Su versión dice que la figura ya se había ido cuando llegaron los agentes. La grabación circula entre aficionados a Bigfoot y su atribución procede de ese archivo, sin un registro oficial enlazado allí que permita corroborarla.",
    "source": "https://www.bfro.net/avevid/sierrasounds/911.asp",
    "kind": "embed",
    "media": "https://www.youtube-nocookie.com/embed/WmbNEKrNnvg",
    "credit": "https://www.youtube.com/watch?v=WmbNEKrNnvg",
    "warning": "",
    "group": 0
  },
  {
    "id": "uvb-76",
    "title": "UVB-76 · The Buzzer",
    "meta": "4625 kHz · Onda corta",
    "story": "Quien sintoniza esta frecuencia suele encontrarse con un zumbido que vuelve una y otra vez. En ocasiones se interrumpe y entra una voz en ruso que lee palabras y grupos de números. El clip recoge el zumbido tal como lo oyó Mysid desde el sur de Finlandia en 2002.",
    "context": "Los radioaficionados han anotado durante años cambios de tono, pausas y mensajes. Priyom recoge incluso una conversación breve captada en 2001. Esas anotaciones permiten distinguir lo que se oyó de las historias que han crecido alrededor de la emisora. El sentido concreto de sus mensajes sigue sin hacerse público.",
    "source": "https://priyom.org/military-stations/russia/the-buzzer/",
    "kind": "audio",
    "media": "https://upload.wikimedia.org/wikipedia/commons/2/26/UVB-76.ogg",
    "credit": "https://commons.wikimedia.org/wiki/File:UVB-76.ogg",
    "warning": "",
    "group": 0
  },
  {
    "id": "poacher",
    "title": "The Lincolnshire Poacher",
    "meta": "E03 · Onda corta histórica",
    "story": "Primero suena una melodía inglesa repetida, de la que la emisora tomó su apodo. Después se oye una voz femenina que lee grupos de cinco números. Para quienes seguían la onda corta, la melodía era la señal de que habían encontrado la emisión que buscaban.",
    "context": "Los monitores recopilaron horarios, frecuencias y repeticiones. Priyom clasifica E03 como una estación británica y recoge su último reporte en julio de 2008. La grabación conserva el tono de la emisión, aunque el contenido de los mensajes y sus destinatarios siguen fuera del alcance del oyente.",
    "source": "https://priyom.org/number-stations/english/e03/",
    "kind": "audio",
    "media": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Poacher.ogg",
    "credit": "https://commons.wikimedia.org/wiki/File:Poacher.ogg",
    "warning": "",
    "group": 0
  },
  {
    "id": "max-headroom",
    "title": "La interrupción de Max Headroom",
    "meta": "22 de noviembre de 1987 · Chicago",
    "story": "Durante el informativo de WGN apareció una figura con una máscara de Max Headroom. La emisión recuperó el control y continuó. Más tarde, los espectadores de WTTW que estaban viendo Doctor Who volvieron a encontrarse con la misma máscara, esta vez acompañada de una voz distorsionada.",
    "context": "La segunda interrupción sobrevivió en grabaciones caseras y la propia WTTW volvió sobre ella años después. Vista hoy, parece un vídeo extraño subido a internet. Para quienes estaban en casa aquella noche, apareció en directo en el canal que ya estaban viendo. La autoría quedó sin esclarecer.",
    "source": "https://video.wttw.com/video/max-headroom-attack-yffnrt/",
    "kind": "video",
    "media": "https://upload.wikimedia.org/wikipedia/commons/8/85/Max_Headroom_WTTW_Signal_Intrusion_%281987%3B_High_Quality_Restoration%29.webm",
    "credit": "https://commons.wikimedia.org/wiki/File:Max_Headroom_broadcast_intrusion.webm",
    "warning": "",
    "group": 1
  },
  {
    "id": "hampton-court",
    "title": "La figura de Hampton Court",
    "meta": "2003 · Cámara de seguridad · Inglaterra",
    "story": "Durante tres días seguidos, el personal de Hampton Court recibió avisos de que una puerta cortafuegos se había abierto. Al revisar las imágenes, vio que las hojas se abrían de golpe. En la grabación de uno de esos días aparece una figura con una prenda larga que se adelanta y vuelve a cerrar la puerta.",
    "context": "Historic Royal Palaces publicó el vídeo y cuenta que el equipo apodó «Skeletor» a la figura. El palacio ya tenía fama por sus historias de fantasmas y la grabación acabó formando parte de ellas. La cámara permite seguir el movimiento de la puerta y la silueta, pero la baja resolución deja abierta la identidad de quien aparece.",
    "source": "https://www.hrp.org.uk/hampton-court-palace/history-and-stories/historic-hauntings-at-hampton-court-palace/",
    "media": "https://www.youtube-nocookie.com/embed/lne_ye2UYBo",
    "credit": "https://www.youtube.com/watch?v=lne_ye2UYBo",
    "kind": "embed",
    "warning": "",
    "group": 1
  },
  {
    "id": "deerpark",
    "title": "El pasillo de Deerpark",
    "meta": "Octubre de 2017 · Cámara de seguridad · Cork",
    "story": "El pasillo está vacío cuando una puerta se mueve al fondo. La cámara sigue grabando mientras se agitan unas taquillas, se abre una de ellas y caen objetos al suelo. Más cerca del objetivo, una señal amarilla termina tumbada. El canal del colegio Deerpark CBS publicó la secuencia con una pregunta: ¿un fantasma captado en cámara?",
    "context": "El vídeo se difundió como una supuesta aparición y el colegio publicó otro clip semanas después. El encuadre fijo y la hora que aparece en pantalla contribuyeron a que pareciera un registro rutinario interrumpido por algo extraño. El propio canal presentó el segundo vídeo como una disyuntiva entre aparición y montaje. La grabación deja fuera el origen de los movimientos.",
    "source": "https://www.youtube.com/watch?v=vh99uSI22BU",
    "media": "https://www.youtube-nocookie.com/embed/PpWebxw_Zho",
    "credit": "https://www.youtube.com/watch?v=PpWebxw_Zho",
    "kind": "embed",
    "warning": "",
    "group": 1
  },
  {
    "id": "fotografias",
    "title": "Carpeta de fotografías",
    "meta": "Diez fotografías de archivo · De la década de 1870 a 2024",
    "story": "Retratos de estudio, fotos de viajes y una imagen tomada durante un incendio. En todas hay un detalle que alguien interpretó como una aparición. Abre cada copia para ver dónde se tomó, cómo se difundió y de dónde viene esa interpretación.",
    "context": "En los estudios de fotografía espiritista, técnicas como la superposición permitían que una figura apareciera translúcida. En una toma larga, alguien que solo se queda quieto durante parte de la exposición también puede dejar una silueta tenue. Estas imágenes muestran cómo una fotografía y la historia que la acompaña pueden cambiar lo que creemos ver.",
    "source": "https://blog.scienceandmediamuseum.org.uk/william-hope-spirit-photography/",
    "media": "",
    "credit": "",
    "kind": "gallery",
    "warning": "",
    "group": 1
  },
  {
    "id": "randonautica",
    "title": "Randonautica",
    "meta": "Aplicación · Exploración geográfica",
    "story": "La aplicación propone una coordenada cerca del usuario y le invita a pensar en una intención antes de salir. El experimento empieza con un punto en el mapa y acaba con lo que cada persona encuentra allí: un camino sin salida, un objeto corriente o una coincidencia que decide contar.",
    "context": "El propio servicio anima a compartir experiencias. Eso favorece que conozcamos las salidas con un desenlace llamativo y que pasen desapercibidos los viajes en los que no ocurrió nada. La ficha oficial explica cómo funciona la app y recomienda abandonar la exploración si el lugar parece inseguro.",
    "source": "https://www.randonautica.app/randonauting-101/",
    "kind": "web",
    "media": "https://www.randonautica.app/",
    "credit": "https://www.randonautica.app/randonauting-101/",
    "warning": "Es preferible no seguir coordenadas desconocidas. Si decides probar la app, hazlo bajo tu propio criterio y evita lugares aislados o propiedades privadas.",
    "group": 2
  },
  {
    "id": "deep-web",
    "title": "La deep web",
    "meta": "Contenido fuera de los buscadores",
    "story": "La deep web incluye páginas que los buscadores comunes no indexan, como una cuenta privada, un catálogo interno o materiales detrás de un inicio de sesión. Mucha gente la usa cada día sin llamarla así.",
    "context": "La dark web designa servicios accesibles mediante redes específicas, como los sitios .onion de Tor. Entre ellos hay canales de comunicación y versiones de sitios legítimos. Las historias virales suelen mezclar esos usos reales con capturas y rumores de procedencia difícil de verificar. La documentación enlazada explica qué es un servicio onion.",
    "source": "https://support.torproject.org/about-tor/onion-services/what-is-a-dot-onion/",
    "kind": "web",
    "media": "https://support.torproject.org/tor-browser/features/onion-services/",
    "credit": "https://support.torproject.org/about-tor/onion-services/what-is-a-dot-onion/",
    "warning": "Es preferible no abrir direcciones .onion desconocidas. Si decides investigar, hazlo bajo tu propio criterio. Este enlace abre la documentación pública de Tor.",
    "group": 2
  },
  {
    "id": "websdr",
    "title": "WebSDR",
    "meta": "Radio en directo · Receptores remotos",
    "story": "Un WebSDR te deja usar desde el navegador un receptor de radio instalado en otro lugar. Cada oyente elige su frecuencia. Según la antena, la hora y la propagación, puedes escuchar una conversación clara, un pulso repetitivo o solo ruido.",
    "context": "El proyecto empezó con un receptor de onda corta en el radioclub de la Universidad de Twente. El archivo de UVB-76 permite comparar el zumbido grabado con lo que se oye en directo en un receptor que cubra 4625 kHz, cuando las condiciones lo permiten.",
    "source": "https://www.websdr.org/background.html",
    "kind": "web",
    "media": "https://www.websdr.org/",
    "credit": "https://www.websdr.org/background.html",
    "warning": "El enlace abre un directorio externo de receptores públicos. Si decides explorarlo, hazlo bajo tu propio criterio y empieza con el volumen bajo.",
    "group": 2
  }
]
const fotos = [
  {
    "titulo": "Mary Todd Lincoln",
    "fecha": "William H. Mumler · Principios de la década de 1870",
    "texto": "Mumler retrató a Mary Todd Lincoln sentada. La figura que aparece detrás, con las manos sobre sus hombros, fue presentada como Abraham Lincoln.",
    "alt": "La mujer sentada y una figura tenue detrás de ella",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mumler_(Lincoln).jpg",
    "fuente": "https://commons.wikimedia.org/wiki/File:Mumler_(Lincoln).jpg"
  },
  {
    "titulo": "El sillón de Combermere",
    "fecha": "Sybell Corbet · 1891",
    "texto": "Corbet fotografió la biblioteca de la abadía. En el sillón de la izquierda se distingue una forma tenue que quienes difundieron la copia identificaron con lord Combermere.",
    "alt": "Biblioteca con una forma borrosa sobre el sillón de la izquierda",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/This_photograph_of_the_Library_in_Combermere_Abbey_was_taken_by_Sybell_Corbet_in_1891.jpg",
    "fuente": "https://commons.wikimedia.org/wiki/File:This_photograph_of_the_Library_in_Combermere_Abbey_was_taken_by_Sybell_Corbet_in_1891.jpg"
  },
  {
    "titulo": "El retrato del matrimonio",
    "fecha": "Atribuida a William Hope · Hacia 1920",
    "texto": "En el retrato del matrimonio aparece un rostro juvenil translúcido. Los retratos de Hope formaban parte de la fotografía espiritista de su época.",
    "alt": "Retrato de una pareja junto a la figura tenue de una joven",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/97/CoupleWithSpirit_cropped.png",
    "fuente": "https://commons.wikimedia.org/wiki/File:CoupleWithSpirit_cropped.png"
  },
  {
    "titulo": "El rostro del escuadrón",
    "fecha": "Retrato atribuido a 1919 · Reino Unido",
    "texto": "Detrás de uno de los hombres del retrato colectivo asoma parte de otro rostro. El oficial Victor Goddard difundió la imagen décadas después y lo identificó con el mecánico Freddy Jackson. Esa identificación proviene del relato que acompaña la foto.",
    "alt": "Retrato de grupo con un rostro parcialmente oculto",
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/59/Freddy_jackson_lg.jpg",
    "fuente": "https://commons.wikimedia.org/wiki/File:Freddy_jackson_lg.jpg"
  },
  {
    "titulo": "La Dama de Marrón",
    "fecha": "Provand y Shira · Raynham Hall, 1936",
    "texto": "Durante una sesión para fotografiar la mansión, una forma pálida quedó registrada en la escalera principal. La imagen se publicó en Country Life y acabó ligada a la leyenda de la Dama de Marrón. La figura del negativo y su identificación son dos partes distintas del relato.",
    "alt": "Escalera de Raynham Hall con una forma clara en el centro",
    "url": "https://surnateum.org/English/surnateum/collection/hauntics/image008.jpg",
    "fuente": "https://surnateum.org/English/surnateum/collection/hauntics/photosspi.htm"
  },
  {
    "titulo": "La niña del incendio de Wem",
    "fecha": "Tony O’Rahilly · Inglaterra, 1995",
    "texto": "O’Rahilly fotografió el incendio del ayuntamiento de Wem. En la puerta parecía haber una niña. Años después se encontró una postal antigua con una figura de aspecto y postura muy parecidos, lo que puso en duda la lectura paranormal de la imagen.",
    "alt": "Ayuntamiento en llamas con una figura clara en una abertura",
    "url": "https://www.paranormal-encyclopedia.com/a/apparition/photos/images/1995-11-19_fire.jpg",
    "fuente": "https://www.shutterstock.com/editorial/image-editorial/ghost-girl-257203e"
  },
  {
    "titulo": "La escalera del hotel Stanley",
    "fecha": "Henry Yau · Colorado, 2016",
    "texto": "Durante una visita al hotel Stanley, Yau tomó una foto de la escalera. Al revisar la imagen vio una figura oscura en el rellano. La foto se difundió por la fama del hotel y por lo difícil que resulta distinguir quién estaba allí a partir de una sola toma.",
    "alt": "Escalera del hotel Stanley con una figura oscura en el rellano",
    "url": "https://globalnews.ca/wp-content/uploads/2016/04/shining-hotel-ghost.jpg?quality=65&strip=all",
    "fuente": "https://globalnews.ca/news/2645294/the-shining-hotel-alleged-ghost-photobombs-tourists-picture/"
  },
  {
    "titulo": "La puerta del castillo de Crathes",
    "fecha": "Bill Andrew · Escocia, 2016",
    "texto": "La familia de Andrew posó delante del castillo. Al mirar la foto, su hija reparó en una forma en el vano oscuro. La prensa local relacionó la imagen con la leyenda de la Dama Verde del castillo, una asociación que surgió al revisar el retrato.",
    "alt": "Retrato familiar frente al castillo de Crathes con una puerta oscura detrás",
    "url": "https://www.scotsman.com/webimg/legacy_elm_51232798.jpg?crop=3%3A2%2Csmart&quality=65&trim=&width=640",
    "fuente": "https://www.scotsman.com/whats-on/arts-and-entertainment/is-this-crathes-castles-green-lady-ghost-captured-on-camera-610576"
  },
  {
    "titulo": "La figura entre las ruinas de Flint",
    "fecha": "Fotografía de un visitante · Gales, 2021",
    "texto": "Un padre fotografió las ruinas de Flint Castle durante una visita con su hijo. Según el relato publicado junto a la imagen, se fijó en la figura al mirar las fotos en casa. La silueta se distingue de la piedra, aunque la imagen por sí sola no permite saber quién o qué la produjo.",
    "alt": "Ruinas de Flint Castle con una silueta al fondo",
    "url": "https://mysticaltimesblog.com/ws/media-library/d79be80a50e443bf9182070c773fa1cd/flint-castle-ghost-1.jpg",
    "fuente": "https://mysticaltimesblog.com/flint-castle-ghost/"
  },
  {
    "titulo": "La sombra de Gómez Palacio",
    "fecha": "Publicada por N+ Coahuila · 2024",
    "texto": "Entre las imágenes que circularon sobre la clínica 46 del IMSS en Gómez Palacio, N+ publicó esta fotografía del pasillo. Parte de quienes la compartieron interpretó la sombra como una figura humana. La procedencia y la causa de la sombra quedaron sin confirmar.",
    "alt": "Imagen publicada por N+ del pasillo de la clínica en Gómez Palacio",
    "url": "https://static.nmas.com.mx/Nmas/cms/1779638065106-fantasma-en-hospital-de-g-mez-palacio.webp",
    "fuente": "https://www.nmas.com.mx/coahuila/entretenimiento/captan-a-fantasma-en-la-clinica-46-del-imss-en-gomez-palacio/"
  }
]
const seleccion = ref(0)
const ficha = computed(() => fichas[seleccion.value]!)
const titulo = ref<HTMLHeadingElement>()
const audio = ref<HTMLAudioElement>()
const reproduciendo = ref(false)
const volumen = ref(25)
const fotoActiva = ref(0)
const fotoConError = ref(false)
const foto = computed(() => fotos[fotoActiva.value]!)
const tiempo = ref(0)
const duracion = ref(0)
const error = ref(false)
const confirmar = ref(false)
const cargarVideo = ref(false)
const barras = Array.from({ length: 38 }, (_, i) => 16 + (i * 37 + i * i * 11) % 78)
const notas: Record<string, { pose: string; texto: string }> = {
  'area-51': { pose: 'preguntona', texto: 'Volví a escuchar el corte. Justo antes, aún se le oye respirar.' },
  'max-headroom': { pose: 'sorprendida', texto: 'Imagínate estar viendo la tele y que alguien cambie el canal desde el otro lado.' },
  'websdr': { pose: 'mirando-abajo', texto: 'Baja el volumen antes de sintonizar. Te lo digo por mis orejas.' }
}
const nota = computed(() => notas[ficha.value.id])
const base = import.meta.env.BASE_URL

async function abrir(id: string) {
  const indice = fichas.findIndex(documento => documento.id === id)
  if (indice < 0 || indice === seleccion.value) return
  audio.value?.pause()
  seleccion.value = indice
  reproduciendo.value = false
  tiempo.value = 0
  duracion.value = 0
  error.value = false
  confirmar.value = false
  cargarVideo.value = false
  fotoActiva.value = 0
  fotoConError.value = false
  await nextTick()
  titulo.value?.focus()
}

async function alternarAudio() {
  const pista = audio.value
  if (!pista) return
  if (!pista.paused) {
    pista.pause()
    return
  }
  try {
    pista.volume = volumen.value / 100
    await pista.play()
  } catch {
    if (pista === audio.value) error.value = true
  }
}

function actualizarVolumen(evento: Event) {
  volumen.value = Number((evento.currentTarget as HTMLInputElement).value)
  if (audio.value) audio.value.volume = volumen.value / 100
}

function moverFoto(paso: number) {
  fotoConError.value = false
  fotoActiva.value = (fotoActiva.value + paso + fotos.length) % fotos.length
}

function actualizarAudio(evento: Event) {
  const pista = evento.currentTarget as HTMLAudioElement
  tiempo.value = pista.currentTime
  duracion.value = Number.isFinite(pista.duration) ? pista.duration : 0
  reproduciendo.value = !pista.paused && !pista.ended
}

function buscar(evento: Event) {
  if (audio.value) audio.value.currentTime = Number((evento.currentTarget as HTMLInputElement).value)
}

function reloj(segundos: number) {
  const total = Math.floor(segundos)
  return Math.floor(total / 60) + ':' + String(total % 60).padStart(2, '0')
}
</script>

<template>
  <main class="archivo">
    <div class="mesa">
      <RouterLink class="regreso" to="/">← Volver a la Madriguera</RouterLink>
      <header class="cabecera">
        <h1>Señales perdidas</h1>
        <p>Hay grabaciones que sobreviven a la gente que las hizo. Aquí guardamos las llamadas, los vídeos y los rincones de internet que dejaron preguntas abiertas.</p>
      </header>
      <div class="archivador">
        <nav aria-label="Índice de expedientes">
          <section v-for="(grupo, indice) in grupos" :key="grupo">
            <h2>{{ grupo }}</h2>
            <button v-for="documento in fichas.filter(item => item.group === indice)" :key="documento.id"
              type="button" :aria-current="documento.id === ficha.id ? 'true' : undefined"
              @click="abrir(documento.id)">
              {{ documento.title }}
            </button>
          </section>
        </nav>
        <article :key="ficha.id" class="documento">
          <span class="clip-documento" aria-hidden="true"></span>
          <p class="fecha">{{ ficha.meta }}</p>
          <h2 ref="titulo" tabindex="-1">{{ ficha.title }}</h2>
          <p>{{ ficha.story }}</p>

          <div v-if="ficha.kind === 'audio'" class="reproductor">
            <audio ref="audio" :src="ficha.media" preload="metadata"
              @loadedmetadata="actualizarAudio" @timeupdate="actualizarAudio" @play="actualizarAudio"
              @pause="actualizarAudio" @ended="actualizarAudio" @error="error = true"></audio>
            <div class="onda">
              <button type="button" @click="alternarAudio">{{ reproduciendo ? 'Pausar' : 'Reproducir' }}</button>
              <div class="barras" aria-hidden="true">
                <span v-for="(altura, i) in barras" :key="i" :class="{ pasada: duracion > 0 && i / barras.length < tiempo / duracion }"
                  :style="{ height: altura + '%' }"></span>
              </div>
            </div>
            <input type="range" aria-label="Posición de reproducción" min="0" :max="duracion || 1"
              step="0.1" :value="tiempo" :disabled="!duracion" @input="buscar" />
            <div class="mandos-audio">
              <p class="tiempo">{{ reloj(tiempo) }} / {{ reloj(duracion) }}</p>
              <label>
                Volumen <span>{{ volumen }} %</span>
                <input type="range" min="0" max="100" :value="volumen" @input="actualizarVolumen" />
              </label>
            </div>
          </div>

          <div v-else-if="ficha.kind === 'video'" class="visor">
            <video controls playsinline preload="none" :src="ficha.media" :aria-label="ficha.title" @error="error = true"></video>
          </div>
          <div v-else-if="ficha.kind === 'embed'" class="visor">
            <iframe v-if="cargarVideo" :src="ficha.media" :title="ficha.title"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button v-else type="button" @click="cargarVideo = true">{{ ficha.group === 0 ? 'Cargar grabación' : 'Cargar vídeo' }}</button>
          </div>
          <div v-else-if="ficha.kind === 'gallery'" class="galeria">
            <figure :key="foto.url">
              <a v-if="!fotoConError" :href="foto.fuente" target="_blank" rel="noopener noreferrer">
                <img :src="foto.url" :alt="foto.alt" @error="fotoConError = true" />
              </a>
              <p v-else role="status">La vista previa no está disponible. Puedes abrir la publicación original.</p>
              <figcaption>
                <span class="fecha">{{ foto.fecha }}</span>
                <h3>{{ foto.titulo }}</h3>
                <p>{{ foto.texto }}</p>
                <a :href="foto.fuente" target="_blank" rel="noopener noreferrer">Ver foto original y crédito ↗</a>
              </figcaption>
            </figure>
            <div class="fotos-controles">
              <button type="button" @click="moverFoto(-1)">← Anterior</button>
              <span aria-live="polite">{{ fotoActiva + 1 }} / {{ fotos.length }}</span>
              <button type="button" @click="moverFoto(1)">Siguiente →</button>
            </div>
          </div>
          <p v-if="cargarVideo && ficha.group === 0" class="fecha">Puedes ajustar el volumen en el reproductor de YouTube.</p>
          <p v-if="error" role="status">El reproductor no pudo cargar el archivo. Puedes abrirlo en la fuente.</p>
          <a v-if="ficha.credit && ficha.kind !== 'web'" :href="ficha.credit" target="_blank" rel="noopener noreferrer">Abrir grabación en su fuente ↗</a>

          <h3>{{ ficha.kind === 'web' ? 'Cómo se usa y qué conviene saber' : 'Qué se supo después' }}</h3>
          <p>{{ ficha.context }}</p>

          <div v-if="nota" class="miru">
            <p>«{{ nota.texto }}»</p>
            <img :src="base + 'Miru/miru-' + nota.pose + '.png'" alt="Miru" />
          </div>
          <button v-if="ficha.id === 'websdr'" type="button" @click="abrir('uvb-76')">Escuchar la grabación de UVB-76 →</button>
          <button v-if="ficha.id === 'uvb-76'" type="button" @click="abrir('websdr')">Consultar los receptores WebSDR →</button>

          <div v-if="ficha.warning" class="aviso">
            <strong>Antes de abrir el sitio</strong>
            <p>{{ ficha.warning }}</p>
            <button v-if="!confirmar" type="button" @click="confirmar = true">Mostrar enlace externo</button>
            <a v-else :href="ficha.media" target="_blank" rel="noopener noreferrer">Abrir sitio externo ↗</a>
          </div>
          <footer v-if="ficha.kind !== 'web' || confirmar">
            <a :href="ficha.source" target="_blank" rel="noopener noreferrer">Fuente de la ficha ↗</a>
          </footer>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.archivo { min-height: 100vh; background: radial-gradient(ellipse at top, #321b28, #100b10 60%); color: #f4dae5; padding: clamp(1rem, 4vw, 4rem); }
.mesa { max-width: 85rem; margin-inline: auto; }
.regreso, a { color: inherit; text-decoration: underline; text-underline-offset: .24em; }
.cabecera { text-align: center; margin: 2rem 0; border-block: 3px double #9e647e; padding: 1.25rem 0 1.6rem; }
.cabecera h1 { font: bold clamp(2.7rem, 8vw, 7rem)/.98 Georgia, serif; margin: .15em 0; }
.cabecera p { max-width: 65ch; margin: 1rem auto 0; }
.archivador { display: grid; grid-template-columns: minmax(13rem, 1fr) minmax(0, 3.4fr); align-items: start; }
nav { background: #21141d; border: 1px solid #71465b; padding: 1rem; }
nav section + section { margin-top: 1.25rem; }
nav h2 { color: #efaeca; font: 600 .8rem/1.4 ui-monospace, monospace; text-transform: uppercase; margin-bottom: .4rem; }
button { cursor: pointer; border: 1px solid currentColor; padding: .48rem .7rem; }
nav button { border: 0; display: block; width: 100%; text-align: left; border-inline-start: 2px solid transparent; }
nav button[aria-current], nav button:hover { background: #482439; border-inline-start-color: #efaccd; }
button:focus-visible, a:focus-visible, h2:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
.documento { position: relative; background: repeating-linear-gradient(0deg, #71465b0b 0 1px, transparent 1px 5px), #e9cad3; color: #27151f; border: 1px solid #ab6e86; padding: clamp(1rem, 4vw, 3rem); box-shadow: 5px 5px #4f3042, 9px 9px #301c29; }
.clip-documento { position: absolute; top: -.8rem; right: 1.25rem; width: 1.1rem; height: 2.15rem; border: 2px solid #816273; border-bottom-color: #513b48; border-radius: .65rem; transform: rotate(12deg); box-shadow: 1px 2px 3px #27151f44, inset 1px 0 #fff2f8; pointer-events: none; }
.clip-documento::after { content: ""; position: absolute; inset: .23rem .13rem .16rem .15rem; border: 2px solid #a38295; border-top-color: transparent; border-radius: .45rem; }
.documento > .fecha { padding-inline-end: 2rem; }
.documento h2 { font: bold clamp(2rem, 4.4vw, 4.5rem)/1.02 Georgia, serif; margin: .3em 0; overflow-wrap: break-word; }
.documento h3 { font: bold 1.35rem Georgia, serif; margin-top: 1.5rem; }
.documento p { max-width: 76ch; margin-block: .65rem; line-height: 1.65; }
.fecha, .tiempo { font: 600 .83rem ui-monospace, monospace; }
.reproductor, .visor { background: #21131d; color: #f4dae5; margin: 1.25rem 0 .55rem; }
.reproductor { padding: 1rem; }
.onda { display: flex; gap: .8rem; align-items: center; }
.barras { display: flex; align-items: center; gap: 2px; flex: 1; height: 3rem; }
.barras span { flex: 1; background: #ae7896; border-radius: 2px; }
.barras .pasada { background: #ffd3eb; }
.reproductor input { width: 100%; accent-color: #f8aacc; }
.mandos-audio { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: .75rem; }
.mandos-audio label { display: grid; grid-template-columns: 1fr auto; column-gap: 1rem; font-size: .85rem; }
.mandos-audio input { grid-column: 1 / -1; }
.galeria { margin-block: 1.25rem; padding: 1rem; background: #21131d; color: #f4dae5; }
.galeria figure { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1rem; align-items: center; }
.galeria img { display: block; width: 100%; max-height: 28rem; object-fit: contain; }
.galeria figcaption h3 { margin-top: .35rem; }
.fotos-controles { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: .6rem; margin-top: 1rem; }
@media (max-width: 700px) { .galeria figure { grid-template-columns: minmax(0, 1fr); } }
.visor > button { margin: 1rem; }
video, iframe { width: 100%; display: block; border: 0; }
video { max-height: 32rem; }
iframe { aspect-ratio: 16 / 9; }
.aviso { margin: 1.3rem 0; border-left: 3px solid #863956; padding: .75rem 1rem; background: #dcb1c1; }
.miru { display: flex; align-items: center; justify-content: flex-end; gap: .55rem; }
.miru p { border: 1px solid #a96b85; border-radius: .85rem .85rem 0 .85rem; background: #f5dfe7; padding: .65rem .85rem; max-width: 25ch; }
.miru img { width: clamp(5rem, 12vw, 8rem); }
footer { margin-top: 1.5rem; padding-top: .75rem; border-top: 1px solid #9e647e; }
@media (max-width: 700px) { .archivador { grid-template-columns: minmax(0, 1fr); gap: 1rem; } }
</style>
