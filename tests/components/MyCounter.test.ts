
import { mount } from '@vue/test-utils'
import MyCounter from "@/components/MyCounter.vue"


describe( '<MyCounter />', () => {
    test('should match snapshot', () => {
        const wrapper = mount(MyCounter, {
            props:{
                valor: 5,
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('renders the counter value correctly', () => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props:{
                valor: value,
            }
        });
        // expect(wrapper.find('h3').text()).toContain(`Contador: ${value}`);
        // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Cuadrado: ${value * value}`);
        // console.log(wrapper.find('h3').text());
        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        expect(counterLabel.text()).toContain(`Contador: ${value}`);
        expect(squareLabel.text()).toContain(`Cuadrado: ${value * value}`);
    });

    test('decrement the counter when -1 button is clicked', async () => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                valor: value,
            }
        });

        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        const btnDecrement = wrapper.find('button');
        // console.log(btnDecrement.html());
        await btnDecrement.trigger('click');

        expect(counterLabel.text()).toContain(`Contador: ${value -1}`);
        expect(squareLabel.text()).toContain(`Cuadrado: ${(value - 1) * (value - 1)}`);

    });

    test('incement the counter when +1 button is clicked twice', async () => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                valor: value,
            }
        });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        // console.log(wrapper.find('[data-testid="increment-button"]').html());
        const btnIncrement = wrapper.find('[data-testid="increment-button"]');
      
        await btnIncrement.trigger('click');
        await btnIncrement.trigger('click');
        
        expect(counterLabel.text()).toContain(`Contador: ${value + 2}`);
        expect(squareLabel.text()).toContain(`Cuadrado: ${(value + 2) * (value + 2)}`);
    });

    test('incement the counter when +1 button is clicked twice 2', async () => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                valor: value,
            }
        });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');
        
        const [, btnIncrement] = wrapper.findAll('button');

        // console.log(btnIncrement.html());
      
        await btnIncrement.trigger('click');
        await btnIncrement.trigger('click');
        
        expect(counterLabel.text()).toContain(`Contador: ${value + 2}`);
        expect(squareLabel.text()).toContain(`Cuadrado: ${(value + 2) * (value + 2)}`);
    });
});