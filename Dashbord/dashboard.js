// adicionar uma classe de hovered na selecao de items
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink)); 

// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
var settingsmenu = document.querySelector(".containerComment");
function settingsMenuToggle() {
    settingsmenu.classList.toggle("profile-setting");
} 
const recentOrders=document.querySelector(".recentOrders table tbody")
console.log(recentOrders);

takeUser=()=>{
    const allUsers=JSON.parse(localStorage.getItem("allUsers"));
    console.log(allUsers);
    const recentCostumers=document.querySelector(".recentCostumers table")
    allUsers.forEach(user=>{
        const {id,name,surName,email}=user;
        console.log(id,name,surName,email);
        
        
    recentCostumers.innerHTML+=
    `
    <tr>
        <td width="60px"><div class="imgbx"><img src="../img/user2.jpg"></div></td>
        <td><h4>${name}  ${surName}<br><span>${email}</span></h4></td>
   </tr>

    `
    recentOrders.innerHTML+=
    `
 <tr>
    <td>${id}</td>
    <td>${name} ${surName}</td>
    <td>${email}</td>
    <td><span class="status delivered">$</span></td>
</tr>

    `
})
}













//////////////////left area dushhhhhhhh
{/* <tr>
    <td>Pedro Muteka</td>
    <td>Morro-Bento</td>
    <td>Água Paradas</td>
    <td><span class="status inprogress">Não Resolvido<span></td>
</tr>
<tr>
    <td>Ernesto Salias</td>
    <td>Viana/Estalagem</td>
    <td>Buracos nas vias Principais</td>
    <td><span class="status return">A Resolver</span></td>
</tr>
<tr>
    <td>Paulino Passil</td>
    <td>Kazenga</td>
    <td> Falta de Água Potável</td>
    <td><span class="status inprogress">Não Resolvido</span></td>
</tr>
<tr>
    <td>Josana Silva</td>
    <td>Belas</td>
    <td>Falta de Energia</td>
    <td><span class="status inprogress">Não Resolvido</span></td>
</tr>
<tr>
    <td>Juliana Soba</td>
    <td>Luanda/Baixa</td>
    <td>Obras Mal constuídas</td>
    <td><span class="status delivered">Resolvido</span></td>
</tr>
<tr>
    <td>José Gonçalves</td>
    <td>Kilamba-Kiaxi</td>
    <td>Terra não Planada</td>
    <td><span class="status inprogress">Não Resolvido</span></td>
</tr>
<tr>
    <td>Nika Katchabala</td>
    <td>Cacuaco/Vidrul</td>
    <td>Falta de Luz</td>
    <td><span class="status delivered">Resolvido</span></td>
</tr>
<tr>
    <td>Domingos Cunha</td>
    <td>Maianga</td>
    <td>Poluição do Ar</td>
    <td><span class="status return">A Resolver</span></td>
</tr>
<tr>
    <td>Carlos Maquina</td>
    <td>Maianga</td>
    <td>Lixo nos Passeios </td>
    <td><span class="status return">A Resolver</span></td>
</tr> */}
    
    

















// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user3.jpg"></div></td>
//     <td><h4>Matuta Jorge<br><span>Kazenga/Tanque</span></h4></td>
// </tr>
// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user4.jpg"></div></td>
//     <td><h4>Ivanilldo Correia<br><span>Belas</span></h4></td>
// </tr>
// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user5.jpg"></div></td>
//     <td><h4>Joice Matwanda<br><span>Cacuaco/Vidrul</span></h4></td>
// </tr>
// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user6.jpg"></div></td>
//     <td><h4>Lúcio Cardoso<br><span>Viana/Caop-B</span></h4></td>
// </tr>
// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user7.jpg"></div></td>
//     <td><h4>António Machado<br><span>Samba/Antigo-Control</span></h4></td>
// </tr>
// <tr>
//     <td width="60px"><div class="imgbx"><img src="../img/user8.jpg"></div></td>
//     <td><h4>Laurinda Domingos<br><span>Viana/Estalagem</span></h4></td>
// </tr>
























