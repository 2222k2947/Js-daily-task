let messages = ["Hello, World!", "Welcome to JavaScript!", "Have a nice day!"];
let currentIndex = 0;

function changeMessage() {
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById('message').textContent = messages[currentIndex];
}

