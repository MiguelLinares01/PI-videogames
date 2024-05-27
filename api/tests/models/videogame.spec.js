const { Videogames, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogames.sync({ force: true }));
    describe('nombre', () => {
      it('should throw an error if name is null', (done) => {
        Videogames.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogames.create({ nombre: 'Super Mario Bros' });
      });
    });
  });
});
