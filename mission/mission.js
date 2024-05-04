// Select the theme selector dropdown
const themeSelector = document.getElementById('theme');

// Select the logo images
const logoLight = document.getElementById('logoLight');
const logoDark = document.getElementById('logoDark');

// Add event listener for "change" event
themeSelector.addEventListener('change', changeTheme);

// Function to change the theme
function changeTheme() {
    // Check the selected value
    const selectedValue = themeSelector.value;

    // Check if the selected value is "dark"
    if (selectedValue === 'dark') {
        // Add the dark class to body
        document.body.classList.add('dark');

        // Update logo images for dark mode
        logoLight.style.display = 'none'; // Hide light logo
        logoDark.style.display = 'block'; // Show dark logo
    } else {
        // Remove the dark class from body
        document.body.classList.remove('dark');

        // Update logo images for light mode
        logoLight.style.display = 'block'; // Show light logo
        logoDark.style.display = 'none'; // Hide dark logo
    }
}
