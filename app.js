
 const header=document.getElementById('main-header');
 const addItem=document.getElementsByClassName('title');


 header.style.borderBottom="solid 3px #000";

 addItem[0].style.fontWeight="bold";

 addItem[0].style.color="green";


// var list=document.getElementsByClassName("list-group-item");

// list[2].style.backgroundColor="green";

// for(var i=0;i<list.length;i++){
//     list[i].style.fontWeight="bold";
// }


// var list=document.getElementsByTagName("li");

// list[2].style.backgroundColor="green";

// for(var i=0;i<list.length;i++){
//     list[i].style.fontWeight="bold";
// }


// var list=document.querySelectorAll("li:nth-child(odd)");

// for(var i=0;i<list.length;i++){
//     list[i].style.backgroundColor="green"; }


// Add "Hello" before "Item Lister"
var headerTitle = document.getElementById('header-title');
headerTitle.innerHTML = 'Hello ' + headerTitle.innerHTML;

// Add "Hello" before "Item 1"
var item1 = document.querySelector('#items li:first-child');
item1.innerHTML = 'Hello ' + item1.innerHTML;

//delete button
var deleteButton = document.getElementById('delete');
  var itemsList = document.getElementById('items');
  
  deleteButton.addEventListener('click', function() {
    var lastItem = itemsList.lastElementChild;
    if (lastItem) {
      itemsList.removeChild(lastItem);
    }
  });