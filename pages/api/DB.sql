/**
 * Nome do arquivo: DB.sql
 * Data de criação: 08/05/2024
 * Autor: Francesco Antony
 * Matrícula: 01609346
 *
 * Descrição:
 * Este arquivo SQL é responsável por implementar as tabelas com a CRUD completa e todas as configurações por dentro do banco de dados.
 *
 * Este script é parte o curso de ADS.
 */


/* TABELA CLIENTE */

create table clientes (
    id int primary key auto_increment,
    nome varchar(15),
    endereço varchar(20),
    telefone varchar(15),
    email varchar(20)
);

INSERT INTO cliente (nome, endereço, telefone, email) VALUES ('Tony Yuri', 'Rua Vasconcelos, Joaquim 33' '(53) 2883-4359' 'tony@outlook.com.br');

UPDATE clientes SET email = 'antony@gmail.com.br' where id = 1;

SELECT * from clientes;

DELETE from clientes WHERE id = 1;


/* TABELA DE ORDEM DE SERVIÇO */

create table cliente_serviço (
    id varchar(30) primary key,
    cliente_associado int,
    data_ordem date,
    desc_serviço text,
    custo_estimado int,
    custo_final int,
    status_servico ENUM('Em andamento', 'Concluído', 'Cancelado'),
    FOREIGN KEY (cliente_associado) REFERENCES clientes(id)
);

INSERT INTO cliente_servico (id, cliente_associado, data_ordem, desc_serviço, custo_estimado, status_servico) VALUES (UUID(), cliente_associado, 'data_ordem', 'desc_serviço', 'custo_estimado', 'status_serviço', custo_final);

UPDATE cliente_servico SET status_servico = 'Em andamento', 'Concluído', 'Cancelado' where id = 'UUID() da ordem';
UPDATE custo_final SET custo_final = x where id = cliente_associado;

SELECT * from cliente_servico;

DELETE from cliente_servico WHERE id = "UUID() da ordem";