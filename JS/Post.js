const postContainer=document.querySelector(".center-flex-container .posted");
const sharePostNotify="partilhou uma publicacao contigo"
let imgPath = ""

showReactArea=(postId)=>{
  const reactCard=document.querySelectorAll(".reactCard")
  const ReactArray= Array.from(reactCard);
  ReactArray.reverse()
  ReactArray[postId].classList.toggle("off")
  ReactArray.reverse()
}
verifycleanReact=(postId,number,myId,ReactArray)=>{
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  // const reactCard=document.querySelectorAll(".reactCard")
  const {react}=allPosts[postId];
  const MyLastReact=react.findIndex(eachReact=>eachReact.id===myId)
   MyLastReact>=0  ? react.splice(MyLastReact,1) : react.push({id:myId,imoji:number})
   MyLastReact>=0  && react.push({id:myId,imoji:number})
  // const ReactArray= Array.from(reactCard);
  // ReactArray.reverse()
  ReactArray[postId].classList.toggle("off")
  ReactArray.reverse()
  localStorage.setItem("allPosts",JSON.stringify(allPosts))
  showAllpost()
}
cleanReactNow=(postId,ReactArray)=>{
  ReactArray[postId].classList.toggle("off")
  alert("You Need To Be Loged")
  ReactArray.reverse()
}
cleanReact=(postId,number,myId)=>{
  const reactCard=document.querySelectorAll(".reactCard")
  const ReactArray= Array.from(reactCard);
  ReactArray.reverse()
 console.log(myId);
 
  myId >=0 ? verifycleanReact(postId,number,myId,ReactArray) : cleanReactNow(postId,ReactArray)
 
}
showAllReacterInScrenn=(postId)=>{
  const allUsers= JSON.parse(localStorage.getItem("allUsers")) || [];
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  const {react}=allPosts[postId];
  
  const allReact=document.querySelectorAll(".allReact")
  const allReactArray= Array.from(allReact);
  allReactArray.reverse()
  allReactArray[postId].classList.toggle("off")
  const allReacter=document.querySelectorAll(".allReacter");
  const allReacterArray= Array.from(allReacter);
  allReacterArray.reverse()
  allReacterArray[postId].innerHTML=""
  const like=react.filter(reactItem=>reactItem.imoji===1)
  const heart=react.filter(reactItem=>reactItem.imoji===2)
  const laugh=react.filter(reactItem=>reactItem.imoji===3)
  const angry=react.filter(reactItem=>reactItem.imoji===4)
  const allReactCount=document.querySelectorAll(".allReactCount")
  const allReactCountArray= Array.from(allReactCount);
  allReactCountArray.reverse()
  allReactCountArray[postId].innerHTML=`  
<div> <i class="fas fa-hand-point-right"></i> <span>${like.length}</span></div>
<div> <i class="fas fa-heart"></i> <span>${heart.length}</span></div>
<div> <i class="fas fa-laugh"></i><span>${laugh.length}</span></div>
<div><i class="fas fa-angry"></i><span>${angry.length}</span> </div>
  `
  
  
  let imojiName=""
  let button=""
  react.forEach(poster=>{    
  const {id:reacterId,imoji}=poster
  const {name,surName,friendList}=allUsers[reacterId];
  const myId= JSON.parse(localStorage.getItem("myId"));
  const verifyFriendList=friendList.some(friend=>friend.id===myId)
  const verifymyIdent=reacterId===myId;
  button=""
  !(verifyFriendList || verifymyIdent) && (button=` <button >Amigo</button>`)   
  imoji===1 && (imojiName="hand-point-right") 
  imoji===2 && (imojiName="heart") 
  imoji===3 && (imojiName="laugh") 
  imoji===4 && (imojiName="angry")
  allReacterArray[postId].innerHTML+=`
  <div class="reacter">
    <div class="identy">
      <img src="img/user1.jpg" alt="">
      <div class="names">
        <h6>${name} ${surName}</h6>
        <i class="fas fa-${imojiName}"></i>
      </div>
    </div>
    <div class="trend-icon">
      ${button}
    </div>
  </div>
`
  })
 
  allReactCountArray.reverse()
  allReactArray.reverse()
 allReacterArray.reverse() 
}
showAllReacter=(postId)=>{
  postId>=0 && showAllReacterInScrenn(postId)
}
closeAllReact=(postId)=>{
  const allReact=document.querySelectorAll(".allReact")
  const allReactArray= Array.from(allReact);
  allReactArray.reverse()
  allReactArray[postId].classList.toggle("off")
  allReactArray.reverse()
}
// showAllLastComment=(allPosts,postId)=>{
// const allUsers=JSON.parse(localStorage.getItem("allUsers"))
// const {comment}=allPosts[postId]
// const commentArea=document.querySelectorAll(".commentArea")
// const commentAreaArray=Array.from(commentArea)
// commentAreaArray.reverse()
// commentAreaArray[postId].innerHTML=""

