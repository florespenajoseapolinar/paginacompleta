// JavaScript Document
$(document).ready(function() {
    $('#btnmenu').click(function(){
        if($('#btnmenu').attr('class')=='fa fa-bars'){
            $('#btnmenu').removeClass('fa fa-bars').addClass('fa fa-times');
            $('.navegacion .menu').css({'left':'0px'});
            $('.navegacion').css({'width':'100%','background':'rgba(0,0,0,0.3)'});
        }
        else{
            $('#btnmenu').removeClass('fa fa-times').addClass('fa fa-bars');
            $('.navegacion .menu').css({'left':'-320px'});
            $('.navegacion').css({'width':'0%','background':'rgba(0,0,0,0)'});
            $('.submenu').css({'left':'-320px'}); 
        }
    });
	
	//codigo para mostrar el submenu 
           
    $('.navegacion .menu .itemsubmenu > a').click(function(){
        var posmenu = $(this).parent().attr('vmenu');
        $('.submenu').css({'left':'-320px'}); 
        $('.itemsubmenu[vmenu="' + posmenu + '"] .submenu').css({'left':'0px'});
        console.log(posmenu);
    });
	
	$('.navegacion .submenu li.regresa').click(function(){
		$(this).parent().css({'left':'-320px'});
	});

    $('.submenu .regresa').click(function(){
        $(this).closest('.submenu').css({'left':'-320px'}); 
    });
});