// const menuItem = document.querySelectorAll('.nav-items')
const profile_box = document.querySelector('.profile-box')
const firstMessage="Envia a Primeira Mensagem"



storeTheSMS=(myNewSMS,allSMS,month,day,year,hour,minutes,myFriendId)=>{
    // allSMS.innerHTML+=`
    // <div class="my-message">
    //     <p>${myNewSMS} ...${hour}h:${minutes}</p>
    // </div>
    // `
    
    const allUsers=JSON.parse(localStorage.getItem("allUsers")) ||[];
    const myId=JSON.parse(localStorage.getItem("myId"));
    const myFriendDatas=allUsers[myFriendId];
    const myDatas=allUsers[myId];
    const {friendList:MyList}=myDatas
    const {friendList:MyFriendList}=myFriendDatas
    console.log(MyList,MyFriendList);
    
    
        const myTalkWithHim= MyList.find(friend=> friend.id===myFriendId)
        const myFriendsTalk= MyFriendList.find(friend=> friend.id===myId)
        const {talk:myTalk}=myTalkWithHim
        const {talk:hisTalk}=myFriendsTalk
        myTalk.unshift({id:myId,chat:myNewSMS,date:{year,month,day,hour,minutes}})
        hisTalk.unshift({id:myId,chat:myNewSMS,date:{year,month,day,hour,minutes}})
        localStorage.setItem("allUsers",JSON.stringify(allUsers))
        allMyTalkInScreen(myFriendId)
}
sendSMS=(myFriendId)=>{
const date=new Date()
const month=date.getMonth() +1
const day=date.getDate()
const year=date.getFullYear()
const hour=date.getHours()
const minutes=date.getMinutes()

// console.log( year,month,day,hour,minutes);
// const myNewSMS=document.querySelector(".principal-container input").value;
const myNewSMS=document.querySelector(".input-send input").value;

const allSMS=document.querySelector(".message-container");
!myNewSMS ? alert(" Escreve alguma coisa"): storeTheSMS(myNewSMS,allSMS,month,day,year,hour,minutes,myFriendId)

}
allMyTalkInScreen=()=>{

    const allSMS=document.querySelector(".modal-content-message .principal-container")
    const allUsers=JSON.parse(localStorage.getItem("allUsers")) ||[];
    const myId=JSON.parse(localStorage.getItem("myId"));
    const myDatas=allUsers[myId];
    const {friendList}=myDatas
    friendList.forEach(friend=>{
        const {id:myFriendId, talk}=friend;
        const {name,surName}=allUsers[myFriendId]
    })
}
MyMessage=(chat,day,hour,minutes,img)=>{
    const principal_container=document.querySelector(".message-container .myTalksWithHim")
    let tagImg=` <i class="fas fa-user"></i>`
    !!img && (tagImg=` <img src=${img}>`)
    principal_container.innerHTML+=`
    <div class="my-message">
   ${tagImg}
        <p>${chat}</p>
        <p clas="dataMessage">${hour}h:${minutes}</p>
    </div>
    `


}
MyFriendMessage=(chat,day,hour,minutes,img)=>{
    let tagImg=` <i class="fas fa-user"></i>`
    !!img && (tagImg=` <img src=${img}>`) 
    const principal_container=document.querySelector(".message-container .myTalksWithHim")
    principal_container.innerHTML+=`
        <div class="friend-message">
            ${tagImg}
            <p >${chat}</p>
            <p clas="dataMessage">${hour}h:${minutes}</p>
        </div>
    `
}
let idOfTheTalkInScreen=0
reduceIdOfTheTalkInScreen=(myFriendId)=>{
    idOfTheTalkInScreen-=1
    allMyTalkInScreen(myFriendId) 
}
addIdOfTheTalkInScreen=(myFriendId)=>{
    idOfTheTalkInScreen+=1
    allMyTalkInScreen(myFriendId)
}
showVerMaisTalksInScreen=(myFriendId,theTalkInScreen,idOfTheTalkInScreen)=>{
    const verMaisTalksButton=document.querySelector(" .verMaisTalks")
    idOfTheTalkInScreen===theTalkInScreen.length-1 ?verMaisTalksButton.innerHTML="":
    verMaisTalksButton.innerHTML=` 
    <span onclick="addIdOfTheTalkInScreen(${myFriendId})">
        Mensagem Mais Antiga
    </span>
    `
}
showVerMenosTalksInScreen=(myFriendId,idOfTheTalkInScreen)=>{
    const verMaisTalksButton=document.querySelector(" .verMenosTalks")

    !idOfTheTalkInScreen ? verMaisTalksButton.innerHTML="":
      verMaisTalksButton.innerHTML=`<span onclick="reduceIdOfTheTalkInScreen(${myFriendId})">Mensagem Mais Recente</span>`
}
 let theTalkInScreen=[]
 allMyTalkInScreen=(myFriendId)=>{

    const allUsers=JSON.parse(localStorage.getItem("allUsers")) ||[];
    const myId=JSON.parse(localStorage.getItem("myId"));
    const myDatas=allUsers[myId];
    const {friendList}=myDatas
    const myFriendsTalk= friendList.find(friend=> friend.id===myFriendId)
    const {id,talk}=myFriendsTalk
    ///////////////trying apagination/////////////////////////////

    let start=0
    const numberOfSMS=3
    let end=numberOfSMS
    const laco=Math.ceil(talk.length/numberOfSMS)
    let theTalkInScreen=[]
    for (let i = 0; i < laco; i++) {
      theTalkInScreen.push(talk.slice(start,end))
     start+=numberOfSMS
     end+=numberOfSMS
   
    }
    // theTalkInScreen.reverse()
    console.log(theTalkInScreen);
    const teste=[]
    // const principal_container=document.querySelector(".pop-messages-send .messages-send")
    const principal_container=document.querySelector(".message-container .myTalksWithHim")
     principal_container.innerHTML=""

        theTalkInScreen.length>0 && showVerMaisTalksInScreen(myFriendId,theTalkInScreen,idOfTheTalkInScreen)
        theTalkInScreen.length>0 && showVerMenosTalksInScreen(myFriendId,idOfTheTalkInScreen)
        

        const inScreen=theTalkInScreen[idOfTheTalkInScreen].reverse()
        inScreen.forEach(eachChat=>{
            const {id,chat,date}=eachChat
            const {img}=allUsers[id]
             
                 
            const {day,hour,minutes}=date
            id===myId ? MyMessage(chat,day,hour,minutes,img) : MyFriendMessage(chat,day,hour,minutes,img)
        })
        // theTalkInScreen.reverse()
    }
