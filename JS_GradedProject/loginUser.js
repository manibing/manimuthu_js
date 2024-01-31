var fname="akash";
var password="akash1234";
class person{
    constructor(){
        this.fname=fname;
        this.password=password;
    }
}
 function validateUser(){
     var newName=document.getElementById('user').value;
     var newPassword=document.getElementById('pass').value;
     if(fname===newName && password===newPassword){
       window.location.href="index.html";
     }else{
        alert("invalid credential")
       
     }

 }
 