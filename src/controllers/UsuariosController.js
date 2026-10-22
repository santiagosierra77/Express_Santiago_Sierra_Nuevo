const listar = require("../services/usuariosServices")
const listarUsuarios = async(req, res)=>{
    try {
        const usuarios = await listar()
        res.status(200).json({usuarios})
    } catch (error) {
        res.status(500).json({"Error-mensaje": error.mesage })
    }
}

module.exports = listarUsuarios