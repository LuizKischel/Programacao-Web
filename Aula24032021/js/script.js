$.ajax('https://api.giphy.com/v1/gifs', {
                type: 'GET',
                data: dados,
                success: function(_dados){
                    console.log(_dados)
                    mostrarDados([_dados])
                    alert('Sucesso!!!')
                },
                error: function(){
                    alert('Erro!!!')
                }
            }) 