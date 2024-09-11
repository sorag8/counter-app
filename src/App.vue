<template>
  <h1 class="text-3xl p-7 text-center bg-indigo-950 text-white">Contador</h1>
  <MyCounter :valor="2" />
  <MyCounterScript :valor="3" />
  <MyCounterScript2 :valor="5" />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
