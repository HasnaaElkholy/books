function namefun1(){
    Name=document.getElementById("name").value;
    values=/^([A-Z][a-z]{2,20}[ ]?){2}$/;
    if (values.test(Name)==true){
        document.getElementById("name_error").style.display="none";
    }
    else{
        document.getElementById("name_error").style.display="inline-block";
    }
}
       ///////////////// function Gmail
function emailfun2(){
    Email=document.getElementById("email").value;
    values=/@gmail.com$/;
    if (values.test(Email)==true){
        document.getElementById("email_error").style.display="none";

    }
    else{
        document.getElementById("email_error").style.display="block";
    }
}


 //////////// function age
function agefun3(){
    Age=document.getElementById("age").value;
    values=/[1][6-9]|[2][0-9]|[3][0-9]|[4][0-9]|[5][0-9]|[6][0]$/;
    if (values.test(Age)==true){
        document.getElementById("age_error").style.display="none";

    }
    else{
        document.getElementById("age_error").style.display="block";
    }
}
 //////////// function address
function addressfun4(){
    Add=document.getElementById("address").value;
    values=/[1-9][0-9]([ ][A-Z][a-z]{2,15}[ ]?){2}$/;
    if (values.test(Add)==true){
        document.getElementById("address_error").style.display="none";

    }
    else{
    document.getElementById("address_error").style.display="block";

    }
}
function countryfun5(){
    count=document.getElementById("country").value;
    if(count==""){
        document.getElementById("country_error").style.display="block";
    }
    else{
        document.getElementById("country1").value=count;
        document.getElementById("country_error").style.display="none";
        }
}

function genderfun(){
    gender1 = document.getElementById("male").checked;
    gender2 = document.getElementById("female").checked;
    if(gender1==true || gender2==true){
        document.getElementById("gender_error").style.display="none";
        window.open("home.html" ,"_blank");

    }
    else if(gender1==false || gender2==false){
        document.getElementById("gender_error").style.display="none";

    } }

function check(){
    namefun1();
    emailfun2();
    agefun3();
    addressfun4();
    genderfun();
    countryfun5();


}



