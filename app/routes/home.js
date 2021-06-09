    module.exports = (app)=>{
        app.get('/', (req, res)=>{
            //res.send('<html><body>Portal de Noticias</body></html>');
            res.render("home/index")
        }); 
    }

