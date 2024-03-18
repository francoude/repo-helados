//let firstName = "  franco ";
//let secondName = "javier";
//et fullName = firstName.concat(secondName)
//console.log(fullName)


//firstName += " aprendiendo";
//console.log(firstName)

//console.log(firstName.length)

//console.log(firstName.toLocaleLowerCase());
//console.log(firstName.toUpperCase());

//console.log(firstName.slice(1,3));

//console.log(firstName.split("").join("-"));

//console.log(firstName.includes("n"));

//console.log(firstName.trim());


//let fullName = `${firstName} ${secondName} quiero aprender a programar `;
//console.log(fullName);

//let actorFavorito = "  franco ";
//let actorLassFavorito = "flores";
//let fullName = actorFavorito + " " + actorLassFavorito;
//let toUpperCase = actorFavorito.toUpperCase();
//let message = `mi actor favorito es ${fullName.toUpperCase()} que no le afloja a este nuevo mundo`
//console.log(actorFavorito);
//console.log(actorLassFavorito);
//console.log(fullName);
//console.log(toUpperCase);
//console.log(message);



//let money = "50";

//money = money.toString()
//console.log(money)
//console.log(typeof money)
/*let time = 20;

if (time <= 13 && time > 7 ){
         greetings = "buenos dias";
         console.log(greetings);
} else if(time > 13 && time < 19){
    greetings = "buenas tardes";
    console.log(greetings);
}else if (time > 19 && time < 24){
    greetings = "buenas noches gente";
    console.log(greetings);
}*/

/*let password = 5;
if (password == 8){    
       console.log("bienvenidos");
} else if ( password <= 8){
    console.log(" passwoord is too short");
} else if ( password >= 8){
    console.log( "too long password");
    console.log("password should be 8 characters")
} else {
    console.log("please provide a password")
}*/

/*let fruit = "ap";

switch (fruit){
    case "banana":
        console.log("banana is good!");
        break;
    case "orange":
        console.log(`i am not a fan of orange`);
        break;
    case "apple":
        console.log("how you like them apple?");
        break;
        default:
        console.log("i have never heard of that fruit");
}*/


/*let usuarios = [
    {nombre: "franco", puntaje: 39},
    {nombre: "julieta", puntaje: 31},
    {nombre: "ramiro", puntaje: 17},
    {nombre: "abrojito", puntaje: 1}
];


for ( let i = 0; i < usuarios.length; i++){
    document.write("----" + "</br>");
    document.write(usuarios[i].nombre +"<br>");
    document.write(usuarios[i].puntaje + "<br>");
}*/


/*let numero = parseInt(prompt("ingrese un numero"));
for (let i = 1 ; i < 10; i++){
    let multi = numero * i;
    document.write(numero + "x" + i + " = " + multi +  "<br>");
}*/
  /* function usuario(nombre, edad, trabajo){
   return {
    nombre: nombre,
    edad: edad,
    trabajo: trabajo,
   };
   }
const franco = usuario("franco", 39, "comercio");
console.log(franco)*/

/*const cuenta={
    suma: (a,b) => a * b,
    resta: (a, b) => a - b,
};
console.log(cuenta.suma(2, 3));
console.log(cuenta.resta(2, 3));*/

/*const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener(`click`, function(e){
    let hexcolor = "#";
    for( let i = 0; i < 6; i++){
        hexcolor += hex[getRandomNumber()];
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;

});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}*/

/*let count = 0;


let value = document.querySelector ( "#value");
let btns = document.querySelectorAll (".btn");

btns.forEach( function(btn){
    btn.addEventListener("click", function(e){
const styles = e.currentTarget.classList;
if (styles.contains(`decrese`)){
    count--;
} else if (styles.contains(`increase`)){
    count++;
} else {
    count = 0;
} if (count > 0){
value.style.color = "red"
} if (count < 0){
    value.style.color = "green"
} if (count == 0){
    value.style.color = "black"
}
 value.textContent = count;
    });
});*/
/*
const reviews = [{
    id: 1,
    name: "Franco Flores",
    job:"queriendo llegar",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7A-JZ_vubN02XMcvZC2Tk5cUM5N3Bo4ATdxsubiyzMzrNI_Wfd1iJez5iyyJ8a3scvZA&usqp=CAU",
    text:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae qui quam aperiam sint nemoad ullam, reprehenderit ex placeat mollitia illo atque soluta ipsam dignissimos! Quidem minimaperferendis officia.Alias iure nostrum nemo provident optio repellat?"

},
{
    id: 2,
    name: "Ramiro Flores",
    job:"quiero lo mejor",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mKN5Ubo4DgugrAI70aRs1V1IZoPa62njzvVFoo2EN5lZtSR2zen8zz29u0jqY4EOMNw&usqp=CAU",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae qui quam aperiam sint nemoad ullam, reprehenderit ex placeat mollitia illo atque soluta ipsam dignissimos! Quidem minimaperferendis officia.Alias iure nostrum nemo provident optio repellat?"
  
},
{
    id: 3,
    name: "julita Pintos",
    job:"falta poquito",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7I--mffqWcEdPs8iLly_6yFbmKL1ZWBmPg&usqp=CAU",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae qui quam aperiam sint nemoad ullam, reprehenderit ex placeat mollitia illo atque soluta ipsam dignissimos! Quidem minimaperferendis officia.Alias iure nostrum nemo provident optio repellat?"
 
},
{
    id: 4,
    name:"mama",
    job:"queriendo llegar",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKKomM_wJWPMdNJXB-oJopk8mDuvNcU7THw&usqp=CAU",
    text:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae qui quam aperiam sint nemoad ullam, reprehenderit ex placeat mollitia illo atque soluta ipsam dignissimos! Quidem minimaperferendis officia.Alias iure nostrum nemo provident optio repellat?"

}
];

const img = document.getElementById("persona-img"),
      author = document.getElementById("author"),
      job = document.getElementById("job"),
      info = document.getElementById("info");


      const prevBtn = document.querySelector(".prev-btn"),
      nexBtn = document.querySelector( ".nex-btn"),
      randomBtn = document.querySelector(".random-btn");


      let currentItem = 0;


      window.addEventListener("DOMContentLoaded", function(){
        showPerson(currentItem);
      });


      function showPerson(){
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
      }

nexBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});



prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});
randomBtn.addEventListener("click", function(){
currentItem = Math.floor(Math.random() * reviews.length)
showPerson()
});*/



  /*---codigo de navegacion---


 const bars = document.querySelector(".bars");
 const navBar = document.querySelector(".nav-bar");


        bars = document.addEventListener("click", function (){
            navBar.classList.toggle("active");
        });*/
