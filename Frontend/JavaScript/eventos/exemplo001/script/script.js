// Eventos de mouse click - mouseleave - mousedown
const botao = document.getElementById("btn-click");
botao.addEventListener("click",function(){
   document.getElementById("info").style.display = "block";
})

const botaoMudarCor = document.getElementById("btn-mudar-cor");
botaoMudarCor.addEventListener("mouseover",function(){
   botaoMudarCor.style.backgroundColor = "black";
   botaoMudarCor.style.color = "white";
}
)
botaoMudarCor.addEventListener("mouseleave",function(){
   botaoMudarCor.style.backgroundcolor = "blue";
})



// Eventos de teclado 

// Eventos de botão 