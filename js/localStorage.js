'use strict';
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) || {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save()
        },
        remove(key) {
            delete store[key];
            save()
        }
    }
    return storage;
}


const product = createStorage('product');
const productAddCart = createStorage('productAddCart');


const itemProducts = document.querySelectorAll('.item-product');
const handleGetProduct = (e) => {  
    const parentEle = e.target.classList.contains('priceNew') || e.target.classList.contains('priceOld') ? 
    e.target.parentElement.parentElement.parentElement :
    e.target.parentElement.parentElement    
    const img = parentEle.querySelector('img').getAttribute('src');
    const name = parentEle.querySelector('.item-product-if p:first-child').textContent;
    const priceNew = parentEle.querySelector('.item-product-if .priceNew').textContent;
    const priceOld = parentEle.querySelector('.item-product-if .priceOld').textContent;    
    const infoProduct = {
        img: img,
        name: name,
        priceNew: priceNew,
        priceOld: priceOld
    }    
    product.set('infoProduct', infoProduct);    

    console.log(product.get('infoProduct'));
}
itemProducts.forEach(itemProduct => {
    itemProduct.addEventListener('click', handleGetProduct)
})


