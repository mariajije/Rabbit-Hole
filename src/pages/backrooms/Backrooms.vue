<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const niveles = [
  {
    "numero": 0,
    "titulo": "Las salas amarillas",
    "alt": "Habitaciones amarillas bajo luces fluorescentes",
    "texto": "La foto que dio pie a la leyenda muestra un local en obras en Wisconsin. En la ficción, la moqueta y el papel amarillo se repiten hasta que cada esquina parece llevarte al mismo sitio.",
    "imagen": "https://backrooms-wiki.wikidot.com/local--files/level-0/OGLevel0.jpg",
    "autor": "Bob Mazza",
    "licencia": "CC0 1.0",
    "urlLicencia": "https://creativecommons.org/publicdomain/zero/1.0/",
    "color": "#efd783"
  },
  {
    "numero": 2,
    "titulo": "Los túneles de servicio",
    "alt": "Pasadizo estrecho junto a tuberías industriales",
    "texto": "Las tuberías se comen el espacio de los pasillos. Puedes oír el ruido de la maquinaria antes de descubrir si hay sitio para pasar.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-2/2piping.jpg",
    "autor": "Alan Light",
    "licencia": "CC BY 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by/2.0/",
    "color": "#e4ad94"
  },
  {
    "numero": 4,
    "titulo": "La oficina abandonada",
    "alt": "Interior de una oficina vacía con ventanas",
    "texto": "Una oficina casi desamueblada que algunos viajeros usan para descansar y buscar suministros. En esta versión de la leyenda, una ventana que deja pasar la luz puede ser una trampa.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-4/Level-4-new",
    "autor": "Ged Carrol",
    "licencia": "CC BY 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by/2.0/",
    "color": "#c9b7e6"
  },
  {
    "numero": 5,
    "titulo": "El hotel del terror",
    "alt": "Interior ornamentado de un hotel",
    "texto": "Un hotel de otra época, con salones decorados y pasillos que parecen seguir abiertos mucho después de que se fueran los huéspedes.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-5/Level-5-1-cc.png",
    "autor": "Steam Pipe Trunk Distribution Venue",
    "licencia": "CC BY 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by/2.0/",
    "color": "#e8b584"
  },
  {
    "numero": 9,
    "titulo": "Las afueras de noche",
    "alt": "Calle residencial en penumbra",
    "texto": "Casas, calles y farolas bajo una noche que parece no terminar. Cada manzana se parece a la anterior, como si todo el barrio se hubiera quedado dormido a la vez.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-9/Level-9-1-cc.jpg",
    "autor": "surtr",
    "licencia": "CC BY-SA 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by-sa/2.0/",
    "color": "#a8b9ea"
  },
  {
    "numero": 11,
    "titulo": "La ciudad que nunca duerme",
    "alt": "Vista de un entorno urbano",
    "texto": "Una ciudad enorme que se extiende entre edificios, calles y barrios de distintas épocas. Da la impresión de que siempre habrá otra manzana detrás de la siguiente.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-11/11transition.jpg",
    "autor": "Daviddje",
    "licencia": "CC BY 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by/2.0/",
    "color": "#c3b1e8"
  },
  {
    "numero": 37,
    "titulo": "Las piscinas vacías",
    "alt": "Piscinas de azulejo claro y agua turquesa",
    "texto": "Piscinas conectadas, pilares en mitad del agua y escaleras que se hunden. Todo parece tranquilo hasta que el eco te hace dudar de si has oído tus propios pasos.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-37/Poolrooms-1.jpg",
    "autor": "u/AnarkyMusic",
    "licencia": "CC BY-SA 4.0",
    "urlLicencia": "https://creativecommons.org/licenses/by-sa/4.0/",
    "color": "#80cdc9"
  },
  {
    "numero": 48,
    "titulo": "La playa del atardecer",
    "alt": "Playa y horizonte al atardecer",
    "texto": "Una playa de arena que se pierde junto a un océano templado. El sol se queda suspendido en el horizonte. Puedes esperar a que anochezca, pero aquí el atardecer no termina.",
    "imagen": "https://live.staticflickr.com/5503/12160614435_4a223e48a8_b.jpg",
    "autor": "Gary J. Wood",
    "licencia": "CC BY-SA 2.0",
    "urlLicencia": "https://creativecommons.org/licenses/by-sa/2.0/",
    "color": "#f6a58b"
  },
  {
    "numero": 188,
    "titulo": "El patio de las ventanas",
    "alt": "Patio interior rodeado de ventanas",
    "texto": "Un patio cerrado por filas de ventanas idénticas. En el relato de la wiki, algunas son entidades. Desde abajo, solo ves cristales y luces que se encienden.",
    "imagen": "https://backrooms-wiki.wdfiles.com/local--files/level-188/courtyardOriginal.jpg",
    "autor": "dominik johann",
    "licencia": "CC BY-SA 3.0",
    "urlLicencia": "https://creativecommons.org/licenses/by-sa/3.0/",
    "color": "#bdc9a6"
  }
]

