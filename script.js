const memories = [
    { 
        text: "Initialization successful... I love you Plangga! ✨",
        img: "images/photo1.jpg" 
    },
    {
        text: "Remember this? My heart still skips a beat. ❤️",
        img: "images/photo2.jpg" 
    },
    { 
        text: "Happy Monthsary! To many more memories together. 🥂", 
        img: "images/photo3.jpg" 
    }
];

let currentIndex = 0;

document.getElementById('no-btn').onclick = () => alert("Nice try, but you have to click Yes! 😂");

// Function to move the "No" button
function moveNoButton(event) {
    // This stops the "click" from happening on mobile
    if (event) {
        event.preventDefault();
    }

    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.button-container');
    
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the movement
    noBtn.style.transform = 'none'; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Function when she clicks Yes
function startMemories() {
    // 1. Hide the question, show the video
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('video-section').style.display = 'block';
    
    // 2. Play the video
    const video = document.getElementById('cute-video');
    video.play(); 
}

// Function to move from video to memories
function showMemories() {
    document.getElementById('video-section').style.display = 'none';
    document.getElementById('memory-section').style.display = 'block';
    renderMemory();
}

function renderMemory() {
    const container = document.getElementById('memory-container');
    container.innerHTML = `
        <img src="${memories[currentIndex].img}">
        <p>${memories[currentIndex].text}</p>
    `;
}

function nextMemory() {
    if (currentIndex < memories.length - 1) {
        currentIndex++;
        renderMemory();
    }
}

function prevMemory() {
    if (currentIndex > 0) {
        currentIndex--;
        renderMemory();
    }
}
