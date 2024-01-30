var footer = document.getElementById('footer-obj');

var header = document.getElementById('header-obj');

// Verifica se o elemento <object> foi encontrado
if (header) {
    // Verifica se o conteúdo do <object> foi carregado
    header.addEventListener('load', function () {
        // Acessa o documento de objeto incorporado (Iframe)
        const iframeDocument = header.contentDocument || header.contentWindow.document;

        // Seleciona a tag desejada dentro do documento de objeto incorporado
        const tag = iframeDocument.querySelector('#contato');

        tag.addEventListener('click', async function(){
            footer.scrollIntoView({behavior:"smooth"});
        })
    });
} else {
    console.log('Elemento <object> não encontrado');
}