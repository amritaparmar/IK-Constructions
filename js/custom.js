/*! 
 
 =========================================================
 
 *IK Constructions Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */


$(document).ready(function () {

    //header-menutoggle js
    $('.mobile_menu a').on('click', function () {
        $('.select_toggle').toggle("medium");
    });

    //toggle menu when outside click js
    jQuery(document).on("click", function (event) {
        var $trigger = $(".mobile_menu a");
        if (($trigger !== event.target && !$trigger.has(event.target).length)) {
            jQuery(".select_toggle").slideUp("fast");
        }
    });

    //project slider
    $('.project_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //review slider
    $('.review_slider').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });


    // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    $('ul.tabs li').last().addClass("tab_last");


    //project slider
    $('.services_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // tabbed content:servicepages
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    /* if in tab mode */
    $("ul.tabs2 li").click(function () {

        $(".tab_content2").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading2").removeClass("d_active");
        $(".tab_drawer_heading2[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading2").click(function () {

        $(".tab_content2").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading2").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs2 li").removeClass("active");
        $("ul.tabs2 li[rel^='" + d_activeTab + "']").addClass("active");
    });

    $('ul.tabs2 li').last().addClass("tab_last");


    // tabbed content:projectpage
    $(".tab_content3").hide();
    $(".tab_content3:first").show();

    /* if in tab mode */
    $("ul.tabs3 li").click(function () {

        $(".tab_content3").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs3 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading3").removeClass("d_active");
        $(".tab_drawer_heading3[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading3").click(function () {

        $(".tab_content3").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading3").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs3 li").removeClass("active");
        $("ul.tabs3 li[rel^='" + d_activeTab + "']").addClass("active");
    });

    $('ul.tabs3 li').last().addClass("tab_last");


    // project detail slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots:false,
        centerMode: true,
        focusOnSelect: true
    });

});