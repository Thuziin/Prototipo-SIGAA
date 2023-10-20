function mostrarModal() {
    const modal = document.querySelector('dialog')
    modal.showModal();
}

function closeForm() {
    const closeButton = document.querySelector('dialog img')
    const modal = document.querySelector('dialog') 
    closeButton.onclick(modal.close())
}
