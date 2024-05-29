/**
 * Nome do arquivo: REST-cli.js
 * Data de criação: 08/05/2024
 * Autor: Francesco Antony
 * Matrícula: 01609346
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades respectivas de uma APi-RESTFULL, com todos os métodos de requisição.
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