document.addEventListener('DOMContentLoaded', function() {
    const toggleCollapse = document.querySelector('.toggle-collapse');
    const header = document.querySelector('.header');
    const navBar = document.querySelector('.navBar');

    // Toggle menu
    toggleCollapse.addEventListener('click', function() {
        header.classList.toggle('active');
        navBar.classList.toggle('active');
    });

    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1000) {
            header.classList.remove('active');
            navBar.classList.remove('active');
        }
    });
});


