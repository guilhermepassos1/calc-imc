function resultado() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    const IMC = peso / (altura * altura);

    let resultadoNaTela;
    let classe_resultado;

    if (IMC < 15.99) {
        resultadoNaTela = "Magreza Grave";
        classe_resultado = "magreza-grave";
    } else if (IMC >= 16 && IMC <= 16.9) {
        resultadoNaTela = "Magreza Moderada";
        classe_resultado = "magreza-moderada";
    } else if (IMC >= 17 && IMC <= 18.5) {
        resultadoNaTela = "Magreza leve";
        classe_resultado = "magreza-leve";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        resultadoNaTela = "Saudavel";
        classe_resultado = "saudavel";
    } else if (IMC >= 25 && IMC <= 29.9) {
        resultadoNaTela = "Sobrepeso";
        classe_resultado = "sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.9) {
        resultadoNaTela = "Obsidade Grau 1";
        classe_resultado = "obesidade1";
    } else if (IMC >= 35 && IMC <= 39.9) {
        resultadoNaTela = "Obsidade Grau 2 (severa)";
        classe_resultado = "obesidade2";
    } else if (IMC >= 40) {
        resultadoNaTela = "Obsidade Grau 3 (morbida)";
        classe_resultado = "obesidade3";

    }
    document.getElementById("resultado1").innerHTML = "IMC :" +IMC + "<br>";
    document.getElementById("resultado2").innerHTML =resultadoNaTela;
    document.getElementById("resultado2").className = classe_resultado;

}