
<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const lugares: Lugar[] = [
  {
    "id": "villa",
    "nombre": "Villa De Vecchi",
    "ubicacion": "Cortenova, Italia",
    "subtitulo": "El piano de la Casa Roja",
    "historia": "El conde Felice De Vecchi encargó esta residencia de verano en el siglo XIX. La villa se construyó entre 1854 y 1858 y, durante la Segunda Guerra Mundial, llegó a alojar a personas desplazadas. Aún conserva restos de la decoración que hizo famosa a la Casa Roja.",
    "leyenda": "Quienes cuentan su leyenda hablan de un piano que se oye desde fuera, aunque la mansión esté vacía. Las versiones más dramáticas añaden muertes y desapariciones. El piano es el detalle que más se repite al contar la historia.",
    "fuentes": [
      [
        "Patrimonio de Cortenova",
        "https://upel.va.it/it/upel-cultura/cosa-visitare-a-cortenova/villa-de-vecchi-cortenova"
      ],
      [
        "La leyenda del piano",
        "https://www.ilgiornale.it/news/leggende-e-paure-i-misteri-del-castello-dei-fantasmi-1507027.html"
      ]
    ],
    "fotos": [
      {
        "titulo": "Fachada horizontal",
        "autor": "Ysogo",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_001.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_001.jpg?width=960"
        ]
      },
      {
        "titulo": "Encuadre vertical",
        "autor": "Ysogo",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_003.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_003.jpg?width=960"
        ]
      },
      {
        "titulo": "Segunda vista horizontal",
        "autor": "Ysogo",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_002.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Cortenova_-_Villa_de_Vecchi_-_2026-09-13_22-45-30_002.jpg?width=960"
        ]
      }
    ],
    "enlaces": []
  },
  {
    "id": "barranca",
    "nombre": "Sanatorio de La Barranca",
    "ubicacion": "Navacerrada, España",
    "subtitulo": "Lamentos entre los pinos",
    "historia": "El antiguo Hospital del Santo Ángel se levantó en la sierra de Guadarrama para atender a pacientes con tuberculosis. Más tarde tuvo uso psiquiátrico. Tras años de abandono, la Comunidad de Madrid inició su demolición en 2023.",
    "leyenda": "Durante el abandono, circularon historias sobre lamentos grabados en el edificio y una figura vestida de blanco. Las fotos de sus pasillos ayudan a entender por qué el lugar acabó convertido en escenario recurrente de vídeos y relatos de exploración.",
    "fuentes": [
      [
        "Plan de actuaciones del parque nacional",
        "https://www.parquenacionalsierraguadarrama.es/dl-documentos/send/42-archivo/487-plan-actuaciones-2024"
      ],
      [
        "Reportaje sobre las leyendas",
        "https://www.telemadrid.es/programas/madrid-directo/misterios-hospital-Navacerrada-2-2052114841--20180924091135.html"
      ]
    ],
    "fotos": [
      {
        "titulo": "Vista del sanatorio",
        "autor": "Deensel",
        "licencia": "https://creativecommons.org/licenses/by/2.0/",
        "textoLicencia": "CC BY 2.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Sanatorio_de_la_Barranca%2C_Navacerrada%2C_Spain.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Sanatorio_de_la_Barranca%2C_Navacerrada%2C_Spain.jpg?width=960"
        ]
      },
      {
        "titulo": "Otra vista del edificio",
        "autor": "Strakhov",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Sanatorio_de_La_Barranca%2C_Navacerrada._66.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Sanatorio_de_La_Barranca%2C_Navacerrada._66.jpg?width=960"
        ]
      },
      {
        "titulo": "Tercera vista de La Barranca",
        "autor": "Strakhov",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Sanatorio_de_La_Barranca%2C_Navacerrada._73.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Sanatorio_de_La_Barranca%2C_Navacerrada._73.jpg?width=960"
        ]
      }
    ],
    "enlaces": [
      [
        "Pasillo interior · El Español",
        "https://www.elespanol.com/madrid/comunidad/20240206/adios-psiquiatrico-navacerrada-comienzan-obras-demoler-edificio-rodeado-leyendas/830417220_0.html"
      ]
    ]
  },
  {
    "id": "poveglia",
    "nombre": "Poveglia",
    "ubicacion": "Laguna de Venecia, Italia",
    "subtitulo": "El campanario en la laguna",
    "historia": "Poveglia sirvió como estación de cuarentena marítima y más adelante acogió un sanatorio. Desde la laguna todavía se distinguen el campanario y el conjunto de edificios que quedó junto a él.",
    "leyenda": "Los programas de investigación paranormal ayudaron a difundir la imagen de Poveglia como isla embrujada. La fama moderna mezcla su pasado sanitario con relatos de apariciones que fueron creciendo al repetirse en televisión y en internet.",
    "fuentes": [
      [
        "Estudio de Cavallo y Visentin",
        "https://iris.unive.it/retrieve/e4239ddd-ba93-7180-e053-3705fe0a3322/11%20Cavallo%20Visentin%20The%20most%20haunted%20island%20I.pdf"
      ]
    ],
    "fotos": [
      {
        "titulo": "Campanario y hospital desde la laguna",
        "autor": "Paul Colin Hennig",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Bell_tower_and_ruined_hospital_of_Poveglia_seen_from_the_lagoon_(2024).jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_tower_and_ruined_hospital_of_Poveglia_seen_from_the_lagoon_(2024).jpg?width=960"
        ]
      },
      {
        "titulo": "Primer plano del hospital",
        "autor": "Chris 73",
        "licencia": "https://creativecommons.org/licenses/by-sa/3.0/",
        "textoLicencia": "CC BY-SA 3.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Poveglia_Closeup_of_Hospital.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Poveglia_Closeup_of_Hospital.jpg?width=960"
        ]
      },
      {
        "titulo": "Poveglia en la laguna",
        "autor": "Ffortitude",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Poveglia_island_in_the_Venetian_lagoon.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Poveglia_island_in_the_Venetian_lagoon.jpg?width=960"
        ]
      }
    ],
    "enlaces": [
      [
        "Vista a ras de agua · British Council",
        "https://venicebiennale.britishcouncil.org/sites/default/files/99_years_by_grace_quah_.pdf"
      ]
    ]
  },
  {
    "id": "changi",
    "nombre": "Antiguo hospital de Changi",
    "ubicacion": "Changi, Singapur",
    "subtitulo": "Pasos en el corredor",
    "historia": "El hospital formó parte de las instalaciones militares británicas de Changi y pasó después a manos de Singapur. En 1997 dejó de atender pacientes cuando sus servicios se trasladaron a un nuevo hospital en Simei.",
    "leyenda": "Tras el cierre se extendieron historias de apariciones en las salas y los corredores. El lugar llegó al cine de terror local. Los reportajes y las fotografías de visitantes conservaron la imagen de una fachada blanca que apenas se distingue entre los árboles.",
    "fuentes": [
      [
        "National Heritage Board",
        "https://www.roots.gov.sg/places/places-landing/Places/surveyed-sites/Old-Changi-Hospital-24-37-161-Halton-Road"
      ],
      [
        "Reportaje sobre Changi",
        "https://www.channelnewsasia.com/singapore/your-alley-changi-village-beach-airport-hospital-breakdancing-planespotting-2182556"
      ]
    ],
    "fotos": [
      {
        "titulo": "Fachada",
        "autor": "Gaya Chandramohan · CNA",
        "fuente": "https://www.channelnewsasia.com/singapore/your-alley-changi-village-beach-airport-hospital-breakdancing-planespotting-2182556",
        "imagenes": [
          "https://dam.mediacorp.sg/image/upload/s--zdHU6-2p--/c_fill,g_center,h_598,w_747/fl_relative,g_south_east,l_mediacorp:cna:watermark:2021-08:cna,w_0.1/f_auto,q_auto/v1/mediacorp/cna/image/2021-09/och_gaya.jpg?itok=md0-1KRK"
        ]
      },
      {
        "titulo": "Corredor largo",
        "autor": "clickcluck · Flickr",
        "fuente": "https://www.flickr.com/photos/clickcluck/2879497592/in/album-72157607428306984",
        "imagenes": [
          "https://live.staticflickr.com/3048/2879497592_2a691a6965_z.jpg",
          "https://live.staticflickr.com/3048/2879497592_2a691a6965.jpg"
        ]
      },
      {
        "titulo": "Lights and Shadows",
        "autor": "clickcluck · Flickr",
        "fuente": "https://www.flickr.com/photos/clickcluck/2879635876/in/album-72157607428306984",
        "imagenes": [
          "https://live.staticflickr.com/3122/2879635876_9a1d082aaa_z.jpg",
          "https://live.staticflickr.com/3122/2879635876_9a1d082aaa.jpg"
        ]
      }
    ],
    "enlaces": [],
    "respaldo": {
      "titulo": "Vista alternativa del antiguo hospital",
      "autor": "Lajmmoore",
      "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
      "textoLicencia": "CC BY-SA 4.0",
      "fuente": "https://commons.wikimedia.org/wiki/File:Changi_Hospital.jpg",
      "imagenes": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Changi_Hospital.jpg?width=960"
      ]
    }
  },
  {
    "id": "gonjiam",
    "nombre": "Hospital de Gonjiam",
    "ubicacion": "Gwangju, Corea del Sur",
    "subtitulo": "La última retransmisión",
    "historia": "El antiguo hospital psiquiátrico de Gonjiam, en la provincia de Gyeonggi, llevaba años abandonado cuando unas fotografías de 2014 registraron el exterior, la entrada y las habitaciones en ruinas. Su fama inspiró la película Gonjiam: Haunted Asylum, estrenada en 2018.",
    "leyenda": "Los rumores sobre ruidos y sucesos extraños dieron forma a la reputación del edificio. La película convierte esa fama en una ficción de metraje encontrado: un grupo entra con cámaras y retransmite su exploración. El director explicó que recreó el hospital para el rodaje.",
    "fuentes": [
      [
        "Entrevista al director · Korean Film Council",
        "https://www.koreanfilm.or.kr/eng/news/interview.jsp?blbdComCd=601019&mode=INTERVIEW_VIEW&pageIndex=1&pageRowSize=10&seq=310"
      ],
      [
        "Crónica de una visita al edificio · The Korea Times",
        "https://www.koreatimes.co.kr/www/nation/2024/06/177_246939.html"
      ]
    ],
    "fotos": [
      {
        "titulo": "Edificio principal",
        "autor": "Brown Beyond Borders",
        "fuente": "https://brown-beyond-borders.com/2022/11/03/gonjiam-psychiatric-hospital/",
        "imagenes": [
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1040992-1.jpg?w=1024",
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1040992-1.jpg"
        ]
      },
      {
        "titulo": "Pasillo de entrada",
        "autor": "Brown Beyond Borders",
        "fuente": "https://brown-beyond-borders.com/2022/11/03/gonjiam-psychiatric-hospital/",
        "imagenes": [
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1050014.jpg?w=1024",
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1050014.jpg"
        ]
      },
      {
        "titulo": "Habitación en ruinas",
        "autor": "Brown Beyond Borders",
        "fuente": "https://brown-beyond-borders.com/2022/11/03/gonjiam-psychiatric-hospital/",
        "imagenes": [
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1050017.jpg?w=1024",
          "https://brown-beyond-borders.com/wp-content/uploads/2022/11/p1050017.jpg"
        ]
      }
    ],
    "enlaces": []
  },
  {
    "id": "eastern",
    "nombre": "Penitenciaría de Eastern State",
    "ubicacion": "Filadelfia, Estados Unidos",
    "subtitulo": "Sombras entre las celdas",
    "historia": "Eastern State abrió en 1829. Su diseño giraba en torno al aislamiento de los presos, que pasaban gran parte del tiempo separados en sus celdas. La prisión dejó de funcionar en 1971 y el recinto reabrió para visitas históricas en 1994.",
    "leyenda": "En el audioguía del recinto se recogen relatos de personas convencidas de haber sentido presencias. Los programas de fantasmas también exploraron las galerías. Esas historias se superponen a la huella que dejó un sistema de reclusión basado en la soledad.",
    "fuentes": [
      [
        "Historia de Eastern State",
        "https://easternstate.org/about/history-of-eastern-state-penitentiary"
      ],
      [
        "Transcripción del audioguía",
        "https://easternstate.org/audio_tour.html"
      ]
    ],
    "fotos": [
      {
        "titulo": "Galería abovedada",
        "autor": "Gangway Ghost",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Eastern_state_penitentiary_cellblock_gallery.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern_state_penitentiary_cellblock_gallery.jpg?width=960"
        ]
      },
      {
        "titulo": "Bloque de celdas cerrado",
        "autor": "Saschacat916",
        "licencia": "https://creativecommons.org/licenses/by-sa/4.0/",
        "textoLicencia": "CC BY-SA 4.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Eastern_State_Penitentiary_closed_cell_block.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern_State_Penitentiary_closed_cell_block.jpg?width=960"
        ]
      },
      {
        "titulo": "Restos de la barbería",
        "autor": "Dudva",
        "licencia": "https://creativecommons.org/licenses/by-sa/3.0/",
        "textoLicencia": "CC BY-SA 3.0",
        "fuente": "https://commons.wikimedia.org/wiki/File:Eastern_State_Penitentiary_-_The_remains_of_the_barber_shop.jpg",
        "imagenes": [
          "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern_State_Penitentiary_-_The_remains_of_the_barber_shop.jpg?width=960"
        ]
      }
    ],
    "enlaces": []
  }
]

