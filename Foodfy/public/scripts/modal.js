// const modalOverlay = document.querySelector('.modal-burguer')
// const content = document.querySelectorAll('.content-img');
// const titulos = document.querySelectorAll('.content-img .titule')
  

// for ( let contents of content ){
//     contents.addEventListener('click', () => {
//         const videoId = contents.getAttribute('id')
//         modalOverlay.classList.add('active')
        
//         const tituloID = contents.getElementsByClassName('titule')
//         const subTituloId = contents.getElementsByClassName('titule2')
        
//         const titulo = tituloID[0].innerHTML
//         const subTitulo = subTituloId[0].innerHTML

//         modalOverlay.querySelector('img').src = `/assets/${videoId}`;
//         modalOverlay.querySelector('p').innerHTML = `${titulo}`
//         modalOverlay.querySelector('.sub').innerHTML = `${subTitulo}` 
        
//     })
// }

// document.querySelector('.close-modal').addEventListener('click', () => {
//     modalOverlay.classList.remove('active')
//     modalOverlay.querySelector('img').src = ""
// })


const mostrarButton = document.querySelector('.mostrarButton')
const mostrarButton2 = document.querySelector('.mostrarButton2')
const mostrarButton3 = document.querySelector('.mostrarButton3')
const hiddenButton = document.querySelector('.hiddenButton')
const hiddenButton2 = document.querySelector('.hiddenButton2')
const hiddenButton3 = document.querySelector('.hiddenButton3')
const showButton = document.querySelector(".show")
const showButton2 = document.querySelector(".show2")
const showButton3 = document.querySelector(".show3")


    mostrarButton.addEventListener("click", function(){
        showButton.classList.add('active')
    })

    mostrarButton2.addEventListener("click", function(){
        showButton2.classList.add('active')
    })

    mostrarButton3.addEventListener("click", function(){
        showButton3.classList.add('active')
    })

    hiddenButton.addEventListener("click", function(){
        showButton.classList.remove('active')
    })

    hiddenButton2.addEventListener("click", function(){
        showButton2.classList.remove('active')
    })

    hiddenButton3.addEventListener("click", function(){
        showButton3.classList.remove('active')
    })