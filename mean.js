var form =document.forms[0]
var error=document.querySelector('.error')
var Welcome=document.querySelector('.Welcome')
var welcomeName=document.querySelector('.welcome-name')
var emailValidation=document.querySelector('.email-validation')
var system=document.querySelector('.system')
var notRight=document.querySelector('.not-right')
var loginDefult=document.querySelector('.login-defult')
var login=document.querySelector('.login')
var sign=document.querySelector('.sign')
var success=document.querySelector('.success')
var signLink=document.getElementById('signLink')
var loginLink=document.getElementById('loginLink')

form.addEventListener('submit',function(e){
   e.preventDefault();
})
var Name=document.getElementById('name')
var Email=document.getElementById('email')
var Password=document.getElementById('password')
var Email2=document.getElementById('email2')
var Password2=document.getElementById('password2')

var arr=[];
if(localStorage.getItem('Data')){  
    arr=JSON.parse(localStorage.getItem('Data')); 
}
var y=0;
function vaildation(){
    if(Name.value && Email.value && Password.value){
        error.classList.replace('d-block','d-none') 
        for(var i=0;i<arr.length;i++){
            if(arr[i].userEmail==Email.value){
                success.classList.replace('d-block','d-none')
                emailValidation.classList.replace('d-none','d-block') 
            }
            y=i
        }
        if((y+1)==arr.length || y==0){
            success.classList.replace('d-none','d-block')  
        var obj={
            userName:Name.value,
            userPass:Password.value,
            userEmail:Email.value
        }
        arr.push(obj)
        localStorage.setItem('Data',JSON.stringify(arr))
        }
        
        }else{
        error.classList.replace('d-none','d-block')  
    }
}

signLink.addEventListener('click',function(){
    sign.classList.replace('d-block','d-none')
    login.classList.replace('d-none','d-block')
})
loginLink.addEventListener('click',function(){
    login.classList.replace('d-block','d-none')
    sign.classList.replace('d-none','d-block')
})
var x;
function validLogin(){
    if(Email2.value&&Password2.value){
        notRight.classList.replace('d-block','d-none') 
         for(var i=0;i<arr.length;i++){
            if(arr[i].userEmail==Email2.value && arr[i].userPass==Password2.value){
                system.classList.replace('d-block','d-none')
                Welcome.classList.replace('d-none','d-block')
                welcomeName.innerHTML=arr[i].userName
            }
            x=i
         }
         console.log(x)
         console.log(arr.length)
         if((x+1)==arr.length){
            loginDefult.classList.replace('d-none','d-block')
         }
         loginDefult.classList.replace('d-none','d-block') 
    }else{
        notRight.classList.replace('d-none','d-block') 
    }
}
function LogOut(){
    Welcome.classList.replace('d-block','d-none')
    system.classList.replace('d-none','d-block')
    login.classList.replace('d-none','d-block')
}

