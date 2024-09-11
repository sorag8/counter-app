import { computed, ref } from 'vue';

export const useCounter = (valorInicial: number = 1) => {
  const contador = ref(valorInicial);
  const contadorCuadrado = computed(() => contador.value * contador.value);

  return {
    contador,
    contadorCuadrado,
  };
};
