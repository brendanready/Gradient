/* myAccordian.cs Plugin  */
/* William Erickson 08/12/2016  */
		
(function ( $ ) {
    
    $.fn.displayAccordian = function() {
             return this.each(function(event) { 
        
		            $('#one').click(function(){
                    $('#one').toggleClass('show1');
                    $('#panel1').toggleClass('show');
                                              /* Font Awsome Class Goes Here */
                    $('#font1').toggleClass('fa-plus-square-o fa-minus-square-o'); 
                    
                    });
                
                    $('#two').click(function(){
                    $('#two').toggleClass('show1');
                    $('#panel2').toggleClass('show');
                                              /* Font Awsome Class Goes Here */
                    $('#font2').toggleClass('fa-plus-square-o fa-minus-square-o');
                    });
                
                    $('#three').click(function(){
                    $('#three').toggleClass('show1');
                    $('#panel3').toggleClass('show');
                                              /* Font Awsome Class Goes Here */
                    $('#font3').toggleClass('fa-plus-square-o fa-minus-square-o');
                    });
             });
    }
}( jQuery ));   
