function UsuariosDAO (connection){
    this._connection = connection;
}

UsuariosDAO.prototype.getUsuarios = function ( callback){
    this._connection.query('select * from usuarios', callback);
}

UsuariosDAO.prototype.getUserNoticia = function (objIdUsuario ,callback){

    //this._connection.query(`select * from noticias where id_usuario = ${objIdUsuario.id_usuario}`, callback );
    this._connection.query(`select usuarios.*, noticias.* from noticias inner join usuarios 
    on(noticias.id_usuario = usuarios.id_usuario) where usuarios.id_usuario = ${objIdUsuario.id_usuario}`, callback );
}

UsuariosDAO.prototype.login = function (objUsuario ,callback){

    //this._connection.query(`select * from noticias where id_usuario = ${objIdUsuario.id_usuario}`, callback );
    this._connection.query(`select * from usuarios where
     email_usuario = ${objUsuario.email_usuario} and 
     senha_usuario = ${objUsuario.email_usuario}`, callback );
}

module.exports = function (){  
    return UsuariosDAO;
}