// comment.forEach(eachComment=>{
//   const {id:commenterId,theComment,react}=eachComment
//   const {name,surName}=allUsers[commenterId]
//    commentAreaArray[postId].innerHTML+=
//    ` 
//   <div class="eachComment">
//     <div class="reacter">
//       <div class="identy">
//         <img src="img/user1.jpg" alt="">
//         <div class="names">
//           <h6>${name} ${surName}</h6>
//           <p>${theComment}</p>
//         </div>
//       </div>
//     </div>

//   </div>
//    ` 
// })
// }

// showcommentArea=(postId)=>{
//   const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
//   const commentCard=document.querySelectorAll(".commentCard")
//   const {comment}= allPosts[postId]
//   const commentArray=Array.from(commentCard)
//   commentArray.reverse()
//   commentArray[postId].classList.toggle("off")
//   commentArray.reverse()
//   showAllLastComment(allPosts,postId)
// }
sendTheComment=(postId,PosterId,theComment)=>{
  const allPosts=JSON.parse(localStorage.getItem("allPosts")) || []
  const myId=JSON.parse(localStorage.getItem("myId"))
  const {comment}=allPosts[postId];
  comment.push({id:PosterId,theComment:theComment,react:[]})

  const commentArea=document.querySelectorAll(".commentArea")
  const commentAreaArray=Array.from(commentArea)
  commentAreaArray.reverse()


  const commentCard=document.querySelectorAll(".commentCard")
  const commentArray=Array.from(commentCard)
  commentArray.reverse()


  commentAreaArray[postId].innerHTML+=
  ` 
  <div class="eachComment">${theComment}</div>
  <hr>
  `
localStorage.setItem("allPosts",JSON.stringify(allPosts)) 
showAllpost()

commentArray[postId].classList.toggle("off")
commentAreaArray.reverse()
commentArray.reverse()
}
verifyToSendComment=(postId,PosterId)=>{
  const sendComment=document.querySelectorAll(".sendComment input")
  const sendCommentArray=Array.from(sendComment)
  sendCommentArray.reverse()
  const theComment=sendCommentArray[postId].value


  const commentCard=document.querySelectorAll(".commentCard")
  const commentArray=Array.from(commentCard)
  commentArray.reverse()

  !theComment ? alert("Right Something") : sendTheComment(postId,PosterId,theComment)
  !theComment && commentArray[postId].classList.toggle("off")
  sendCommentArray.reverse()
  commentArray.reverse()
}

closeAllComment=(postId)=>{
  const commentCard=document.querySelectorAll(".commentCard")
  const commentArray=Array.from(commentCard)
  commentArray.reverse()
  commentArray[postId].classList.toggle("off")
  commentArray.reverse()
}
saveInMyData=(allUsers,allPosts,myId,postId)=>{
const myData=allUsers[myId]
const {saved}=myData
newSaved=allPosts[postId]
saved.push(newSaved)
localStorage.setItem("allUsers",JSON.stringify(allUsers))
}
save=(postId)=>{
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  const allUsers= JSON.parse(localStorage.getItem("allUsers")) || [];
   const myId=localStorage.getItem("myId")
  !(myId===null || myId===-1) && saveInMyData(allUsers,allPosts,myId,postId)
  showAllpost()
}

