const search=document.querySelector(".right-flex-container .search-box input")
const FriendSuggest=document.querySelector(".trends ul ul");

verifyIfIsMyFriend=(name,surName,allUsers)=>{
    const myId=JSON.parse(localStorage.getItem("myId"))
    const myData=allUsers[myId];
    const {friendList}=myData;
    const result=friendList.some(friend=>{
        const {id}=friend;
        const {name:myFrindName,surName:myFrindsurName}=allUsers[id];
        return (myFrindName===name && myFrindsurName===surName && myId!==id)
    })
    console.log(result);
    
    result  ? (FriendSuggest.innerHTML+=
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
            <button onclick="showMessages()">Talk</button>
            <button onclick="takeOutOfMyFriendList()">Cancel Friendship</button>
        </div>
       </li>
    ` ) :   (FriendSuggest.innerHTML+=
                    `
        <li class="nav-list">
             <div class="trend-list">
            <i class="fas fa-user"></i>
                 <p class="sub-text">Desenvolvimento_Robotic</p>
                <p class="main-text">#${name}${surName}</p>
                <p class="sub-text">274K Visitas</p>
             </div>
                 <div class="trend-icon">
                        <i class="fas fa-chevron-down"></i>
                 </div>
             <div class="trend-icon">
                 <button onclick="enviarPedidoDeAmizade()">Enviar</button>
                    <button onclick="rejeitarEstePedido()">Cancelar</button>
             </div>
         </li>
     ` )

    
    
    // allUsers.forEach(user=>{

    // })

//

}
searchPost=(allUsers)=>{
    const allPosts=JSON.parse(localStorage.getItem("allPosts"));
    allPosts.forEach(eachpost=>{
        const{id,theTitlePost,react,comment,share}=eachpost
        const {name,surName}=allUsers[id]
        FriendSuggest.innerHTML+= `
        <li class="nav-list">
             <div class="trend-list">
                 <p class="sub-text">${theTitlePost}</p>
                <p class="main-text">#${name}${surName}</p>
                <p class="sub-text">likes:${react.length},comentarios:${comment.length},partilhas:${share.length}</p>
             </div>
                 <div class="trend-icon">
                        <i class="fas fa-chevron-down"></i>
                 </div>
         </li>
     ` 
    })
    
    
}
search.oninput=()=>{

    FriendSuggest.innerHTML=""
    const allUsers=JSON.parse(localStorage.getItem("allUsers"))
    let result=-1;
    allUsers.forEach(eachUser => {
        const {name,surName}=eachUser;
       const searchContent=search.value.toLowerCase().trim();
        const eachName=name.toLowerCase().trim()
        !!searchContent && (result=eachName.indexOf(searchContent))
        result>=0 &&  verifyIfIsMyFriend(name,surName,allUsers)        
        result>=0 &&  searchPost(allUsers)        
    });
}



