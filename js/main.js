
function load() {
    alert("Página carregada");
}


function clicar(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}

function redirecionar(){
    window.open("http://google.com"); //nova aba
    window.location.href = "http://google.com"; //mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Teste");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1+n2;
}

    var validar = 0; //Global
function validarIdade(idade){
    validar; //Local se declarado
   
    if (idade>=18){
        validar = true;
    } else {
        validar = false;
    }
return validar;

}

var idade = prompt("Qual sua idade?");
//console.log(validarIdade(idade));
validarIdade(idade)
console.log(validar);


*/
/*
var d = new Date();
alert("Mês: " + (d.getMonth()+1));
alert("Dia: " + d.getDay()); //Dia da semana?
alert("Hora: " + d.getHours());
alert("Minutos: " + d.getMinutes());

*/


/*

for(count = 0; count <=5;count++) {
    alert(count);
}
*/

/*
var count = 0;
while (count<5) {
    alert(count);
    count++;
}

*/

/*
var idade = prompt("Qual sua idade?: ");

if (idade>=18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/




//var frutas = [{nome: "Maçã", cor: "Vermelho"}, {nome: "Uva", cor: "Roxo"}];
//console.log(frutas);

//var fruta = {nome: "Maçã", cor: "Vermelho"}
//console.log(fruta.nome);
//alert(fruta.cor);

//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));







/* var nome = "Vmjlol";
var idade = 30;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert("Olá " + nome + ", você tem " + idade + " anos");
//alert(idade+idade2)
console.log(nome);
console.log(idade*idade2);
console.log(frase.replace("Japão", "Brasil"));
*/