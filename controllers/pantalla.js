var client = require("../database/db");
var db = client.db("pagina_web");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("venta").find().toArray()
            .then(
                productos => {
                    res.render('producto_list', { dataProductos: venta });
                }
            ).catch(
                error => console.log(error)
            )
    }
}
module.exports = controller;