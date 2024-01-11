document.addEventListener('DOMContentLoaded', function () {
    const nosotrosDropdown = document.getElementById('nosotrosDropdown');
    const nosotrosDropdownContent = document.getElementById('nosotrosDropdownContent');

    const serviciosDropdown = document.getElementById('serviciosDropdown');
    const serviciosDropdownContent = document.getElementById('serviciosDropdownContent');

    nosotrosDropdown.addEventListener('mouseenter', () => {
        nosotrosDropdownContent.classList.remove('hidden');
    });

    nosotrosDropdown.addEventListener('mouseleave', () => {
        nosotrosDropdownContent.classList.add('hidden');
    });

    serviciosDropdown.addEventListener('mouseenter', () => {
        serviciosDropdownContent.classList.remove('hidden');
    });

    serviciosDropdown.addEventListener('mouseleave', () => {
        serviciosDropdownContent.classList.add('hidden');
    });
});