verifyTheUser=(postId,PosterId)=> PosterId>=0 && verifyToSendComment(postId,PosterId)
changeStyleInDlectSave=(DelectSaveArray,postId)=>{
  
  DelectSaveArray[postId].innerHTML+=`
  <p class="guadar" style="font-size:1rem" onclick="save(${postId})">Guardar Post</p>
  `

  DelectSaveArray[postId].classList.toggle("DelectSaveForGuardar")
  DelectSaveArray[postId].classList.toggle("DelectSave")
  // OnlyOneguadar.classList.toggle("OnlyOneguadar")
  
  
}

showOtherOption=(postId,myId,PosterId)=>{
   const allUsers= JSON.parse(localStorage.getItem("allUsers")) || [];
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  const {react}=allPosts[postId];
  
  
  const DelectSave=document.querySelectorAll(".DelectSave")
  const DelectSaveArray= Array.from(DelectSave);
  DelectSaveArray.reverse()
  DelectSaveArray[postId].classList.toggle("off")
  DelectSaveArray[postId].innerHTML=""
  
  myId===PosterId ? (DelectSaveArray[postId].innerHTML+=`
  <p onclick="editePost(${postId},${myId},${PosterId})">Editar Post</P>
  <p onclick="eliminatePost(${postId})">Eliminar Post</P>
  <p class="guadar" onclick="save(${postId})">Guadar Post</P>`) :changeStyleInDlectSave(DelectSaveArray,postId)
  DelectSaveArray.reverse()
};
// cleanOtherOptionInScreen
eliminatePost=(postId)=>{
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  let start=0
  allPosts.splice(postId,1)
  allPosts.forEach(post=>{
    post.postId=start
    start+=1
  })
  
  localStorage.setItem("allPosts",JSON.stringify(allPosts))

  showAllpost()
}
sendEditarPostEdited=(postId)=>{
   const date=new Date()
  const month=date.getMonth() +1
  const day=date.getDate()
  const year=date.getFullYear()
  const hour=date.getHours()
  const minutes=date.getMinutes()
  const myId=JSON.parse(localStorage.getItem("myId"))
  const postIdeia=document.querySelector(".pop-postIdeia")
  const title=document.querySelector(".pop-postIdeia input.title").value
  const ideia=document.querySelector(".pop-postIdeia textarea.ideia").value
  const DelectSave=document.querySelectorAll(".DelectSave")
  const DelectSaveArray= Array.from(DelectSave);
  DelectSaveArray.reverse()
  DelectSaveArray[postId].classList.toggle("off")
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  console.log(allPosts[postId]);
  
  
    allPosts[postId].theTitlePost = title
    allPosts[postId].theIdeiaPost = ideia
    allPosts[postId].img = imgPath
    allPosts[postId].date={year: year, month:month, day: day, hour: hour, minutes: minutes}
  
  localStorage.setItem("allPosts",JSON.stringify(allPosts))
  postIdeia.classList.toggle("off")
  DelectSaveArray.reverse()

  showAllpost()
}
editePost=(postId,myId,PosterId)=>{
  const postIdeia=document.querySelector(".pop-postIdeia")
  const title=document.querySelector(".pop-postIdeia input.title")
  const ideia=document.querySelector(".pop-postIdeia textarea.ideia")
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  const {id,theTitlePost,theIdeiaPost,date}=allPosts[postId]
  
   title.value=theTitlePost
   ideia.value=theIdeiaPost
   postIdeia.classList.toggle("off") 
   const editarButton=document.querySelector(".form-group-2  .enviarOrEditarButton")
  editarButton.innerHTML=`<div class="btn" onclick="sendEditarPostEdited(${postId})" >Editar</div>`
   
}
let setOfChackedFriends=[]
select=(postId,friendId,myId)=>{
  const chacked=document.querySelectorAll(".checkboxCicle") 
  const index=setOfChackedFriends.findIndex(notify=>{
    const {friendId,postId,myId,type}=notify
    return friendId===friendId && postId===postId && myId===myId && type==="postShare"
  })
  index<0 ? setOfChackedFriends.push({friendId:friendId,postId:postId,myId:myId, type:"postShare"}) :setOfChackedFriends.splice(index,1)
  const chackedArray=Array.from(chacked)
  chackedArray.reverse()
// console.log(chackedArray);
  
   chackedArray[0].classList.toggle("cicle")
  chackedArray.reverse()
  
}
startSharing=()=>{
  const allUsers=JSON.parse(localStorage.getItem("allUsers"))
  !setOfChackedFriends.length?alert("Seleciona Amigos Para Partilhar"):
  setOfChackedFriends.forEach(share=>{
    const {friendId,postId,myId,type}=share
    const {allNotification}=allUsers[friendId]
    allNotification.push({friendId,postId,myId,type} )
  })
  localStorage.setItem("allUsers",JSON.stringify(allUsers))
  alert("Acabaste De Partilhar Esta Publicacao")
}
showAllFriendsToShare=(postId,PosterId,myId)=>{
  const allUsers=JSON.parse(localStorage.getItem("allUsers"))
  const share=document.querySelectorAll(".share") 
  const chooseFriendToShare=document.querySelectorAll(".allYourFriend") 
  const chooseFriendToShareArray=Array.from(chooseFriendToShare)
  const shareArray=Array.from(share)
  chooseFriendToShareArray.reverse()
  shareArray.reverse()
const {friendList}=allUsers[myId]
 setOfChackedFriends=[]

friendList.forEach(friend=>{
  const {id:friendId}=friend
  const {name,surName,email}=allUsers[friendId]
  chooseFriendToShareArray[postId].innerHTML=""
  
  chooseFriendToShareArray[postId].innerHTML+=`
  <div class="chooseFriendToShare">
        <div class="chooseFriendToShareHeader">
        <img src="img/user1.jpg" alt="">
        <div class="friendIdentity">
        <span class="name"> ${name}  ${surName}</span>
          <span class="email">${email}</span>
        </div>
      </div>
      <div class="checkbox"> <div class=" checkboxCicle" onclick="select(${postId},${friendId},${myId})"></div></div>
  </div>
  `
})
chooseFriendToShareArray[postId].innerHTML+=` <div class="startSharing" onclick="startSharing()"> Partilhar</div>`
  shareArray[postId].classList.toggle("off") 
  shareArray.reverse()

}

