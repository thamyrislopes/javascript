function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        img.style.padding = '10px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //para aparecer a imagem
    }   
}
