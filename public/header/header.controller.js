(function() {
    angular.module('app')
        .controller('headerController', headerController)

    function headerController() {
        console.log('header controller is working')

        // selected elements
        const navTrigger = document.getElementById('nav-trigger');
        const nav = document.getElementById('nav');
        const header = document.getElementById('header');
        const heading = document.getElementById('heading');
        const labels = document.getElementsByClassName('nav-label');

// sizing
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let fontSize = windowHeight*0.1;
        let headingSize = windowWidth*0.1;

// Event Listening
        navTrigger.addEventListener('click', navToggle);
        window.addEventListener('resize', resize);

        function resize() {
            windowHeight = window.innerHeight;
            windowWidth = window.innerWidth;
            fontSize = windowHeight*0.1;
            headingSize = windowWidth*0.1;
            if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3;

            for(let i = 0; i < labels.length; i++) {
                labels[i].style.fontSize = fontSize+'px';
                labels[i].style.height = fontSize+'px';
                labels[i].style.marginTop = '-'+fontSize*0.6+'px';
            }
        }

        function navToggle(e) {
            let closed = (navTrigger.className.indexOf('close') > 0);
            if(closed) {
                navTrigger.className = 'nav-trigger open';
                nav.className = 'out';
            } else {
                navTrigger.className = 'nav-trigger close';
                nav.className = 'in';
            }
        }

        window.onload = resize;
    }
})()