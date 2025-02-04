

function showform(type){
    document.getElementById("registationform").classList.add("d-none");
    document.getElementById("loginform").classList.add("d-none");
    if(type === "register"){
        document.getElementById("registationform").classList.remove("d-none");
} 
    else if (type === "login"){
        document.getElementById("loginform").classList.remove("d-none");
}
}

function register(){
    const fullname=document.getElementById("regFullname").value;
    const email=document.getElementById("regEmail").value;
    const password=document.getElementById("regPassword").value;

    if (!fullname){
        alert("Please enter Fullname")
        return
    }
    if (!email){
        alert("Please enter Fullname")
        return
    }
    if (!password){
        alert("Please enter Fullname")
        return
    }
    const user={fullname,email,password}
    localStorage.setItem(email,JSON.stringify(user));
    alert("Registation Successfully");
    
    document.getElementById('regFullname').value='';
    document.getElementById('regEmail').value='';
    document.getElementById('regPassword').value='';

    showform("login")
}

function login(){
    const email=document.getElementById('loginEmail').value;
    const password=document.getElementById('loginPassword').value;
    if(!email){
        alert("Email field is required!")
        return;
    }
    if(!password){
        alert("Password field is required!")
        return;
    }
    const user=localStorage.getItem(email)
    if(!user){
        alert("User not exist!")
        return;
    }
    const perseUser=JSON.parse(user)
    if(password !=perseUser.password){
        alert("Incorrect password")
        return
    }
    alert("Login successfull! welcome "+ perseUser.fullname)
    document.getElementById('loginEmail').value='';
    document.getElementById('loginPassword').value='';
}