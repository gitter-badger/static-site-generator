import hello from './hello';

describe('Sample module/test', () => {
    it('should return "Hello World!"', () => {
        expect(hello('World')).toEqual('Hello World!');
    });
});
