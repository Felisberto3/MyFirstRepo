showHisDatas=()=>{
  const allUsers =  JSON.parse(localStorage.getItem("allUsers"))
  const allPosts =  JSON.parse(localStorage.getItem("allPosts"))
  const userProfileId =  JSON.parse(localStorage.getItem("userProfileId"))
  const myId =  JSON.parse(localStorage.getItem("myId"))
  const {img,name,surName,email,age,job,dream,academicLevel} = allUsers[userProfileId]
  const dataContainer = document.querySelector(".user-content-box-container")
  let editeButton = ""
  myId===userProfileId && (editeButton=`<button class="btnprofileEdit" onclick=" showEditeProfile()">Editar Perfil</button> `)
  let imgTag = `  <i class="fas fa-user"></i>`
  !!img && (imgTag = `<img src=${img} alt="">`)
 dataContainer.innerHTML=`
 <div class="user-content-box-header">
 ${imgTag}
 <div class="profile-text">
   <h4>Nome: ${name} ${surName}</h4>
   <p><span>Email:</span> ${email}</p>
   <p><span>Idade:</span> ${age}</p>
   <p><span>Skills:</span> ${job}</p>
   <p><span>Área de Trabalho:</span> ${academicLevel}</p>
   <p><span>Sonho:</span> ${dream}</p>
 </div>
 ${editeButton}
</div>
  
  `
  const myPosts= allPosts.filter(post=>post.id===userProfileId)
  myPosts.reverse()
  myPosts.forEach(post => {
  const {comment,date,id,img,postId, react,share,theIdeiaPost,theTitlePost}=post
  const {year,month,day,hour,minutes}= date
  
  let imgTag = ''
  !!img && (imgTag = `<img src=${img} alt="">`)


  const posts = document.querySelector(".posts")
  posts.innerHTML+=`
   <div class="feeds">
  <div class="user-pics"><img src="../../img/user4.jpg" alt="user4"></div>
  <div class="user-content-box">
    <div class="user-names">
      <hi class="full-name">${name} ${surName}</hi>
      <p class="user-name">${email}</p>
      <p class="time">${day}/${month}/${year} ${hour}h:${minutes}min</p>
    </div>
    
    <div class="user-content">
      <p>${theTitlePost}</p>
      <p>${theIdeiaPost}</p>
      <p>${imgTag}</p>
      <div class="tr"> 
        <a href="perfil.html" class="buttonperfil">Eliminar</a>
      </div>
    </div>
    <div class="content-icons">
      <i class="far fa-heart red">${react.length}</i>
      <a href="comment.html"> 
      <i class="far fa-comment blue" onclick="showcommentArea(${postId})"> ${comment.length}</i>
      </a> 
      <i class="fas fa-retweet green"> ${share.length}</i>
      <i class="fas fa-chevron-up blue"></i>
    </div>
  </div>
  </div> 
  
   `
  });
  myPosts.reverse()

  

  
  
}
showHisDatas()