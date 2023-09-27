const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar__links'); // Select all navigation links

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID

            const targetSection = document.getElementById(targetId); // Find the target section by ID

            if (targetSection) {
                // Calculate the position to scroll to
                const offset = targetSection.getBoundingClientRect().top;
                const scrollOptions = {
                    behavior: 'smooth', // Use smooth scrolling
                };

                // Scroll to the target section
                window.scrollTo({
                    top: offset,
                    left: 0,
                    ...scrollOptions,
                });
            }
        });
    });
});
