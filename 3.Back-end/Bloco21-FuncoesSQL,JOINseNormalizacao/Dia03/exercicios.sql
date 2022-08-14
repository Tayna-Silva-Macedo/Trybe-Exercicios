#Exercício 1

DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE gerente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidador (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id)
        REFERENCES gerente (id)
);

CREATE TABLE animal_cuidador (
    animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (animal_id)
        REFERENCES animal (id),
    FOREIGN KEY (cuidador_id)
        REFERENCES cuidador (id)
);