// close_pop_message_send=()=>{
//     const OurTalk=document.querySelector(".pop-messages-send")
//     OurTalk.classList.toggle("off")  
// }
// showOurTalk=(myFriendId)=>{
//     const myFriendDatas=JSON.parse(localStorage.getItem("allUsers"))[myFriendId];
//     const {name,surName,email}=myFriendDatas
//     const OurTalk=document.querySelector(".pop-messages-send")
//     // OurTalk.style.display="block";
//     OurTalk.classList.toggle("off")  
//     OurTalk.innerHTML=
//     `
//         <div class="modal-content-message">
//           <div class="message-header-send">
//             <h2>Mensagens</h2>
//             <h3>${name} ${surName}</h3>
//             <i class="fas fa-window-close" onclick="close_pop_message_send()"></i>
//           </div>
//           <div class="verMaisTalks" >
                 
//         </div>
//           <div class="messages-send"> 
           
//           </div>
//           <div class="verMenosTalks" >
                
//           </div>
//           <div class="principal-container">
//             <input type="text" placeholder="Envia uma mensagem">
//             <div onclick="sendSMS(${myFriendId})">Enviar</div>
//           </div>
//         </div>
//     `
//     allMyTalkInScreen(myFriendId)
    
// }
showOurTalk=(myFriendId)=>{
    const myFriendDatas=JSON.parse(localStorage.getItem("allUsers"))[myFriendId];
    const {name,surName,email,img}=myFriendDatas

    let imgTag=`<i class="fas fa-user"></i>`
    !!img && (imgTag=`<img src=${img} alt="">`)

    const friendIdentity = document.querySelector(".profile-message")
    friendIdentity.classList.toggle("off")
    friendIdentity.innerHTML=` ${imgTag}  <p>${name} ${surName}</p> `

    const OurTalk = document.querySelector(".message-container")
    const sendSMSPlace = document.querySelector(".input-send")
   
    sendSMSPlace.innerHTML=`
    <input type="text" placeholder="Escrever uma sms"class=" off">            
    <button class="enviar off" onclick="sendSMS(${myFriendId})">Enviadas</button>`

    const input = document.querySelector(".input-send input")
    const enviar = document.querySelector(".input-send .enviar")

    OurTalk.classList.toggle("off")
    input.classList.toggle("off")
    enviar.classList.toggle("off")
    allMyTalkInScreen(myFriendId)

}

