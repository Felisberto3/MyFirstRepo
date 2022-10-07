const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

unknownPerson=()=>{
  localStorage.setItem("myId",JSON.stringify(-1))  
}

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });

    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    })
});

saveNewUserDatas=(firstName,lastName,email,password)=>{
   const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];

   const newUser={
       id:allUsers.length,
       img:"",
       name:firstName,
       surName:lastName,
        email:email,
       password:password,
       nickName:"",
       academicLevel:"",
       age:"",
       job:"",
       dream:"",
       saved:[],
       friendList:[],
       savedPost:[],
       allNotification:[],
       mensageSign:0,
       FriendSign:0,
       notificationSign:0
    }
   const myId=allUsers.length
   allUsers.push(newUser)
   localStorage.setItem("allUsers", JSON.stringify(allUsers))
   alert("Acabaste de se escrever no Ideias Brilhantes")
   localStorage.setItem("myId",JSON.stringify(myId));
    location.href="../index.html"
}
    
 verifyEmptyInput=(arrayInputsValue)=>{
    const seachEmptyInput=arrayInputsValue.some(eachInput=> eachInput.value==="");
    seachEmptyInput ? alert("preenche os campos") : (verifyValue=true);
    
 }
verifyEmail=(email)=>{
   const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
   const firstTeste= email.indexOf("@gmail.com");
   const secondTeste= allUsers.some(user=>user.email===email);
   firstTeste>=0 ? (verifyValue=true) : alert("faltou @.gmail no teu email"); 
   !(firstTeste>=0) && (verifyValue=false) 
   secondTeste &&   (verifyValue=false);
   secondTeste &&   alert("Ja existe um usuario com este email");
}
verifyPassword=(password)=>{
 password.length < 5 && alert("o PassWord deve ter 6 ou mais caracteres");
 password.length < 5 ? (verifyValue=false) :(verifyValue=true) 
}
let verifyValue=false;
signUp=()=>{
    const allInputField=document.querySelectorAll(".signUp .input-field");
    const arrayInputsValue=Array.from(allInputField);
    const firstName=document.querySelector(".signUp .firstName").value.trim();
    const lastName=document.querySelector(".signUp .lastName").value.trim();
    const email=document.querySelector(".signUp .email").value.trim();
    const password=document.querySelector(".signUp .password").value.trim();

    verifyEmptyInput(arrayInputsValue)
    verifyValue && verifyEmail(email)
    verifyValue && verifyPassword(password)
    verifyValue && saveNewUserDatas(firstName,lastName,email,password)
}
getInId=(myId)=>{
    localStorage.setItem("myId",JSON.stringify(myId));
    location.href="../index.html"  
}

certifyEmailAndPassword=(allUsers,email,password)=>{
 const myId=allUsers.findIndex(user=>{
        const {email:MyEmail,password:MyPassWord}=user;
      return  MyEmail===email && MyPassWord===password
    }) 
    myId < 0 ? alert("certifique o teu email ou password") : getInId(myId)
    
}
logIn=()=>{
    const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
    const allInputField=document.querySelectorAll(".logIn .input-field");
    const arrayInputsValue=Array.from(allInputField);
    const email=document.querySelector(".logIn .email").value.trim();
    const password=document.querySelector(".logIn .password").value.trim();

    verifyEmptyInput(arrayInputsValue)
    verifyValue && certifyEmailAndPassword(allUsers,email,password)
}


