module.exports.noticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    noticiasDAO.getNoticias((error, result)=>{
        res.render("noticias/noticias", {noticias: result })
   })
}

module.exports.noticia = (application, req, res)=>{
    const connection = application.config.dbConnection();
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    noticiasDAO.getNoticias((error, result)=>{
        res.render("noticias/noticia", {noticia: result })
   })
}