type Foto = {
  titulo: string
  autor: string
  fuente: string
  imagenes: string[]
  licencia?: string
  textoLicencia?: string
}

type Lugar = {
  id: string
  nombre: string
  ubicacion: string
  subtitulo: string
  historia: string
  leyenda: string
  fuentes: [string, string][]
  fotos: Foto[]
  enlaces: [string, string][]
  respaldo?: Foto
}

const seleccion = reactive<Record<string, number>>({})
const intentos = reactive<Record<string, number>>({})

function indice(id: string) {
  return seleccion[id] ?? 0
}

function mover(id: string, paso: number, total: number) {
  seleccion[id] = (indice(id) + paso + total) % total
}

function fallos(id: string, numero: number) {
  return intentos[id + ':' + numero] ?? 0
}

function siguienteFuente(id: string, numero: number) {
  intentos[id + ':' + numero] = fallos(id, numero) + 1
}

function fotoVisible(lugar: { id: string; fotos: Foto[]; respaldo?: Foto }, foto: Foto) {
  const fallo = fallos(lugar.id, indice(lugar.id))
  if (fallo < foto.imagenes.length) return foto
  if (lugar.respaldo && fallo < foto.imagenes.length + lugar.respaldo.imagenes.length) return lugar.respaldo
}

function urlVisible(id: string, foto: Foto) {
  return foto.imagenes[fallos(id, indice(id)) % foto.imagenes.length]
}

