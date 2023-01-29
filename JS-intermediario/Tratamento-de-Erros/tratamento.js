//site qualquer

var vidio = Array()

vidio[1] = Array()
vidio[1] = 'One piece'
vidio[1]['Categoria'] = 'Anime'

function getVidio(vidio){

    try{
        //logia
        //http
        console.log(vidio[0]['nome'])
    }
    catch(e){
        console.log('Agora sim podemos tratar o erro')
        throw Error('Não se preocupe, estamos trabalhando no problema :)')
    }

    finally{
        console.log('Sempre passa por aqui try/catch')
    }

    console.log('A aplicação não morreu')
}

getVidio(vidio)