
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