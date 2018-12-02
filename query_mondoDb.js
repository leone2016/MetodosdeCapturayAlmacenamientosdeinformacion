
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