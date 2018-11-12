



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

         if ($( "#Prenom" ).val().length<5) { 
            $( ".modal-body" ).text("Nom requis");

         
            $( "#myModal" ).model("show ");}

            if ($( "#Date" ).val().length<5) { 
                $( ".modal-body" ).text("Nom requis");
              
                $( "#myModal" ).model("show ");}

           if ($( "#Addresse" ).val().length<5) { 
            $( ".modal-body" ).text("Nom requis");
                
                $( "#myModal" ).model("show ");}

                if ($( "#Email" ).val().length<5) { 
                    $( ".modal-body" ).text("Nom requis");
                    $( "#myModal" ).model("show ");}
                   

      alert("zakiya")


   
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });
});