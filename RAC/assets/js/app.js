$(document).ready(function() {

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

})