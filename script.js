const h1 = document.querySelector('h1')
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

// No colocar parentesis, ya que se ejecutaria ahi mismo la funcion
form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event){
    event.preventDefault(); 
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

// console.log({
//     h1,
//     parrafito,
//     pid
// });

//Leer y Escribier desde JS

// h1.innerHTML = "Nuevo titulo <hr> InnerHTML"
// h1.getAttribute("class")
// h1.setAttribute("class", 'rojo')

// h1.classList.add('rojo')
// h1.classList.remove('verde')


// input.value = "456"

// const img = document.createElement('img')

// img.setAttribute('src', "https://images.pexels.com/photos/9839723/pexels-photo-9839723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

// pid.innerHTML = ""
// pid.append(img);