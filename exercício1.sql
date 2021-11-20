DROP DATABASE IF EXISTS Animal_zoo;
CREATE DATABASE Animal_zoo;

USE Animal_zoo;

CREATE TABLE animal(
  Animal_id INT AUTO_INCREMENT,
  Nome VARCHAR(50) NOT NULL,
    Especie VARCHAR(50),
    Sexo VARCHAR(15),
    Idade INT(2),
    Localizacao VARCHAR(50),
    CONSTRAINT PRIMARY KEY (Animal_id)
);

CREATE TABLE gerente(
  Gerente_id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY (Gerente_id)
);

CREATE TABLE cuidador(
  Cuidador_id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    CONSTRAINT FOREIGN KEY (cuidador_id) REFERENCES gerente (Gerente_id)
);

CREATE TABLE animal_cuidador(
  Animal_id INT,
  Cuidador_id INT,
  CONSTRAINT PRIMARY KEY (Animal_id, Cuidador_id),
  FOREIGN KEY (Animal_id) REFERENCES animal (Animal_id),
  FOREIGN KEY (Cuidador_id) REFERENCES cuidador (Cuidador_id)
);

SELECT * FROM Animal_zoo.animal;