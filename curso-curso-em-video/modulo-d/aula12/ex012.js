var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora(s).`)
if (hora >= 0 && hora <=5) {
    console.log('Boa madrugada!')
} else if (hora < 13) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Hora inválida')
}

/*Para avaliar a madrugada TEMOS que começar as condições pela madrugada, pois se coloco uma condição (hora <12) e no final do código uma condição (hora > 0 && hora <6), esta não consegue ser avaliada pois aquela intercepta e avalia valores que também são compreendidos na madrugada. Ela faz a análise primeiro

Além disso terminando com a última expressão (apenas else) garantimos que tudo que não está compreendido retornará o resultado “hora inválida” caso o usuário digite algo errado ou uma hora inexistente.*/

/* ----------------- COMANDO NEW DATE()
var t = new Date()
var agora = t.getHours()
var data = t.getDate()
var mes = t.getMonth() + 1
var ano = t.getFullYear()
var dia_sem = t.getDay()

console.log(`Olá! Agora são ${agora} horas, do dia ${data} de ${mes} de ${ano}. Hoje é uma(um) ${dia_sem} `)

get.Date () > retorna o dia do calendário (1 até 31)
get.Day () > retorna dia da semana com valores 0=domingo, 1=segundo e assim por diante
get.Month () > retorna valor para mês janeiro=0, fevereiro=1, então é aconselhado somar "+1" no final para retornar mês exato


*/