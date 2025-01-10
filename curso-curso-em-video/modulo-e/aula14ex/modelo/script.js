function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 ||  passo.value.length == 0) {
        window.alert('[ERRO] Fltam dados.')
    } else {
        res.innerHTML = 'Contando: <br>'
        let vi = Number(ini.value)
        let vf = Number(fim.value)
        let vp = Number(passo.value)
        if (vp <= 0) {
            window.alert('Passo inválido. Considerado PASSO = 1')
            vp = 1
        }
        if (vi < vf) {
            //Contagem crescente
            for(let c = vi; c <= vf; c += vp) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem descrescente
            for(let c = vi; c >= vf; c -= vp) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}