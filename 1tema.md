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
 
