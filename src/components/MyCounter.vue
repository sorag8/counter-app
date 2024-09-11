<template>
  <h2>Contador App</h2>
  <div>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contadorCuadrado }}</h3>
    <div>
      <button @click="contador--">-1</button>
      <button @click="contador++">+1</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

interface Props {
  valor: number;
}

const props = defineProps<Props>();

const { contador, contadorCuadrado } = useCounter(props.valor);
</script>
