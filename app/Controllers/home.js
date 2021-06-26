module.exports.index = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    noticiasDAO.get5Ultimasnoticias((error, result)=>{
        res.render("noticias/noticias", {noticias: result })
   });
}