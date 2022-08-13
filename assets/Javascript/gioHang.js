const addNums = document.querySelectorAll('.add');
const subtractNums = document.querySelectorAll('.subtract');
const addToCarts = document.querySelectorAll('.addToCart');
const ammount = document.querySelector('.ammount');
const cart = document.querySelector('.shopping_cart');

addToCarts.forEach(ele =>{
    ele.addEventListener('click', addToCart);
})

addNums.forEach(ele => {
    ele.addEventListener('click', addNum)
})

subtractNums.forEach(ele =>{
    ele.addEventListener('click', subtractNum)
})

function addNum(e){
    e.target.previousElementSibling.textContent ++;
}

function subtractNum(e){
    const ammount = e.target.nextElementSibling
    ammount.textContent --;
    if (Number(ammount.textContent) < 0)
        return ammount.textContent = 0;
}

function addToCart(e){
    const item = e.target.parentElement.parentElement.cloneNode(true);
    changeBtn(item);
    cart.firstElementChild.firstElementChild.appendChild(item);
    calculateMoney()
}

function changeBtn(item){
    const btn = item.querySelector('.addToCart')
    btn.textContent = 'Xóa';
    btn.classList.remove('addToCart');
    btn.classList.add('delete');
    btn.setAttribute('onclick', 'deleteItem(this)');
}

function deleteItem(ele){
    const item = ele.parentElement.parentElement;
    cart.firstElementChild.firstElementChild.removeChild(item);
    calculateMoney()
}

function calculateMoney(){
    const rows = cart.getElementsByTagName('tr');
    const ammount = document.querySelector('.sum');
    let sum = 0;
    for (let i = 1 ; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let price = cells[1].textContent;
        let number = cells[2].querySelector('.ammount').textContent;
        let a = Number(number);
        sum += Number(price * number);
    } 
    ammount.textContent = `Tổng tiền: ${sum}`;
}