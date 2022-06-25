const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Keyboard', 'Mouse'))).toBeTruthy();

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Motherboard', 'Processor')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const products1 = productDetails('HD', 'SSD');
    expect(products1.every((element) => typeof element === 'object' && !Array.isArray(element) && element !== null)).toBeTruthy();

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const products2 = productDetails('Power Supply', 'Fan');
    expect(products2[0]).not.toEqual(products2[1]);

    // Teste se os dois productIds terminam com 123.
    const products3 = productDetails('Monitor', 'Speakers');
    expect(products3.every((element) => element.details.productId.endsWith('123'))).toBeTruthy();
  });
});
