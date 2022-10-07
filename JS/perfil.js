const  photo = document.querySelector("#photo")
 let   imgUrl=""
 
const changingProfile = document.querySelector(".changingProfile")
const editeform=document.forms[0]


const nameEdited = document.querySelector("form .allMyDatas #name")
const surNameEdited = document.querySelector("form .allMyDatas #surName")
const emailEdited = document.querySelector("form .allMyDatas #email")
const ageEdited = document.querySelector("form .allMyDatas #Age")
const passwordEdited = document.querySelector("form .allMyDatas #password")
const nickNameEdited = document.querySelector("form .allMyDatas #NickName")
const academicLevelEdited = document.querySelector("form .allMyDatas #Habilidade_Literaria")
const jobEdited = document.querySelector("form .allMyDatas #job")
const dreamEdited = document.querySelector("form .allMyDatas #dream")
    
editeProfile=(chosedPhoto)=>{
    const myId = JSON.parse(localStorage.getItem("myId"))
    const allUsers = JSON.parse(localStorage.getItem("allUsers"))
    const myData= allUsers[myId]
    const {name,surName,email,img,password,nickName,academicLevel,age,job,dream} = myData

    const myPerfilPhoto = document.querySelector(".pop-edite-profile  .myPerfilPhoto")
    
    !!img && (myPerfilPhoto.innerHTML = ` <img src=${img} alt="">`)
    !!chosedPhoto &&  (myPerfilPhoto.innerHTML = ` <img src=${chosedPhoto} alt="">`)

    const Editeinputs = document.querySelectorAll("form .allMyDatas input")

    Editeinputs.forEach(field=>{
        field.id==="name" &&  ( field.value = name)
        field.id==="surName" &&  (field.value = surName)
        field.id==="email" &&  (field.value = email)
        field.id==="password" &&  (field.value = password)
        field.id==="NickName" &&  (field.value = nickName)
        field.id==="age" &&  (field.value =age)
        field.id==="Habilidade_Literaria" &&  (field.value = academicLevel)
        field.id==="job" &&  (field.value = job)
        field.id==="dream" &&  (field.value = dream)
     })

}



editeform.addEventListener("submit",()=>{
    const myId = JSON.parse(localStorage.getItem("myId"))
    const allUsers = JSON.parse(localStorage.getItem("allUsers"))
    const myData= allUsers[myId]
    const {name,surName,email,img,password,nickName,academicLevel,age,job,dream} = myData
    const Editeinputs = document.querySelectorAll("form .allMyDatas input")

        !!imgUrl          &&    (myData.img = imgUrl)
        myData.name       =       nameEdited.value
        myData.surName    =       surNameEdited.value
        myData.email      =       emailEdited.value
        myData.password   =       passwordEdited.value
        myData.nickName   =       nickNameEdited.value
        myData.age        =       ageEdited.value
        myData.academicLevel =    academicLevelEdited.value
        myData.job       =       jobEdited.value
        myData.dream      =        dreamEdited.value
     localStorage.setItem("allUsers",JSON.stringify(allUsers))
     alert("O Teu Perfil Esta Actualizado")
     gatAllData()
})
photo.onchange=()=>{
     imgUrl=""
    const url = photo.files[0]
    const reader = new FileReader()

    reader.onload=()=>{
         imgUrl= reader.result
        editeProfile(imgUrl)
    }
    !!url && reader.readAsDataURL(url)
}

///////////////////////////TEMPORÁRIO ESTA PARTE
// const CloseProfile = document.querySelector(".pop-perfil")
// const CloseProfile_icon = document.querySelector(".pop-perfil .fa-window-close")
const Close_edite_Profile = document.querySelector(".pop-edite-profile")
const Close_edite_Profile_icon= document.querySelector(".pop-edite-profile  .fa-window-close")
showEditeProfile=()=>{
    Close_edite_Profile.classList.toggle("off")
    editeProfile()
}   
// CloseProfile_icon.onclick=()=> CloseProfile.classList.toggle("off")
Close_edite_Profile_icon.onclick=()=> Close_edite_Profile.classList.toggle("off")
// profile_box.onclick=()=>{
//     const myId       =    JSON.parse(localStorage.getItem("myId"))
//     console.log(myId);
    
//     if (myId>=0) {
//         CloseProfile.classList.toggle("off")

//         const allUsers   =    JSON.parse(localStorage.getItem("allUsers"))
        // const myData     =     allUsers[myId]

//         const {name,surName,email,img,password,nickName,academicLevel,age,job,dream} = myData

//         const myPerfilPhoto = document.querySelector(".pop-perfil .myPerfilPhoto")
//         const allMyDatas    = document.querySelector(".pop-perfil .allMyDatas")

//         !!img && (myPerfilPhoto.innerHTML=` <img src=${img} alt="">`)

//         allMyDatas.innerHTML=`
//         <span><strong>Nome</strong>:${name}</span>
//         <span><strong>Sobrenome</strong>:${surName}</span>
//         <span><strong>Idade</strong>:${age}</span>
//         <span><strong>Email</strong>:${email}</span>
//         <span><strong>Apelido</strong>:${nickName}</span>
//         <span><strong>Habilidade Literaria</strong>:${academicLevel}</span>
//         <span><strong>Proficao</strong>:${job}</span>
//         <span><strong>Sonho</strong>: ${dream}</span>
//     `  
//     }
//  (!myId && myId!==0) &&  alert("Nao Estas Logado")
    
    

    



// }




///////////////////////////TEMPORÁRIO ESTA PARTE
