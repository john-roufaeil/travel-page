function toggleTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('body-dark');
    } else {
        document.body.classList.add('body-dark');
    }
}

function toggleSize(size) {
    document.documentElement.style.setProperty('font-size', `${size}`);
}

document.getElementById('toggle-light-theme').addEventListener('click', function () {
    toggleTheme('light');
});

document.getElementById('toggle-dark-theme').addEventListener('click', function () {
    toggleTheme('dark');
});

document.getElementById('toggle-large-size').addEventListener('click', function () {
    toggleSize('18px');
});

document.getElementById('toggle-base-size').addEventListener('click', function () {
    toggleSize('16px');
});

document.getElementById('toggle-small-size').addEventListener('click', function () {
    toggleSize('14px');
});