const cards = document.querySelectorAll('.card')
const subMenus = document.querySelectorAll('.sub_menu')
const nextBtn = document.querySelector('.next');
const preBtn = document.querySelector('.pre');
const mainImg = document.querySelector('.mainImage');
const dots = document.querySelectorAll('.dot');
const images = ['./images/1.jpg', './images/2.jpg' , './images/3.jpg', './images/4.jpg']
let i = 0;
cards.forEach((card,index) =>{
    card.addEventListener('mouseover', ()=>{
        subMenus.item(index).classList.remove('hide')
    })
    card.addEventListener('mouseout', ()=>{
        subMenus.item(index).classList.add('hide')
    })
})

nextBtn.addEventListener('click', changeToNextImage)
preBtn.addEventListener('click', changeToPreImage)

function checkImages(){
    if (i >= images.length) return i = 0;
    if (i < 0) return i = images.length - 1; 
}

function changeToPreImage(){
    --i;
    checkImages();
    changeDot(i);
    const path = images[i];
    mainImg.setAttribute('src', path);
}

function changeToNextImage(){
    ++i;
    checkImages();
    changeDot(i);
    const path = images[i];
    mainImg.setAttribute('src', path);
}

function changeImageByDot(id, ele){
    changeDot(ele);
    i = id
    const path = images[i];
    mainImg.setAttribute('src', path);
}

function changeDot(ele){
    dots.forEach(dot => {
        if(dot.classList.contains('active'))
            dot.classList.remove('active');
    })
    if (isNaN(ele)) return  ele.classList.add('active');
    return dots[i].classList.add('active');
}

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const day = hours * 24;
const saleDate = new Date('2022-08-14').getTime()
function timer(){
    const currentTime = new Date().getTime();
    const dateBetweenSale = saleDate - currentTime;
    const textDay = Math.floor(dateBetweenSale / day)
    const textHour = Math.floor((dateBetweenSale % day ) / hours)
    const textMinute = Math.floor((dateBetweenSale % hours) / minutes) 
    const textSeconds = Math.floor((dateBetweenSale % minutes) / seconds) 
    document.querySelector('.day').textContent = textDay
    document.querySelector('.hour').textContent = textHour
    document.querySelector('.minute').textContent = textMinute
    document.querySelector('.second').textContent = textSeconds
}
setInterval(timer,1000);