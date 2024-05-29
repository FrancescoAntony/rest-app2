/**
 * Nome do arquivo: repository.js
 * Data de criação: 09/05/2024
 * Autor: Francesco Antony
 * Matrícula: 01609346
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por armazenar e consultar por todas as funções pelo banco de dados.
 *
 * Este script é parte o curso de ADS.
 */






/* -- Armazenamento e consultas 
(tabela clientes) --

INSERT INTO clientes (nome, endereço, telefone, email)
VALUES ('Tony Yuri', 'Rua Vasconcelos, Joaquim 33', '5328834359', 'tony@outlook.com.br');

UPDATE clientes SET email = 'antony@gmail.com.br' where id = 1;

SELECT * from clientes;

DELETE from clientes WHERE id = 1;

-- Armazenamento e consultas (Tabela cliente_serviço) --

INSERT INTO cliente_servico (id, cliente_associado, data_ordem, desc_serviço, custo_estimado, status_servico) VALUES (UUID(), cliente_associado, 'data_ordem', 'desc_serviço', 'custo_estimado', 'status_serviço', custo_final);

UPDATE cliente_servico SET status_servico = 'Em andamento', 'Concluído', 'Cancelado' where id = 'UUID() da ordem';
UPDATE custo_final SET custo_final = x where id = cliente_associado;

SELECT * from cliente_servico;

DELETE from cliente_servico WHERE id = "UUID() da ordem";

*/