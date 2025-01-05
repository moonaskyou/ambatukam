// Snowflake effect
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

// Create snowflake
function createSnowflake() {
    let size = Math.random() * 5 + 2;
    let x = Math.random() * canvas.width;
    let y = Math.random() * -100;
    let speed = Math.random() * 1 + 0.5;
    let opacity = (document.body.classList.contains('light')) ? 0.7 : (Math.random() * 0.5 + 0.3);  // Adjust opacity for light mode
    let color = (document.body.classList.contains('light')) ? 'rgba(0, 0, 0, ' + opacity + ')' : 'rgba(255, 255, 255, ' + opacity + ')';  // Change color based on theme
    
    snowflakes.push({ x, y, size, speed, color });
}

// Update snowflakes
function updateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    snowflakes.forEach((snowflake, index) => {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflakes.splice(index, 1); // Remove snowflake when it goes off-screen
            createSnowflake(); // Create new snowflake
        }

        // Draw snowflake
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fillStyle = snowflake.color;  // Use dynamic color
        ctx.fill();
    });
}

// Generate snowflakes initially
function generateSnowflakes() {
    for (let i = 0; i < 200; i++) {
        createSnowflake();
    }
}

// Start the animation loop
function animate() {
    updateSnowflakes();
    requestAnimationFrame(animate); // Keep the animation running
}

// Initialize snowflakes and animation
generateSnowflakes();
animate(); // Start animation

// Listen to theme changes and update snowflake colors
const darkThemeButton = document.getElementById('dark');
const lightThemeButton = document.getElementById('light');

darkThemeButton.addEventListener('click', () => {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    updateSnowflakeColors(); // Update snowflake colors when theme changes
});

lightThemeButton.addEventListener('click', () => {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    updateSnowflakeColors(); // Update snowflake colors when theme changes
});

// Update snowflake colors when theme changes
function updateSnowflakeColors() {
    snowflakes.forEach(snowflake => {
        let opacity = (document.body.classList.contains('light')) ? 0.7 : (Math.random() * 0.5 + 0.3);  // Adjust opacity for light mode
        snowflake.color = (document.body.classList.contains('light')) ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`;
    });
}

// Hamburger menu toggle
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Ambil tombol, elemen audio, dan popup
const button = document.getElementById('mintButton');
const audio = document.getElementById('buttonSound');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Tambahkan event listener untuk tombol
button.addEventListener('click', () => {
  // Putar suara
  audio.currentTime = 0;  // Mulai dari awal
  audio.play();           // Putar audio
  
  // Tampilkan popup
  popup.style.display = 'block';
});

// Tambahkan event listener untuk menutup popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Menutup popup jika area di luar gambar diklik
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
