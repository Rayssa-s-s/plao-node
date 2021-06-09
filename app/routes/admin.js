module.exports = (application)=>{


    application.get('/formulario_inclusao_noticia', (req, res)=>{
        //res.send('<html><body>Noticias de Moda</body></html>');
        res.render("admin/form_add_noticia", {validacao: {}}) 
    }); 

    application.post('/noticias/salvar', (req, res)=>{
        const noticia = req.body;
        //res.send(noticias);
        //validando alguns dados
        req.assert('titulo', 'Titulo da noticia é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();
        const erros = req.validationErrors();
        console.log(erros);

        if (erros) {
            res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia });
            return;
        }
        const connection = application.config.dbConnection;
        const noticiasDAO = new application.app.models.NoticiasDAO(connection);
        noticiasDAO.salvarNoticia(noticia, (error, result)=>{
        //res.render("noticias/noticias", { noticias: result});
        
        res.redirect('/noticias');    
     })
})
}

