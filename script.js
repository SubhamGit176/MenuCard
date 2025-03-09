// Function to Show Item Image in Popup
function showItem(name, imageUrl) {
    document.getElementById("popup-title").innerText = name;
    document.getElementById("popup-img").src = imageUrl;
    document.getElementById("popup").style.display = "block";
}

// Function to Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
