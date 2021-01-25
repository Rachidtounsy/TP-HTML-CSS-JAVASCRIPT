function valider() {

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");

    let rg = new RegExp('^[a-z]+$', 'g');
    let rg2 = new RegExp('^[a-z]+$', 'g');
    let rg3 = new RegExp('^[^0-9][a-z0-9]{4,}@[a-z]{3,}\.(com|ma)$', 'g');
    let rg4 = new RegExp('[0-9]$', 'g');

    var validatininput;
    var divdemessage = document.getElementById("divdemessage");

   
    if (localStorage.getItem("data") !== null) {
        var y = localStorage.getItem("data");
  
        y = JSON.parse(y);
        divdemessage.style.display = "block";
       
        divdemessage.innerHTML = "Nom : " + y.nom + " Residence : " + y.residence + " ,Email :" + y.email + ",Langue parle : " + y.langue + "<br>"
            
    }




    //===================================================================


    var cp;



    var ch = "";
    if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true) {
        ch = "FR,AR, ENG";
    } else if (checkbox1.checked == true && checkbox2.checked == true) {
        ch = "FA, AR";
    } else if (checkbox1.checked == true && checkbox3.checked == true) {
        ch = "FA, ENG";
    } else if (checkbox2.checked == true && checkbox3.checked == true) {
        ch = "AR, ENG";
    }

    //===================================================================

    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "") {
        divdemessage.innerHTML = "Attention !! veuillez remplir toutes les cases ";

        divdemessage.style.display = "block";
        return;
    }
    //===================================================================

    if (rg.test(input1.value) == false) {
        divdemessage.innerHTML = "Attention !! Nom  est obligatoire et ne doit pas contenir que des caractères miniscule";
        divdemessage.style.display = "block";
        return;
    }
    if (rg2.test(input2.value) == false) {
        divdemessage.innerHTML = "Attention !!  Residence est obligatoire et ne doit pas contenir que des caractères miniscule";
        divdemessage.style.display = "block";
        return;
    }

    //===================================================================
    if (rg3.test(input3.value) == false) {
        divdemessage.innerHTML = "email non valide";
        divdemessage.style.display = "block";
        return;
    }
    //===================================================================
    if (rg4.test(input4.value) == false || input4.value < 18) {
        divdemessage.innerHTML = " Age doit être un chiffre d abord et aussi superieur a 18 ans.";
        divdemessage.style.display = "block";
    } else {
        divdemessage.style.display = "block";
        divdemessage.innerHTML =
            "Nom : " +
            input1.value +
            " Residence : " +
            input2.value +
            " ,Email :" +
            input3.value +
            ",Langue parle : " +
            ch +
            "<br>";

  
        var x = {
            nom: input1.value,
            residence: input2.value,
            email: input3.value,
            langue: ch,
        };

        localStorage.setItem("data", JSON.stringify(x));
    }

    //===================================================================


    cp = 0;
    if (checkbox1.checked == true && checkbox2.checked == true ||
        checkbox1.checked == true && checkbox3.checked == true ||
        checkbox2.checked == true && checkbox3.checked == true) {
        cp = 2;

        return;
    }

    if (cp < 2) {

        divdemessage.innerHTML = "Au moins deux langues doit etre cocher.";
        return;
    }

}