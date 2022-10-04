"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePartialBook = exports.validationBook = void 0;
const statusCodes_1 = __importDefault(require("../controllers/statusCodes"));
const properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(book) {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationBook(req, res, next) {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res
            .status(statusCodes_1.default.BAD_REQUEST)
            .send(`O campo ${property} é obrigatório.`);
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        return res
            .status(statusCodes_1.default.BAD_REQUEST)
            .send(`O campo ${property} não pode ser nulo ou vazio.`);
    }
    next();
}
exports.validationBook = validationBook;
function differenceBetweenArrays(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
}
function validatePartialBook(req, res, next) {
    const book = req.body;
    const difference = differenceBetweenArrays(Object.keys(book), properties);
    const isValidBook = difference.length === 0;
    if (!isValidBook) {
        return res
            .status(statusCodes_1.default.BAD_REQUEST)
            .send(`Os campos ${difference} não existem no tipo Book.`);
    }
    next();
}
exports.validatePartialBook = validatePartialBook;