const comentariosMiru = [
  { lugar: 'villa', pose: 'preguntona', lado: 'derecha', texto: '¿Y si quien toca el piano solo está esperando a que alguien le pida otra canción?' },
  { lugar: 'barranca', pose: 'asustada', lado: 'izquierda', texto: 'Voy a volver a escuchar ese ruido. Pero esta vez con las luces encendidas.' },
  { lugar: 'poveglia', pose: 'mirando-abajo', lado: 'derecha', texto: 'Desde el agua parece que el campanario flota. Yo me quedo en la barca.' },
  { lugar: 'changi', pose: 'no', lado: 'izquierda', texto: 'Si oyes pasos detrás, igual es el eco. Igual. Yo me espero aquí.' },
  { lugar: 'gonjiam', pose: 'sorprendida', lado: 'derecha', texto: '¿Una retransmisión en directo? Yo habría apagado la cámara en el primer portazo.' },
  { lugar: 'eastern', pose: 'preguntona', lado: 'izquierda', texto: 'Con tanta galería vacía, me pregunto cuántas veces puedes oír tus propios pasos.' },
]

const candidatas = [...comentariosMiru]
const apariciones = new Map<string, (typeof comentariosMiru)[number]>()
for (let turno = 0; turno < 2; turno++) {
  const [aparicion] = candidatas.splice(Math.floor(Math.random() * candidatas.length), 1)
  if (aparicion) apariciones.set(aparicion.lugar, aparicion)
}