showFirstMessage=(messages,firstMessage,name,surName,myFriendId,job)=>{

    messages.innerHTML+=
    `
 <li class="nav-list" onclick="showOurTalk(${myFriendId})">
   <div class="trend-list">
     <p class="sub-text">${job}</p>
     <p class="main-text">${name} ${surName}</p>
     <p class="sub-text">${firstMessage}</p>
   </div>
 </li>
    `

// <li class="nav-list" onclick="showOurTalk(${myFriendId})">
//     <div class="trend-list">
//         <p class="main-text">${name} ${surName}</p>
//         <p class="sub-text">${firstMessage}</p>
//         <div class="trend-icon">
//     </div>
// </li>
    
}
showLastMessage=(messages,talk,myFriendId,name,surName)=>{
    const {chat,date}=talk[0];
    const lastSMS=chat
    const {minutes,hour}=date
    console.log(myFriendId);

    
    messages.innerHTML+= `
    <li class="nav-list" onclick="showOurTalk(${myFriendId})">
        <div class="trend-list">
            <p class="main-text">${name} ${surName}</p>
            <p class="sub-text">${lastSMS}</p>
        </div>
        <div class="trend-icon">${hour} :${minutes} </div >

   </li>
    
    `

    
}
theresNoSMS=(myFriendId)=>{
  const messages=document.querySelector(".pop-notification-message .pop-notification-body")
  messages.innerHTML=`
  <li class="nav-list" >
  <div class="trend-list">
      <p class="main-text">Nao tens Nenhuma Mensagem</p>
  </div>
</li>
  
  `
}
// close_notification_message=()=>{
//   const allNotification_message =document.querySelector(".pop-notification-message")
//   allNotification_message.classList.toggle("off")  
// }
takeTheUserMessage=(myId)=>{
    // document.querySelector(".pop-notification-message").classList.toggle("off")
    // const messages=document.querySelector(".pop-notification-message .pop-notification-body")
    // messages.innerHTML=""

    
    const searchResult=document.querySelector(".trends ul li ul")
    searchResult.style.display="none"
    const messages=document.querySelector(".trends ul li .lastMessages")
    // messages.innerHTML=""

    const allUsers=JSON.parse(localStorage.getItem("allUsers")) ||[];
    const myDatas=allUsers[myId];
    const {friendList}=myDatas
    !friendList.length && theresNoSMS()

 friendList.forEach(friend=>{
     const {id:myFriendId, talk}=friend;
     const {name,surName,job}=allUsers[myFriendId]
     
     !talk.length ? showFirstMessage(messages,firstMessage,name,surName,myFriendId,job) : showLastMessage(messages,talk,myFriendId,name,surName)
     
 })

}

showMessages=()=>{
    // const allNotification=document.querySelector(".pop-notification")
    // allNotification.classList.contains("off") && allNotification.classList.remove("off")
    const myId=JSON.parse(localStorage.getItem("myId"));
     myId===null ?alert("Nao Estas Logado"): takeTheUserMessage(myId)
}
showMessages()

