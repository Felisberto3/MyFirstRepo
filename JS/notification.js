const friendshipNotify="fez-te um pedido de amizade"
const EmptyMessages="clica para terem a primeira conversa "
// closeNotification=()=>{
//    const allNotification=document.querySelector(".pop-notification")
//    allNotification.classList.toggle("off")
// }
StorageInMyAndHisFriendList=(allUsers,myId,myFriendId)=>{
  const {friendList:HisListOfFriend}=allUsers[myFriendId]
  const {friendList:MyListOfFriend}=allUsers[myId]

  MyListOfFriend.push({id:myFriendId,talk:[]})
  HisListOfFriend.push({id:myId,talk:[]})  
  
  localStorage.setItem("allUsers",JSON.stringify(allUsers))
  showPopNotification()
}

insertInMyListFriend=(myFriendId)=>{
    
  const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
  let myId=JSON.parse(localStorage.getItem("myId"));

  const {friendList:MyListOfFriend,allNotification}=allUsers[myId]
  const certifyIfHisMyFriend=MyListOfFriend.some(eachMyfriend=>eachMyfriend.id===myFriendId)
  
  const notifyIndex= allNotification.findIndex(Notification=>{
      const {id,level}=Notification
     return id===myFriendId && level==="notAcept"      
  })

  allNotification.splice(notifyIndex,1)
  localStorage.setItem("allUsers",JSON.stringify(allUsers))   
  !certifyIfHisMyFriend ? StorageInMyAndHisFriendList(allUsers,myId,myFriendId) :alert("ja tens ele como amigo")
 const AceptButton = document.querySelector(".tr .buttonAccept")
 AceptButton.innerHTML=`<i class="fas fa-ellipsis-h more-icon"></i>`
  
}

