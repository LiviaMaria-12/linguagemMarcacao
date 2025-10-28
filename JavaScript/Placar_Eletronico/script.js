function ponto1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    pt1++
    placar.innerHTML = pt1
}

function zerar1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    pt1 = pt1 - pt1
    placar.innerHTML = pt1
}

function diminuir1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    if(pt1 > 0){
        pt1--
    }
    placar.innerHTML = pt1
}

function ponto2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    pt2++
    placar.innerHTML = pt2
}


function zerar2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    pt2 = pt2 - pt2
    placar.innerHTML = pt2
}

function diminuir2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    if(pt2 > 0){
        pt2--
    }
    placar.innerHTML = pt2
}

function pontobasquete1(ponto){
    var placar = document.querySelector("#ct1")
    var pontoTela = Number(placar.innerHTML)
    pontoTela = pontoTela + ponto
    placar.innerHTML = pontoTela
}

function pontobasquete2(ponto){
    var placar = document.querySelector("#ct2")
    var pontoTela = Number(placar.innerHTML)
    pontoTela = pontoTela + ponto
    placar.innerHTML = pontoTela
}

function zerarTudo1(){
    var placar = document.querySelector("#ct1")
    var ct1 = Number(placar1.innerHTML);
    ct1 = 0
    placar1.innerHTML = ct1
}