sharing=(postId,PosterId,myId)=>{
  myId<0 ? alert(" You Need To Be Loged"): showAllFriendsToShare(postId,PosterId,myId)
}
closeShare=(postId)=>{
  const share=document.querySelectorAll(".share") 
  const shareArray=Array.from(share) 
  shareArray.reverse()
  shareArray[postId].classList.toggle("off") 
}
showAllpost=()=>{


  postContainer.innerHTML=""
  const allUsers= JSON.parse(localStorage.getItem("allUsers")) || [];
  const allPosts= JSON.parse(localStorage.getItem("allPosts")) || [];
  const myId= JSON.parse(localStorage.getItem("myId"));
!(myId===null || myId===-1) &&  showMyPhoto()


////////////////////Vou procurar um lugar melhor pra isso

////////////////////Vou procurar um lugar melhor pra isso

  !allPosts.length && firstPost()
  allPosts.reverse()
  allPosts.forEach(eachPost => {
  let imgTag = "" 
  let ProfileImgTag= ""
  let {id:PosterId,postId,theTitlePost,theIdeiaPost,img:postImg,date,react,comment}=eachPost;
     const  {year,month,day,hour,minutes} = date
     const {email,name,img:MyProfilePhoto,surName} = allUsers[PosterId]


     !postImg ? (imgTag = "") : (imgTag = `<img src=${postImg} alt=""> `)
     !MyProfilePhoto ? (ProfileImgTag = ` <i class="fas fa-user"></i>`) : (ProfileImgTag = `<img src=${MyProfilePhoto}> `)
     
     
     let MyLastReact=react.find(eachReact=>{

      return eachReact.id===myId
      })
     let imojiName="heart"
     !MyLastReact && ( MyLastReact={imoji:"heart"}) 
     MyLastReact.imoji===1 && (imojiName="hand-point-right") 
     MyLastReact.imoji===2 && (imojiName="heart") 
     MyLastReact.imoji===3 && (imojiName="laugh") 
     MyLastReact.imoji===4 && (imojiName="angry")
     
     

    postContainer.innerHTML+=
    `
    <div class="feeds">
      <div class="user-pics">
      <a href="assets/pages/perfil.html">
        <div class="myphoto" onclick="UserProfileId(${PosterId})">  ${ProfileImgTag} </div>
      </a> 
      </div>
        <div class="user-content-box">
          <div class="user-names">
          <a href="assets/pages/perfil.html" onclick="UserProfileId(${PosterId})">
            <hi class="full-name">${name} ${surName}</hi>
          </a>
          <a href="assets/pages/perfil.html" onclick="UserProfileId(${PosterId})">
              <p class="user-name">${email}</p>
          </a>
            <b class="time"> ${day}/${month}/${year}  as ${hour}h:${minutes}min</b>
          </div>
          
          <div class="user-content">
          <p>${theTitlePost}</p>
            <p class="ideia">${theIdeiaPost}</p>
            ${imgTag}
          </div>
          <div class="reactCard off" >
            <div onclick="cleanReact(${postId},1,${myId})"> <i class="fas fa-hand-point-right"></i></div>
            <div onclick="cleanReact(${postId},2,${myId})"> <i class="fas fa-heart"></i> </div>
            <div onclick="cleanReact(${postId},3,${myId})"> <i class="fas fa-laugh"></i></div>
            <div onclick="cleanReact(${postId},4,${myId})"><i class="fas fa-angry"></i> </div>
          </div>
          <div class="reastData" onclick="showAllReacter(${postId})" >
              <div> <i class="fas fa-hand-point-right"></i></div>
              <div> <i class="fas fa-heart"></i> </div>
              <div> <i class="fas fa-laugh"></i></div>
              <div><i class="fas fa-angry"></i> </div>
              <div>${react.length} </div>
          </div>
          <div class="allReact off">
            <div class="reactHeader"> 
              <span> Todas as Reacoes</span>
              <i class="fas fa-window-close" onclick="closeAllReact(${postId})"></i> 
            </div>
              <div class="allDatas">
                <div class="allReactCount">
                  
                </div>
              </div>
              <div class="allReacter"> 
              
              </div>
          </div>
            <div class="commentCard off" >
            <div class="commentHeader"><span>Todos os Comentarios</span><i class="fas fa-window-close" onclick="closeAllComment(${postId})"></i> </div>
          
            <div class="commentArea">
                
              </div>
              <div class="sendComment">
                <input type="text">
                <div class="send" onclick="verifyTheUser(${postId},${PosterId})">Enviar</div>
              </div>
          </div>
          <div class="share off">
          <div class="allFriendsToShare">Todos Os Teus Amigos <i class="fas fa-window-close" onclick="closeShare(${postId})"></i></div>
         
          <div class="allYourFriend">
          
           
          </div>
         </div>
        
          <div class="content-icons">
            <div class="comment"><i class="far fa-${imojiName} red" onclick="showReactArea(${postId})"> ${react.length}</i></div>
             <a href="assets/pages/comment.html">        
                <i class="far fa-comment blue" onclick="showcommentArea(${postId})"> ${comment.length}</i>
             </a>   
          <i class="fas fa-retweet green" onclick="sharing(${postId},${PosterId},${myId})"> </i>
            <div class="blue">
                <i class="fas fa-chevron-up "  onclick="showOtherOption(${postId},${myId},${PosterId})"></i> 
                <div class="DelectSave off">

                </div>
            </div>
          </div>
      </div>
    </div>  
    </div> 
    `  
    // <div class="delect1"></div>
    // <div class="delect2"></div>  
  });
  allPosts.reverse() 
   
}

