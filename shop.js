document.addEventListener('DOMContentLoaded', function(){
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('total-price');
    const likeCountElement = document.getElementsByClassName('.like-count');

function updateTotalPrice(){
    let total = 0;
    cartItems.forEach(item=> {
       const price = parseFloat(item.querySelector("item-price").dataset.price); 
       const quantity = parseInt(item.querySelector("item-quantity").textContent);
       total += price*quantity;
    });
    totalPriceElement.textContent = total + "$";
}

function updateLikeCount(){
    let likeCount = 0;
    cartItems.forEach(item => {
        const likeButton = item.querySelector(".like-item");
        const itemLikeCount = item.querySelector(".like-count");
        if(likeButton.classList.contains("liked")){
            likeCount++;
            itemLikeCount.textContent=1;
        }else{
            itemLikeCount.textContent=0;
        }
    })
    likeCountElement.textContent=likeCount;
}

cartItems.forEach(item=> {
    const minusButton = item.querySelector(".quantity-minus");
    const plusButton = item.querySelector(".quantity-plus");
    const deleteButton = item.querySelector(".delete-item");
    const likeButton = item.querySelector(".like-item");
    const quantityElement = item.querySelector(".item-quantity");

    minusButton.addEventListener('click', function(){
        let quantity=parseInt(quantityElement.textContent);
        if(quantity>1){
            quantityElement.textContent= --quantity;
            updateTotalPrice();
        }
    });

    plusButton.addEventListener('click', function(){
        let quantity=parseInt(quantityElement.textContent);
            quantityElement.textContent= ++quantity;
            updateTotalPrice();
    });

    deleteButton.addEventListener('click', function(){
        item.remove();
        updateTotalPrice();
        updateLikeCount();
    });

    likeButton.addEventListener('click', function(){
        likeButton.classList.toggle("liked");
        updateLikeCount();

    });
});
updateTotalPrice();
updateLikeCount();
});
