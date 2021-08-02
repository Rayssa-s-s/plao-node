    module.exports = (application)=>{
        application.get('/', (req, res)=>{
           application.app.controllers.homeController.index(application, req, res);
        }); 
    }

