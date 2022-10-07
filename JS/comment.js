// showAllLastComment=(allPosts,postId)=>{
//     const allUsers=JSON.parse(localStorage.getItem("allUsers"))
//     const {comment}=allPosts[postId]
//     const commentArea=document.querySelectorAll(".commentArea")
//     const commentAreaArray=Array.from(commentArea)
//     commentAreaArray.reverse()
//     commentAreaArray[postId].innerHTML=""
    
//  comment.forEach(eachComment=>{
// const {id:commenterId,theComment,react}=eachComment
// const {name,surName}=allUsers[commenterId]
//  commentAreaArray[postId].innerHTML+=
//  ` 
//  <div class="eachComment">
//    <div class="reacter">
// <div class="identy">
//   <img src="img/user1.jpg" alt="">
//   <div class="names">
//     <h6>${name} ${surName}</h6>
//     <p>${theComment}</p>
//   </div>
// </div>
//    </div>
    
//  </div>
//   ` 
//     })
// }

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

// const comment_area = document.querySelector(" .allComment")
// console.log(comment_area);


// enviar.onclick=()=>{
//   const newComment = input.value
//   comment_area.innerHTML+=`
//   <div class="comment-area">
//     <div class="profile-comment">
//       <img src="../../img/user4.jpg" alt="">
//       <h2>Felix Domingos</h2>
//     </div>
//     <div class="container-comment-area">
//       <p>${newComment} </p>
//     </div>
// </div> 
//   `
  
// }
shawCommentsInScreen=(allPosts,postId,allUsers)=>{
  const allComment = document.querySelector(".allComment")
  allComment.innerHTML=""
  const {comment} = allPosts[postId]
 comment.forEach(eachComment=>{
   const {id:commenterId,theComment,react:[]} = eachComment
   const {name,surName,img} = allUsers[commenterId]

   let imgTag = `  <i class="fas fa-user"></i>`
   !!img && (imgTag = `<img src=${img} alt="">`)
     
allComment.innerHTML+=`
<div class="comment-area">
<a href="perfil.html" onclick="UserProfileId(${commenterId})">
<div class="profile-comment">
    ${imgTag}
    <h2>${name} ${surName}</h2>
</div>
</a >

<div class="container-comment-area">
    <p>${theComment}</p>
</div>
</div> 
`
 })

}

showThePostToComment=()=>{
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || []
  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []
  const postId = JSON.parse(localStorage.getItem("postToCommentId"))
 const {id:posterId, theTitlePost, theIdeiaPost,react,share,comment,img:postImg,date} = allPosts[postId]
 const {year, month, day, hour, minutes} = date
 const {name,email, surName,img:posterImg} = allUsers[posterId]

   const post = document.querySelector(".post-container")
   
   let imgTag = `  <i class="fas fa-user"></i>`
   !!posterImg && (imgTag = `<img src=${posterImg} alt="">`)


   let postImgTag = ''
   !!postImg && (postImgTag = `<img src=${postImg} alt="">`)

   post.innerHTML=`
   <h2>Publications</h2>
   <div class="feeds thePost">
   <a href="perfil.html" onclick="UserProfileId(${posterId})">
     <div class="user-pics">${imgTag}</div>
    </a>
     <div class="user-content-box">
     <a href="perfil.html" onclick="UserProfileId(${posterId})">
       <div class="user-names">
         <hi class="full-name">${name} ${surName}</hi>
         <p class="user-name">${email}</p>
         <p class="time"> ${day}/${month}/${year}  ${hour}h:${minutes}min</p>
       </div>
       </a>
       
       <div class="user-content">
         <p>${theTitlePost}</p>
         <p>${theIdeiaPost}</p>
         <p>${postImgTag}</p>
        
       </div>
       <div class="content-icons">
         <i class="far fa-comment blue" onclick="showcommentInput()">  ${comment.length}</i>
       </div>
     </div> 
     
   

     </div>
     <form action="">
     <div class="input-send-comment">
        <input type="text" placeholder="Escrever um Comment">            
        <button class="enviar">Comentar</button>
     </form>
     </div>
   </div>
   <h3>All Comment</h3>
     <div class="allComment"> </div>
  </div>
    `
    shawCommentsInScreen(allPosts,postId,allUsers)

}
showThePostToComment()


const enviar = document.querySelector(".input-send-comment .enviar")
const input = document.querySelector(".input-send-comment input")


showcommentInput=()=>{
  input.style.outline="solid"
}

input.oninput=()=>{
  input.style.outline="none"
}



storyTheComment=()=>{
  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || []
  const postId = JSON.parse(localStorage.getItem("postToCommentId"))
  const {comment} = allPosts[postId]
  const newComment = {id:myId,commentId:comment.length,theComment:input.value,react:[]}

  comment.unshift(newComment)
  localStorage.setItem("allPosts",JSON.stringify(allPosts))  
  shawCommentsInScreen(allPosts,postId,allUsers)
}

verifyTheInputValue=()=>{
  const myId = JSON.parse(localStorage.getItem("myId"))

  (!input.value && myId!==-1) ? alert("Escreve Alguma Coisa") : storyTheComment()
}
enviar.onclick=verifyTheInputValue

