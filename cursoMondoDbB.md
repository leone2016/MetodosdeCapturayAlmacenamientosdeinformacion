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
* cada find devuelve un cursor pero hasta ahora solo se trabajo como lectura
* it se uiliza para ver el resto de datos en la colección en el caso de ser mayor a 20

  Codigo mongoDB | Explicación 
  ------------- | -------------
 for ( i=0; i<100; i++){ db.test.insert( { valor:i } ) } | inserta 100 documentos
var cursor =   db.test.find() | guarda la consulta para ser ejecutada una sola vez
cursor.forEach( function(d) { print( d.valor ) } ) | muestra los 100 documentos del 0 al 99
cursor.forEach( function(d) { d.valor = 100; db.test.save( d ); } )|edita la colección 

#### Metodos de cursores
* db.libros => se encuentra en la parte de arriba, ejecute y continue

  Codigo mongoDB | Explicación 
  ------------- | -------------
  nombreCampo: 1 | ASC ascendente
  nombreCampo: -1 | DESC descendente
  
 Codigo mongoDB | Explicación 
------------- | -------------
db.libros.find().count() | contador de documentos
db.libros.find().sort( { numero: -1 } ) | ordena de forma descendente
db.libros.find().sort( { numero: 1 } ) | ordena de forma ascendente
db.libros.find().sort( { valor: -1 } ).limit( 3 ) | muesta los primeros 3 
db.libros.find().sort( { numero: -1 } ).skip(1).limit( 1 ) | muestra el 2do libro mas vendido(numero), skip salta la primera posición y limit solo muestra el primer documento
var test = db.libros.find().sort( { numero: -1 } ).skip(1).limit( 1 ).size() | realiza un conteo de registros desplegados


## Arreglos

* en base de datos se tiene relaciones 1 - n (uno a muchos)
* en mongoDB permite crear arreglos con la idea de tener relaciones
* diferencia entre addToSet vs push : addToset el valor a ingresar, primero verifica si existe caso contrario lo agrega, push agrega al final del arreglo si importar si existe o no 

 Codigo mongoDB | Explicación 
  ------------- | -------------
var arreglo = [1,2,3] | arreglo básico
var usuario = { nombre: "test", valores: arreglo } |  documento con arreglo
db.usuarios.insert( usuario ) | guarga en coleccion
db.usuarios.update( {}, {$addToSet: { valores: 4 } } ) | agrega un nuevo valor a valores, resultado ````  "valores" : [ 1, 2, 3, 4 ] ````
db.usuarios.update( {}, {$push: { valores: 4 } } ) | agrega un nuevo valor  al final del arreglo , ````  "valores" : [ 1, 2, 3, 4, 4 ] ````
db.usuarios.update( {}, {$push: { valores: {$each : [5,6,7,8,9,10] } } } ) | agrega un arreglo, itira  por medio del $each un arreglo para ser inglesados al arreglo  valores, ````  "valores" : [ 1, 2, 3, 4, 4 ,5, 6, 7, 8, 9, 10 ] ````
db.usuarios.update( {}, {$push: { valores: {$each : [2.5] , $position: 2 } } } ) | $position agrega un elemento en la posicion 2,  resultado  ````  "valores" : [ 1, 2, 2.5, 3, 4, 4, 5, 6, 7, 8, 9, 10 ] ````
db.usuarios.update( {}, {$push: { valores: {$each : [3.5,4.5,8.6] , $sort:1} } } ) | agrega los valores de forma descendente, resultado  ````  "valores" : [ 1, 2, 2.5, 3, 3.5, 4, 4, 4.5, 5, 6, 7, 8, 8.6, 9, 10 ] ```` 
db.usuarios.update( {}, {$push: { valores: {$each : [0]} } } ) | guarda un cero al final del arreglo
db.usuarios.update( {}, {$push: { valores {$each: [], $sort:1 } } } ) |ordena todos los documentos de la coleccion por medio del **UPDATE**    
 
 ##### Eliminar elementos del Arreglo
 Codigo mongoDB | Explicación 
 ------------- | -------------
 db.usuarios.update({}, {$pull : { valores: 2.5 }}) | elimina del arreglo el valor 2.5
 db.usuarios.update({}, {$pull : { valores: {$gte: 8} }}) | elimina los valores mayores o igual a 8
 db.usuarios.update({}, {$pullAll : { valores: [4.5,3.5] }}) | elimina los elementos 4.5 y 3.5 
 
 #### Select arreglos
 
 var arreglo = ["PHP7", "Java EE ", "Pyton", "TypeScript", "JavaScript"]
 var usuario = { nombre: "Leonardo Medina", ejemplo: arreglo } 
 
  Codigo mongoDB | Explicación 
  ------------- | -------------
 db.usuarios.find({}, {_id:false, ejemplo:true} ) | _id:false > no visualiza id :: ejemplo:true > visualiza campo **ejemplo**
 db.usuarios.find({}, {_id:false, ejemplo:{$slice : 3}} ) | retorna solo tres elementos del arreglo **ejemplo**
 db.usuarios.find({}, {_id:false, ejemplo:{$slice : [1,3]}} ) | muestra desde la posición 1 a la 3 
 db.usuarios.find({ ejemplo:{$in:["PHP7", "Java EE "]} }) | buscar el usuarios que sepa PHP7
 db.usuarios.find({ ejemplo:{$nin:["C#"]} }) | muestrame quien no sabe C#
 
 # Laboratorio 1 maestria [UNIR](https://ecuador.unir.net/ingenieria/maestria-visual-analytics-big-data/549201969287/)
  
