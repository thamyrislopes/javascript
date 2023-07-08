function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO: Complete os dados!')
      } else {
        res.innerHTML = 'Contagem: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
          p = 1
        }
    
        if ( i < f){
            // Contagem crescente
        for (let c = i; c <= f; c+=p){
         res.innerHTML += `${c} \u{1F449}`
       }
      } else {
            // Contagem regressiva
          for(let c = i; c>= f ; c-= p){
            res.innerHTML += `${c} \u{1F449}`
          }
      }
      res.innerHTML += `\u{1F3C1}`

    }
}