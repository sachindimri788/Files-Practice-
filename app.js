
 const header=document.getElementById('main-header');
 const addItem=document.getElementsByClassName('title');


 header.style.borderBottom="solid 3px #000";

 addItem[0].style.fontWeight="bold";

 addItem[0].style.color="green";


var list=document.getElementsByClassName("list-group-item");

list[2].style.backgroundColor="green";

for(var i=0;i<list.length;i++){
    list[i].style.fontWeight="bold";
}