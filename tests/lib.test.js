import { fizzBuzz } from "../functions/lib.js"
describe( "FizzBuzz", () => {
    it('- should throw an exception if input is not a number', () =>{
        expect(() => {
            fizzBuzz("Amazi")
        }).toThrow();
    });

    it('- should return FizzBuzz if input is divisable by 3 and 5', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('- should return Fizz if input is only divisable by 3', () => {
        const result = fizzBuzz(3);
        expect(result).toBe('Fizz');
    });

    it('- should return Buzz if input is onlydivisable by 5', () => {
        const result = fizzBuzz(5);
        expect(result).toBe('Buzz')
    });

    it('- should return input if input is divisible by neither 3 or 5', () => {
        const result = fizzBuzz(4);
        expect(result).toBe(4);
    });
})