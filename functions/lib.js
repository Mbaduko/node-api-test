
const fizzBuzz = (number) => {
    if (typeof number !== 'number')
        throw new Error('Input should be a number.');
    if ( (number % 3 === 0) && (number % 5 === 0))
        return 'FizzBuzz';
    if ( number % 3 === 0 )
        return 'Fizz';
    if( number % 5=== 0 )
        return 'Buzz';
    return number;
}

export {
    fizzBuzz
}