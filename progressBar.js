const canvas = document.getElementById('progressCanvas');
const ctx = canvas.getContext('2d');

const radius = canvas.width / 2 - 10;  // Circle radius, leave space for stroke
const lineWidth = 15;  // Thickness of the circular bar
const x = canvas.width / 2;  // Center X
const y = canvas.height / 2;  // Center Y

let progress = 0;  // Start value for progress (0 - 100)
let speed = 1;  // Speed of progress increase, in percent per frame
let icon = new Image();  // Create an Image object

// Preload the image
icon.src = 'IMAGES/EDUPFP.svg';
icon.onload = () => {
    // Start the animation only after the image is loaded
    updateProgress();
};

// Function to draw the circular progress bar and image
function drawProgressBar(progress) {
    const startAngle = -Math.PI / 2;
    const endAngle = (Math.PI * 2) * (progress / 100) - Math.PI / 2;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background circle (track)
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);  // Full circle
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#e6e6e6';  // Light gray background color
    ctx.stroke();

    // Foreground circle (progress)
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);  // Starting at the top
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#5ACD90';  // Green color for progress
    ctx.lineCap = 'round';  // Rounded ends
    ctx.stroke();

    // Draw the image in the center of the circle
    const imgSize = radius * 1.2;  // Adjust image size as needed
    ctx.drawImage(icon, x - imgSize / 2, y - imgSize / 2, imgSize, imgSize);
}

// Update the progress value and redraw the progress bar
function updateProgress() {
    if (progress < 75) {  // Limit progress to 75%
        progress += speed;  // Increase progress
        drawProgressBar(progress);  // Draw the progress bar with the new progress value
        requestAnimationFrame(updateProgress);  // Keep animating
    }
}
