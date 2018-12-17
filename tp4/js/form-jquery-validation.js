$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

    

        if ($("#name").val().length < 5) {
            $(".modal-body").text("Nom requis");

            console.log("Je suis une chaîne".length);
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

        









        }


       



        // Y mettre le code jQuery pour valider tous les champs du formulaire
    });

    $("#gps").on("click", function (event) {
        event.preventDefault();
        getLocation();});

         i = 0;
        $(document).ready(function(){
          $("#name").keypress(function(){
            $("#span").text(i += 1);
          });

        

});