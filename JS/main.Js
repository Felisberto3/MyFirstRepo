const pops= Array.from(document.querySelectorAll(".pop"))
const MensageError=document.querySelector(".MensageError")

UnknownUser={
    name:"Desconhecido",
    surName:"Desconhecido",
    email:"Se escreva neste site para desfrutar de mais servicos",
    note:"Deves estar cadastrado neste site para teres dados reais",
}

rejeitarEstePedido=()=>{
    let allUsers=JSON.parse(localStorage.getItem("allUsers"));
    let myId=JSON.parse(localStorage.getItem("myId"));
    myId=3
    const {allNotification}=allUsers[myId];
    const notifyIndex= allNotification.findIndex(Notification=>{
        const {id,level}=Notification
       return id===myFriendId && level==="notAcept"      
    })
    allNotification.splice(notifyIndex,1)
    
    localStorage.setItem("allUsers",JSON.stringify(allUsers))
}
// StorageInMyAndHisFriendList=(allUsers,myId,myFriendId)=>{
//     const {friendList:HisListOfFriend}=allUsers[myFriendId]
//     const {friendList:MyListOfFriend}=allUsers[myId]

//     MyListOfFriend.push({id:myFriendId,talk:[]})
//     HisListOfFriend.push({id:myId,talk:[]})
    
//     localStorage.setItem("allUsers",JSON.stringify(allUsers))
// }
// AceitarPedidosDeAmizade=(myFriendId)=>{
    
//     const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
//     let myId=JSON.parse(localStorage.getItem("myId"));

//     const {friendList:MyListOfFriend,allNotification}=allUsers[myId]
//     const certifyIfHisMyFriend=MyListOfFriend.some(eachMyfriend=>eachMyfriend.id===myFriendId)
    
//     const notifyIndex= allNotification.findIndex(Notification=>{
//         const {id,level}=Notification
//        return id===myFriendId && level==="notAcept"      
//     })

//     allNotification.splice(notifyIndex,1)
//     localStorage.setItem("allUsers",JSON.stringify(allUsers))   
//     !certifyIfHisMyFriend ? StorageInMyAndHisFriendList(allUsers,myId,myFriendId) :alert("ja tens ele como amigo")
// }
enviarPedidoDeAmizade=(myFriendId)=>{
    const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
     let myId=JSON.parse(localStorage.getItem("myId"));
    
    
    const {allNotification}=allUsers[myFriendId]
 
   const condition = allNotification.every(notify=>{
       const {id,type,level}=notify
       return id!==myId && type!=="friendship" && level!=="notAcept"
   })
    condition && allNotification.push({id:myId,type:"friendship",level:"notAcept"})    
    localStorage.setItem("allUsers",JSON.stringify(allUsers)) 
    const AmizadeButton = document.querySelector(".trend-icon button") 
    AmizadeButton.innerHTML=` <i class="fas fa-ellipsis-h more-icon"></i>`
     
}
insertUnKnowFriendsInHTML=(myId,allUsers )=>{
    const FriendSuggest=document.querySelector(".trends ul ul");
    FriendSuggest.innerHTML=""
    const {friendList}=allUsers[myId]
    const UnKnowFriends=[]
    allUsers.forEach(user=>{
    const{id}=user
    const verify=friendList.some(friend=>friend.id===id)
    !verify && UnKnowFriends.push(user)
    }); 

    UnKnowFriends.forEach(user => {
        console.log("hi");
        
        const {id:myFriendId,name,surName}=user;
    myId!==myFriendId &&  (FriendSuggest.innerHTML+=
    `
    <li class="nav-list">
    <div class="trend-list">
        <p class="sub-text">Desenvolvimento_Robotic</p>
        <p class="main-text">#${name}${surName}</p>
        <p class="sub-text">274K Visitas</p>
    </div>
    <div class="trend-icon">
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="trend-icon">
        <button onclick="enviarPedidoDeAmizade(${myFriendId})">Enviar</button>
        <button onclick="rejeitarEstePedido()">Cancelar</button>
    </div>
   </li>
    ` )
});
}
showUserIdentity=(allUsers,myId)=>{
    const profile_box=document.querySelector(".profile-box"); 

    const {name,surName,img,email}=allUsers[myId];
    let imgTag = `  <i class="fas fa-user"></i>`
    !!img && (imgTag = `<img src=${img} alt="">`)

    profile_box.innerHTML= `
    <a href="assets/pages/perfil.html" onclick="UserProfileId(${myId})"> ${imgTag} </a>
    <a href="assets/pages/perfil.html" onclick="UserProfileId(${myId})">
    <div class="profile-link">
      <p class="full-name">${name} ${surName}</p>
      <p class="user-name">${email}</p>
    </div>
    </a>
    <div class="options-icon"><i class="fas fa-caret-down"></i></div>
     `
}
showUserIdentitys=(allUsers,myId)=>{
    const profile_box=document.querySelector(".profile-box"); 
    const profileInMain= document.querySelector(".profileInMain")
    // !profileInMain ? (profileInMain="") : (profileInMain=`<a href="assets/pages/perfil.html"> </a>`)
    const {name,surName,img,email}=allUsers[myId];
    let imgTag = `  <i class="fas fa-user"></i>`
    !!img && (imgTag = `<img src=${img} alt="">`)

    profile_box.innerHTML= `
    <a href="perfil.html" onclick="UserProfileId(${myId})"> ${imgTag} </a>
    <a href="perfil.html" onclick="UserProfileId(${myId})">
    <div class="profile-link">
      <p class="full-name">${name} ${surName}</p>
      <p class="user-name">${email}</p>
    </div>
    </a>
    <div class="options-icon"><i class="fas fa-caret-down"></i></div>
     `
}
showUnknownUserIdentity=()=>{
    console.log("klj/lkm");
    
    const profile_box=document.querySelectorAll(".profile-box"); 

 (MensageError.style.display="block")

    const {name,surName,email}=UnknownUser;
    profile_box.innerHTML=
    `
    <i class="fas fa-user"></i>

    <div class="profile-link">
      <p class="full-name">${name} </p>
    </div>
    <div class="options-icon"><i class="fas fa-caret-down"></i></div>

    `

}
createTheFirstUser=(allUsers)=>{
    const TheFirstUser={
        id:0,
        img:"",
         name:"Jose",
        surName:"Gonçalves",
        email:"Gonca@gmail.com",
        password:"seteNotas",
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
        notificationSign:0,
        Adiministrater:[]
     }
    allUsers.push(TheFirstUser)
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
}
// showButtonSignUpToUser=()=>{
//     const sair=document.querySelector(".sair div span")
//     sair.innerHTML="Login"
    
