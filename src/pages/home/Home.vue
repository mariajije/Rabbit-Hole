<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import BackroomsDetalle from './BackroomsDetalle.vue'
const miruSaludando = `${import.meta.env.BASE_URL}Miru/miru-saludando.png`

const entradas = [
  {
    "titulo": "Los Backrooms",
    "categoria": "Leyendas de internet",
    "descripcion": "Los Backrooms son una leyenda de terror nacida en internet. Imagina que atraviesas una pared por accidente y acabas en un laberinto de habitaciones vacías. La versión más conocida empieza entre paredes amarillas y luces fluorescentes que no dejan de zumbar. Con el tiempo, la comunidad fue inventando otros lugares dentro del laberinto y los llamó niveles."
  },
  {
    "titulo": "Lugares malditos",
    "categoria": "Lugares y leyendas",
    "descripcion": "Sitios reales con fama de estar malditos. Recorremos las historias que se cuentan sobre ellos y lo que se sabe de cada lugar."
  },
  {
    "titulo": "Foro oculto",
    "categoria": "Misterios de internet",
    "descripcion": "Foros que dejaron de actualizarse, páginas que los buscadores no indexan y leyendas de la deep web. ¿Qué queda cuando todos se desconectan?"
  },
  {
    "titulo": "Leyendas urbanas",
    "categoria": "Sucesos extraños",
    "descripcion": "Casos reales rodeados de testimonios, rumores o preguntas sin resolver. Miru busca qué se documentó y cómo cambió la historia al pasar de página en página."
  },
  {
    "titulo": "Bestiario",
    "categoria": "Ficción original",
    "descripcion": "Criaturas y personajes inventados para este archivo. La primera solo aparece en el reflejo de una pantalla apagada."
  }
]
const claveEntrada = 'rabbit-hole:entrada-abierta'
const haEntrado = ref(sessionStorage.getItem(claveEntrada) === '1')
const tituloMadriguera = ref<HTMLHeadingElement | null>(null)

async function entrar() {
  haEntrado.value = true
  sessionStorage.setItem(claveEntrada, '1')
  await nextTick()
  tituloMadriguera.value?.focus()
}

const indiceActivo = ref(0)
const entradaActiva = computed(() => entradas[indiceActivo.value] ?? entradas[0]!)
</script>

<template>
  <main class="escritorio">
    <div class="ventana">
      <header class="barra">
        <span aria-hidden="true" class="marca">❦</span>
        <h1>Rabbit Hole</h1>
        <span aria-hidden="true" class="marca">❦</span>
      </header>

      <div class="encaje" aria-hidden="true"></div>

      <section v-if="!haEntrado" class="umbral" aria-labelledby="umbral-titulo">
        <h2 id="umbral-titulo">¿Te atreves a bajar?</h2>
        <p>Miru ha encontrado cosas raras en internet. Te espera al otro lado.</p>

        <button type="button" class="boton-entrada" @click="entrar">
          <span class="portal">
            <img :src="miruSaludando" alt="" />
          </span>
          <span class="etiqueta-entrada">Entrar en la madriguera <span aria-hidden="true">↓</span></span>
        </button>
      </section>

      <section v-else class="interior" aria-label="La madriguera de Miru">
        <aside class="perfil">
          <div class="camafeo">
            <img :src="miruSaludando" alt="Miru saludando con una patita levantada" />
          </div>
          <h2>Miru</h2>
          <p>Colecciono cosas raras de internet. ¿Por dónde quieres empezar?</p>
        </aside>

        <div class="archivo">
          <h2 ref="tituloMadriguera" tabindex="-1">La <em>madriguera</em></h2>

          <div class="pestanas" role="group" aria-label="Elegir una entrada">
            <button
              v-for="(entrada, indice) in entradas"
              :key="entrada.titulo"
              type="button"
              :aria-pressed="indice === indiceActivo"
              aria-controls="entrada-activa"
              @click="indiceActivo = indice"
            >
              {{ entrada.titulo }}
            </button>
          </div>

          <article id="entrada-activa" :key="entradaActiva.titulo" class="ficha">
            <div class="ficha-contenido" :class="{ 'con-relato': entradaActiva.titulo === 'Los Backrooms' }">
              <div class="ficha-texto">
                <p class="categoria">{{ entradaActiva.categoria }}</p>
                <h3 aria-live="polite">{{ entradaActiva.titulo }}</h3>
                <p class="descripcion">{{ entradaActiva.descripcion }}</p>
              </div>

              <BackroomsDetalle
                v-if="entradaActiva.titulo === 'Los Backrooms'"
                class="detalle"
              />
            </div>
          </article>
        </div>
      </section>

      <div class="encaje final" aria-hidden="true"></div>
      <div class="remate" aria-hidden="true">❦</div>
    </div>
  </main>
