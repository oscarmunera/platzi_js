//Código del cuadrado

function perimetroCuadrado(lado) {
    return lado*4;
};
function areaCuadrado(lado){
    return lado * lado;
};
//Código del triángulo
function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
//Código del círculo

function diametroCirculo(radio) {
    return radio * 2;    
}
//pi
const PI = Math.PI;
//circunferencia
function perimetroCirculo(radio){
  const diametro =diametroCirculo(radio);
    return diametro*PI;
}
//área del círculo
function areaCirculo (radio){
    return (radio*radio)*PI;
}


function calcularPerimetroCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}