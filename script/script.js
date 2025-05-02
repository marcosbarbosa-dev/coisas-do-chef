let item1 = document.querySelector('#item1')
let itemCard1 = document.querySelector('#itemCard1')
let item2 = document.querySelector('#item2')
let itemCard2 = document.querySelector('#itemCard2')
let item3 = document.querySelector('#item3')
let itemCard3 = document.querySelector('#itemCard3')
let item4 = document.querySelector('#item4')
let itemCard4 = document.querySelector('#itemCard4')
let item5 = document.querySelector('#item5')
let itemCard5 = document.querySelector('#itemCard5')
let item6 = document.querySelector('#item6')
let itemCard6 = document.querySelector('#itemCard6')
let showCard = document.querySelector('.showCard')
let linkDirect = document.querySelector('#linkDirect')
let inputQnt = document.querySelector('#inputQnt')
let aviso = document.querySelector('#aviso')

item1.addEventListener('mouseover', ()=> {
    itemCard1.classList.add('displayCard')
    itemCard1.addEventListener('mouseout', ()=> {
        itemCard1.classList.remove('displayCard')
    })
    if(inputQnt.value == '') {
        fazerPedidoBtn.setAttribute('disabled', '')
    }
})
itemCard1.addEventListener('click', ()=> {
    openModal()
    titleModal.innerHTML = 'Carne Serenada - Largato'
    contentModal.innerHTML = '<p>Consiste em um tipo de carne bovina que é seca no sereno, muito comum no Norte de Minas, cujo modo de produção está desaparecendo. O sereno é apenas o orvalho da noite que aproveitamos como parte do processo para dar sabor e paladar a carne de sol (serenada).<br><span id="valor">R$: 26,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/serenada.png'  
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'item1' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')            
        }
    })
})

item2.addEventListener('mouseover', ()=>{
    itemCard2.classList.add('displayCard')
    itemCard2.addEventListener('mouseout', ()=> {
        itemCard2.classList.remove('displayCard')
    })
})
itemCard2.addEventListener('click', ()=> {
    openModal()
    titleModal.innerHTML = 'Linguiça Cuiabana com Queijo Coalho'
    contentModal.innerHTML = '<p>Produzida com os melhores cortes suínos, a Linguiça Cuiabana bovina coisas do chef é  uma famosa iguaria que leva coalho e temperos especiais em sua receita. Essa tradicional linguiça é muito suculenta e tem um sabor e identidade diferenciados, ideal para tornar seu churrasco ainda mais gostoso.<br><span id="valor">R$: 27,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/cuiabana.png'
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'de%20item2' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
            fazerPedidoBtn.style.backgroundColor = '#0ae215'
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')
            fazerPedidoBtn.style.backgroundColor = '#08970f'
        }
    })
})

item3.addEventListener('mouseover', ()=>{
    itemCard3.classList.add('displayCard')
    itemCard3.addEventListener('mouseout', ()=> {
        itemCard3.classList.remove('displayCard')
    })
})
itemCard3.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Linguiça de Frango'
    contentModal.innerHTML = '<p>A linguiça de frango coisas do chef é feita com temperos especiais e a suculencia da  Sobrecoxa de frango e o toque secreto do chef que dar o sabor ao seu prato.<br><span id="valor">R$: 22,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/frango.png'
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'Teste%202' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')
        }
    })
})

item4.addEventListener('mouseover', ()=>{
    itemCard4.classList.add('displayCard')
    itemCard4.addEventListener('mouseout', ()=> {
        itemCard4.classList.remove('displayCard')
    })
})
itemCard4.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Linguiça Toscana'
    contentModal.innerHTML = '<p>Um clássico dos churrascos brasileiros, nossa linguiça toscana é feita com um dos melhores cortes suíno. O copalombo e a panceta proporcionam uma suculência e sabor de excelência, o nosso tempero natural traz um sabor artesanal inigualável e, é claro, o toque do chef que resulta em um produto selecionado para você.<br><span id="valor">R$: 22,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/toscana.png'
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'Teste%203' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')
        }
    })
})

item5.addEventListener('mouseover', ()=>{
    itemCard5.classList.add('displayCard')
    itemCard5.addEventListener('mouseout', ()=> {
        itemCard5.classList.remove('displayCard')
    })
})
itemCard5.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Linguiça Tradicional'
    contentModal.innerHTML = '<p>A linguiça tradicional é uma das preferidas para as refeições. É feita com os cortes suínos copalombo e toucinho, na proporção correta para trazer muita suculência, com um toque especial do chef, deixando-a inesquecível. Sua composição e tempero harmonizam, também, com petiscos e churrascos.<br><span id="valor">R$: 22,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/tradicional.png'
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'Teste%204' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')
        }
    })
})

item6.addEventListener('mouseover', ()=>{
    itemCard6.classList.add('displayCard')
    itemCard6.addEventListener('mouseout', ()=> {
        itemCard6.classList.remove('displayCard')
    })
})
itemCard6.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Linguiça Curada'
    contentModal.innerHTML = '<p><span id="valor">R$: 25,00 - Pct.</span></p>'
    imgModal.src = 'assets/imagens/cardapio/curada.png'
    inputQnt.addEventListener('keyup', ()=> {
        if(inputQnt.value >= 1) {
            aviso.style.color = '#868686'
            linkDirect.href = "https://api.whatsapp.com/send?phone=#&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido.%20%20%0A-%20Lingui%C3%A7a%20" + 'Teste%204' + "%20%20%0A-%20Qtd%3A%20" + inputQnt.value
            fazerPedidoBtn.removeAttribute('disabled', '')
        } else {
            aviso.style.color = '#ff00007a'
            fazerPedidoBtn.setAttribute('disabled', '')
        }
    })
})



