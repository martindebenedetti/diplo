var express = require ('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/',async function (req,res,next){

  const novedades = await novedadesModel.getNovedades(); //busco los registros de la base.

    res.render('admin/novedades',{
      layout: 'admin/layout',
      usuario : req.session.nombre, 
      novedades
    });
});


router.get('/eliminar/:id',async(req,res,next)=>{
  var id=req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
});
 
router.get('/modificar/:id',async(req,res,next)=>{
  let id= req.params.id;
  let novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    novedad
  });
});
// diseño del form modificar
router.post('/modificar', async (req,res,next)=>{
  try{
    let obj ={
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }catch(error){
    console.log(error)
    res.render('admin/modificar',{
      layout: 'admin/layout',
      error: true,message: 'No se modifico la novedad'
    });
  }
});
// diseño del form agregar
router.get('/agregar', (req,res,next)=>{
  res.render('admin/agregar',{
   layout: 'admin/layout'
  }); 
 });

 router.post('/agregar', async(req,res,next)=>{
  try{
    console.log(req.body)
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo !=""){
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')

    }else{
      res.render('admin/agregar',{
        layout:'admin/layout',
        error: true, 
        message:'Todos los campos son requeridos'
      })
    }
  }catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout',
      error:true,
      message:'No se cargo la novedad'
    });
  }
 });


module.exports = router;




