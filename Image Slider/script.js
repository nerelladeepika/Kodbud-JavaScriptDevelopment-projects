const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400"
];

let currentIndex = 0;

const slide = document.getElementById("slide");

function showSlide(index){
    slide.src = images[index];
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Autoplay every 3 seconds
setInterval(nextSlide, 3000);