/*const puntaje = 1000;
if (puntaje == 1000){
    console.log("es igual");
}  else if (puntaje >= 1000){
    console.log("es mayor")
} else {
    console.log("es menos")
}*/


/*const carritoDeCompras = [
    {nombre: "clavo", precio: "250"},
    {nombre: "tornillos",  precio: "550"},
    {nombre: "pegamento",  precio: "450"},
    {nombre: "disco de corte", precio: "300"},
    {nombre: "tenasa", precio: "600"},
    {nombre: "lija", precio: "750"},
];

carritoDeCompras.forEach(productos=> console.log(productos.nombre));

const arreglo = carritoDeCompras.map(productos => `${productos.nombre} - ${productos.precio}`);
console.log(arreglo);

/*for (let i = 0; i < carritoDeCompras.length; i++){
    console.log(carritoDeCompras[i].precio);
}*/
 /* let i = 0;  
 do{
    console.log(carritoDeCompras[i])
    i++;
 }while(i < carritoDeCompras.length);*/

 /*let i = 0;
 
while(i< carritoDeCompras.length){
    console.log(carritoDeCompras[i].precio)
    i++;
}*/
/*

sirve para iterar en un array.
carritoDeCompras.forEach(producto => {
    console.log(producto.nombre)
});

sirve para crear nuevos arreglos.
carritoDeCompras.map(producto => {
    console.log(producto.nombre)
});*/

/*
la funcion flecha " ()=> "   - busca una ventana global, no es recomendable para el this.
se llama con (window.nombre;) pero por fuera del const;

const entradas = {
    nombre: 'ramiro',
    apellido: 'flores',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`el sr ${this.nombre} pago el total de ${this.total} en voleteria`);
    }
}
entradas.informacion();*/

/*


los prototype

function Producto(nombre, precio, años) {
        this.nombre = nombre;
        this.precio = precio;
        this.años = años;
    }


Producto.prototype.formatearProducto = function() {
    return `el producto ${this.nombre} tiene un valor de: $ ${this.precio}, fue cerada en el ${this.años}`;
}

const producto2 = new Producto('bicicleta rod 19', 48000, 2024);
const producto3 = new Producto('bicicleta de mujer rod 26', 67000, 2024);




console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );*/






/*herencias, usaremos la class persona para heredar otra class y no ser repetitivo...


class Persona{
    constructor(nombre, apellido, doctor, hora, afiliado){
this.nombre = nombre;
this.apellido = apellido;
this.doctor = doctor;
this.hora = hora;
this.afiliado = afiliado;

    }
    /// PADRE......... osea toda la linea completa que existe en el return en este ejemplo...
    formatearProducto(){
        return `El sr ${this.nombre} ${this.apellido} tiene turno con el dr ${this.doctor} a las  ${this.hora} horas.`;
    }
}

class clientes extends Persona{
    constructor(nombre, apellido, afiliado){
        super(nombre,apellido);
        this.afiliado = this.afiliado;
}
//con el super.fromt() = evitamos ensamplar algo que esta repetido en el padre.
 return `${super.formatearProducto()} y es ${this.afiliado}`; 
}

const cliente = new Persona('ramiro', 'javien', 19909000)
const pesrsona = new Persona('franco', 'flores', 'de la torre', 1800,);

console.log(pesrsona.formatearProducto() );
console.log(cliente.formatearProducto() );*/



/*const btnEnviar = document.querySelector('.boton--primario--btn');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento)
    evento.preventDefault();

    console.log('enviar formulario...');
});*/



//--------------------------------------------validar formulario-------------------------------->

//funcion en forma global 
const datos = {
    nombre : '',
    email: '',
    mensaje: ''
}   


const nombre = document.querySelector("#nombre"),
      email = document.querySelector("#email"),
      mensaje = document.querySelector("#mensaje");
      formulario = document.querySelector('.formulario');


      nombre.addEventListener('input', leerTexto);
      email.addEventListener('input', leerTexto);
      mensaje.addEventListener('input', leerTexto);

      //evnto submit
      formulario.addEventListener('submit', function(e){
        e.preventDefault();
    
    
        //validar formulario

const {nombre,email, mensaje} = datos;
console.log(nombre);
console.log(email);
console.log(mensaje);

if (nombre == "" || email == "" || mensaje == ""){
mostrarAlerta("todos los campos estan vacios.", true)

return;
}


//crear alerta de enviar mensaje correctamente.
mostrarAlerta("el formulairo se envio correctamente");

    });


    //muestra una alerta envio correcto.
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
   

    formulario.appendChild(alerta);
 //alerta desaparecera en 5 segundo.
setTimeout(() => {
        alerta.remove();
    }, 5000);
}
 //enviar formulario
 function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
  }
