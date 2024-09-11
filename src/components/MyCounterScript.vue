<template>
  <h2 class="titulo">Counter Script App</h2>
  <div class="areaContador">
    <h3 class="texto">
      Contador: <span class="valor">{{ contador }}</span>
    </h3>
    <h3 class="texto">
      Cuadrado: <span class="valor">{{ contadorCuadrado }}</span>
    </h3>
    <div>
      <button class="btn mr-1" @click="contador--">-1</button>
      <button class="btn ml-1" @click="contador++">+1</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    valor: { type: Number, required: true },
  },

  setup(props) {
    const { contador, contadorCuadrado } = useCounter(props.valor);

    return {
      contador,
      contadorCuadrado,
    };
  },
});
</script>

<style scoped>
.titulo {
  @apply text-2xl p-5 bg-blue-900 text-slate-200 text-center mt-5;
}
.areaContador {
  @apply p-5 bg-slate-200 text-center;
}
.texto {
  @apply text-xl text-gray-800 mb-2;
}
.valor {
  @apply text-xl text-red-800;
}
.btn {
  @apply px-5 py-2 bg-gray-700 text-slate-300 hover:bg-gray-900 hover:text-white;
}
</style>
