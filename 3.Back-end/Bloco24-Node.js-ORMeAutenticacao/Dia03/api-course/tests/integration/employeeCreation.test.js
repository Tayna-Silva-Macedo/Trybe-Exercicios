const chai = require('chai');
const Sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

const consoleLogStub = Sinon.stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore());

describe('Rota POST /emplyees', () => {
  describe('quando os dados do body são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app).post('/employees').send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          city: 'TrybeCity',
          street: 'Rua Teste',
          number: 42,
        });

        const {
          body: { id },
        } = postEmployee;

        getEmployee = await chai
          .request(app)
          .get(`/employees/${id}?includeAddresses=true`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equal(201);
    });

    it('retorna um atributo id, que é um núemro', async () => {
      const {
        body: { id },
      } = postEmployee;

      expect(typeof id).to.be.equal('number');
    });

    it('retorna uma mensagem `Cadastrado com sucesso`', async () => {
      const {
        body: { message },
      } = postEmployee;

      expect(message).to.be.equal('Cadastrado com sucesso');
    });

    it('é possível consultar a pessoa criada através do id retornado', async () => {
      const {
        body: { id: postId },
      } = postEmployee;
      const {
        body: {
          employee: { id: getId },
        },
      } = getEmployee;

      expect(postId).to.be.equal(getId);
    });

    it('essa consulta também retornou um atributo addresses, com pelo menos um item', async () => {
      const {
        body: { addresses },
      } = getEmployee;

      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('quando os dados do body não são válidos', () => {
    let postEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app).post('/employees').send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          street: 'Rua Teste',
          number: 42,
        });
      } catch (error) {
        console.error(error.message);
      }
    });
    it('retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equal(500);
    });

    it('retorna uma mensagem `Algo deu errado`', async () => {
      const {
        body: { message },
      } = postEmployee;

      expect(message).to.be.equal('Ocorreu um erro');
    });
  });
});
