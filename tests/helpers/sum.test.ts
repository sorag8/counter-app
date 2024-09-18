// sum.test.js
import { describe, expect, test } from 'vitest'
import { addArray, sum } from '../../src/helpers/sum'

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {

    // Preparacion
    const a = 1;
    const b = 2;
    
    // Estimulo
    const result = sum (a, b)
  
    // El comportamiento esperado
    expect(result).toBe(a+b)
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    // Preparacion
    const numberArray = [];
  
    // Estimulo
    const result = addArray(numberArray);
  
    // Comportamiento esperado
    expect( result ).toBe(0);
    
    // expect( result ).toBe(numberArray.reduce((acc, curr) => acc + curr, 0));
  
  });
  
  test('should return the proper value of the addArray fucntion', () => {
    // Preparacion
    const numberArray = [1,2,3,4,5];
  
    // Estimulo
    const result = addArray(numberArray);
  
    // Comportamiento esperado+
    expect( result ).toBe(15);
  
  });
});

