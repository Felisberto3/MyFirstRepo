
showTheUser=()=>{
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []
    const myId = JSON.parse(localStorage.getItem("myId")) 
    const condition = (myId===null || myId===-1)
    !condition && showUserIdentitys(allUsers,myId)
    !condition && insertUnKnowFriendsInHTML(myId,allUsers)
}