function handleLogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const error=document.getElementById('error')
    
    const loginData=[
        {username:"username",password:"password"},
        {username:"cr7",password:"pass123"},
        {username:"virat",password:"123pass"},
    ]
    const  isValid=loginData.some((user)=>user.
    username===username && user.password ===password)

    if(isValid){
        window.location.href='flexbox.html'
        error.innerText="Login Successful"
    }
    else{

    }
}