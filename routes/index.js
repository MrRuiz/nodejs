
/*
 * GET home page.
 *
 * Lista de variables que pueden usarse en la pagina index mediante por ejemplo <%= title %>
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'titulo',
    pageName: 'ChatRaf',
  });
};