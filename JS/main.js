$(document).ready(function () {
    console.log('Hello ');

    var sideheight = $('.side').height()-500;
    var windowheight = $(document).height();


//slow scroling
    $('a').click(function () {
        var linkposition = $(window).height() / 3;
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - linkposition
        }, 1000);
        return false;
    });

// Cache selectors
    var lastId,
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight() + 10,
// All list items
        menuItems = topMenu.find("a"),

// Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });



// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }

        console.log('ahoj');
        console.log(sideheight);
        console.log(windowheight);
        console.log(fromTop);

        var x = fromTop/windowheight;
        var y = x*sideheight*-1;

        console.log(x);
        console.log(y);

        y = y+110;

        $("#sidepos").css({
            'top': y + 'px',

        });







    });

});