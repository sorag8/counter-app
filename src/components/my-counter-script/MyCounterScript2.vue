<template>
  <h2 class="titulo">Counter Script2 App</h2>
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

<script lang="ts" src="./MyCounterScript2.ts">
</script>

<style scoped src="./MyCounterScript2.css">

</style>
