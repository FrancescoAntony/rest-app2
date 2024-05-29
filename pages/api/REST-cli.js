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