module.exports = (application)=>{
    application.get('/noticia', (req, res)=>{

   const connection = application.config.dbConnection;
   const noticiasDAO = new application.app.models.NoticiasDAO(connection);
   noticiasDAO.getNoticias((error, result)=>{
        res.render("noticias/noticia", {noticia: result })
   })

        connection.query('select * from noticias WHERE id_noticia = 2', function(error, result){
         res.render("noticias/noticia", { noticia: result })
    //   res.send(result);
    });
      });
}

