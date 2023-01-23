// const frm = document.querySelector("form");
// const resp = document.querySelector("h3");

// frm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const nome = frm.inNome.value;
//   const masculino = frm.inMasculino.checked;

//   const altura = Number(frm.inAltura.value);

//   let peso;
//   if (masculino) {
//     peso = 22 * Math.pow(altura, 2);
//   } else {
//     peso = 21 * Math.pow(altura, 2);
//   }

//   resp.innerText = `${nome}: Seu Peso ideal é ${peso.toFixed(2)}kg`;
// });

// frm.addEventListener("reset", () => {
//   resp.innerText = "";
// });

// const frm = document.querySelector("form");
// const resp = document.querySelector("pre");

// frm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const numero = Number(frm.inNumero.value);

//   let resposta = "";
//   for (let i = 1; i <= 10; i++) {
//     resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
//     // resposta = resposta + numero + "x" + i + "=" + numero * i + "\n";
//   }

//   resp.innerText = resposta;
// });

// let traco = " ";

// for (let i = 0; i <= 10; i++) {
//   document.write("<br/>");

//   for (let j = 0; j < 1; j++) {
//     if (traco) {
//       document.write((traco = traco + "-"));
//     }
//   }
// }

const frm = document.querySelector("form");
const resp1 = document.querySelector("#resultado");
const resp2 = document.querySelector("#mensagem");

let resposta = "";
let numContas = 0;
let valTotal = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inValor.value);

  numContas++;

  valTotal += valor;
  resposta += descricao + " - R$:" + valor.toFixed(2) + "\n";

  resp1.innerText = `${resposta} --------------------------------`;
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;

  frm.inDescricao.value = "";
  frm.inValor.value = "";
  frm.inDescricao.focus();
});
