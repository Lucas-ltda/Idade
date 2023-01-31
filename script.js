function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()

    var fano = document.querySelector('input#idade')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > anoatual) {
        alert('[ERRO] ANO INVALIDO')
        }
        else
        {
                var fsex = document.getElementsByName('radsexo') //como são mais de um com o mesmo nome não pode usar o queryselector ou id.
            
                var img = document.createElement('img')//Cria uma tag IMG pelo proprio JavaScripto
                img.setAttribute('id','foto') //cria uma id para a imagem criada logo acima e nomeia o id com o nome foto

                var idade = anoatual - Number(fano.value)
                var genero=''

                if (fsex[0].checked) {
                    genero ='Masculino'
                    
                    if (idade >= 0 && idade <10) {
                        //criança
                        img.setAttribute('src','CM.png')
                    } else if (idade < 30) {
                        //jovem
                        img.setAttribute('src','JM.png')
                    } else if (idade < 50) {
                        //adulto
                        img.setAttribute('src','AM.png')
                    } else {
                        //idoso
                        img.setAttribute('src','VM.png')
                    } 

                }else if(fsex[1].checked){
                    genero='Feminino'
                    
                    if (idade >= 0 && idade <10) {
                        //criança
                        img.setAttribute('src','CG.png')
                    } else if (idade < 30) {
                        //jovem
                        img.setAttribute('src','JG.png')
                    } else if (idade < 50) {
                        //adulto
                        img.setAttribute('src','AG.png')
                    } else {
                        //idoso
                        img.setAttribute('src','IG.png')
                    } 
                }
                
                res.innerHTML = `Sexo: ${genero} e Idade : ${idade} anos`
                res.appendChild(img)
        }
}