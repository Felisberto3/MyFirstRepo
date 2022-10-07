showAllSaved=()=>{
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []
    const myId = JSON.parse(localStorage.getItem("myId"))
    const myData = allUsers[myId]
    const {saved} = myData
    
    saved.forEach(post => {
    console.log(post,"lh;lknlk");

        const {comment,date, id,img:postimg,postId, react,share,theIdeiaPost, theTitlePost}=post
        const {name,surName,email,img:posterImg} = allUsers[id]
        const {year, month, day, hour, minutes} = date
        const feeds = document.querySelector(".post-container")
        console.log(feeds);

        let imgTag = `  <i class="fas fa-user"></i>`
        !!posterImg && (imgTag = `<img src=${posterImg} alt="">`)
        let postimgTag = ""
        !! postimg && (postimgTag = `<img src=${postimg} alt="">`)
        
    feeds.innerHTML+=`
    <div class="feeds">
          <div class="user-pics">${imgTag}</div>
          <div class="user-content-box">
            <div class="user-names">
              <hi class="full-name">${name} ${surName} </hi>
              <p class="user-name">${email} </p>
              <p class="time">${day}/${month}/${year} ${hour}h:${minutes}min</p>
            </div>
            
            <div class="user-content">
              <p>${theTitlePost}  </p>
              <p>${theIdeiaPost}  </p>
              <p>${postimgTag}  </p>
              <div class="tr"> 
                <a href="perfil.html" class="buttonperfil">Ver Perfil</a>
                <a href="perfil.html" class="buttonperfil">Eliminar</a>
              </div>
            </div>
            <div class="content-icons">
              <i class="far fa-heart red">${react.length} </i>
              <i class="far fa-comment blue"> ${comment.length}</i>
              <i class="fas fa-retweet green"> ${share.length}</i>
              <i class="fas fa-chevron-up blue"></i>
            </div>
          </div>
         </div>
    
    `
});

    
    
}
showAllSaved()
