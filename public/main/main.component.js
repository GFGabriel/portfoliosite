(function() {
    angular.module('app')
        .component('main', {
            controller: function() {
                console.log('Main controller is working')
            },
            templateUrl: "/main/main.html"
        })
})()