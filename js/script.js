function updatePrice(updateProduct, price){
    // get product and price as a parameter
    let moneyCost = document.getElementById(updateProduct);
    moneyCost.innerText = price;
    // get All product price
    let bestPrice = document.getElementById('best-price').innerText;
    let memoryCost = document.getElementById('memory-cost').innerText;
    let storgeCost = document.getElementById('storage-cost').innerText;
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    let totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storgeCost) + parseFloat(deliveryCost);
    //total product price 
    let total = document.getElementById('total-price');
    total.innerText = totalCost;
}

//get click product, updateProduct and product price show
function onClick(clickId, updateId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId, price)
    })
}
onClick('eightGB','memory-cost', 150);
onClick('sixteenGB','memory-cost', 300);

onClick('ssd2','storage-cost', 200);
onClick('ssd3','storage-cost', 400);
onClick('free-delivery','delivery-cost', 0);
onClick('paid-delivery','delivery-cost', 20);

// cupon code apply on total price and get discount. then show 
const promoCode = 'shohan';
document.getElementById('apply-btn').addEventListener('click', function(){
    let inputCode = document.getElementById('promo-input').value;
    let successText = document.getElementById('applied-text');
    let failedText =  document.getElementById('failed-text');
    if(promoCode === inputCode){
        
        let total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        let discount = (totalPrice*20)/100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
        // success messages show 
        successText.style.display = 'block'
        failedText.style.display = 'none'
    }else{
        // failed messages show
        successText.style.display = 'none'
        failedText.style.display = 'block'
    }
    
})

