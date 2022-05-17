const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const phone = document.getElementById('number')
const gender = document.getElementById('gender')
const errorMsg = document.getElementById('errorMsg')
const passwordErrorMsg = document.getElementById('passworderrorMsg')


const btn = document.getElementById('btn')

btn.addEventListener('click', validate)

function validate(e){
    e.preventDefault();
   if(username.value.trim()==='' || email.value.trim()==='' || password.value.trim()==='' || confirmPassword.value.trim()==='' || phone.value.trim()==='' || gender.value.trim()===''){
       errorMsg.classList.remove('msg')
       errorMsg.classList.add('errorMsg')



       setTimeout(()=>{
           errorMsg.classList.remove('errorMsg')
           errorMsg.classList.add('msg')
       },2000)

       return false;

      
   }

   if(password.value.trim() !== confirmPassword.value.trim()){
        passwordErrorMsg.classList.remove('passwordmsg')
        errorMsg.classList.add('passwordErrorMsg')



        setTimeout(()=>{
            passwordErrorMsg.classList.remove('passwordErrorMsg')
            passwordErrorMsg.classList.add('passwordmsg')
        },2000)
   }


   

   
   username.value = ''
   email.value = ''
   password.value = ''
  confirmPassword.value = ''
   phone.value = ''
   gender.value = ''

   return true;

}

const openEye = document.getElementById('openEye')
const closeEye = document.getElementById('closeEye')

openEye.addEventListener('click', seePassword)
closeEye.addEventListener('click', hidePassword)



function seePassword(){
    if(password.type === 'password'){
       password.type = 'text' 
    }else{
        password.type = 'password'
    }
    console.log(1)
}

function hidePassword(){
    if(password.type === 'text'){
       password.type='password' 
    }
}



let menu = document.querySelector('#menu')

let openIcon = document.querySelector('#open')
let closeIcon = document.querySelector('#close')

openIcon.addEventListener('click', open)
closeIcon.addEventListener('click', close)

function open(e){
    e.preventDefault();
    menu.style.display = 'flex'
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'
}

function close(e){
    menu.style.display = 'none'
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'
}



