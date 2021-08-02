module.exports.usuarios = (application, req, res)=>{
   const connection = application.config.dbConnection;
   const usuariosDAO = new application.app.models.UsuariosDAO(connection);
   usuariosDAO.getUsuarios((error, result)=>{
        res.render("usuarios/usuarios", {usuarios: result })
   });
}


module.exports.getUserNoticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const usuariosDAO = new application.app.models.UsuariosDAO(connection);
    //console.log(req.query);
    //res.send(req.query);
    const objIdUsuario = req.query;

    usuariosDAO.getUserNoticia (objIdUsuario,(error, result)=> {
      //res.send(result);
     res.render("usuarios/usuario-noticias", { noticias: result });
   });
}

 module.exports.form_login = (application, req, res)=>{
    res.render("usuarios/form-login");
}

module.exports.home = (application, req, res)=>{
  res.render("usuarios/home");
}



