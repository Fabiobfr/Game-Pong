//variáveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('LightBlue');
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  

  
  
function mostraBolinha (){ 
  circle(xBolinha,yBolinha,diametroBolinha)  
}

function movimentaBolinha (){  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda (){ 
  if (xBolinha + raio > width || xBolinha - raio < 0) 
    velocidadeXBolinha *= -1;                        
  
  if (yBolinha + raio > height || yBolinha - raio <0) 
    velocidadeYBolinha *= -1;

}
  
function mostraRaquete (x,y){
   rect(x, y, raqueteLargura, raqueteAltura);
}

function movimentaRaquete(){
  
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  } 
}
  
function verificaColisaoRaquete(){
  //console.log(xBolinha + raio)
  if (xBolinha - raio < xRaquete + raqueteLargura && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
    velocidadeXBolinha *= -1;
  
else if (xBolinha + raio >= xRaqueteOponente && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente)
    velocidadeXBolinha *= -1;
  
}  
  
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteLargura / 2 - 80
  yRaqueteOponente += velocidadeYOponente
  
  
} 

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize (16);
  fill('darkOrange')
  rect (130, 10, 40, 20);
  fill (255);
  text(meusPontos, 150, 26);
  fill('darkOrange');
  rect(430, 10, 40, 20);
  fill (255);
  text(pontosOponente, 450, 26);
  
  
  
}  
  
function marcaPonto(){
if (xBolinha > 590){meusPontos += 1}
  
if (xBolinha < 10){pontosOponente += 1}
  
  
}
  

}  