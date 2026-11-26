<script setup lang="ts">
import { RouterLink } from 'vue-router'

const ilustraciones = import.meta.env.BASE_URL + 'Bestiario/'
const bestias = [
  {
    "id": "quimera",
    "nombre": "Quimera",
    "origen": "Mitología griega",
    "subtitulo": "Tres animales en un solo cuerpo",
    "texto": "En la Teogonía, Hesíodo describe una criatura con rasgos de león, cabra y serpiente que respira fuego. En la Ilíada, Belerofonte recibe la misión de matarla en Licia. La forma cambia según quién cuente el mito, pero el fuego y la mezcla de animales hacen que se reconozca enseguida.",
    "alt": "León con una cabeza de cabra sobre el lomo y una cola de serpiente",
    "fuente": "Hesíodo · Teogonía",
    "url": "https://chs.harvard.edu/primary-source/hesiod-theogony-sb/"
  },
  {
    "id": "wendigo",
    "nombre": "Wendigo",
    "origen": "Tradiciones algonquinas · versión ojibwe",
    "subtitulo": "El hambre del invierno",
    "texto": "El diccionario del pueblo ojibwe recoge wiindigoo como el nombre de un ser caníbal asociado al invierno. Los relatos varían entre comunidades. En la tradición recogida aquí, lo más inquietante es el hambre que no se sacia, una amenaza que cobra forma en medio del frío.",
    "alt": "Figura espectral y enjuta de brazos largos",
    "fuente": "Ojibwe People’s Dictionary · wiindigoo",
    "url": "https://ojibwe.lib.umn.edu/main-entry/wiindigoo-na"
  },
  {
    "id": "chupacabras",
    "nombre": "Chupacabras",
    "origen": "Puerto Rico · leyenda contemporánea",
    "subtitulo": "Algo ronda el corral",
    "texto": "En Puerto Rico, durante los años noventa, se extendieron relatos de una criatura a la que se atribuían ataques al ganado. Algunos testigos describieron un cuerpo erguido con espinas en el lomo. Cuando la historia se difundió, la criatura empezó a adquirir otras formas en distintos lugares.",
    "alt": "Criatura agazapada de piel oscura y espinas dorsales",
    "fuente": "AP Archive · reportaje de 1996",
    "url": "https://www.youtube.com/watch?v=PhDbEev8OPM"
  },
  {
    "id": "kelpie",
    "nombre": "Kelpie",
    "origen": "Folclore escocés",
    "subtitulo": "El caballo de la orilla",
    "texto": "El kelpie es un espíritu acuático que suele adoptar la forma de un caballo. Se le encuentra en historias de ríos y lagos escoceses. En algunas, espera a que alguien se suba al lomo y entonces se lanza al agua con su jinete.",
    "alt": "Caballo negro con la crin y la cola deshaciéndose en agua",
    "fuente": "Historic Environment Scotland · folclore escocés",
    "url": "https://blog.historicenvironment.scot/2018/10/supernatural-creatures-scottish-folklore/"
  },
  {
    "id": "basilisco",
    "nombre": "Basilisco",
    "origen": "Tradición clásica y medieval europea",
    "subtitulo": "La pequeña serpiente coronada",
    "texto": "Plinio lo describe como una serpiente pequeña con una marca clara en la cabeza que parece una corona. En su relato, hasta su aliento marchita lo que tiene cerca. En versiones medievales aparecen rasgos de gallo, como en esta ilustración.",
    "alt": "Criatura con cabeza de gallo y cola de serpiente",
    "fuente": "Plinio el Viejo · Historia natural, libro VIII",
    "url": "https://penelope.uchicago.edu/holland/pliny8.html"
  },
  {
    "id": "banshee",
    "nombre": "Banshee",
    "origen": "Folclore irlandés",
    "subtitulo": "El lamento que precede a la pérdida",
    "texto": "La bean sí anuncia una muerte con su llanto. En un relato recogido en Dún-dá-radharc, nadie llega a verla. Lo único que se oye es un lamento lejano que parece rodear la casa de la persona que va a morir.",
    "alt": "Figura espectral de perfil con cabello y túnica al viento",
    "fuente": "Dúchas · The Schools’ Collection",
    "url": "https://www.duchas.ie/en/cbes/4921706/4892230/5188226"
  }
]
</script>

