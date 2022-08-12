console.log("Asincronicidad segunda terminal");
console.log("Segunda linea desde visual2")

let arreglo = ["ana", "eduardo", "sofia", "alberto", "gilberto"];

function mostrar(arreglo){
    for(let i=0; i<arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

mostrar(arreglo);

arreglo.forEach((elemento, indice, arreglo)=>{
    console.log(arreglo);
})

const function1 = () =>{
    console.log("Esta es la primera funcion");
}

const function2 = () =>{
    function1();
    console.log("Esta es la segunda funcion");
}

const funcion3 = () =>{
    function2();
    console.log("Esta es la tercera funcion");
}

funcion3();

//simulacion cuello de botella
console.log("Rodrigo");

setTimeout(()=>{
    return console.log("Rene");
}, 500);

var startTime = Date.now();
for(let i=0; i<9999999999; i++);
    var endTime = Date.now();
    console.log("Final");
console.log(endTime-startTime);