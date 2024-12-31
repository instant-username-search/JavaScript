function validate(){
    var un=document.getElementById("un").value
    if(un==""){
        document.getElementById(mssg).innerText="username cannot be empty";
        return false
    }
    if(un.length<3){
        document.getElementById(mss).innerText="username cannot be less than 3 characters";
        return false;
    }
}