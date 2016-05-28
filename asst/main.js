$(document).ready(function () {
    start();

    $('#startbtn').on('click', function () {
        clear();
        start();
    });

    $('#clearbtn').on('click', function () {
        clear();
        $('input#size').val("20");
        $('select#color').val("red");
        $('select#type').val("simple");
        start();
    });
});
function clear() {
    $('.sketch_pad > .grid').remove();
}
function start() {
    // set size of the palet
    var size = +$('input#size').val();
    var boxSize = 959 / size;
    var boxCount = size * size;
    var sketchPad$ = $('.sketch_pad');
    for (i = 1; i <= boxCount; i++) {
        sketchPad$.append('<div class="grid" style="width:' + boxSize + 'px;height:' + boxSize + 'px" data-times="0"></div>')
    }
    $('span#size_sketch').text(size + "*" + size); // define info box
    // global var
    var gridBox = sketchPad$.find('.grid');
    // set color of palet
    var getColor = $('select#color').val();
    gridBox.mouseenter(function () {
        $(this).removeClass("n-color")
    });
    /*reset the none class*/
    var spanColor$ = $('span#color_sketch');
    switch (getColor) {
        case 'red':
            gridBox.mouseenter(function () {
                $(this).addClass("r-color")
            });
            spanColor$.text("Red");
            break;
        case 'blue':
            gridBox.mouseenter(function () {
                $(this).addClass("b-color")
            });
            spanColor$.text("Blue");
            break;
        case 'green':
            gridBox.mouseenter(function () {
                $(this).addClass("g-color")
            });
            spanColor$.text("Green");
            break;
        case 'colorful':
            gridBox.mouseenter(function () {
                $(this).css('background-color', randColor())
            });
            spanColor$.text("Colorful");
            break;
    }
    // set type of palet
    var spanType$ = $('span#type_sketch');
    var getType = $('select#type').val();
    switch (getType) {
        case 'simple':
            spanType$.text("Simple");
            break;
        case 'trail':
            gridBox.mouseleave(function () {
                $(this).addClass("n-color")
            });
            spanType$.text("Trail");
            break;
        case 'opacity':

            gridBox.mouseenter(function () {

                var timeCounter;
                timeCounter = $(this).data('times');
                if (timeCounter < 5) {
                    timeCounter += 1;
                    $(this).data('times', timeCounter);
                }
                var times = $(this).data('times');

                switch (times) {
                    case 1:
                        $(this).css("opacity", "0.2");
                        break;
                    case 2:
                        $(this).css("opacity", "0.4");
                        break;
                    case 3:
                        $(this).css("opacity", "0.6");
                        break;
                    case 4:
                        $(this).css("opacity", "0.8");
                        break;
                    case 5:
                        $(this).css("opacity", "1");
                        break;
                }
            });
            spanType$.text("Opacity");
            break;

    }

}
// find  random color
function randColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}