> Descarga la versión gratuita del software [MongoBooster](http://mongobooster.com) para la administración de bases de datos MongoDB. En la página del proveedor podrás seleccionar la versión del sistema operativo que utilices habitualmente: Windows, MacOS, Linux.

##### Descripción del Laboratorio

> El objetivo de laboratorio es la adquisición de las destrezas básicas de generación de bases de datos MongoDB con una aplicación de administración con interfaz gráfica. Para ello, se proporcionará un catálogo de datos con una estructura de datos no basada en JSON y un conjunto de queries Mongo. Deberás estructurar una base de datos e insertar los datos proporcionados de forma que las queries tengan el resultado esperado.

##### Diseño de la aplicacion MondoDB
>El dueño de un gimnasio posee una base de datos en MongoDB que guarda datos de usuario con un formato parecido al siguiente:

```javascript
{
   "_id" : "Leonardo Medina",
   "joined" : ISODate("2017-12-03"),
   "sports" : ["motor", "futbol", "ciclismo"]
}


```

El dueño no tiene conocimientos sobre la realización de consultas y encarga a un informático una forma óptima para saber los siguientes puntos:

* Listar los usuarios alfabéticamente, con el nombre en mayúsculas.
* Listar los usuarios ordenándolos por la fecha de admisión.
* Devolver el número total de usuario que se han apuntado al gimnasio por mes.
* Listar los 3 deportes que más gustan mostrando el número de apariciones.
* Listar todos los deportes

Debes entregar un documento donde describas el comando utilizado para obtener cada una de los puntos anteriormente descritos utilizando el comando find(), distinct(), aggregate y Map-Reduce, si es posible. Intente realizar estas búsquedas sobre un número grande de registros y comentar las ventajas y diferencias de cada forma utilizada.

### RESOLUCION LABORATORIO 1 

paso 1: [Descargar](https://github.com/leone2016/MetodosdeCapturayAlmacenamientosdeinformacion/blob/master/gym.csv) la base de datos con los 5876 registros 
* el csv tiene un formato names;month;day;year 
paso 2: Importar los datos utilizando MongoBooster

 var sports = ["motos","Futbol","Ciclismo", "Box", "Atletismo", "Natación", "Basket", "Tenis","Ciclismo", "Alterofilia","Volley" ]
 
  Math.floor(Math.random()*( sports.length - 0))+0 | crea numeros randomicos

 * var test = db.gym.find();
 * test.forEach( function(d){ d.joined= new Date( d.year,d.month,d.day ); db.gym.save(d); })
 * db.gym.update({},{$unset:{"year":"",day:"",month:""}}, {multi:true})
 ```Js
 
var Arraysports = ["motos","Futbol","Ciclismo", "Box", "Atletismo", "Natación", "Basket", "Tenis","Ciclismo", "Alterofilia","Volley" ]
var gymCollection = db.gym.find();
gymCollection.forEach((user)=> { 
    var ArraySport = [];
    for(var i=0;i<3;i++){
     var deporte = (Arraysports[Math.floor(Math.random()*( Arraysports.length - 0))+0]);
     var verifica=false;
        for(var j=0;j<ArraySport.length;j++){
             if(ArraySport[j]==deporte){
                 verifica = true;
                 break;
             }
        }
        if(!verifica){
            ArraySport.push(deporte) 
        }
    }
    user.sports = ArraySport;
    db.gym.update({"_id":user._id},user);

});


db.gym.findOne();
 ```