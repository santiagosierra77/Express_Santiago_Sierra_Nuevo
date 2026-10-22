const {Router} = require("express")
//necesita el controller
const listarUsuarios = require("../controllers/UsuariosController")
const crearUsuarios = require("../controllers/UsuariosController")
const enrutadorUsuario = new Router()

enrutadorUsuario.get("/listado", listarUsuarios)
//enrutadorUsuario.get("/{id}")
enrutadorUsuario.post("/crear", crearUsuarios)

module.exports = enrutadorUsuario