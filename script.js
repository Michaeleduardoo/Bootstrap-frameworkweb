const second = document.getElementById("second")
const caixaPrincipal= document.getElementById("caixa-principal")
const oneNav = document.getElementById("oneNav")
const textoWeb = document.querySelector("#texto-web")
const textoWb = document.querySelector("#OqueE")
const paragrafo=document.querySelector("#paragrafo-bootstrap")
const concorrentes =document.querySelector("#concorrentes")
const namesH6 = document.querySelector("#lançamento-h6 ")
const desenvolvedor = document.querySelector("#desenvolvedor-h6")
const escrito = document.querySelector("#escrito-h6")
const compatibilidade = document.querySelector("#compatibilidade-h6")
const footer = document.querySelector("#footer")
const button = document.querySelector("#button-inf")


const first = document.getElementById("first")


second.addEventListener("click", () =>{

    oneNav.style.background= "#836FFF"
    caixaPrincipal.style.background= "#7634FA"
    textoWeb.style.color= "#fff"
    textoWb.style.color= "#fff"
    paragrafo.style.color= "#fff"
    concorrentes.style.color ="#fff"
    namesH6.style.color="#fff"
    desenvolvedor.style.color="#fff"
    escrito.style.color="#fff"
    compatibilidade.style.color="#fff"
    footer.style.background= "#836FFF"
    button.style.background= "#836FFF"
})

first.addEventListener("click", () =>{

    oneNav.style.background= "#1E063A"
    caixaPrincipal.style.background= "#AC5AF7"
    textoWeb.style.color= "#212529"
    textoWb.style.color= "#212529"
    paragrafo.style.color= "#212529"
    concorrentes.style.color ="#212529"
    namesH6.style.color="#212529"
    desenvolvedor.style.color="#212529"
    escrito.style.color="#212529"
    compatibilidade.style.color="#212529"
    footer.style.background= "#1E063A"
    button.style.background= "#1E063A   "
})