function updatePrice(product, price){
    let moneyCost = document.getElementById(product);
    moneyCost.innerText = price;

    let bestPrice = document.getElementById('best-price').innerText;
    let memoryCost = document.getElementById('memory-cost').innerText;
    let storgeCost = document.getElementById('storage-cost').innerText;
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    let totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storgeCost) + parseFloat(deliveryCost);

    let total = document.getElementById('total-price');
    total.innerText = totalCost;
}


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
        successText.style.display = 'block'
        failedText.style.display = 'none'
    }else{
        successText.style.display = 'none'
        failedText.style.display = 'block'
    }
    
})

