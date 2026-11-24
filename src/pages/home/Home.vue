<script setup lang="ts">
const miruSaludando = `${import.meta.env.BASE_URL}Miru/miru-saludando.png`

const entradas = [
  {
    titulo: 'Los Backrooms',
    categoria: 'Cultura de internet',
    descripcion:
      'Una leyenda de internet imagina un laberinto de habitaciones vacías, paredes amarillas y luces fluorescentes que nunca dejan de zumbar.',
    simbolo: '◇',
  },
  {
    titulo: 'Lugares que dan mal rollo',
    categoria: 'Espacios liminales',
    descripcion:
      'Un pasillo de hotel de madrugada, una piscina vacía o un centro comercial cerrado. ¿Por qué estos sitios se sienten tan raros cuando no hay nadie?',
    simbolo: '☾',
  },
  {
    titulo: 'El foro de las 3:17',
    categoria: 'Relato de ficción',
    descripcion:
      'Miru encuentra un foro abandonado. Todos los hilos llevan años cerrados, salvo uno que cada madrugada publica un mensaje con el nombre de la última persona que lo leyó.',
    simbolo: '✦',
  },
]
</script>

<template>
  <main class="rabbit-hole min-h-screen px-4 py-8 text-rose-50 sm:px-8 sm:py-12">
    <section class="portada relative mx-auto max-w-5xl px-6 py-12 text-center sm:px-12 sm:py-16">
      <span class="esquina esquina-superior-izquierda" aria-hidden="true">❦</span>
      <span class="esquina esquina-superior-derecha" aria-hidden="true">❦</span>
      <span class="esquina esquina-inferior-izquierda" aria-hidden="true">❦</span>
      <span class="esquina esquina-inferior-derecha" aria-hidden="true">❦</span>

      <div class="ornamento mx-auto mb-5 max-w-52" aria-hidden="true">
        <span>✧ ❦ ✧</span>
      </div>

      <h1 class="titulo text-5xl font-bold sm:text-7xl lg:text-8xl">
        Rabbit Hole
      </h1>

      <p class="mx-auto mt-5 max-w-md text-base text-rose-100/85 sm:text-lg">
        Sigue al conejo. Internet se pone raro a partir de aquí.
      </p>

      <div class="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <div class="retrato grid h-40 w-40 shrink-0 place-items-center sm:h-48 sm:w-48">
          <img
            :src="miruSaludando"
            alt="Miru saludando con una patita levantada"
            class="w-28 sm:w-36"
          />
        </div>

        <aside class="nota max-w-sm px-5 py-4 text-left">
          <h2 class="titulo text-2xl font-bold">Miru</h2>
          <p class="mt-2 leading-relaxed text-rose-100/90">
            Hola, soy Miru. Colecciono cosas raras de internet.
            ¿Por cuál quieres empezar?
          </p>
        </aside>
      </div>

      <a class="enlace-archivo mt-9 inline-block px-5 py-2.5" href="#archivo">
        Explorar el archivo <span aria-hidden="true">↓</span>
      </a>
    </section>

    <section id="archivo" class="mx-auto mt-14 max-w-5xl scroll-mt-6">
      <div class="ornamento mx-auto max-w-md">
        <span aria-hidden="true">✦</span>
        <h2 class="titulo text-center text-4xl font-bold">El archivo</h2>
        <span aria-hidden="true">✦</span>
      </div>

      <div class="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="entrada in entradas"
          :key="entrada.titulo"
          class="ficha p-6"
        >
          <span class="simbolo" aria-hidden="true">{{ entrada.simbolo }}</span>
          <p class="mt-3 text-sm font-semibold text-pink-300">
            {{ entrada.categoria }}
          </p>
          <h3 class="titulo mt-2 text-2xl font-bold">
            {{ entrada.titulo }}
          </h3>
          <p class="mt-3 leading-relaxed text-rose-100/80">
            {{ entrada.descripcion }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.rabbit-hole {
  background:
    radial-gradient(ellipse at 50% 0%, #391429 0%, transparent 46%),
    #100a10;
}

.portada {
  border: 4px double #a45c80;
  background:
    repeating-linear-gradient(
      125deg,
      #f4a5ca08 0 1px,
      transparent 1px 9px
    ),
    radial-gradient(ellipse at 50% 55%, #3b172d, #160d17 76%);
  box-shadow:
    0 0 0 5px #281222,
    0 0 0 6px #6f3654,
    0 14px 44px #0008;
}

.titulo {
  font-family: Georgia, 'Times New Roman', serif;
  color: #f8b6d5;
}

h1.titulo {
  letter-spacing: -0.04em;
  text-shadow: 2px 3px 0 #742e53;
}

.esquina {
  position: absolute;
  color: #e89aba;
  font-size: clamp(1.75rem, 5vw, 3rem);
  line-height: 1;
  pointer-events: none;
}

.esquina-superior-izquierda {
  top: 0.4rem;
  left: 0.55rem;
}

.esquina-superior-derecha {
  top: 0.4rem;
  right: 0.55rem;
  transform: scaleX(-1);
}

.esquina-inferior-izquierda {
  bottom: 0.4rem;
  left: 0.55rem;
  transform: scaleY(-1);
}

.esquina-inferior-derecha {
  right: 0.55rem;
  bottom: 0.4rem;
  transform: rotate(180deg);
}

.ornamento {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #e89aba;
}

.ornamento::before,
.ornamento::after {
  flex: 1;
  height: 1px;
  background: #a45c80;
  content: '';
}

.retrato {
  border: 4px double #d885ad;
  border-radius: 50% 50% 42% 42%;
  background: radial-gradient(ellipse, #662c4c, #271322 76%);
  box-shadow: 0 0 0 5px #e892bc20;
}

.nota {
  border-left: 2px solid #cc729d;
  background: #1b0e18;
}

.enlace-archivo {
  border: 1px solid #d885ad;
  background: #3b1830;
  color: #ffe1ef;
  font-weight: 600;
}

.enlace-archivo:hover {
  background: #592443;
}

.enlace-archivo:focus-visible {
  outline: 2px solid #ffe1ef;
  outline-offset: 4px;
}

.ficha {
  border: 4px double #8d4d6f;
  background: linear-gradient(155deg, #311626, #1a101a 70%);
}

.simbolo {
  display: block;
  border-bottom: 1px solid #8d4d6f;
  padding-bottom: 0.55rem;
  color: #e89aba;
  font-size: 1.4rem;
}
</style>

<style scoped src="./marco-botanico.css"></style>