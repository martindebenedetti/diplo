var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var pool=require('./models/db.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//aca vam las query

pool.query('SELECT * FROM empleados').then(function (resultados){
  console.log(resultados);
});

// var obj = {
//   nombre:'Marla',
//   apellido:'Lopez',
//   trabajo:'docente',
//   edad:37,
//   salario:2000,
//   mail:'marlalopez@gmail.com'
// }
// pool.query('INSERT into empleados set ?',[obj]).then(function (resultados){
//   console.log(resultados)
// });

// var id=22;
// pool.query('delete from empleados where id_emp=?',[obj]).then(function (resultados){
//   console.log(resultados);
// });






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
