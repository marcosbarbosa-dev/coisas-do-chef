const modalBG = document.querySelector('.modalBG')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#closeModal')
const fazerPedidoBtn = document.querySelector('#fazerPedidoBtn')
let titleModal = document.querySelector('#titleModal')
let contentModal = document.querySelector('#contentModal')
let imgModal = document.querySelector('#imgModal')
let textQnt = document.querySelector('#textQnt')

function openModal() {
    modalBG.style.display = 'block'
    modal.style.display = 'block'
}
closeModal.addEventListener('click', closeNow)
function closeNow() {
    imgModal.src = ''
    modalBG.style.display = 'none'
    modal.style.display = 'none'
    titleModal.innerHTML = ''
    contentModal.innerHTML = ''
    inputQnt.value = ''
    aviso.style.color = '#868686'
    fazerPedidoBtn.setAttribute('disabled', '')
}
function enviarPedido() {
    fazerPedidoBtn.addEventListener('click', ()=> {
        imgModal.src = ''
        modalBG.style.display = 'none'
        modal.style.display = 'none'
        titleModal.innerHTML = ''
        contentModal.innerHTML = ''
        inputQnt.value = ''
        aviso.style.color = '#868686'
        fazerPedidoBtn.setAttribute('disabled', '')
    })
}
modalBG.addEventListener('click', closeOutModal)
function closeOutModal() {
    imgModal.src = ''
    modalBG.style.display = 'none'
    modal.style.display = 'none'
    titleModal.innerHTML = ''
    contentModal.innerHTML = ''
    inputQnt.value = ''
    aviso.style.color = '#868686'
    fazerPedidoBtn.setAttribute('disabled', '')
}
document.addEventListener('keydown', (event) => 
event.key === "Escape" ? closeNow() : ''
);
