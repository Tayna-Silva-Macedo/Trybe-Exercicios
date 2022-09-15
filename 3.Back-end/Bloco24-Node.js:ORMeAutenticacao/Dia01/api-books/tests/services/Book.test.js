const { expect } = require('chai');
const { stub } = require('sinon');

const { Book } = require('../../src/models');
const booksService = require('../../src/services/books.service');

const testBook = {
  id: 1,
  title: 'Lord of the Rings',
  author: 'J. R. R. Tolkien',
  pageQuantity: 1178,
  createdAt: '2001-09-28 01:00:00',
  updatedAt: '2001-09-28 01:00:00',
};

describe('BookService', () => {
  describe('#getAll', () => {
    const findAllStub = stub(Book, 'findAll');
    let books;

    describe('quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await booksService.getAll();
      });

      after(() => {
        findAllStub.reset();
      });

      it('called Book.findAll', async () => {
        expect(Book.findAll.calledOnce).to.be.equal(true);
      });

      it('a resposta é um array', async () => {
        expect(books).to.be.an('array');
      });

      it('o array está vazio', async () => {
        expect(books).to.be.empty;
      });
    });

    describe('quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves([testBook]);
        books = await booksService.getAll();
      });

      after(() => {
        findAllStub.restore();
        books = null;
      });

      it('called Book.findAll', async () => {
        expect(Book.findAll.calledOnce).to.be.equal(true);
      });

      it('a resposta é um array', async () => {
        expect(books).to.be.an('array');
      });

      it('o array deve retornar objetos', async () => {
        expect(books).to.be.deep.equal([testBook]);
      });
    });
  });

  describe('#getById', () => {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('quando existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(testBook);
        book = await booksService.getById(1);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equal(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.be.deep.equal(testBook);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(null);
        book = await booksService.getById(1000);
      });

      after(() => {
        findByPkStub.restore();
        book = null;
      });

      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equal(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.be.null;
      });
    });
  });

  describe('#create', () => {
    const createStub = stub(Book, 'create');
    const testCreateBook = {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      pageQuantity: 689,
    };
    let newBook;

    describe('retorna o registro do livro criado', () => {
      before(async () => {
        createStub.resolves({
          id: 2,
          ...testCreateBook,
          updatedAt: '2022-01-28T15:45:28.398Z',
          createdAt: '2022-01-28T15:45:28.398Z',
        });

        newBook = await booksService.create(testCreateBook);
      });

      after(() => {
        createStub.restore();
        newBook = null;
      });

      it('called Book.create', async () => {
        expect(Book.create.calledOnce).to.be.equal(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(newBook).to.include(testCreateBook);
      });
    });
  });

  describe('#update', () => {
    const updateStub = stub(Book, 'update');
    const testUpdateBook = {
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
    };
    let updatedBook;

    describe('quando existe o livro', () => {
      before(async () => {
        updateStub.resolves([true]);
        updatedBook = await booksService.update(2, testUpdateBook);
      });

      after(() => {
        updateStub.reset();
        updatedBook = null;
      });

      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equal(true);
      });

      it('retorna true', async () => {
        expect(updatedBook).to.be.true;
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        updateStub.resolves([false]);
        updatedBook = await booksService.update(1000, testUpdateBook);
      });

      after(() => {
        updateStub.restore();
        updatedBook = null;
      });

      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equal(true);
      });

      it('retorna false', async () => {
        expect(updatedBook).to.be.false;
      });
    });
  });

  describe('#remove', () => {
    const removeStub = stub(Book, 'destroy');
    let book;

    describe('quando existe o livro', () => {
      before(async () => {
        removeStub.resolves(true);
        book = await booksService.remove(2);
      });

      after(() => {
        removeStub.reset();
        book = null;
      });

      it('called Book.destroy', async () => {
        expect(Book.destroy.calledOnce).to.be.equal(true);
      });

      it('retorna true', async () => {
        expect(book).to.be.true;
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        removeStub.resolves(false);
        book = await booksService.remove(1000);
      });

      after(() => {
        removeStub.restore();
        book = null;
      });

      it('called Book.destroy', async () => {
        expect(Book.destroy.calledOnce).to.be.equal(true);
      });

      it('retorna false', async () => {
        expect(book).to.be.false;
      });
    });
  });
});
