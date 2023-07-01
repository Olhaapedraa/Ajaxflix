const carregaFilme = filme => {
    let generos = filme.generos.join(', ');

    let elenco = filme.elenco.join(', ');

    let classificacao = idade(filme.classificacao)

    let estrelas = carregaestrela(filme.opinioes[0].rating)

    let resp =  ` <div class="fil">
    <h1 class="titulofil">${filme.titulo}</h1>
    <div class="imagem">
    <img src="${filme.figura}" alt="#">
    </div>
    <p class="resumo">${filme.resumo}</p>
    <br>
    <h2>Gêneros: </h2> <p class="gender">${generos}</p>
    <hr>
    <h2>Elenco: </h2>
    <p class="elenco">${elenco}</p>
    <p class="classificacao">${classificacao}</p> 
    <p class="stars">${estrelas}</p>
    <p></p>
    </div> `
    const divResp = document.querySelector(".filmes")
        divResp.innerHTML += resp
}

const carregaestrela = opiniao => {
    switch(opiniao){
        case 3:{
            avaliacao = `
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelavazia.jfif" alt=""  width="20px" height="20px"><img>
            <img src="estrelavazia.jfif" alt=""  width="20px" height="20px"><img>
            `
        }
        
        case 4:{
            avaliacao = `
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelavazia.jfif" alt=""  width="20px" height="20px"><img>
            `;
        } break;
        
        case 5:{
            avaliacao = `
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            <img src="estrelafull.jfif" alt="" width="20px" height="20px"><img>
            `
        }
    }
    return avaliacao;
}

const idade = classificacao => {
    if (classificacao == 0)
    return `<p class="boxv">L</p>`
    else if (classificacao == 10)
    return `<p class="boxv">10</p>`
    else if (classificacao == 12)
    return `<p class="boxv">12</p>`
    else if (classificacao == 14)
    return `<p class="boxv">14</p>`
    else if (classificacao == 16)
    return `<p class="boxa">16</p>`
    else if (classificacao == 18)
    return `<p class="boxverme">18</p>`
}

const xhttp = new XMLHttpRequest()
const url = `https://rafaelescalfoni.github.io/desenv_web/filmes.json`

xhttp.open("get", url)
xhttp.send()
xhttp.onreadystatechange = function() {
    if(this.readyState == 4) {
        if(this.status == 200) {
            let resposta = this.responseText
            let filme = JSON.parse(resposta)
            filme.forEach(filmes => {
                carregaFilme(filmes)
            })
        } else {
            //Deu merda irmão
        }
    }
}