const carpetaMiru = import.meta.env.BASE_URL + 'Miru/'
const espectro = import.meta.env.BASE_URL + 'LugaresMalditos/espectro.png'
const espectroMovil = ref<HTMLImageElement | null>(null)
let cuadro: number | undefined
let ultimoDesplazamiento = window.scrollY
let sentido = 1

function dibujarEspectro() {
  cuadro = undefined
  const imagen = espectroMovil.value
  if (!imagen) return

  const desplazamiento = Math.max(0, window.scrollY)
  if (desplazamiento !== ultimoDesplazamiento) {
    sentido = Math.sign(desplazamiento - ultimoDesplazamiento)
    ultimoDesplazamiento = desplazamiento
  }

  const avance = desplazamiento / Math.max(1, window.innerHeight)
  const fase = avance * Math.PI / 1.35
  const giro = -15 * Math.sin(fase) * sentido
  imagen.style.setProperty('--espectro-x', 35 * Math.cos(fase) + 'vw')
  imagen.style.setProperty('--espectro-giro', giro + 'deg')
  imagen.style.setProperty('--espectro-y', 9 * Math.sin(avance * 1.45) + 'vh')
  const alturaDocumento = document.scrollingElement?.scrollHeight ?? window.innerHeight
  const distanciaAlFinal = Math.max(0, alturaDocumento - window.innerHeight - desplazamiento)
  const entrada = Math.min(1, Math.max(0, desplazamiento / 180))
  const salida = Math.min(1, Math.max(0, (distanciaAlFinal - 24) / 200))
  imagen.style.setProperty('--espectro-opacidad', String(.33 * entrada * salida))
}

