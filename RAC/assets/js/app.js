$(document).ready(function() {
    
    let openNavbrand = false;

    $('.dropdown-nav').on('click', () => {
        openNavbrand = !openNavbrand;

        if(openNavbrand){
            $('.nav-brand-item').removeClass('d-none');
            $('.nav-brand-item').css('z-index', '2');
            // $('.nav-brand-item').fadeTo(500,1);
        }else{
            $('.nav-brand-item').addClass('d-none');
            $('.nav-brand-item').css('z-index', '0');
            // $('.nav-brand-item').fadeTo(500,0);
        }
    })

    $('#open-btn').on('click', () => {
        openNav()
    })

    $('#close-btn').on('click', () => {
        closeNav()
    })

    function openNav() {
        $('.navbar-custom').addClass('d-none');
        $('.sidebar').css('width', '300px');
        $('.navigation-list').removeClass('d-none');
    }

    function closeNav() {
        $('.navbar-custom').removeClass('d-none');
        $('.navigation-list').addClass('d-none');
        $('.sidebar').css('width', '0px');
    }
    
    $(window).on('resize', () => {

        if($(window).width() < 971){
            let open = false;
        
            $('.navbar-toggler').on('click', () => {
                open = !open;
        
                console.log('wakwaw');
        
                if(open){
                    $('.centered').css('padding-top', '250px')
                    $('.centered').css('transition', '.5s ease')
        
                    $('.left').css('padding-top', '100px')
                    $('.left').css('transition', '.5s ease')
                }else{
                    $('.centered').css('padding-top', '0px')
                    $('.centered').css('transition', '.5s ease')
        
                    $('.left').css('padding-top', '0px')
                    $('.left').css('transition', '.5s ease')
                }
            })
        
            let openNav = false;
        
            $('#navbarDropdown').on('click', () => {
                openNav = !openNav;
        
                if(openNav) {
                    $('.centered').css('padding-top', '500px')
                    $('.left').css('padding-top', '200px')
                }else{
                    $('.centered').css('padding-top', '250px')
                    $('.left').css('paddint-top', '100px')
                }
            })
        }
    })

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade-content").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } 
            // else { //object goes out of view (scrolling up)
            // if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            // }
        });
    }).scroll(); //invoke scroll-handler on page-load
})