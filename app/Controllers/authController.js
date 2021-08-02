module.exports.login = (application, req, res)=>{
  const objUsuario = req.body;
  console.log(req.sessionID);
   const connection = application.config.dbConnection;
   const usuariosDAO = new application.app.models.UsuariosDAO(connection);
   usuariosDAO.login(objUsuario,(error, result)=>{
     if(result.length > 0){
       //gravar as informações na sessão
       res.redirect('/usuario/home');
     }else{
        res.send('Usuário ou Senha não confere!');
     }
   });
}
