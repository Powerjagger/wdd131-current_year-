const themeSelector = document.getElementById('theme');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedValue = themeSelector.value;

    if (selectedValue === 'dark') {
        document.body.classList.add('dark');
        const logo = document.getElementById('logo'); 
        logo.src = 'byui-logo_white.webp';
    } else {
        document.body.classList.remove('dark');
        const logo = document.getElementById('logo');
        logo.src = 'byui-logo_blue.webp';
    }
}