const indiceActivo = ref(0)
const nivel = computed(() => niveles[indiceActivo.value] ?? niveles[0]!)

const comentariosMiru: Partial<Record<number, { pose: string; comentario: string; lado: 'derecha' | 'izquierda' }>> = {
  0: { pose: 'preguntona', comentario: '¿Y si la salida se parece tanto a las otras puertas que ya hemos pasado de largo?', lado: 'derecha' },
  2: { pose: 'malita', comentario: 'Entre el calor y el ruido de las tuberías, necesito sentarme un segundo.', lado: 'izquierda' },
  5: { pose: 'no', comentario: '¿Has oído el timbre de recepción? Yo no he tocado nada.', lado: 'derecha' },
  37: { pose: 'dormida', comentario: 'El eco del agua me está dando sueño. Si me duermo, no me dejes aquí.', lado: 'derecha' },
  188: { pose: 'llorando', comentario: 'He contado las ventanas dos veces. Ahora hay una más.', lado: 'izquierda' },
}

const aparicion = computed(() => comentariosMiru[nivel.value.numero])
const carpetaMiru = import.meta.env.BASE_URL + 'Miru/'

// Límites visibles de cada PNG, sin contar los márgenes transparentes.
const encuadres: Record<string, { izquierda: number; arriba: number; ancho: number; alto: number }> = {
  preguntona: { izquierda: .22, arriba: .20, ancho: .56, alto: .59 },
  malita: { izquierda: .20, arriba: .17, ancho: .60, alto: .61 },
  no: { izquierda: .17, arriba: .20, ancho: .65, alto: .60 },
  dormida: { izquierda: .20, arriba: .22, ancho: .62, alto: .58 },
  llorando: { izquierda: .15, arriba: .19, ancho: .70, alto: .62 },
}

const estiloRetrato = computed(() => {
  const encuadre = encuadres[aparicion.value?.pose ?? '']
  if (!encuadre) return {}

  return {
    '--relacion-retrato': encuadre.ancho / encuadre.alto,
    '--ancho-png': 100 / encuadre.ancho + '%',
    '--inicio-png': -100 * encuadre.izquierda / encuadre.ancho + '%',
    '--arriba-png': -100 * encuadre.arriba / encuadre.alto + '%',
  }
})
</script>

<template>
  <main class="mapa min-h-screen px-4 py-8 text-rose-50 sm:px-8 sm:py-12">
    <div class="mx-auto max-w-6xl">
      <RouterLink to="/" class="text-pink-300 underline underline-offset-4">
        ← Volver a la portada
      </RouterLink>
      <header class="cabecera mt-5 px-5 py-8 text-center">
        <div class="text-2xl text-pink-300" aria-hidden="true">❦ ── ✦ ── ❦</div>
        <h1 class="mt-2 font-serif text-5xl font-bold text-pink-200 sm:text-7xl">Los Backrooms</h1>
        <p class="mx-auto mt-4 max-w-xl text-rose-100">
          Nueve rincones de un laberinto imaginado en internet. Elige una puerta para ver qué hay al otro lado.
        </p>
      </header>

      <section class="mt-7 grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)]" aria-label="Explorador de niveles">
        <div role="group" aria-label="Elegir un nivel" class="puertas grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
          <button
            v-for="(item, indice) in niveles"
            :key="item.numero"
            type="button"
            :aria-pressed="indice === indiceActivo"
            aria-controls="nivel-activo"
            class="puerta px-3 py-3 text-left"
            @click="indiceActivo = indice"
          >
            <span class="block text-xs font-semibold text-pink-300">Nivel {{ item.numero }}</span>
            <span class="block font-serif text-lg">{{ item.titulo }}</span>
          </button>
        </div>

        <article id="nivel-activo" class="panel min-w-0" :style="{ '--luz': nivel.color }">
          <figure class="visor relative">
            <img :key="nivel.imagen" :src="nivel.imagen" :alt="nivel.alt" class="block aspect-video w-full object-cover" />
            <span class="numero" aria-hidden="true">{{ nivel.numero }}</span>
          </figure>
          <div class="p-5 sm:p-7">
            <h2 class="font-serif text-3xl font-bold sm:text-4xl" aria-live="polite">
              {{ nivel.titulo }}
            </h2>
            <p lang="es" class="texto-nivel mt-3 max-w-2xl leading-relaxed text-rose-100">{{ nivel.texto }}</p>
            <p class="mt-5 text-sm">
              <a :href="'https://backrooms-wiki.wikidot.com/level-' + nivel.numero" class="text-pink-300 underline underline-offset-4">
                Leer el nivel {{ nivel.numero }} en la wiki →
              </a>
            </p>
            <p class="mt-3 text-xs text-rose-200">
              <a :href="nivel.imagen" class="underline">Imagen de {{ nivel.autor }}</a>
              · <a :href="nivel.urlLicencia" class="underline">{{ nivel.licencia }}</a>
              · encuadre 16:9
            </p>
          </div>
          <aside
            v-if="aparicion"
            :key="nivel.numero"
            class="aparicion-miru"
            :class="{ 'lado-izquierdo': aparicion.lado === 'izquierda' }"
            aria-label="Comentario de Miru"
          >
            <p class="bocadillo"><strong>Miru</strong> {{ aparicion.comentario }}</p>
            <div class="retrato-miru" :style="estiloRetrato">
              <img :src="carpetaMiru + 'miru-' + aparicion.pose + '.png'" alt="" />
            </div>
          </aside>
        </article>
      </section>
    </div>
  </main>