storingThePost=(theTitlePost,theIdeiaPost,myId,url)=>{
  const date = new Date()
  const month = date.getMonth() +1
  const day = date.getDate()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || [];
  const newPost = {id:myId,postId:allPosts.length,theTitlePost:theTitlePost,theIdeiaPost:theIdeiaPost,img:url,comment:[],react:[],share:[],date:{year,month,day,hour,minutes}}
  allPosts.push(newPost)
  console.log(newPost);
  

  localStorage.setItem("allPosts",JSON.stringify(allPosts))
  postContainer.innerHTML=""
  
  showAllpost()

}
allowedToPost=(myId,imgPath)=>{

  const theTitlePost = document.querySelector(".pop-postIdeia .title input").value;

  const theIdeiaPost = document.querySelector(".pop-postIdeia textarea").value;
  
   const firstValue = !!theTitlePost.length && !!theIdeiaPost.length;

   const secondValue = !!theTitlePost.length && !!imgPath;
   
    (firstValue || secondValue) && storingThePost(theTitlePost,theIdeiaPost,myId,imgPath);

   !(firstValue || secondValue) && alert("verifica o titulo ou a ideia");

  

   posting()
}
showMyPhoto=()=>{
  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []
  const myId = JSON.parse(localStorage.getItem("myId")) 
  const {img}=allUsers[myId]
const photoInPostArea = document.querySelector(".form-group-1 .UserPhoto")

!!img && (photoInPostArea.innerHTML = `<img src=${img} alt="">`)
}



