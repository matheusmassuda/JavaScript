function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var horaatual = data.getHours()
    //var horaatual = 12
    msg.innerHTML = `Agora são(é) ${horaatual} horas.`
    if (horaatual >= 0 && horaatual < 13) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#DDA158'
    } else if (horaatual >= 13 && horaatual < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#959689'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#09161C'
    }
}

