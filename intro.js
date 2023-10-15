const textContainer = document.getElementById('text-container');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeRandomWordColor() {
  const words = textContainer.textContent.split(' ');

  for (let i = 0; i < 75; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    words[randomIndex] = `<span style="color: ${getRandomColor()}; transition: color 1s ease-in-out;">${randomWord}</span>`;
  }

  textContainer.innerHTML = words.join(' ');
}

// Change color of 50 random words every second (1000 milliseconds)
setInterval(changeRandomWordColor, 1000);


