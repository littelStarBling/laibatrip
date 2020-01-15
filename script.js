//burger nav toggle
const menu = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const pageName =document.querySelectorAll('.nav-links li a')

const navSlide =()=>{
    burger.addEventListener('click',()=>{
        burger.classList.toggle('toggle');
        menu.classList.toggle('open-menu');
    });  
}
const navClose = () => {
   pageName.forEach(function(obj){
       obj.addEventListener('click',()=>{
        burger.classList.toggle('toggle');
        menu.classList.toggle('open-menu');
       })
   })
}

navClose();
navSlide();

const dataOpenButton = document.querySelectorAll('[data-open-target]')
const dataCloseButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
//each tour detail information
dataOpenButton.forEach(button=>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.openTarget)
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal=>{
        closeModal(modal)
    })
});

dataCloseButton.forEach(button=>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//slide in animation effect
AOS.init({
    offset: 400,
    duration: 1000
});