/*****************************************************
/*  Aione Slider
/*****************************************************/
function reset_sliders(){
    var aione_slider_ids = new Array();
    $(".slider").each(function() {
        var aione_slider_id = $(this).attr("id");
        aione_slider_ids.push(aione_slider_id);
    });
    $.each(aione_slider_ids, function( index, aione_slider ) {
        $("#"+aione_slider).trigger('destroy.owl.carousel');
    });
    init_sliders();
}

function init_sliders(){
    var aione_slider_ids = new Array();
    $(".slider").each(function() {
        var aione_slider_id = $(this).attr("id");
        if(aione_slider_id != undefined){
            if(aione_slider_ids.indexOf(aione_slider_id) != -1) {
                //Slider with same ID already exists
                aione_slider_id = aione_slider_id+'_'+Math.floor(Math.random()*100000000);
                $(this).attr("id", aione_slider_id);
                aione_slider_ids.push(aione_slider_id);
            } else{
                aione_slider_ids.push(aione_slider_id);
            }
        } else {
            var aione_slider_id = 'slider_id_'+Math.floor(Math.random()*100000000);
            $(this).attr("id", aione_slider_id);
            aione_slider_ids.push(aione_slider_id);
        }
    });

    try{

        $.each(aione_slider_ids, function( index, aione_slider ) {
            var slider_data = $('#'+aione_slider).data();
            if(slider_data !== undefined){
                $('#'+aione_slider).owlCarousel(slider_data);
            } else {
                console.log('Dlider Data =' + slider_data);
                $('#'+aione_slider).owlCarousel({
                    items:1,
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true,
                    nav:true,
                    autoHeight:true,
                    //animateOut: 'slideOutDown',
                    //animateIn: 'flipInX',
                    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
                });
            }
            //console.log(slider_data);
            //$(".aione-slider").owlCarousel(DataJson);
        });
    }catch(e){

    }

    try{
        $(".aione-carousel").owlCarousel({
            
            items:3,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
    }catch(e){

    }
}