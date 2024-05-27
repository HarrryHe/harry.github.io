function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkFadeIn() {
    const fadeInTargets = document.querySelectorAll('.fade-target');
        fadeInTargets.forEach(fadeInTarget => {
            if (isInViewport(fadeInTarget)) {
                fadeInTarget.classList.add('fade-in');
            }
        });
}

window.addEventListener('scroll', checkFadeIn);

checkFadeIn();
