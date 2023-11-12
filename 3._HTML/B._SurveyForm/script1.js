
const validation=(e)=>{
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var dat = document.getElementById('dat').value;
    var cntry = document.getElementById('country-sel').value;
    var prof = document.getElementById('prof').value;
    var email = document.getElementById('email-field').value;
    var num = document.getElementById('mobile').value;
// validating first name and last name
    var check_char = /^[A-Za-z]+$/;
    if(first == ""){
        document.getElementById('fir').innerHTML = "**enter first name";
        return false;
    }
    else{
        document.getElementById('fir').innerHTML = "";
    }
    if(first.length<3){
        document.getElementById('fir').innerHTML = "**enter valid name";
        return false;
    }
    else{
        document.getElementById('fir').innerHTML = "";
    }
    if(first.length>20){
        document.getElementById('fir').innerHTML = "**name is too long";
        return false;
    }
    else{
        document.getElementById('fir').innerHTML = "";
    }
    if(first.match(check_char))
        true;
        else{
            document.getElementById('fir').innerHTML = "**use only alphabates";
            return false;
        }
    

    if(last ==""){
        document.getElementById('las').innerHTML = "**enter last name";
        return false;
    }
    else{
        document.getElementById('las').innerHTML = "";
    }
    if(last.length<3){
        document.getElementById('fir').innerHTML = "**enter valid name";
        return false;
    }
    else{
        document.getElementById('las').innerHTML = "";
    }
    if(last.length>20){
        document.getElementById('las').innerHTML = "**name is too long";
        return false;
    }
    else{
        document.getElementById('las').innerHTML = "";
    }
    if(last.match(check_char))
        true;
        else{
            document.getElementById('las').innerHTML = "**use only alphabates";
            return false;
        }
    // validating the date
    if(dat)
        true;
        else{
            document.getElementById('date-msg').innerHTML = "**enter DOB";
            return false;
        }
    // validating country
    if(cntry){
        document.getElementById('country-msg').innerHTML = "";
    }
        else{
            document.getElementById('country-msg').innerHTML = "**select country";
            return false;
        }
    // validating gender
    if(!mard.checked && !humdard.checked){
        document.getElementById('gen-msg').innerHTML = "**select gender";
            return false;
    }
    else{
        document.getElementById('gen-msg').innerHTML = "";
    }
    // validating profession
    if(prof ==""){
        document.getElementById('prof-msg').innerHTML = "**enter profession";
        return false;
    }
    else{
        document.getElementById('prof-msg').innerHTML = "";
    }
    if(prof.length<3){
        document.getElementById('prof-msg').innerHTML = "**enter valid profession";
        return false;
    }
    else{
        document.getElementById('prof-msg').innerHTML = "";
    }
    if(prof.length>20){
        document.getElementById('prof-msg').innerHTML = "**don't exceed 20 characters";
        return false;
    }
    else{
        document.getElementById('prof-msg').innerHTML = "";
    }
    //validating email
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById('email-msg').innerHTML = "enter valid email";
        return false;
    }else{
        document.getElementById('email-msg').innerHTML = "";
    }
    //validating mobile number
    if(num==""){
        document.getElementById('num-error').innerHTML = "**enter number";
        return false;
    }
    if(isNaN(num)){
        document.getElementById('num-error').innerHTML = "**enter only numeric value";
        return false;
    }
    if(num.length>10 || num.length<10){
        document.getElementById('num-error').innerHTML = "**enter 10 digits";
        return false;
    }
    if((num.charAt(0)!=9) && (num.charAt(0)!=8) && (num.charAt(0)!=7)){
        document.getElementById('num-error').innerHTML = "**must start with 9/8/7";
        return false;
    }
    //take values on popup
    document.getElementById("pop-name").innerHTML += first+" "+last;
    document.getElementById("pop-date").innerHTML += dat;
    document.getElementById("pop-country").innerHTML += cntry;
    if(mard.checked){
        document.getElementById("pop-gender").innerHTML += "Male"    
    }else{
        document.getElementById("pop-gender").innerHTML += "Female";
    }
    document.getElementById("pop-profession").innerHTML += prof;
    document.getElementById("pop-email").innerHTML += email;
    document.getElementById("pop-number").innerHTML += num;
    var element = document.getElementById('element');
    element.classList.add("popup")
}

//reset form HERE WE CAN ALSO USE BUILT-IN METHOD- .Reset() 
function resetAll(){
    document.getElementById('first').value = '';
    document.getElementById('last').value = '';
    document.getElementById('dat').value = '';
    document.getElementById('country-sel').value = '';
    document.getElementById('prof').value = '';
    document.getElementById('email-field').value = '';
    document.getElementById('mobile').value = '';
}

function resetByPopup(){
    resetAll();
    var element = document.getElementById('element');
    element.classList.remove("popup");
}