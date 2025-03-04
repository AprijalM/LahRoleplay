function redirectTo(url) {
    window.open(url, '_blank');
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 1 + 1}s`;
    document.body.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 2000);
}

setInterval(createSnowflake, 200);
setInterval(createRaindrop, 100);
