const root = document.documentElement;

function toggleTheme(theme) {
    if (theme === 'light') {
        root.classList.remove("contrast-theme");
        root.classList.remove("dark-theme");
        root.classList.add("light-theme");
    } else if (theme === 'dark') {
        root.classList.remove("contrast-theme");
        root.classList.add("dark-theme");
        root.classList.remove("light-theme");
    } else {
        root.classList.add("contrast-theme");
        root.classList.remove("dark-theme");
        root.classList.remove("light-theme");
    }
    localStorage.setItem('theme', theme);
}

function toggleSize(size) {
    let newSize = size;
    if (window.innerWidth <= 600) {
        const sizeValue = parseInt(size, 10);
        newSize = (sizeValue - 4) + 'px';
    }

    root.style.fontSize = newSize;
    localStorage.setItem('fontSize', size);
}

document.getElementById('toggle-light-theme').addEventListener('click', function () {
    toggleTheme('light');
});

document.getElementById('toggle-dark-theme').addEventListener('click', function () {
    toggleTheme('dark');
});

document.getElementById('toggle-contrast-theme').addEventListener('click', function () {
    toggleTheme('contrast');
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
    } else {
        root.classList.add('light-theme');
    }

    if (savedFontSize) {
        toggleSize(savedFontSize);
    }
}

window.addEventListener('load', loadPreferences);