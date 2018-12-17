$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();




        if ($("#Nom").val().length < 5) {
            $(".modal-body").text("Nom requis");


            $("#myModal").modal("show");

        }

        else if ($("#Prenom").val().length < 5) {
            $(".modal-body").text("Prenom requis");


            $("#myModal").modal("show");
        }

        else if ($("#Date").val().length < 5) {
            $(".modal-body").text("Date requis");

            $("#myModal").modal("show");
        }

        else if ($("#Adresse").val().length < 5) {
            $(".modal-body").text("Adresse requis");

            $("#myModal").modal("show");
            <button onclick="getLocation()">GPS</button>
        }

        else if ($("#Email").val().length < 5) {
            $(".modal-body").text("Email requis");
            $("#myModal").modal("show");
        }


        else {


            $(".modal-title").html("Bienvenue " + $("#Nom").val());

            $(".modal-body").html(" vous etes né le  : " + $("#Date").val());
            $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#Adresse").val() +
                "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
            $('#myModal').modal("show");











        }







        // Y mettre le code jQuery pour valider tous les champs du formulaire
    });

});