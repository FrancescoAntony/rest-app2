/**
 * Nome do arquivo: exemplo.js
 * Data de criação: 30/04/2024
 * Autor: João Silva
 * Matrícula: 123456
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de interação do usuário com a interface gráfica do módulo de vendas.
 * Aqui são tratados eventos de cliques, validações de entrada e comunicação
 * com APIs para envio e recebimento de dados.
 *
 * Este script é parte o curso de ADS.
 */


export default function handler(req, res){
    if(req.method === "GET") {
        res.status(400).json({Retornando: "Retornando o teste"})
    }

    if(req.method === "POST") {
        res.status(200).json({Status: "Postado!"})
    }

    if(req.method === "PUT") {
        res.status(200).json({Status: "Atualizando.."})
    }

    if(req.method === "DELETE") {
        res.status(200).json({Status: "Deletando.."})   
    }
}