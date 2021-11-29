const uppercase = require('./uppercase');

it('Testa se a função uppercase recebenco "test" retorna "TEST"', (done) => {  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});