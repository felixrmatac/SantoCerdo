document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.detail-section');

    // Check if URL has a hash to open specific section on load
    const hash = window.location.hash.substring(1); // remove #
    if (hash) {
        const targetSection = document.getElementById(hash);
        const targetNav = document.querySelector(`.nav-item[data-target="${hash}"]`);

        if (targetSection) {
            revealSection(targetSection, targetNav);
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            revealSection(targetSection, item);
        });
    });

    function revealSection(section, activeNavItem) {
        if (!section) return;

        // Hide all other sections
        sections.forEach(sec => {
            if (sec !== section) {
                sec.classList.add('hidden');
            }
        });

        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));

        // Activate current
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Show target section
        section.classList.remove('hidden');

        // Scroll to it
        setTimeout(() => {
            const navHeight = document.querySelector('#main-nav').offsetHeight;
            const top = section.offsetTop - navHeight - 20;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }, 50); // Small delay to allow display:block to apply
    }
});
