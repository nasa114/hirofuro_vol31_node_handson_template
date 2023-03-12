import { fizzBuzz } from './fizzBuzz.mjs'

describe('fizzBuzz.js', () => {
    test('3 の倍数は Fizz が出力される', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(6)).toBe('Fizz')
        expect(fizzBuzz(9)).toBe('Fizz')
        expect(fizzBuzz(12)).toBe('Fizz')
        expect(fizzBuzz(18)).toBe('Fizz')
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    test('5 の倍数は Buzz が出力される', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(10)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
        expect(fizzBuzz(25)).toBe('Buzz')
        expect(fizzBuzz(35)).toBe('Buzz')
        expect(fizzBuzz(40)).toBe('Buzz')
    })

    test('3 と 5 の倍数は FizzBuzz が出力される', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })

    test('3 と 5 の倍数以外は文字列型の数値が出力される', () => {
        expect(fizzBuzz(1)).toBe('1')
        expect(fizzBuzz(2)).toBe('2')
        expect(fizzBuzz(4)).toBe('4')
        expect(fizzBuzz(7)).toBe('7')
        expect(fizzBuzz(13)).toBe('13')
        expect(fizzBuzz(31)).toBe('31')
    })

    // 以下余力がある人向け（.skip を削除して取り組んでみてください）
    test.skip('文字列で入力された 3 の倍数は Fizz が出力される', () => {
        expect(fizzBuzz('3')).toBe('Fizz')
        expect(fizzBuzz('6')).toBe('Fizz')
        expect(fizzBuzz('9')).toBe('Fizz')
        expect(fizzBuzz('12')).toBe('Fizz')
        expect(fizzBuzz('18')).toBe('Fizz')
        expect(fizzBuzz('33')).toBe('Fizz')
    })

    test.skip('文字列で入力された 5 の倍数は Buzz が出力される', () => {
        expect(fizzBuzz('5')).toBe('Buzz')
        expect(fizzBuzz('10')).toBe('Buzz')
        expect(fizzBuzz('20')).toBe('Buzz')
        expect(fizzBuzz('25')).toBe('Buzz')
        expect(fizzBuzz('35')).toBe('Buzz')
        expect(fizzBuzz('40')).toBe('Buzz')
    })

    test.skip('文字列で入力された 3 と 5 の倍数は FizzBuzz が出力される', () => {
        expect(fizzBuzz('15')).toBe('FizzBuzz')
        expect(fizzBuzz('30')).toBe('FizzBuzz')
    })

    test.skip('文字列で入力された 3 と 5 の倍数以外は文字列型の数値が出力される', () => {
        expect(fizzBuzz('1')).toBe('1')
        expect(fizzBuzz('2')).toBe('2')
        expect(fizzBuzz('4')).toBe('4')
        expect(fizzBuzz('7')).toBe('7')
        expect(fizzBuzz('13')).toBe('13')
        expect(fizzBuzz('31')).toBe('31')
    })

    test.skip('想定されない値の場合はエラーになる', () => {
        expect(() => fizzBuzz(-1)).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz(0)).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz('0')).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz('t')).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz({})).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz([])).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz(null)).toThrow('Invalid input value of this program.')
        expect(() => fizzBuzz(undefined)).toThrow('Invalid input value of this program.')
    })
})
