console.log("Welcome to Abdu Aragaw's Portfolio!");

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul.nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

document.querySelectorAll('nav ul.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});