</template>

<style scoped>
.mapa {
  background: radial-gradient(ellipse at 50% 0%, #481d38, transparent 45%), #110a11;
}
.cabecera {
  border: 4px double #b56e94;
  box-shadow: inset 0 0 0 5px #170a15, 0 0 0 4px #37172c;
  background: repeating-linear-gradient(130deg, #f8a5cc08 0 1px, transparent 1px 8px), #231020;
}
.puertas { align-content: start; }
@media (min-width: 1024px) {
  .puertas { align-content: stretch; grid-auto-rows: minmax(3.75rem, 1fr); }
}
.puerta {
  border: 3px double #965f80;
  background: #241120;
  color: #ffe5f3;
}
.puerta:hover, .puerta[aria-pressed='true'] {
  border-color: #f4a8cc;
  background: #4a203b;
}
.puerta:focus-visible {
  outline: 2px solid #ffe5f3;
  outline-offset: 2px;
}
.panel {
  border: 4px double var(--luz);
  background: #21101e;
}
.panel h2 { color: var(--luz); }
.visor { background: #100a10; }
.visor::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 36px #130912a0;
  content: '';
}
.numero {
  position: absolute;
  z-index: 1;
  right: .75rem;
  bottom: .75rem;
  border: 1px solid var(--luz);
  background: #150b16;
  padding: .25rem .85rem;
  color: var(--luz);
  font: bold clamp(1.35rem, 4vw, 2.5rem) Georgia, serif;
}

.aparicion-miru {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: .75rem;
  overflow: hidden;
  padding: 0 clamp(.7rem, 4vw, 2rem) .75rem;
}

.aparicion-miru.lado-izquierdo {
  flex-direction: row-reverse;
}

.retrato-miru {
  position: relative;
  width: clamp(3.4rem, 9.2vw, 5rem);
  aspect-ratio: var(--relacion-retrato, 1);
  flex: 0 0 auto;
  animation: asomarse .38s ease-out both;
}

.retrato-miru img {
  position: absolute;
  top: var(--arriba-png, 0%);
  left: var(--inicio-png, 0%);
  width: var(--ancho-png, 100%);
  max-width: none;
}

@media (min-width: 1024px) {
  .retrato-miru { width: clamp(5.45rem, 7.85vw, 7.65rem); }
}

.bocadillo {
  position: relative;
  max-width: 30ch;
  min-width: 0;
  margin: clamp(.15rem, .6vw, .65rem) 0 .25rem;
  border: 1px solid #ba7b9e;
  border-radius: .9rem;
  padding: .65rem .85rem;
  color: #ffe7f4;
  background: #3b2034;
  font-size: .95rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.bocadillo strong {
  display: block;
  margin-bottom: .2rem;
  color: #ffc0dc;
}

.bocadillo::after {
  position: absolute;
  right: -.3rem;
  top: .85rem;
  width: .55rem;
  height: .55rem;
  border-top: 1px solid #ba7b9e;
  border-right: 1px solid #ba7b9e;
  background: #3b2034;
  transform: rotate(45deg);
  content: '';
}

.lado-izquierdo .bocadillo::after {
  right: auto;
  left: -.3rem;
  transform: rotate(225deg);
}

@keyframes asomarse {
  from { opacity: 0; transform: translateY(1.4rem); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .retrato-miru { animation: none; }
}

.texto-nivel {
  text-align: justify;
  hyphens: auto;
}
</style>