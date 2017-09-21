var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/',function(request,response){
    response.send("home/index");
    
});
app.get('/formulario_inclusao_noticia',function(request,response){
    response.render("admin/form_add_noticia");
    
});
app.get('/noticias',function(request,response){
    response.render("noticias/noticias");
    
});
app.listen(3000,function(){
   console.log("Servidor rodando com express") ;
});