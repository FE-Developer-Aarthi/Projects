function onSubmitClick() {
    
    
    var firstNameWarning = document.getElementById("firstNameWarning");
    var lastNameWarning = document.getElementById("lastNameWarning");
    var emailWarning = document.getElementById("emailWarning");
    var mobileWarning = document.getElementById("mobileWarning");
    var createWarning = document.getElementById("createWarning");
    var confirmWarning = document.getElementById("confirmWarning");
    
    
/* validation for firstname start */


    var firstName=document.getElementById("firstName");
          
    const isValidFirstName = firstName.checkValidity();

    if(firstName.value == ''){
        firstNameWarning.innerHTML ="Please enter a First Name";
    }

    else if(isValidFirstName == false ){
        firstNameWarning.innerHTML ="Please enter a Valid First Name";
    }

    else {
        firstNameWarning.innerHTML="";
    }

     

    
        /* validation for firstname end */


        /* validation for lastname start */
    var lastName=document.getElementById("lastName");
    const isValidlastName = lastName.checkValidity();


    if(lastName.value == ''){
        lastNameWarning.innerHTML ="Please enter a Last name";
    }

    else if(isValidlastName == false ){
        lastNameWarning.innerHTML ="Please enter Valid last Name";
    }

    else {
        lastNameWarning.innerHTML="";
    }



        /* validation for lastname end */


        /* validation for email start */
    var email=document.getElementById("email");
    const isValidemail = email.checkValidity();

    if(email.value == ''){
        emailWarning.innerHTML ="Please enter a Email ID";
    }

    else if(isValidemail == false ){
        emailWarning.innerHTML ="Please enter Valid Email ID";
    }

    else {
        emailWarning.innerHTML="";
    }


        /* validation for email end */


         /* validation for mobile start */

    var mobile=document.getElementById("mobile");
    const isValidmobile = mobile.checkValidity();

    if(mobile.value == ''){
        mobileWarning.innerHTML ="Please enter a Mobile Number";
    }

    else if(isValidmobile == false ){
        mobileWarning.innerHTML ="Please enter Valid Mobile Number";
    }

    else {
        mobileWarning.innerHTML="";
    }
        /* validation for mobile end */



        /* validation for password start */
    var createPW=document.getElementById("createPW");
    const isValidcreatePW = createPW.checkValidity();

    if(createPW.value == ''){
        createWarning.innerHTML ="Please enter a password";
    }

    else if(isValidcreatePW == false ){
        createWarning.innerHTML ="Please enter Valid Password";
    }

    else {
        createWarning.innerHTML="";
    }

 
        /* validation for password end */








        /* validation for confirm password start */

var message = document.getElementById('createPW').value == document.getElementById('confirmPW').value ;
console.log(message);

     if(document.getElementById('createPW').value =="" && document.getElementById('confirmPW').value == ""){
        document.getElementById('confirmWarning').innerHTML = 'Please enter a confirm password';
        // console.log("hello");
     }

    else if (message == false) {
        document.getElementById('confirmWarning').style.color = 'red';
        document.getElementById('confirmWarning').innerHTML = 'Password is not matching';
        console.log(message);
      }
     else  {
        document.getElementById('confirmWarning').style.color = 'green';
        document.getElementById('confirmWarning').innerHTML = 'Password is matching';
        // document.getElementById('confirmWarning').innerHTML="";
      }
    

        /* validation for confirm password end */
}
























   