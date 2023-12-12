document.addEventListener("DOMContentLoaded", function () {
    var welcomeWrapper = document.querySelector('.welcome');
    var carImg = document.querySelector('.car-img img');
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
            .add({
                targets: carImg,
                maskImage: ['linear-gradient(to right, black 0%, black 33%, transparent 33%, transparent 66%, transparent 66%, transparent 100%)', 'none'],
                easing: 'linear',
                duration: 800, // Adjust the duration to control the speed of the reveal
            })
            .add({
                targets: carImg,
                opacity: [0, 1], // Fade In
                easing: 'linear',
                delay: 500, // Delay before starting fade in
            })
            .add({
                targets: '.welcome p span', // Target each character separately
                opacity: [0, 1],
                translateY: ['100%', '0%'],
                easing: 'cubicBezier(0.44, 0.03, 0.56, 0.85)',
                delay: anime.stagger(50, { start: 500 }), // Staggered delay for each character, starting after the car fades in
                complete: function () {
                    // Reveal page_wrapper after welcome screen animation is complete
                    pageWrapper.style.display = 'block';
                }
            })
            .add({
                targets: carImg,
                translateX: ['0%', '-500%'],
                easing: 'cubicBezier(0.44, 0.03, 0.56, 0.85)',
                delay: 500, // Delay before starting translateX
            })
            .add({
                targets: welcomeWrapper,
                //opacity: [1, 0], // Fade Out
                delay: 800, // Delay before starting fade out
                complete: function () {
                    // Set sessionStorage to indicate the welcome screen has been shown
                    sessionStorage.setItem('welcomeScreen', 'true');
                    welcomeWrapper.remove();
                }
            });
    } else {
        // If welcome screen has been shown, reveal page_wrapper immediately
        pageWrapper.style.display = 'none';
        welcomeWrapper.remove();
        pageWrapper.style.display = 'block';
    }
});