askForFriendShip=(allUsers,myFriendId,myId)=>{
   
    const {name:hisName,surName:hisSurname,img:HisImg}=allUsers[myFriendId]



    // const {name:hisName,surName:hisSurname,img:HisImg}=allUsers[myFriendId]
    // const {name:myName,surName:mySurname,img:MyImg}=allUsers[myId]

    const notificationContainer = document.querySelector(".notificationContainer")
    notificationContainer.innerHTML=""

    const {name,surName,img}=allUsers[myFriendId]
    
    let imgTag=`<i class="fas fa-user"></i>`
    !!img && (imgTag=`<img src=${img} alt="">`)
    
    // pop_notification.innerHTML+=
    // `
    // <div class="dates-user">
    //    ${imgTag}
    //     <div class="div">
    //         <h3>${myName} ${mySurname}</h3>
    //         <p> <strong>${hisName} ${hisSurname}</strong> ${friendshipNotify}</p>
    //         <button onclick="AceitarPedidosDeAmizade(${myFriendId})">Aceitar</button>
    //         <button>Rejeitar</button>
    //      </div>
    //  </div>
    //  `
    notificationContainer.innerHTML+=`
    <div class="feeds notification">
    <a href="perfil.html" class="user-pics">
       ${imgTag}
    </a>
    <div class="user-content-box">
      <div class="user-names">
        <a href="perfil.html"> <hi class="full-name">${hisName} ${hisSurname}</hi></a>
      </div>
      
      <div class="user-content-notifications">
        <p> Fez-te um pedido de amizade  </p>
        <div class="tr"> 
          <span class="buttonAccept" onclick="insertInMyListFriend(${myFriendId})">Aceitar</span>
          <span class="buttonCancelar">Eliminar</span>
        </div>
      </div>
    </div>
    
    `
    
    
}
theresNoNotification=(pop_notification)=>{
    
    const notificationContainer = document.querySelector(".notificationContainer")
notificationContainer.innerHTML=`
<div class="feeds notification">

  
  <div class="user-content-notifications">
    <h1> VAZIO
  
    </h1>
</div>
`

    // const pop_notification=document.querySelector(".pop-notification");
    // pop_notification.classList.toggle("off")
    
//     pop_notification.innerHTML=
//     `
//     <div class="notifys"  >
//     <div class="profile">
//     <i class="fas fa-user"></i>

//     </div>
//     <div class="container-notify">
      
//          <p> <strong> nao tem notificacoes</strong> </p>
         
//      </div>
// </div>

    // `
}
// close_pop_Shared=()=>{
//     const allNotification=document.querySelector(".pop-Shared")
//     allNotification.classList.toggle("off")  
// }
checkThePost=(friendId,postId)=>{
  const allPosts= JSON.parse(localStorage.getItem("allPosts"));
  const {id:hisId, theTitlePost, theIdeiaPost}=allPosts[postId]
  const allNotification=document.querySelector(".pop-Shared")
   allNotification.classList.toggle("off")
   document.querySelector(".pop-notification").classList.toggle("off");

 

   allNotification.innerHTML=`
   <div class="all-pop-Shared">
          <div class="pop-Shared-header">
            <h2>Posts Partilhados</h2>
            <i class="fas fa-window-close" onclick="close_pop_Shared()"></i>
          </div>
          <div class="ideia">
            <p class="TextTitle"> ${theTitlePost}</p>
            <p class="Textideia">
           ${theIdeiaPost}
            </p>
          </div>
        </div>
   `

  
}
postShare=(allUsers,friendId,myId,pop_notification,postId )=>{
    // allUsers,friendId,myId,pop_notification 
    pop_notification.innerHTML=""
    // const {name:hisName,surName:hisSurname,img:HisImg}=allUsers[friendId]
    // const {name:myName,surName:mySurname,img:MyImg}=allUsers[myId]
    console.log(MyImg);
    
    const {name,surName,img}=allUsers[friendId]

    let imgTag=`<i class="fas fa-user"></i>`
    !!img && (imgTag=`<img src=${img} alt="">`)

    const  notificationContainer= document.querySelector(".notificationContainer")
    notificationContainer.innerHTML+=`
    <div class="feeds notification">
    <div class="user-pics">${imgTag}</div>
    <div class="user-content-box">
      <div class="user-names">
        <hi class="full-name">${name} ${surName}</hi>
      </div>
      
      <div class="user-content-notifications">
        <p>There's no clear correlation between your background and what you are going to achieve in life...
              <span>ha 4hrs</span>
        </p>
        <div class="tr"> 
          <a href="perfil.html" class="buttonpost">Ver Publication</a>
          <a href="perfil.html" class="buttonpost">Eliminar</a>
        </div>
      </div>
    </div>
  </div>

    `
    
    // pop_notification.innerHTML+=`
    // <div class="dates-user" onclick="checkThePost(${friendId},${postId})">
    //     ${imgTag}
    //     <div class="div">
    //         <h3>${myName} ${mySurname}</h3>
    //         <p> <strong>${hisName} ${hisSurname}</strong> Partilhou Um Ideia Contigo</p>
    //      </div>
    //  </div>
    // `
    
}
takeTheUserNotification=(myId)=>{
    
    // const pop_notification=document.querySelector(".pop-notification .pop-notification-body ");
    // document.querySelector(".pop-notification").classList.toggle("off");

    const allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
   const  myDatas=allUsers[myId];
   const {allNotification}=myDatas
   
   !allNotification.length && theresNoNotification()

   allNotification.forEach(eachNotification => {
   const {id:myFriendId, myId:friendId, type, level,postId}=eachNotification
   type==="postShare" && postShare(allUsers,friendId,myId,pop_notification, postId)
   level==="notAcept" && askForFriendShip(allUsers,myFriendId,myId)
//    (allUsers,myFriendId,myId,pop_notification)
   });

}

showPopNotification=()=>{    
    // const pop_messages_send=document.querySelector(".pop-messages-send")
    // pop_messages_send.classList.contains("off") && pop_messages_send.classList.remove("off")
    const myId=JSON.parse(localStorage.getItem("myId"));
    (myId===null || myId===-1) ?  alert("Nao Estas Logado"):takeTheUserNotification(myId)
}    
showPopNotification()


