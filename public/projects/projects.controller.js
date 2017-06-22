(function() {
    angular.module('app')
        .controller('projectsController', projectsController)

    function projectsController() {
        // console.log('projects controller is working')
        //checks if element it is called on is visible (only checks horizontally
        (function($) {
            var $window = $(window);

            $.fn.isVisible = function(){
                var $this = $(this),
                    Left = $this.offset().left,
                    visibleWidth = $window .width();

                return Left < visibleWidth;
            }
        })(jQuery);
        //
        (function($){
            var list = $('.portfolio-items'),
                showVisibleItems = function(){
                    list.children('.item:not(.falldown)').each(function(el, i){
                        var $this = $(this);
                        if($this.isVisible()){
                            $this.addClass('falldown');
                        }
                    });
                };

            //initially show all visible items before any scroll starts
            showVisibleItems();

            //then on scroll check for visible items and show them
            list.scroll(function(){
                showVisibleItems();
            });

            //image hover pan effect
            list.on('mousemove','img', function(ev){
                var $this = $(this),
                    posX = ev.pageX,
                    posY = ev.pageY,
                    data = $this.data('cache');
                //cache necessary variables
                if(!data){
                    data = {};
                    data.marginTop = - parseInt($this.css('top')),
                        data.marginLeft = - parseInt($this.css('left')),
                        data.parent = $this.parent('.view'),
                        $this.data('cache', data);
                }

                var originX = data.parent.offset().left,
                    originY =  data.parent.offset().top;

                //move image
                $this.css({
                    'left': -( posX - originX ) / data.marginLeft,
                    'top' : -( posY - originY ) / data.marginTop
                });
            });
            
        })(jQuery);

    }
})()