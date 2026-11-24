
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const miruAsustada = `${import.meta.env.BASE_URL}Miru/miru-asustada.png`
</script>

<template>
  <details class="mt-5 border-t border-pink-300/30 pt-4">
    <summary
      class="cursor-pointer rounded-sm font-semibold text-pink-300 hover:text-pink-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
    >
      Leer la entrada
    </summary>

    <div class="mt-4 space-y-4 leading-relaxed text-rose-100/90">
      <p class="text-sm italic text-pink-300">Un relato de Miru</p>

      <p>
        Empujé una puerta que ponía «Salida». Al otro lado había un pasillo
        amarillo y una luz que zumbaba. Cerré la puerta y, cuando volví a
        abrirla, el cartel ya estaba en el otro lado.
      </p>

      <p>
        Para saber si estaba dando vueltas, dejé mi lazo en el suelo.
        En el siguiente pasillo encontré dos.
      </p>

      <figure class="rounded-xl border border-pink-300/30 bg-black/25 p-4">
        <img
          :src="miruAsustada"
          alt="Miru asustada con las patitas junto a la boca"
          class="mx-auto w-28"
          loading="lazy"
        />
        <figcaption class="mt-3 text-center text-sm italic text-pink-200">
          «Si encuentras mi lazo, no te agaches a recogerlo».
        </figcaption>
      </figure>
      <RouterLink
  to="/backrooms"
  class="inline-block rounded border border-pink-300/50 px-4 py-2 font-semibold text-pink-200 hover:bg-pink-300/10"
>
  Entrar en Los Backrooms <span aria-hidden="true">→</span>
</RouterLink>
    </div>
  </details>
</template>