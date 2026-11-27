
<script setup lang="ts">
import { RouterLink } from 'vue-router'

const miruPreguntona = import.meta.env.BASE_URL + 'Miru/miru-preguntona.png'
</script>

<template>
  <details class="mt-5 border-t border-pink-300/30 pt-4">
    <summary
      class="cursor-pointer rounded-sm font-semibold text-pink-300 hover:text-pink-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
    >
      Leer la entrada
    </summary>

    <div class="mt-4 leading-relaxed text-rose-100/90">
      <div class="relato space-y-4" lang="es">
        <p class="text-sm italic text-pink-300">Una nota de Miru</p>
        <p>
          Anoche encendí la radio para tener algo de compañía. Encontré un zumbido y dejé la mano en el dial. Cuando por fin oí una voz, descubrí que llevaba un buen rato esperando que alguien dijera algo.
        </p>
        <p>
          Hoy he guardado la grabación con las otras. Si quieres escucharla, empieza por el principio. En el silencio también pasan cosas.
        </p>
      </div>

      <div class="pie-relato">
        <aside class="aviso" aria-label="Aviso de Miru">
          <span>«Si la voz se corta, deja que termine el silencio».</span>

        </aside>
      </div>

      <div class="enlace-relato mt-4">
        <RouterLink
          to="/senales-perdidas"
          class="inline-block rounded border border-pink-300/50 px-4 py-2 text-center font-semibold text-pink-200 hover:bg-pink-300/10"
        >
          Abrir Señales perdidas <span aria-hidden="true">→</span>
        </RouterLink>
        <img class="miru-junto-al-boton" :src="miruPreguntona" alt="Miru intrigada" />
      </div>
    </div>
  </details>
</template>

<style scoped>
.relato {
  text-align: justify;
  hyphens: auto;
}

.pie-relato {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.55rem;
  padding: 0 .3rem .35rem;
  border-bottom: 1px solid #ad6e9466;
}

.aviso {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: .3rem;
  animation: miru-asoma .35s ease-out both;
}

.aviso span {
  max-width: 20ch;
  padding: .5rem .65rem;
  border: 1px solid #bc7b9e;
  border-radius: .7rem .7rem .15rem .7rem;
  background: #48283f;
  color: #ffe3f0;
  font-size: .9rem;
  line-height: 1.35;
}


.enlace-relato {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: .45rem;
}

.miru-junto-al-boton {
  position: relative;
  z-index: 2;
  pointer-events: none;
  width: clamp(4rem, 11vw, 6rem);
  flex: 0 0 auto;
  transform: translate(-.3rem, -3.15rem) rotate(7deg) scale(1.3);
  transform-origin: left center;
}

@media (min-width: 1024px) {
  .enlace-relato {
    display: grid;
    container-type: inline-size;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    min-height: 4.4rem;
  }

  .enlace-relato a {
    grid-column: 2;
    transform: translateX(calc((100% - 100cqw) / 2));
  }

  .miru-junto-al-boton {
    grid-column: 3;
    width: clamp(6.25rem, 9vw, 8.75rem);
    max-width: none;
    margin-block: -1rem;
  }
}

@keyframes miru-asoma {
  from { transform: translateY(.65rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .aviso { animation: none; }
}

.aviso span {
  position: relative;
}

.aviso span::after {
  position: absolute;
  right: -.34rem;
  bottom: .55rem;
  width: .65rem;
  height: .65rem;
  border-right: 1px solid #bc7b9e;
  border-top: 1px solid #bc7b9e;
  background: #48283f;
  transform: rotate(45deg);
  content: '';
}

@media (min-width: 1024px) {
  .pie-relato {
    position: relative;
    z-index: 1;
    padding-inline-end: clamp(3.5rem, 6.5vw, 5.75rem);
  }

  .aviso span {
  transform: translate(-2.5rem, 1rem);
  }
}

@media (min-width: 1024px) {
  .miru-junto-al-boton {
   transform: translate(-2rem, -3rem) rotate(7deg) scale(1.36);
  }
}

.relato p:not(:first-child) {
  font-family: "Segoe Print", "Bradley Hand", Georgia, serif;
  font-size: 0.92em;
  font-weight: 400;
  line-height: 1.7;
  color: #ddcbd5;
  text-align: left;
}

</style>
