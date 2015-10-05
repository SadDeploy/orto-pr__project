'use strict';

$(window).load(function() {
// slider
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        itemWidth: 80,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        sync: "#carousel"
    });



// fancybox
    $(".fancybox").fancybox({
    });


// phone mask
    $(".validate-phone").mask("+7 (999) 999-9999");
    $(".validate-date").mask("99.99.9999");


// animated blocks
    $(function() {
        $('.animated').each(function(i) {
            $(this).delay((i++) * 500).animate({left: "0"}, 500)
                .parents().find('.animated-r').delay((i++) * 1000).animate({right: "0"}, 500);
        })
    });

//selectOrDie
// AND
// linkedselect
    if ($("select").length) {
        $('select').selectOrDie({
            //onChange: function () {
            //    var syncList1 = new syncList;
            //    syncList1.dataList = {
            //        'list1': {
            //            'list1_of': '80',
            //            'list1_of1': '120'
            //        },
            //
            //        'list2': {
            //            'list2_of': '60',
            //            'list2_of1': '120'
            //        },
            //
            //        'list3': {
            //            'list3_of1': '120',
            //            'list3_of2': '60'
            //        }
            //    };
            //    syncList1.sync("List1", "List2");
            //    $("select").selectOrDie("update");
            //}
        });
    }
});