Postar=()=>{
  const myId = JSON.parse(localStorage.getItem("myId"));

  (myId===null || myId===-1) ? alert("You need To Be Loged") : allowedToPost(myId,imgPath)

}

const imgElement = document.querySelector("#photoToPost")
chosePhotoToPost=()=>{
    const myId = JSON.parse(localStorage.getItem("myId"));
  
    const url = imgElement.files[0]
    
    const reader = new FileReader()
    
      reader.onload=()=>{
         imgPath = reader.result
    }
  
    !!url && reader.readAsDataURL(url)
  
  }

imgElement.addEventListener("change",chosePhotoToPost)
// imgElement.onchange=()=>{
//   const myId = JSON.parse(localStorage.getItem("myId"));

//   const url = imgElement.files[0]
  
//   const reader = new FileReader()
  
//     reader.onload=()=>{
//        imgPath = reader.result
//   }

//   !!url && reader.readAsDataURL(url)

// }

firstPost=()=>{
  const allPosts=JSON.parse(localStorage.getItem("allPosts")) || [];
  const wellcomePost={id:0,postId:0,ideia:"Seja Bem Vindo Ao Ideias Brilhantes" ,img:"",comment:[],react:[],share:[]}
  const {postId,ideia,comment:[],react:[],share:[]}=wellcomePost;
   !allPosts.length &&  allPosts.push(wellcomePost);
   postContainer.innerHTML+=
    `
    <div class="feeds">
    <div class="user-pics">            
    <i class="fas fa-user"></i></div>
    <div class="user-content-box">
      <div class="user-names">
      </div>
      
      <div class="user-content">
        <p>${ideia}</p>
      </div>
    
      <div class="content-icons">
        <i class="far fa-heart red"> </i>
        <i class="far fa-comment blue"> </i>
        <i class="fas fa-retweet green"> </i>
        <i class="fas fa-chevron-up blue"></i>
      </div>
    
    </div>
    </div>  
    `    
   
 
//  localStorage.setItem("allPosts",JSON.stringify(allPosts)) 
}


posting=()=>{

  const postIdeia = document.querySelector(".pop-postIdeia")

  postIdeia.classList.toggle("off")
}
UserProfileId=(PosterId)=>{
localStorage.setItem("userProfileId",JSON.stringify(PosterId))
}

