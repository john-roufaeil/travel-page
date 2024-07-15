function toggleTheme(theme) {
    if (theme === 'light') {
        document.head.getElementsByTagName("link")[1].href = "css/styles.css"
    } else {
        document.head.getElementsByTagName("link")[1].href = "css/styles-dark.css"
    }
    localStorage.setItem('theme', theme);
}

function toggleSize(size) {
    let newSize = size;
    if (window.innerWidth <= 600) {
        const sizeValue = parseInt(size, 10);
        newSize = (sizeValue - 4) + 'px';
    }

    document.documentElement.style.fontSize = newSize;
    localStorage.setItem('fontSize', size);
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


function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme) {
        toggleTheme(savedTheme);
    }

    if (savedFontSize) {
        toggleSize(savedFontSize);
    }
}

window.addEventListener('load', loadPreferences);