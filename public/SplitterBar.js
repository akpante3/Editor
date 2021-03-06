(function($) {

    // We should take in an argument for endDrag
    $.fn.SplitterBar = function() {
        $(this).css('display', 'flex');

        let leftSide = $(this).children('.left').first();
        let rightSide = $(this).children('.right').first();

        leftSide.css('background-color', '#ffffff');
        leftSide.css('width', '500px');

        rightSide.css('background-color', '#ffffff');
        rightSide.css('flex', '1');

        // Inject splitter bar
        let splitterBar = $(document.createElement('div'));
        splitterBar.css('background-color', '#dddddd');
        splitterBar.css('width', '10px');
        splitterBar.css('cursor', 'col-resize');
        
        leftSide.after(splitterBar);
        
        let isDragging = false

        splitterBar.mousedown((event) => {
            console.log("mousehold");
            isDragging = true
            return false;
        });

        leftSide.click((event) => {
            isDragging = false
            return false;
         })
         rightSide.click((event) => {
           isDragging = false
           return false;
        })
         
        splitterBar.mouseup((event) => {
            console.log('mouse up')
            isDragging = false
            return false;
        });

        // splitterBar.mouseleave((event) => {
        //     isDragging = false
        //     return false;            
        // })

        $(this).mousemove((event) => {
            if(isDragging) {
                let leftOfLeft = leftSide.position().left;
                leftSide.width(event.pageX - leftOfLeft - splitterBar.width() / 2);
            }
        });
    }
}(jQuery));