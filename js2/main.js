// JavaScript Document
$(document).ready(function() {
    var imgnum = $('.carrusel li').length; // asina el nuero de imagenes
    var postimg=1;

    // agrega el numero de circulos por imagenea
    for(i=1;i <= imgnum;i++)
    {
    $('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
    }

    // posicionamiento de las imagenes

    	$('.carrusel li').hide(); // oculta la imagen
    	$('.carrusel li:first').show(); // muestra la imagen
		$('.paginacion li:first').css({'color':'#CD6E2E'}); //cambia el color del circulo

// ejecutar funciones
		$('.paginacion li').click(paginacion);
		$('.derecha span').click(nextimg);
		$('.izq span').click(anteimg);

//funciones
function paginacion(){
    var pospaginacion =$(this).index()+1;
    console.log(pospaginacion);

		$('.carrusel li').hide();
   		$('.carrusel li:nth-child('+pospaginacion+')').fadeIn();

		$('.paginacion li').css({'color':'#CCC'});
		$(this).css({'color':'#CD6E2E'});
	}
	function nextimg(){
		if(postimg>=imgnum)
	{
		postimg=1;
	}
	else
	{
		postimg++;
	}
		console.log(postimg)
		$('.carrusel li').hide();
		$('.carrusel li:nth-child('+postimg+')').fadeIn();
		}
	function anteimg(){
		if(postimg<=1)
	{
		postimg=5;
	}
	else
	{
		postimg--;
	}
		console.log(postimg)
		$('.carrusel li').hide();
		$('.carrusel li:nth-child('+postimg+')').fadeIn();
	}
});
