const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
function openForm(itemName){
    document.getElementById("orderForm").style.display = "flex";

    if(itemName){
        document.querySelector("textarea[placeholder='What would you like to order?']")
        .value = "1 " + itemName;
    }
}

function closeForm(){
    document.getElementById("orderForm").style.display = "none";
}
function showItem(title, ingredients){
    document.getElementById("itemTitle").innerText = title;
    document.getElementById("itemIngredients").innerText = ingredients;
    document.getElementById("itemPopup").style.display = "flex";
}

function closeItem(){
    document.getElementById("itemPopup").style.display = "none";
}
function toggleGift(){
    const giftBox = document.getElementById("giftMessage");
    const checkbox = document.getElementById("giftCheck");

    if(checkbox.checked){
        giftBox.style.display = "block";
    } else {
        giftBox.style.display = "none";
    }
}