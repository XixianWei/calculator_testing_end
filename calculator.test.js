const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000;
    actual = sum(400,600);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 1;
    actual = sum(1, 0);
    expect(actual).toBe(expected);
  });

});

// ------ subtract -------

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 1000;
    actual = subtract(2000,1000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-2, -3);
    expect(actual).toBe(expected);
    
  });

  test('can subtract zero', () => {
    expected = -5;
    actual = subtract(0, 5);
    expect(actual).toBe(expected);
  });

});


// ------ multiply -------
describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 5;
    actual = multiply(1, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 10000;
    actual = multiply(100,100);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
    
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 1);
    expect(actual).toBe(expected);
  });

});

// ------ divide -------

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(6, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 100;
    actual = divide(10000,100);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-6, -3);
    expect(actual).toBe(expected);
    
  });

  test('can divide zero', () => {
    expected = 0;
    actual = divide(0, 1);
    expect(actual).toBe(expected);
  });

});

// ------ modulus -------

describe('modulus', () => {
  test('can modulus two small positive numbers', () => {
    expected = 2;
    actual = modulus(6, 4);
    expect(actual).toBe(expected);
  });

  test('can modulus two large positive numbers', () => { 
    expected = 2000;
    actual = modulus(6000,4000);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -2;
    actual = modulus(-6, -4);
    expect(actual).toBe(expected);
    
  });

  test('can modulus zero', () => {
    expected = 0;
    actual = modulus(0, 1);
    expect(actual).toBe(expected);
  });

});

// ------ even -------

describe('even', () => {
  // test positive numbers (small/large)/(even/not even)
  test('can check a small positive even number', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('can check a small positive not even number', () => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  });

  test('can check a large positive even number', () => {
    expected = true;
    actual = even(100000);
    expect(actual).toBe(expected);
  });

  test('can check a large positive not even number', () => {
    expected = false;
    actual = even(1000005);
    expect(actual).toBe(expected);
  });

  // test negative numbers (small/large)/(even/not even)
  test('can check a small negative even number', () => {
    expected = true;
    actual = even(-4);
    expect(actual).toBe(expected);
  });

  test('can check a small negative not even number', () => {
    expected = false;
    actual = even(-5);
    expect(actual).toBe(expected);
  });

  test('can check a large negative even number', () => {
    expected = true;
    actual = even(-100000);
    expect(actual).toBe(expected);
  });

  test('can check a large negative not even number', () => {
    expected = false;
    actual = even(-1000005);
    expect(actual).toBe(expected);
  });
 
  // test zero
  test('can check zero', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

});

// ------ odd -------
describe('odd', () => {
  // test positive numbers (small/large)/(odd/not odd)
  test('can check a small positive odd number', () => {
    expected = true;
    actual = odd(1);
    expect(actual).toBe(expected);
  });

  test('can check a small positive not odd number', () => {
    expected = false;
    actual = odd(2);
    expect(actual).toBe(expected);
  });

  test('can check a large positive odd number', () => {
   // expected = true;
    actual = odd(1001);
    expect(actual).toBeTruthy;
  });

  test('can check a large positive not odd number', () => {
   // expected = false;
    actual = odd(2222);
    expect(actual).oBeFalsy;
  });

  // test negative numbers (small/large)/(odd/not odd)
  test('can check a small negative odd number', () => {
    expected = true;
    actual = odd(-1);
    expect(actual).toBe(expected);
  });

  test('can check a small negative not odd number', () => {
    expected = false;
    actual = odd(-2);
    expect(actual).toBe(expected);
  });

  test('can check a large negative odd number', () => {
    expected = true;
    actual = odd(-100001);
    expect(actual).toBe(expected);
  });

  test('can check a large negative not odd number', () => {
    expected = false;
    actual = odd(-100000);
    expect(actual).toBe(expected);
  });
 
  // test zero
  test('can check zero', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });


});
