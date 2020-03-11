// Exercício 1

var boxElement = document.querySelector('.box');
var buttonElement = document.querySelector('#app button');

function addQuadrado(){
    
    var quadradoElement = boxElement.cloneNode();
    var quadrados = [ 
        quadradoElement.style.width = 100,
        quadradoElement.style.height = 100,
        quadradoElement.style.backgroundColor = '#f00',
        quadradoElement.onmouseover = function(){
            quadradoElement.style.backgroundColor = getRandomColor();
            }
    ]
   // document.body.insertBefore(quadradoElement, null);
    boxElement.appendChild(quadradoElement);


//Exercício 2

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
    var newColor = getRandomColor();


}
buttonElement.onclick = addQuadrado;

//Exercício 3

var nomes = ['Diego', 'Gabriel', 'Lucas'];

var listElement = document.querySelector('#app ul');

function mostrar(){
    listElement.innerHTML = '';
    var i;
    for(i = 0; i < nomes.length; i++){
        var todoText = document.createTextNode(nomes[i]);
        var todoElement = document.createElement('li');
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

mostrar();

//Exercício 4

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#button2');

function adicionar(){
    var todoText = inputElement.value;

    nomes.push(todoText);
    inputElement.value = '';
    mostrar();
}
