document.addEventListener("DOMContentLoaded", function() {
    var welcomeWrapper = document.querySelector('.welcome');
    var carImg = document.querySelector('.car-img');
    var pageWrapper = document.querySelector('.page_wrapper');
    var welcomePara = document.querySelector('.welcome p');

    // Check if the welcome screen has been shown before
    if (sessionStorage.getItem('welcomeScreen') !== 'true') {
        // Set initial style for page_wrapper
        pageWrapper.style.display = 'none';

        // Wrapper animation
        anime.timeline({
            easing: 'easeInOutCirc',
            duration: 1000,
        })
        .add({
            targets: welcomeWrapper,
            opacity: [0, 1], // Fade In
        }) 
        // .add({
        //     targets: carImg,
        //    translateX: ['500%', '0%'],
        //    easing: 'cubicBezier(0.44, 0.03, 0.56, 0.85)',
        // })
        .add({
            targets: welcomePara,
            opacity:[0,1],
            //height: [0,45],
            translateY: ['100%','0%'],
            easing: 'cubicBezier(0.44, 0.03, 0.56, 0.85)',
        })
        .add({
            targets: carImg,
            delay: 1000,
           translateX: ['0%', '-500%'],
            easing: 'easeInOutCirc',
            easing: 'cubicBezier(0.42, 0, 0.58, 1)',
        })
        .add({
            targets: welcomeWrapper,
           opacity: [1, 0], // Fade Out
            delay: 800, // Delay before starting fade out
            complete: function() {
                // Set sessionStorage to indicate the welcome screen has been shown
            //    sessionStorage.setItem('welcomeScreen', 'true');
               welcomeWrapper.remove()
                // Reveal page_wrapper after welcome screen animation is complete
                pageWrapper.style.display = 'block';
            }
        });
    } else {
        // If welcome screen has been shown, reveal page_wrapper immediately
        pageWrapper.style.display = 'none';
        pageWrapper.style.display = 'none';
        welcomeWrapper.remove()
        pageWrapper.style.display = 'block';
    }
});
