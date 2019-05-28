// Rover Object Goes Here
// ======================
var rover = {
  direction: ["N", "S", "E","W"],
  x: 0,
  y: 0,
  travelLog:[],
}

// ======================
// variables cardinales
var direN = "N";
var direS = "S";
var direE = "E";
var direW = "W";
var direActual = 0; // y sino lo ponemos en Norte

//=========================
// Límites del Marte
var limiteX = 10;
var limiteY = 10;

//=======================
var movForward = "f";
var movBack = "b";
var giroDerecha = "l";
var giroIzquierda = "r";

//=======================
// aqui va Marte
var mars = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

// Para visualizar Mars (Marte):
// console.log(mars.join('\n') + '\n\n');


//==============================
// PARA VER LOS MOVIMIENTOS CREAMOS LA MATRIZ MARTE 2
var mars2 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];



function turnLeft(rover){
  console.log("El rover ahora está mirando hacia el: " + rover.direction);
  for(i = 0; i < rover.direction.length; i++){
  if(rover.direction === direN){    //quito los [] de rover.direction
    direActual = "W";
    console.log("El rover ahora está mirando hacia el: " + direActual);
  } else if(rover.direction === direW){
    direActual = "S";
    console.log("El rover ahora está mirando hacia el: " + direActual);
  } else if(rover.direction === direS){
    direActual = "E";
    console.log("El rover ahora está mirando hacia el: " + direActual);
  } else if(rover.direction === direE){
    direActual = "N";
    console.log("El rover ahora está mirando hacia el: " + direActual);
  } 
}
}

function turnRight(rover){
  console.log("El rover ahora está mirando hacia el: " + rover.direction);
  for(i = 0; i < rover.direction.length; i++){
    if(rover.direction === direN){    //quito los [] de rover.direction
      direActual = "E";
      console.log("El rover ahora está mirando hacia el: " + direActual);
    } else if(rover.direction === direE){
      direActual = "S";
      console.log("El rover ahora está mirando hacia el: " + direActual);
    } else if(rover.direction === direS){
      direActual = "W";
      console.log("El rover ahora está mirando hacia el: " + direActual);
    } else if(rover.direction === direW){
      direActual = "N";
      console.log("El rover ahora está mirando hacia el: " + direActual);
    } 
  }
}

function moveForward(rover){
  console.log("El rover ahora está en las coordenadas: (" + rover.x + "," + rover.y + ")");
 
  //Iteración de la matriz mars para saber la posición del rover
  for (var i = 0; i < mars.length; i++){
       var row = mars[i];
    for (var j = 0; j < row.length; j++){
      var column = row[j];
      if (column === "R"){   //Pongo R en vez del nombre del rover
        console.log("El rover ahora está en las coordenadas: (" + i + ", " + j ")");
      }
    }
  }
  
  if(rover.direction === direN && rover.y > 0){
    rover.y -= 1;
  } else {
    rover.y = 0;
  } else if(rover.direction === direE && rover.x < limiteX){
    rover.x += 1;
  } else {
    rover.x = limiteX;
  } else if(rover.direction === direS && rover.y < limiteY){
    rover.y += 1;
  } else {
    rover.y = limiteY;
  } else if(rover.direction === direW && rover.x > 0){
    rover.x -= 1;
  } else {
    rover.x = 0;
  }
  console.log("El rover ahora está en las coordenadas: (" + rover.x + "," + rover.y + ")");
}

//================
// Funcion de Lista de Comandos y Tracking

function ListaComandos(movimiento) {
  for(var lista = 0; lista <= movimiento.length - 1; lista++){
    if(movimiento = f){
      moveForward(rover); //llamamos a la función
      console.log("El rover se mueve hacia adelante");
    } else if(movimiento = l){
      turnLeft(rover);
      console.log("El rover está girando hacia la derecha");
    } else if(movimiento = r){
      turnRight(rover);
      console.log("El rover está firando hacia la izquierda")
    }
  } console.log("Las coordenadas del rover son: " + rover.x + "," + rover.y + ")");
  rover.travelLog.push(rover.x + "," + rover.y);
}