// }
administrador=()=>{
    const administrador=document.querySelector(".nav-links ul .administrador")
    administrador.innerHTML=`
    <a href="Dashbord/dashboard.html"><p> Administrador</p></a> 
    `
}

gatAllData=()=>{
       
  
    const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
    !allUsers.length && createTheFirstUser(allUsers)

    
    let myId=JSON.parse(localStorage.getItem("myId"));   
    (!myId && myId!==0) && (myId=-1) 
    myId>=0 ? showUserIdentitys(allUsers,myId) : showUnknownUserIdentity()  
    myId>=0 && insertUnKnowFriendsInHTML(myId,allUsers)
    myId===0 && administrador()
    showAllpost() 
}
let sair=document.querySelector(".sair");

sair=()=>{
    const myId=-1;
    localStorage.setItem("myId",JSON.stringify(myId))
    // location.href="JS/form.html"
}
close_pop_Shared=()=>{
    document.querySelector(".pop-saved").classList.toggle("off")
}
theresNoSaved=(ideia)=>{
    ideia.innerHTML=` 
    <p>
    Nao Tens Ideias Guardadas
    </p> 
` 
}
allSaved=(myId)=>{
    document.querySelector(".pop-saved").classList.toggle("off")
    const allUsers=JSON.parse(localStorage.getItem("allUsers"));
    const myData=allUsers[myId]
    const{saved}=myData
    const ideia=document.querySelector(".ideia")
    !saved.length && theresNoSaved(ideia)
    saved.forEach(saved=>{
        const {theTitlePost,theIdeiaPost}=saved
        ideia.innerHTML+=` 
        <p class="TextTitle"> ${theTitlePost}</p>
        <p class="Textideia">
       ${theIdeiaPost}
        </p> 
        `
       
    })

}
showSaved=()=>{
    const myId=JSON.parse(localStorage.getItem("myId"));   
    myId===null ? alert(" Nao Estas Logado"): allSaved(myId)
}

showcommentArea=(postId)=>{
    localStorage.setItem("postToCommentId",JSON.stringify(postId))
}

UserProfileId=(PosterId)=>{
    localStorage.setItem("userProfileId",JSON.stringify(PosterId))
}