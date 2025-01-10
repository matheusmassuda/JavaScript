function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        window.alert('[ERRO] informação incorreta, tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'image')
        img.setAttribute('style', 'display: block')
        img.setAttribute('style', 'margin: auto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', "foto-homem-crianca.png")
                document.body.style.background = 'rgb(184, 207, 240)'
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'foto-homem-adolescente.png')
                document.body.style.background = 'rgb(184, 207, 240)'
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'foto-homem-adulto.png')
                document.body.style.background = 'rgb(184, 207, 240)'
            } else {
                img.setAttribute('src', 'foto-homem-idoso.png')
                document.body.style.background = 'rgb(184, 207, 240)'
            }
            
        } else if  (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', "foto-mulher-crianca.png")
                document.body.style.background = 'rgb(247, 221, 243)'
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'foto-mulher-adolescente.png')
                document.body.style.background = 'rgb(247, 221, 243)'
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'foto-mulher-adulta.png')
                document.body.style.background = 'rgb(247, 221, 243)'
            } else {
                img.setAttribute('src', 'foto-mulher-idosa.png')
                document.body.style.background = 'rgb(247, 221, 243)'
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
