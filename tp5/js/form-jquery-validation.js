$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

    

        if ($("#name").val().length < 5) {
            $(".modal-body").text("Nom requis");

          
            $("#myModal").modal("show");
              
            
            
        }

        else if ($("#firstname").val().length < 5) {
            $(".modal-body").text("Prenom requis");


            $("#myModal").modal("show");
        }

        else if ($("#birth").val().length < 5) {
            $(".modal-body").text("Date requis");

            $("#myModal").modal("show");

        


        }

        else if ($("#adresse").val().length < 5) {
            $(".modal-body").text("Adresse requis");

            $("#myModal").modal("show");
           
        }

        else if ($("#mail").val().length < 5) {
            $(".modal-body").text("Email requis");
            $("#myModal").modal("show");
        }

         
        else {


            $(".modal-title").html("Bienvenue " + $("#name").val());

            $(".modal-body").html(" vous etes né le  : " + $("#birth").val());
            $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() +
                "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
            $('#myModal').modal("show"); 
        
            contactStore.add($("#name").val(),$("#firstname").val(),$("#birth").val(),$("#adresse").val(),$("#mail").val()); 
        
        
        
        }

        









        


        

        // Y mettre le code jQuery pour valider tous les champs du formulaire
    });   
                   $("#gps").on("click", function (event) {
                   event.preventDefault();
                 getLocation();});
                                                      });




                   


            $(document).ready(function () {
                $("#submit1").on("click", function (event) {
                    event.preventDefault();

                          var contactList = [] ;

                               contactList=contactStore.getList();
                          
                              
                          for(var index in contactList ){
                            
                            
                       document.querySelector("table tbody").innerHTML =document.querySelector("table tbody").innerHTML+'<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>' ; 
                                        } ;  })  ;  });

               

+
                              
                                  

                          



                                       
            


           
                
                    
                        
                        
                         
                                                                                                       
        




      

        
         
                      
    
    

         
                     $(document).ready(function(){
                        $("#name").keypress(function(){

                           $("#span1").text($("#name").val().length);
                                                                        });
                                        $("#name").keydown(function(){
                
                               $("#span1").text($("#name").val().length);

                                     });
                                       $("#name").keyup(function(){
                
                                       $("#span1").text($("#name").val().length);
                                            });
      

                                     });




                                     $(document).ready(function(){
                                        $("#firstname").keypress(function(){
                            
                                          $("#span2").text($("#firstname").val().length);
                                          });
                                          $("#firstname").keydown(function(){
                                            
                                            $("#span2").text($("#firstname").val().length);
                            
                                            });
                                            $("#firstname").keyup(function(){
                                            
                                                $("#span2").text($("#firstname").val().length);
                                                });
                                  
                            
                                           });





                                          

                                               $(document).ready(function(){
                                                $("#adresse").keypress(function(){
                                    
                                                  $("#span4").text($("#adresse").val().length);
                                                  });
                                                  $("#adresse").keydown(function(){
                                                    
                                                    $("#span4").text($("#adresse").val().length);
                                    
                                                    });
                                                    $("#adresse").keyup(function(){
                                                    
                                                        $("#span4").text($("#adresse").val().length);
                                                        });
                                          
                                    
                                                   });             
                           
            
         



          $(document).ready(function(){
            $("#mail").keypress(function(){

              $("#span5").text($("#mail").val().length);
              });
              $("#mail").keydown(function(){
                
                $("#span5").text($("#mail").val().length);

                });
                $("#mail").keyup(function(){
                
                    $("#span5").text($("#mail").val().length);
                    });
      

               });

                  
               
                                         
         
               
    