<template>
  <main class="bestiario">
    <div class="volumen">
      <RouterLink class="regreso" to="/">← Volver a la madriguera</RouterLink>

      <header class="cabecera">
        <div aria-hidden="true" class="adorno">❦ ─────── ✦ ─────── ❦</div>
        <h1>Bestiario</h1>
        <p>
          Hay historias que empiezan con algo que nadie sabe nombrar.
          Seis criaturas de la mitología y el folclore, desde los relatos del Mediterráneo
          antiguo hasta las leyendas que circularon por Puerto Rico en los noventa.
        </p>
      </header>

      <nav class="indice" aria-label="Índice del bestiario">
        <RouterLink v-for="bestia in bestias" :key="bestia.id" :to="{ name: 'bestiario', hash: '#' + bestia.id }">
          {{ bestia.nombre }}
        </RouterLink>
      </nav>

      <article v-for="(bestia, indice) in bestias" :id="bestia.id" :key="bestia.id" class="lamina">
        <figure class="ilustracion">
          <img
            :src="ilustraciones + bestia.id + '.png'"
            :alt="bestia.alt"
            :loading="indice === 0 ? 'eager' : 'lazy'"
            decoding="async"
          />
        </figure>

        <div class="ficha">
          <span class="folio" aria-hidden="true">{{ String(indice + 1).padStart(2, '0') }}</span>
          <p class="origen">{{ bestia.origen }}</p>
          <h2>{{ bestia.nombre }}</h2>
          <p class="subtitulo">{{ bestia.subtitulo }}</p>
          <p class="texto">{{ bestia.texto }}</p>
          <a class="fuente" :href="bestia.url">{{ bestia.fuente }} ↗</a>
        </div>
      </article>

      <footer class="pie">
        <p>Ilustraciones originales inspiradas en las leyendas.</p>
        <RouterLink class="regreso" to="/">← Volver a la madriguera</RouterLink>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.bestiario {
  overflow: hidden;
  min-height: 100vh;
  padding: clamp(1rem, 4vw, 4rem);
  color: #f0d9e2;
  background:
    radial-gradient(ellipse at 50% 0, #492334 0, transparent 34rem),
    #130c12;
}
.volumen { width: min(100%, 80rem); margin-inline: auto; }
.regreso, .fuente, .indice a { color: #ffbad5; text-underline-offset: .22em; }
a:focus-visible { outline: 2px solid #ffe0ed; outline-offset: 4px; }
.cabecera { max-width: 58rem; margin: clamp(2rem, 7vw, 5rem) auto 2rem; text-align: center; }
.adorno { color: #e8a9c1; }
.cabecera h1 {
  margin-top: .35rem;
  color: #ffd6e6;
  font: bold clamp(3.4rem, 11vw, 8.5rem)/.9 Georgia, serif;
  letter-spacing: -.065em;
}
.cabecera p { max-width: 54ch; margin: 1.3rem auto 0; line-height: 1.65; }
.indice {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .55rem 1.35rem;
  padding: .8rem .45rem;
  border-block: 1px solid #8f5570;
}
.indice a { padding-block: .25rem; font-weight: 650; }
.indice a:hover, .fuente:hover { color: #fff0f6; }
.lamina {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  isolation: isolate;
  border-bottom: 1px solid #78445b;
  padding: clamp(1rem, 4vw, 3.5rem) 0;
  background: radial-gradient(ellipse at 25% 45%, #64324840, transparent 62%);
}
.lamina:nth-of-type(even) { background: radial-gradient(ellipse at 75% 45%, #64324840, transparent 62%); }
.ilustracion { margin: 0; min-width: 0; }
.ilustracion img {
  display: block;
  width: 100%;
  height: clamp(16rem, 55vw, 31rem);
  object-fit: contain;
  filter: drop-shadow(0 1rem 1rem #070507);
}
.ficha { position: relative; min-width: 0; padding: 1rem clamp(.6rem, 3vw, 2.2rem); }
.folio {
  position: absolute;
  z-index: -1;
  inset: -.5rem .25rem auto auto;
  color: #96577644;
  font: italic bold clamp(4.7rem, 10vw, 9rem)/.8 Georgia, serif;
}
.origen { color: #f0b3cc; font-size: .82rem; letter-spacing: .1em; text-transform: uppercase; }
.ficha h2 { margin-top: .32rem; color: #ffe0eb; font: bold clamp(2.25rem, 6vw, 5.6rem)/.94 Georgia, serif; letter-spacing: -.04em; }
.subtitulo { margin-top: .65rem; color: #f3adc8; font: italic clamp(1.1rem, 2.3vw, 1.55rem)/1.3 Georgia, serif; }
.texto { max-width: 58ch; margin-top: .85rem; line-height: 1.72; }
.fuente { display: inline-block; margin-top: 1rem; font-size: .86rem; text-decoration: underline; }
.pie { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .7rem; padding-top: 1.4rem; font-size: .87rem; }
@media (min-width: 800px) {
  .lamina { grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr); }
  .lamina:nth-of-type(even) { grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr); }
  .lamina:nth-of-type(even) .ilustracion { grid-column: 2; grid-row: 1; }
  .lamina:nth-of-type(even) .ficha { grid-column: 1; grid-row: 1; }
}
</style>
