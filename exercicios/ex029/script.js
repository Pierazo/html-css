function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6) {
        imagem.src = 'fotoNoite.jpg';
        document.body.style.background = '#140523'
    } else if (hora >= 6 && hora < 12) {
        imagem.src = 'fotoManha.jpg';
        document.body.style.background = '#FFC64C';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fotoTarde.jpg';
        document.body.style.background = '#f0a500';
    } else {
        imagem.src = 'fotoNoite.jpg';
        document.body.style.background = '#140523'
    }
}


