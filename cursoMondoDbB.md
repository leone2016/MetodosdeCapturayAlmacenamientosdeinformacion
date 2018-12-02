CURSO
===================
![](https://cdn-images-1.medium.com/max/1600/1*Ce0gUe0LbnhL7ebnDGTp5w.png)

* Bases de datos noSql escrito en C++
* Almacenamiento de archivos
* Cisco, MTV, The New York Times, 

### Intalación [tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
### Ejecutar 
* ingresar C:/program files/MongoDB/server/4.0/bin
* en cmd digitar ```$ mongo.exe```
### Tutorial
> colecciones son semejantes a las tablas

> documentos son semejantes a los registros

Codigo mongoDB | Explicación 
------------- | -------------
show databases | visualiza todas las bases de datos
use cursoMongo | crea la base curso db y se situa en la base creada
db | muestra en que base de datos se encuentra actualmente
usuario = {nombre:"Leonardo Medina", edad:27} | asigna a la variable **usuario** en documento { ... }
db.usuarios.insert(usuario) | crea una coleccion usuarios e ingresa el documento **usuario**
show collections | hasta este punto solo muestra la coleccion usuarios 
db.usuarios.find() | similar a ````select * from usuarios````
otro = {nombre: "Este es un Documento"} | .
otro = {nombre: "dato"} | .
db.usuarios.insert( otro ) | ingresa el documento otro
db.usuarios.findOne() | muestra solo el primer registro
var test = db.usuarios.fidOne() | asigna a una variable el primer documento de la colección

## find()

Codigo mongoDB | Explicación 
------------- | -------------
db.usuarios.find( { nombre:"Leonardo Medina" }) | busca en el campo nombre
db.usuarios.find( { nombre:"Leonardo Medina", edad:27 }) | busca en nombre y edad
db.usuarios.find( { edad: { $ne: 22 } } ) | busca todas las edades que sean diferentes de 22
db.usuarios.find( { nombre:"Leonardo Medina",  edad: { $ne: 22 } } ) | busca un nombre en específico que sea diferente a 22 de edad

## save(), update() - actualizar

Codigo mongoDB | Explicación 
------------- | -------------
uno =  { nombre:"Patricio" }|
dos =  { nombre:"Eduardo" } |
db.usuarios.insert( [ uno, dos ]) | inserta mas de un documento a la vez
var test = db.usuarios.findOne( {nombre: "Patricio"} ) | asigna en la variable test el documento con nombre dato
test.nombre = "Carlos" | cambia el nombre de dato a Carlos (aun no guarda)
db.usuarios.save(test) | actualiza el documento si tiene **ID** caso contrario crea un nuevo documento
db.usuarios.save({nombre:"Prueba"}) | crea el documento
test.edad = 22 | si el objeto antes no tenia **edad** es mejor utilizar update()
db.usuarios.update( { "_id" : test._id }, test) | actualiza de acuerdo a un ID de documento

### actualizar varios registros

> db.usuarios.update( { condicion1, condicion2}, {documento}, {multi:true})

Codigo mongoDB | Explicación 
------------- | -------------
uno =  { nombre:"dato" }|
dos =  { nombre:"dato" } |
db.usuarios.insert( [ uno, dos ])| inserta mas de un documento a la vez
db.usuarios.update( { nombre: "dato"}, { $set: { nombre:"DMQ" }}, { multi:true })| modifica varios registros que tengan el nombre:dato
db.usuarios.update( { nombre: "DMQ"}, { $set: { nombre:"DMQ2", barrio:52 }}, { multi:true }) | actualiza y crea un nuevo **barrio** 
 db.usuarios.update( {}, { $unset: { barrio:1 }}, { multi:true }) |elimina el campo **barrio**
 
 ## remove()
 Codigo mongoDB | Explicación 
 ------------- | -------------
 var test = db.usuarios.findOne( {nombre: "Prueba"} )|
 db.usuarios.remove( { "_id" : test._id } )| elimina los registros de una id especifica
 db.usuarios.remove( { "nombre" : "DMQ2" } )| **ELIMINA TODOS LOS DOCUMENTOS** que tengan el nombre DMQ2
 db.usuarios.remove( { "nombre" : "DMQ2" } ) | **BORRA TODA LA COLECCION** 
 db.usuarios.drop()| borra la coleccion
 db.dropDatabase()| borra la base de datos
 
 ## Between

> copiar los 8 libos en la consola de cmd
 
    libro1 = { "nombre" : "El Hobbit", "autor" : "J.R.R Tolkien", "numero" : 100.0, "unidad" : "millones", "idioma" : "ingles",  "primera_edicion" : 1937}
    libro2 = { "nombre" : "El Señor de los anillos","autor" : "J.R.R Tolkien","numero" : 150.0,"unidad" : "millones","idioma" : "ingles","primera_edicion" : 1954}
    libro3 = { "nombre" : "El principito","autor" : "Antonie de Saint-Exepéry","numero" : 140.0,"unidad" : "millones","idioma" : "frances","primera_edicion" : 1943}
    libro4 = { "nombre" : "Historia de dos cuidades","autor" : "Charles Dicken","numero" : 200.0,"unidad" : "millones","idioma" : "ingles","primera_edicion" : 1859}
    libro5 = { "nombre" : "Sueño en el pabellon rojo","autor" : "Cao Xuequin","numero" : 100.0, "unidad" : "millones", "idioma" : "chino","primera_edicion" : 2001}
    libro6 = { "nombre" : "Diez Negritos", "autor" : "Agata Christie", "numero" : 99.0, "unidad" : "millones", "idioma" : "ingles", "primera_edicion" : 1939.0}
    libro7 = { "nombre" : "El codigo Da Vinci","autor" : "Dan Bronw","numero" : 80.0,"unidad" : "millones","idioma" : "ingles","primera_edicion" : 2003.0}
    libro8 = { "nombre" : "El nombre de la rosa", "autor" : "Umberto Eco","numero" : 50.0,"unidad" : "millones","idioma" : "ingles", "primera_edicion" : 1980.0}

> insertar los 8 libros

 ````
 db.libros.insert([ libro1,libro2, libro3, libro4, libro5, libro6, libro7, libro8 ])
 ````
 #### OPERADORES BÁSICOS
  Codigo mongoDB | Explicación 
   ------------- | -------------
  $gt > |mayor que
  $gte >= |mayor ó igual que
  $lt < |menor que
  $lte <= | menor ó igual que
  
 > db.libros.find( { condicion1:{$gt:{}, $lt:{} }, conicion2:{}, n:{} }, { elemento:1 })
 
  Codigo mongoDB | Explicación 
  ------------- | -------------
db.libros.find({}, {nombre:1})|solo devuelve el nombre con su ID por defecto
db.libros.find({}, {nombre:1, _id:0})|sin _id   
db.libros.find( { primera_edicion: { $gt: 2000 } } ) | libros que sean mayor a año 2000 en la primera edicion
db.libros.find({ primera_edicion: {$gt:1940,$lte:2000}}, {nombre:1}) | **nombres** de libros en la primera edición entre el año 1940 y 2000 
db.libros.find({ primera_edicion: {$gt:1940,$lte:2000}, numero: { $gte: 140} }, {nombre:1}) |  nombre de libros entre el año 1940 y el 2000 que haya vendido(numero:{}) mas o igual a 140 unidades

## Cursores

* el cursor solo se puede utilizar una vez
