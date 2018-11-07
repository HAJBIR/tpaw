



function validation() {
    var Name = document.querySelector("#Nom").value;
    var prenom = document.querySelector("#Prenom").value;
    var date   = document.querySelector("#Date").value;
    var add = document.querySelector("#Adresse").value;
    var email = document.querySelector("#Email").value;
    if (Name=="") {
        document.getElementById("error").setAttribute('style','display:block');
        document.querySelector("#error").textContent="le Nom est obligatoire";

        
    }
    else if (Name.length<5)

    {document.querySelector("#error").textContent="le Nom doit contenir au moins 5 caractères";
    document.getElementById("error").setAttribute('style','display:block');}

    
    
    else if (prenom=="")

    {document.querySelector("#error").textContent="le prenom est obligatoire";
    document.getElementById("error").setAttribute('style','display:block');}
    

    else if (prenom.length<5) {
        document.querySelector("#error").textContent=" Prenom doit contenir au moins 5 caractères";
        document.getElementById("error").setAttribute('style','display:block');
    }
     

    else if (date=="")

    { document.querySelector("#error").textContent="la date est obligatoire";

    document.getElementById("error").setAttribute('style','display:block');}


        
    else if (date.length<5) {
                document.querySelector("#error").textContent=" la date doit contenir au moins 5 caractères";
                document.getElementById("error").setAttribute('style','display:block');
            }
              


            else if (add=="")

            {document.querySelector("#error").textContent="la date est obligatoire";
            document.getElementById("error").setAttribute('style','display:block');
        }
        
        
                
            else if (add.length<5) {
                        document.querySelector("#error").textContent=" l'adresse doit contenir au moins 5 caractères";
                        document.getElementById("error").setAttribute('style','display:block');
                    }

                    else if (email=="")

                    {document.querySelector("#error").textContent="l'email est obligatoire";
                    document.getElementById("error").setAttribute('style','display:block');}
                
                
                        
                    else if (email.length<5) {
                             
                        
                        document.querySelector("#error").textContent=" l'email doit contenir au moins 5 caractères";
                        document.getElementById("error").setAttribute('style','display:block');
                            }




                            else 
                            {


                                document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Nom").value;
                                document.getElementById("resultat").setAttribute('style','display:block');  
                            }
}