const idade1 = 1;

if (idade1 >= 18){ 
    console.log("maior de idade");
} else if(idade1 <= 17 && idade1 > 0) {
    console.log("menor de idade");
} else{
    console.log("idade inválida");
}

console.log("Escolha uma matéria: \n1 - Educação Física; \n2 - Geografia; \n3 - Português; \n4 - Química.")

const materia = "1";

switch(materia){
    case "1":
        console.log("muito top");
        break;
    case "2":
        console.log("mais ou menos");
        break;
    case "3":
        console.log("pessimo");
        break;
    case "4":
        console.log("hard")
        break;
    default:
        console.log("Matéria Indisponivel")
}

const idade = -6;

if (idade >= 60){ 
    console.log("Idoso");
} else if(idade < 60 && idade >= 18) {
    console.log("Adulto");
} else if(idade < 18 && idade >= 13) {
    console.log("Adolescente");
} else if(idade < 13 && idade >=0) {
    console.log("Criança");
} else if(idade < 0)
    console.log("Idade Inválida");

const pontos = 2000
const anosDeCliente = 3

if(pontos >= 1000 && anosDeCliente >= 1) {
    console.log("Diamante");
} else if(pontos < 999 && pontos >= 500) {
    console.log("Ouro");
} else if(pontos < 500 && pontos >= 100) {
    console.log("Prata");
} else if(pontos < 100 && pontos >= 0) {
    console.log("Bronze")
}
    console.log("Idade Inválida");
