module.exports.formulario_inclusao_noticia = (application, req, res)=>{
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}})
}

module.exports.noticias_salvar = (application, req, res)=>{
    var noticia = req.body;
    req.assert('titulo', 'Título da notícia é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    //req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('data_noticia', 'Formato da data está inadequado').isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();
    const erros = req.validationErrors();

    if (erros) {
      res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
      return;
    }
    const connection = application.config.dbConnection;
      const noticiasDao = new application.app.models.NoticiasDAO(connection);
      noticiasDao.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
      });
}