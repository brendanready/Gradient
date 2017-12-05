/* mySlideShow.cs Plugin  */
/* A Manual Slide Show  */
/* William Erickson 08/12/2016  */
		
    (function ( $ ) {
        
        $.fn.displaySlideShow = function() {
            return this.each(function(event) { 
            
		        var images = document.getElementsByClassName("mySlides");   
                images[0].style.display = "block";
            
                 $('#img1').click(function(){
                    $('#1').fadeIn();
                    images[1].style.display = "none";
                    images[2].style.display = "none";
                    images[3].style.display = "none";
                    images[4].style.display = "none";
                     
                     $('#img1').css('color', 'crimson');
                     $('#img2').css('color', 'black');
                     $('#img3').css('color', 'black');
                     $('#img4').css('color', 'black');
                     $('#img5').css('color', 'black');
                });
                
                 $('#img2').click(function(){
                    images[0].style.display = "none";
                    $('#2').fadeIn();
                    images[2].style.display = "none";
                    images[3].style.display = "none";
                    images[4].style.display = "none";
                     
                    $('#img1').css('color', 'black');
                    $('#img2').css('color', 'crimson');
                    $('#img3').css('color', 'black');
                    $('#img4').css('color', 'black');
                    $('#img5').css('color', 'black');
                });
                
                 $('#img3').click(function(){
                    images[0].style.display = "none";
                    images[1].style.display = "none";
                    $('#3').fadeIn();
                    images[3].style.display = "none";
                    images[4].style.display = "none";
                     
                    $('#img1').css('color', 'black');
                    $('#img2').css('color', 'black');
                    $('#img3').css('color', 'crimson');
                    $('#img4').css('color', 'black');
                    $('#img5').css('color', 'black');
                });
                
                 $('#img4').click(function(){
                    images[0].style.display = "none";
                    images[1].style.display = "none";
                    images[2].style.display = "none";
                    $('#4').fadeIn();
                    images[4].style.display = "none";
                     
                    $('#img1').css('color', 'black');
                    $('#img2').css('color', 'black');
                    $('#img3').css('color', 'black');
                    $('#img4').css('color', 'crimson');
                    $('#img5').css('color', 'black'); 
                });
                
                 $('#img5').click(function(){
                    images[0].style.display = "none";
                    images[1].style.display = "none";
                    images[2].style.display = "none";
                    images[3].style.display = "none";
                    $('#5').fadeIn();
                     
                    $('#img1').css('color', 'black');
                    $('#img2').css('color', 'black');
                    $('#img3').css('color', 'black');
                    $('#img4').css('color', 'black');
                    $('#img5').css('color', 'crimson');
                });	
        });    
     }
}( jQuery ));   
