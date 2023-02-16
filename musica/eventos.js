// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// document.write("Olá mundo! <br>");
// // document.write("Olá mundo! <br>");
// // document.write("Olá mundo! <br>");
// // document.write("Olá mundo! <br>");

// //início
// let numero = 1;

// while (numero <= 10) { //condição do término

//     document.write("Olá mundo! <br>")

//     numero = numero + 1; //passo, meio de transporte
// }

// // dança do creu
// document.write("<hr>");

// let n = 1;

// while (n <= 5) {
//     document.write("Agora na velocidade: " + n);

//     document.write("<br> Creu creu creu creu <br>");

//     n = n + 1;
// }

// document.write("<hr>");

// let num = 100; 

// while (num >= 1) {

//     document.write(num + "<br>");

//     //num = num + 1;
//     //num += 1;
//     num++; //mais mais so funciona se for p somar de um em um.
// }

// document.write("<hr>");

// let num = 100; 

// while (num >= 1) {

//     document.write(num + "<br>");

//     num--; //menos menos subtrai de um em um.
// }

// let d = 1;

// while (d <= 31) {
//     dia.innerHTML += '<option>' + d + '<option>'

//     d++;
// }

// let m = 0;
// let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
// while (m < 12) {
//     mes.innerHTML += '<option>' + meses[m] + '</option>'

//     m++;
// }

// let a = 2023;

// while (a >= 1970) { 
//     ano.innerHTML += '<option>' + a + '</option>'

//     a--;
// }

// também podemos usar
// for (let a = 2023; a >= 1950; a--) {
//     ano.innerHTML += '<option>' + a + '</option>';
// }

// array - agrupamento de valores
// let items = ["ovos", "uvas", "uvas"];

let produtos = [];

function adicionarItem(){
    produtos.push(item.value);
    localStorage.setItem("produtos", JSON.stringify(produtos))
    listarItems();
}

function listarItems(){
    let Items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if(items && items.length > 0){
        produtos = items;
        for(let i = 0; i < items.length; i++){
            lista.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
        }
    }
}

listarItems();
