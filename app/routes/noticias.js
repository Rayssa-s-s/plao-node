module.exports = (application)=>{
    application.get('/noticias', (req, res) => {
    //  res.send('<html><body>Noticias de Tecnologia</body></html>'); 

   const connection = application.config.dbConnection;
   const NoticiasDAO = new application.app.models.NoticiasDAO(connection);
   NoticiasDAO.getNoticias((error, result)=>{
     res.render("noticias/noticias", { noticias: result })
   })
});
}

