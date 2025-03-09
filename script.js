// Object to store preloaded images
const imageCache = {};

// Function to preload images
function preloadImages() {
    const images = {
        "Momo": "momo.webp",
        "Poha": "poha.webp",
        "Biryani": "biryani.webp"
    };

    Object.entries(images).forEach(([name, src]) => {
        const img = new Image();
        img.src = src;
        imageCache[name] = img;
    });
}

// Preload images when the page loads
window.onload = preloadImages;

// Function to display item details with an image
function showItem(name) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");

    // Show preloaded image instantly
    if (imageCache[name]) {
        popupImg.src = imageCache[name].src;
    } else {
        popupImg.src = "placeholder.jpg"; // Fallback if not preloaded
    }

    popupTitle.innerText = name;
    popup.style.display = "flex"; // Make popup visible
}

// Close popup function
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