function actualizarEspectro() {
  if (cuadro === undefined) cuadro = window.requestAnimationFrame(dibujarEspectro)
}

onMounted(() => {
  dibujarEspectro()
  window.addEventListener('scroll', actualizarEspectro, { passive: true })
  window.addEventListener('resize', actualizarEspectro, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', actualizarEspectro)
  window.removeEventListener('resize', actualizarEspectro)
  if (cuadro !== undefined) window.cancelAnimationFrame(cuadro)
})
</script>

<template>
  <main class="cuaderno">
    <img ref="espectroMovil" class="espectro-movil" :src="espectro" alt="" aria-hidden="true" />
    <div class="hojas">
      <RouterLink class="volver" to="/">← Volver a la madriguera</RouterLink>
      <header class="cabecera">
        <span aria-hidden="true">❦ ─────────── ❦</span>
        <h1>Lugares malditos</h1>
        <p>Alguien oyó un piano en una casa vacía. Alguien vio una sombra cruzar una celda. Seis lugares reales y las historias que empezaron cuando se apagaron las luces.</p>
      </header>

      <nav class="indice" aria-label="Índice de lugares">
        <RouterLink v-for="lugar in lugares" :key="lugar.id" :to="{ name: 'lugares-malditos', hash: '#' + lugar.id }">
          {{ lugar.nombre }}
        </RouterLink>
      </nav>

      <article v-for="lugar in lugares" :id="lugar.id" :key="lugar.id" class="lugar">
        <header class="lugar-titulo">
          <p>{{ lugar.ubicacion }}</p>
          <h2>{{ lugar.nombre }}</h2>
          <p class="subtitulo">{{ lugar.subtitulo }}</p>
        </header>

        <div class="ficha">
          <div class="historia">
            <h3>La historia del lugar</h3>
            <p>{{ lugar.historia }}</p>
            <h3>Lo que se cuenta</h3>
            <p>{{ lugar.leyenda }}</p>

            <template v-for="aparicion in [apariciones.get(lugar.id)]" :key="lugar.id">
              <aside
                v-if="aparicion"
                class="aparicion-miru"
                :class="{ 'miru-izquierda': aparicion.lado === 'izquierda' }"
                aria-label="Comentario de Miru"
              >
                <p class="comentario-miru"><strong>Miru</strong>{{ aparicion.texto }}</p>
                <img
                  :src="carpetaMiru + 'miru-' + aparicion.pose + '.png'"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </aside>
            </template>
            <ul class="fuentes" aria-label="Fuentes">
              <li v-for="[titulo, url] in lugar.fuentes" :key="url"><a :href="url">{{ titulo }} ↗</a></li>
            </ul>
          </div>

          <div class="imagenes">
            <template v-for="foto in [lugar.fotos[indice(lugar.id)]!]" :key="lugar.id">
              <figure class="camara">
                <div class="pantalla">
                  <div v-if="fotoVisible(lugar, foto)" class="placa">
                    <img
                      class="eco-foto"
                      :src="urlVisible(lugar.id, fotoVisible(lugar, foto)!)"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="foto-difuminada">
                  <img
                    class="foto-principal"
                    :key="urlVisible(lugar.id, fotoVisible(lugar, foto)!)"
                    :src="urlVisible(lugar.id, fotoVisible(lugar, foto)!)"
                    :alt="fotoVisible(lugar, foto)?.titulo + ' · ' + lugar.nombre"
                    loading="lazy"
                    decoding="async"
                    @error="siguienteFuente(lugar.id, indice(lugar.id))"
                  />
                    </div>
                  </div>
                  <p v-else class="sin-foto">
                    La foto no se ha cargado. <a :href="foto.fuente">Ver la publicación original ↗</a>
                  </p>
                  <span class="rec" aria-hidden="true"><i></i> REC</span>

                  <span class="contador" aria-hidden="true">0{{ indice(lugar.id) + 1 }} / 0{{ lugar.fotos.length }}</span>
                </div>
                <figcaption class="controles">
                  <button type="button" aria-label="Foto anterior" @click="mover(lugar.id, -1, lugar.fotos.length)">←</button>
                  <div aria-live="polite" aria-atomic="true">
                    <strong>{{ indice(lugar.id) + 1 }} de {{ lugar.fotos.length }} · {{ fotoVisible(lugar, foto)?.titulo ?? foto.titulo }}</strong>
                    <small>
                      <a :href="(fotoVisible(lugar, foto) ?? foto).fuente">{{ (fotoVisible(lugar, foto) ?? foto).autor }}</a>
                      <template v-if="(fotoVisible(lugar, foto) ?? foto).licencia">
                        · <a :href="(fotoVisible(lugar, foto) ?? foto).licencia">{{ (fotoVisible(lugar, foto) ?? foto).textoLicencia }}</a>
                      </template>
                    </small>
                  </div>
                  <button type="button" aria-label="Foto siguiente" @click="mover(lugar.id, 1, lugar.fotos.length)">→</button>
                </figcaption>
              </figure>
            </template>
            <div v-if="lugar.enlaces.length" class="album">
              <h3>{{ lugar.fotos.length ? 'Otra imagen en su publicación original' : 'Álbum de imágenes' }}</h3>
              <ul>
                <li v-for="[titulo, url] in lugar.enlaces" :key="url"><a :href="url">{{ titulo }} ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <RouterLink class="volver" to="/">← Volver a la madriguera</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.cuaderno {
  min-height: 100vh;
  padding: clamp(1rem, 4vw, 4rem);
  color: #f4dfeb;
  background: repeating-linear-gradient(90deg, #150e13 0 14px, #1e1319 14px 28px);
}
.hojas { width: min(100%, 75rem); margin-inline: auto; }
.volver, a { color: #ffbedc; text-underline-offset: .22em; text-decoration: underline; }
a:focus-visible { outline: 2px solid #ffd3e8; outline-offset: 3px; }
.cabecera {
  margin-top: 1.35rem;
  padding: clamp(1.4rem, 5vw, 4rem);
  border: 4px double #c186a6;
  text-align: center;
  background: radial-gradient(ellipse at 50% 0%, #603047, transparent 75%), #27181f;
}
.cabecera span { color: #e19dbf; }
.cabecera h1 { margin-block: .55rem 1rem; color: #ffd2e5; font: bold clamp(2.25rem, 7vw, 6.5rem)/.98 Georgia, serif; }
.cabecera p { max-width: 55ch; margin-inline: auto; line-height: 1.6; }
.indice { display: flex; justify-content: center; flex-wrap: wrap; gap: .5rem 1rem; margin: 1rem 0 2.5rem; padding: .75rem; border-block: 1px solid #8f5a76; }
.indice a { padding: .25rem; }
.lugar { margin-bottom: 2.5rem; border: 1px solid #774a65; background: #25171e; scroll-margin-top: 1rem; }
.lugar-titulo { padding: 1.25rem clamp(1rem, 4vw, 2.4rem); border-bottom: 3px double #85546f; background: #3a222e; }
.lugar-titulo > p:first-child { color: #edabcc; font-size: .86rem; }
.lugar-titulo h2 { margin-block: .25rem; color: #ffe0ee; font: bold clamp(1.75rem, 4vw, 3.5rem)/1.05 Georgia, serif; }
.subtitulo { color: #f5bdd8; font: italic 1.1rem Georgia, serif; }
.ficha { display: grid; gap: 1.5rem; padding: clamp(1rem, 4vw, 2.4rem); }
.historia { min-width: 0; }
.ficha h3 { color: #ffcade; font: bold 1.3rem Georgia, serif; }
.historia p { margin-top: .5rem; max-width: 65ch; line-height: 1.7; }
.historia p + h3 { margin-top: 1.25rem; }
.fuentes { display: flex; flex-wrap: wrap; gap: .35rem 1rem; margin-top: 1.2rem; font-size: .84rem; }
.imagenes { min-width: 0; }
.album { padding: .8rem 1rem; border: 3px double #9c6686; background: #2d1d2e; }
.camara + .album { margin-top: .75rem; }
.album ul { display: grid; gap: .65rem; margin-top: .65rem; }
@media (min-width: 800px) {
  .ficha { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .lugar:nth-of-type(even) .historia { order: 2; }
}


.camara { margin: 0; isolation: isolate; }
.pantalla {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 14rem;
  aspect-ratio: 5 / 4;
  isolation: isolate;
}
.placa { position: absolute; inset: -3% -2% -7%; }
.eco-foto, .foto-difuminada, .foto-principal {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.eco-foto {
  object-fit: cover;
  opacity: .26;
  transform: translate(-6%, 4%) rotate(-7deg);
  mask-image: radial-gradient(ellipse at 51% 54%, #000 14%, #0008 44%, transparent 72%);
}
.lugar:nth-of-type(even) .eco-foto {
  transform: translate(6%, 4%) rotate(7deg);
}
.foto-difuminada {
  mask-image: radial-gradient(ellipse 68% 66% at 48% 48%, #000 40%, #000e 58%, #0008 71%, transparent 88%);
}
.lugar:nth-of-type(even) .foto-difuminada {
  mask-image: radial-gradient(ellipse 65% 68% at 55% 54%, #000 40%, #000d 58%, #0007 73%, transparent 89%);
}
.foto-difuminada::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, #17091540, transparent 40%, #160b1455);
  pointer-events: none;
  content: '';
}
.foto-principal { object-fit: cover; filter: saturate(.72); }
.rec, .contador {
  position: absolute;
  z-index: 2;
  padding: .2rem .45rem;
  border: 1px solid #ad788d66;
  background: #14090edb;
  color: #ffe5ef;
  font: 700 .75rem monospace;
}
.rec { top: 8%; left: 3%; }
.rec i { display: inline-block; width: .5rem; height: .5rem; border-radius: 50%; background: #ff5967; box-shadow: 0 0 .45rem #ff5967; }
.contador { right: 3%; bottom: 6%; }
.sin-foto { padding: 3rem 2rem; text-align: center; }
.controles { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: .6rem; padding: .6rem; border-top: 1px solid #b26b8b; text-align: center; background: #3e242f; }
.controles strong, .controles small { display: block; overflow-wrap: anywhere; }
.controles small { margin-top: .2rem; color: #f0bdd3; }
.controles button { min-width: 2.5rem; min-height: 2.5rem; border: 1px solid #dc94b2; border-radius: .2rem; background: #26141d; color: #ffdeec; cursor: pointer; }
.controles button:hover { background: #663449; }
.controles button:focus-visible { outline: 2px solid #ffdeec; outline-offset: 2px; }

.aparicion-miru {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: .3rem;
  margin-top: 1.1rem;
}

.aparicion-miru.miru-izquierda { flex-direction: row-reverse; }

.aparicion-miru img {
  width: clamp(5.75rem, 14vw, 10rem);
  flex: 0 0 auto;
  animation: miru-asoma .4s ease-out both;
}

.historia .comentario-miru {
  position: relative;
  min-width: 0;
  max-width: 25ch;
  margin: .9rem 0 0;
  padding: .55rem .7rem;
  border: 1px solid #be7e9f;
  border-radius: .7rem;
  background: #452638;
  color: #ffe5f0;
  font-size: .9rem;
  line-height: 1.45;
}

.comentario-miru strong { display: block; color: #ffb7d7; }

.comentario-miru::after {
  position: absolute;
  top: .85rem;
  right: -.33rem;
  width: .6rem;
  height: .6rem;
  border-top: 1px solid #be7e9f;
  border-right: 1px solid #be7e9f;
  background: #452638;
  transform: rotate(45deg);
  content: '';
}

.miru-izquierda .comentario-miru::after {
  right: auto;
  left: -.33rem;
  transform: rotate(225deg);
}

@keyframes miru-asoma {
  from { opacity: 0; transform: translateY(.8rem); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .aparicion-miru img { animation: none; }
}

.cuaderno {
  background:
    radial-gradient(ellipse at 50% 3%, #391925 0, transparent 26rem),
    repeating-linear-gradient(105deg, #f1a7bb08 0 1px, transparent 1px 7px),
    #100b0f;
}
.cabecera {
  border-color: #ad768c;
  box-shadow: inset 0 0 0 5px #150b11, 0 0 0 4px #291521;
  background: radial-gradient(ellipse at 50% 0%, #4a2332, transparent 72%), #170e14;
}
.cabecera h1 { letter-spacing: -.055em; text-shadow: 0 4px 1px #110911; }
.lugar {
  position: relative;
  margin-bottom: clamp(2.5rem, 6vw, 5rem);
  border: 0;
  border-block: 1px solid #85516a;
  background: radial-gradient(ellipse at 65% 20%, #27141e, transparent 68%), #150d13;
}
.lugar-titulo {
  border-bottom: 1px solid #7f4b63;
  background: linear-gradient(100deg, #3d1e2b, #1b1017 72%);
}
.lugar-titulo h2 { text-wrap: balance; }
.lugar-titulo .subtitulo { color: #e3a8bd; }
.ficha h3 { color: #f3becf; }
.historia p { color: #e5cfd8; }
.historia > p:first-of-type::first-letter {
  color: #efb7cb;
  font: bold 1.55em/.8 Georgia, serif;
}
.controles {
  margin-top: .45rem;
  border: 1px solid #9a657d;
  background: #26151d;
}
.album { background: #20131b; }
@media (min-width: 800px) {
  .ficha { align-items: start; gap: clamp(1.25rem, 3vw, 3rem); }
  .imagenes { padding-top: .6rem; }
}
@media (max-width: 450px) {
  .pantalla { min-height: 11rem; }
  .rec { left: 0; }
}

.cabecera {
  position: relative;
  isolation: isolate;
  border: 0;
  border-block: 1px solid #74495d;
  box-shadow: none;
  background: radial-gradient(ellipse at 64% 48%, #3d1e2b 0, transparent 72%);
}
.lugar {
  border-block: 0;
  border-bottom: 1px solid #704355;
  background: radial-gradient(ellipse at 55% 38%, #2b1520, transparent 72%);
}
.lugar-titulo {
  border: 0;
  background: none;
}
.controles {
  position: relative;
  border: 0;
  background: none;
}
.controles button {
  border-radius: 50%;
}
.espectro-movil {
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 46%;
  width: clamp(7rem, 18vw, 18rem);
  max-height: 55vh;
  object-fit: contain;
  pointer-events: none;
  opacity: var(--espectro-opacidad, 0);
  transform: translate(calc(-50% + var(--espectro-x, 35vw)), calc(-50% + var(--espectro-y, 0vh)))
    rotate(var(--espectro-giro, 0deg));
  transform-origin: 50% 60%;
  mask-image: linear-gradient(#000 60%, transparent 100%);
}

@media (prefers-reduced-motion: reduce) {
  .espectro-movil {
    transform: translate(calc(-50% + 32vw), -50%);
    opacity: calc(var(--espectro-opacidad, 0) * .55);
  }
}
@media (max-width: 450px) {
  .placa { inset-inline: 0; }
}
</style>
