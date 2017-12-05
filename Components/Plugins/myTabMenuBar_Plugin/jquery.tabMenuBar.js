/* myTabMenuBar.cs Plugin  */
/* William Erickson 08/12/2016  */

        (function ( $ ) {
             $.fn.displayTabMenuBar = function() {
                 return this.each(function(event) { 
        
                        $('#tab1').click(function(){
                            $('#panel1').css('display', 'block');
                            $('#panel2').css('display', 'none');
                            $('#panel3').css('display', 'none');
                          
                            $('#tabs li:nth-of-type(2)').css('background-color', 'lightgrey');
                            $('#tabs li:first-of-type').css('background-color', 'white');
                            $('#tabs li:nth-of-type(3)').css('background-color', 'lightgrey');
                            
                           
                        });
            
                        $('#tab2').click(function(){
                            $('#panel1').css('display', 'none');
                            $('#panel2').css('display', 'block');
                            $('#panel3').css('display', 'none');
                            
                            $('#tabs li:nth-of-type(2)').css('background-color', 'white');
                            $('#tabs li:first-of-type').css('background-color', 'lightgrey');
                            $('#tabs li:nth-of-type(3)').css('background-color', 'lightgrey');
                            
                        });
                        
                        $('#tab3').click(function(){
                            $('#panel1').css('display', 'none');
                            $('#panel2').css('display', 'none');
                            $('#panel3').css('display', 'block');
                            
                            $('#tabs li:nth-of-type(2)').css('background-color', 'lightgrey');
                            $('#tabs li:first-of-type').css('background-color', 'lightgrey');
                            $('#tabs li:nth-of-type(3)').css('background-color', 'white');
                        });
                 });    
             }
        }( jQuery ));        