const resp = document.querySelector("#resposta")
let btnNao = document.querySelector("#btn-2")

function viado() {
    let lista = ['right','top', 'bottom', 'left']
    let n = Math.random(0, 3);
    console.log(n)
    console.log(lista[0])
    let m = Math.floor(Math.random() * 700)
    let o = Math.floor(Math.random() * 700)
    let p = Math.floor(Math.random() * 700)
    let l = Math.floor(Math.random() * 700)
    btnNao.style.rigth = m + 'px'
    btnNao.style.top = o + 'px'
    btnNao.style.left = p + 'px'
    btnNao.style.bottom = l + 'px'
}

function viadoSim(n) {
    if(n) {
        resp.removeAttribute('hidden')
    }
}