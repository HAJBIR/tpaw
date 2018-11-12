



$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );

    


     $("#Valider").on("click",function(event)
          {event.preventDefault();
            
           


     if ($( "#Nom" ).val().length<5) { 
        $( ".modal-body" ).text("Nom requis");

        
        $( "#myModal" ).model("show ");

     }

         else if ($( "#Prenom" ).val().length<5) { 
            $( ".modal-body" ).text("Nom requis");

         
            $( "#myModal" ).model("show ");}

            else if ($( "#Date" ).val().length<5) { 
                $( ".modal-body" ).text("Nom requis");
              
                $( "#myModal" ).model("show ");}

          else  if ($( "#Addresse" ).val().length<5) { 
            $( ".modal-body" ).text("Nom requis");
                
                $( "#myModal" ).model("show ");}

               else  if ($( "#Email" ).val().length<5) { 
                    $( ".modal-body" ).text("Nom requis");
                    $( "#myModal" ).model("show ");}


                    else {


                        $(".modal-title").html("Bienvenue " + $("#nom").val() );

                        $(".modal-body").html(" vous etes né le  : " + $("#date").val());
                        $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers="+ $("#adresse").val()+
                        "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
                        $('#myModal').modal("show");











                    }
                   

    


   
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });

});