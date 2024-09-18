import { useCounter } from "@/composables/useCounter";


describe('useCounter', () => {
    
    test('initializes counter with provided default values', () => {
        const { contador, contadorCuadrado } = useCounter();

        expect( contador.value ).toBe(5);
        expect( contadorCuadrado.value ).toBe(25);
    });

    test('initializes counter with provide initial value', () => {
        const initialValue = 10;
        const { contador, contadorCuadrado } = useCounter(initialValue);

        expect( contador.value ).toBe(initialValue);
        expect( contadorCuadrado.value ).toBe(initialValue * initialValue);
    });

    test('increment counter correctly', () => {
        const initialValue = 2;
        const { contador, contadorCuadrado } = useCounter(initialValue);

        contador.value++;

        expect(contador.value).toBe(initialValue + 1);
        expect( contadorCuadrado.value ).toBe((initialValue +1 ) * (initialValue +1 ));
    });

    test('decrement counter correctly', () => {
        const initialValue = 2;
        const { contador, contadorCuadrado } = useCounter(initialValue);

        contador.value--;

        expect(contador.value).toBe(initialValue - 1);
        expect( contadorCuadrado.value ).toBe((initialValue - 1) * (initialValue - 1 ));
    });

});