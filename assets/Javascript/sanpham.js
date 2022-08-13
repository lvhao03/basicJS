const mainImage = document.querySelector('.main_img');
const subImages = document.querySelectorAll('.sub');
const ammount = document.querySelector('.ammount');
const addBtn = document.querySelector('.add')
const subtractBtn = document.querySelector('.subtract');
const addToCart = document.querySelector('.btnAddToCart');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close_modal')
const modalP = document.querySelector('.modal_p')

subImages.forEach(image => {
    image.addEventListener('click', changeImage );
})

addBtn.addEventListener('click', addNumber);
subtractBtn.addEventListener('click', subtractNumber);

addToCart.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function changeImage(){
    const path = this.getAttribute('src');
    mainImage.setAttribute('src', path);
}

function addNumber(){
    ammount.textContent ++;
}

function subtractNumber(){
    ammount.textContent --;
    if (ammount.textContent < 0) return ammount.textContent = 0;
}

function openModal(){
    modal.style.display = 'block';
    checkAmount()
}

function closeModal(){
    modal.style.display = 'none';
}

function checkAmount(){
    if(Number(ammount.textContent) == 0 )
        return modalP.textContent = 'Vui lòng nhập số lượng';
    return modalP.textContent = 'Bạn đã thêm vào giỏ hàng thành công'
}