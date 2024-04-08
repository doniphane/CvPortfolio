document.addEventListener("DOMContentLoaded", function() {
    
    anime.timeline({
        targets: '.hero-content h1, .hero-content p',
        easing: 'easeOutExpo',
    })
    .add({
        translateX: [-600, 0],
        opacity: [0, 1],
        delay: (el, i) => 100 * i
    });

  
    anime({
        targets: '.brand, .nav-menu ul li',
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });

   
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        let menu = document.querySelector('.nav-menu');
        menu.classList.toggle('active');
        
        anime({
            targets: '.nav-menu ul li',
            translateY: [-50, 0],
            opacity: [0, 1],
            delay: (el, i) => 100 * i,
            duration: 500,
            easing: 'easeOutExpo',
        });
    });

    
    anime({
        targets: '#about .about-content',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 300,
        easing: 'easeOutExpo',
    });

   
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        anime({
            targets: section,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: 500,
            easing: 'easeOutExpo',
        });
    });

    
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseover', () => {
            anime({
                targets: btn,
                scale: 1.1,
                easing: 'easeOutExpo',
            });
        });

        btn.addEventListener('mouseout', () => {
            anime({
                targets: btn,
                scale: 1,
                easing: 'easeOutExpo',
            });
        });
    });
});


document.getElementById('showMoreProjects').addEventListener('click', function() {
    var hiddenProjects = document.getElementById('hiddenProjects');
    if (hiddenProjects.style.display === 'none' || hiddenProjects.style.display === '') {
        hiddenProjects.style.display = 'block';
    } else {
        hiddenProjects.style.display = 'none';
    }
});