</template>

<style scoped>
.escritorio {
  min-height: 100dvh;
  padding: clamp(.75rem, 2.2vw, 2rem);
  color: #ffe7f2;
  background:
    radial-gradient(ellipse at 50% 0%, #4a20389c, transparent 58%),
    repeating-linear-gradient(90deg, #100a13 0 15px, #180f1b 15px 30px);
}

.ventana {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 108rem;
  margin-inline: auto;
  overflow: hidden;
  border: 2px solid #f1b0cb;
  border-radius: 1rem;
  background: #1c111c;
  box-shadow: 0 0 0 5px #170d18, 0 0 0 6px #945274, 0 1.25rem 3rem #120912af;
}

.barra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  padding: .7rem clamp(.9rem, 4vw, 2rem);
  border-bottom: 1px solid #592d47;
  color: #ffe0ed;
  background: linear-gradient(#69405a, #3f2236 52%, #251321);
}

.barra h1 {
  font: bold clamp(2rem, 6vw, 4rem)/1 Georgia, serif;
  letter-spacing: -.05em;
  text-align: center;
  text-shadow: 0 2px #140914;
}

.marca { font-size: clamp(1.15rem, 4vw, 2rem); }
.marca:last-child { transform: scaleX(-1); }

.encaje {
  height: 1.1rem;
  background:
    radial-gradient(circle at 50% 60%, #efadca 0 1px, transparent 2px) 0 0 / 14px 11px,
    radial-gradient(ellipse at 50% 0%, transparent 0 30%, #d69ab7 32% 40%, #21111e 42% 64%, transparent 66%) 0 0 / 14px 100%,
    #170d17;
}

.encaje.final { transform: scaleY(-1); }

.interior {
  display: grid;
  flex: 1;
  gap: clamp(.75rem, 1.4vw, 1.5rem);
  padding: clamp(.75rem, 2vw, 2rem);
  background: radial-gradient(circle, #c184a22e 1px, transparent 1.5px) 0 0 / 12px 12px, #1a101c;
}

.perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px double #aa6285;
  padding: clamp(1rem, 2.75vw, 2.5rem);
  text-align: center;
  color: #f3cbdf;
  background: radial-gradient(ellipse at center, #4a243e, transparent 72%), repeating-linear-gradient(90deg, #211421 0 12px, #2b192a 12px 24px);
}

.camafeo {
  display: grid;
  place-items: center;
  width: min(100%, clamp(10rem, 18vw, 17rem));
  aspect-ratio: 1;
  margin: 0 auto;
  border: 4px double #9a506f;
  border-radius: 50%;
  background: radial-gradient(#8c4c6a, #3d2037);
}

.camafeo img { width: 76%; }
.perfil h2 { margin-top: .7rem; font: italic bold 2rem Georgia, serif; }
.perfil p { max-width: 25ch; margin-top: .7rem; font-size: 1rem; line-height: 1.5; }

.archivo { display: flex; flex-direction: column; min-width: 0; border: 1px solid #a46786; background: #120c16; }
.archivo > h2 {
  padding: .65rem 1rem;
  border-bottom: 1px solid #a46786;
  color: #ffd6e8;
  background: linear-gradient(#532d45, #2a1729);
  font: bold 1.45rem Georgia, serif;
}

.pestanas {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .25rem;
  padding: .5rem;
  background: #130b15;
}

.pestanas button {
  border: 1px solid #a76a88;
  border-radius: .4rem .4rem .1rem .1rem;
  padding: .55rem .3rem;
  color: #ffdfed;
  background: linear-gradient(#533047, #2c1929);
  font: bold .86rem/1.15 Georgia, serif;
  overflow-wrap: anywhere;
}

.pestanas button:hover { background: #663753; }
.pestanas button[aria-pressed='true'] { color: #39192b; background: linear-gradient(#fbd8e8, #e5a1bf); }
.pestanas button:focus-visible { outline: 2px solid #fff0f7; outline-offset: 1px; }

.ficha {
  flex: 1;
  min-height: 14rem;
  margin: clamp(.65rem, 1.3vw, 1.3rem);
  padding: clamp(1rem, 3vw, 2.8rem);
  border: 4px double #9e5e80;
  background: radial-gradient(ellipse at 100% 0%, #422238, transparent 62%), #1d1120;
}

.categoria { color: #f4aacb; font-size: .8rem; font-weight: 700; }
.ficha h3 { margin-top: .35rem; color: #ffd8e9; font: bold clamp(1.5rem, 4vw, 2.5rem)/1.1 Georgia, serif; }
.descripcion { margin-top: .7rem; max-width: 45ch; line-height: 1.6; }

.remate { text-align: center; color: #f8b8d4; background: linear-gradient(#4e2941, #271525); font-size: 1.25rem; }

@media (min-width: 720px) {
  .ventana { min-height: calc(100dvh - 2 * clamp(.75rem, 2.2vw, 2rem)); }
  .interior { grid-template-columns: minmax(12rem, 27%) minmax(0, 1fr); }
  .pestanas button { min-height: 4rem; }
  .pestanas { grid-template-columns: repeat(5, minmax(0, 1fr)); }
}

.barra h1,
.ficha h3 {
  text-wrap: balance;
}

.archivo > h2 em {
  color: #ffc5df;
  font-weight: inherit;
}

.archivo > h2 {
  padding: .85rem clamp(1rem, 3vw, 2rem);
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  letter-spacing: -.025em;
}

.pestanas {
  gap: .45rem;
  padding: .65rem;
}

.pestanas button {
  padding: .65rem .4rem;
  font-size: .95rem;
  text-wrap: balance;
}

.pestanas button[aria-pressed='true'] {
  box-shadow: inset 0 -3px #a64d78;
}

.ficha::before {
  display: block;
  width: min(100%, 8rem);
  height: .4rem;
  margin-bottom: .9rem;
  border-block: 1px solid #cd87aa;
  background: linear-gradient(90deg, transparent, #ae5b8588, transparent);
  content: '';
}

.categoria {
  color: #f8b7d4;
  font-size: .83rem;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.ficha h3 {
  margin-top: .55rem;
  font-size: clamp(2rem, 4vw, 3.6rem);
  letter-spacing: -.045em;
  line-height: 1;
}

.descripcion {
  max-width: 56ch;
  margin-top: 1rem;
  color: #f5dce9;
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
  line-height: 1.65;
}

.detalle {
  font-size: clamp(1.05rem, 1.4vw, 1.2rem);
}

.detalle :deep(summary) {
  width: fit-content;
  padding: .35rem .2rem;
  color: #ffd0e5;
  font-family: Georgia, serif;
  font-size: 1.25rem;
}

.detalle :deep(p),
.detalle :deep(figcaption) {
  font-size: 1em;
  line-height: 1.65;
}

.detalle :deep(a) {
  font-size: 1em;
}

.ficha-contenido {
  display: grid;
  gap: clamp(1rem, 2.5vw, 2rem);
}

.ficha-texto {
  min-width: 0;
}

.ficha .detalle {
  min-width: 0;
  margin-top: 0;
  padding: .75rem 1rem;
  border: 1px solid #9e5e80;
  background: #1b111e;
}

.detalle :deep(p) {
  max-width: 65ch;
}

@media (min-width: 1024px) {
  .con-relato {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
  }
}

.umbral {
  display: grid;
  flex: 1;
  align-content: center;
  justify-items: center;
  gap: .85rem;
  padding: clamp(1.5rem, 4vw, 3rem) 1rem;
  text-align: center;
  background:
    radial-gradient(ellipse at 50% 60%, #492239, transparent 58%),
    repeating-linear-gradient(90deg, #180f1a 0 14px, #201223 14px 28px);
}

.umbral h2 {
  color: #ffd0e5;
  font: bold clamp(2rem, 5vw, 4.5rem)/1 Georgia, serif;
  text-wrap: balance;
}

.umbral p { max-width: 36ch; color: #f1cada; }

.boton-entrada {
  display: grid;
  justify-items: center;
  gap: .85rem;
  margin-top: .35rem;
  border-radius: .5rem;
  padding: .35rem;
  color: #ffe3ef;
  cursor: pointer;
}

.portal {
  display: grid;
  place-items: center;
  width: clamp(9rem, 25vh, 15rem);
  aspect-ratio: 5 / 6;
  border: 5px double #d98bb2;
  border-radius: 50% 50% 12% 12%;
  background: radial-gradient(ellipse at 50% 60%, #71425c, #250f23 75%);
  box-shadow: 0 0 0 4px #2a1428, 0 0 0 5px #9e6085;
}

.portal img { width: 74%; }

.etiqueta-entrada {
  border: 1px solid #d88bb1;
  border-radius: .3rem;
  padding: .65rem 1rem;
  color: #301426;
  background: linear-gradient(#fad4e5, #d890b2);
  font-weight: 700;
}

.boton-entrada:hover .portal { border-color: #ffcee5; }
.boton-entrada:hover .etiqueta-entrada { background: #ffe0ef; }
.boton-entrada:focus-visible { outline: 2px solid #ffe0ef; outline-offset: 4px; }
</style>
