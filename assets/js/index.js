jQuery(document).ready(function($) {
$('.toggle-menu').click(function(e){
    e.preventDefault()
    let sidebar = $(".main-sidebar");
    if(sidebar.hasClass('right-0')){
        $(".main-sidebar").removeClass("right-0");
    $(this)
      .find(".svg-inline--fa")
      .removeClass("fa-chevron-right")
      .addClass("fa-bars");
    }else{

        $('.main-sidebar').addClass('right-0')
            $(this)
              .find(".svg-inline--fa")
              .removeClass("fa-bars")
              .addClass("fa-chevron-right");
    }
})

})