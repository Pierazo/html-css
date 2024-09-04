function carregar() {
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6) {
        imagem.src = 'fotoNoite.jpg';
    } else if (hora >= 6 && hora < 12) {
        imagem.src = 'fotoManha.jpg';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fotoTarde.jpg';
    } else {
        imagem.src = 'fotoNoite.jpg';
    }
}


