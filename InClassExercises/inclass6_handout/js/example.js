// ADD NEW ITEM TO END OF LIST
function addToEnd() {
  var itemListed = document.createElement("LI");
  var itemText = document.createTextNode("cream");
  itemListed.appendChild(itemText);
  document.getElementsByTagName("ul")[0].appendChild(itemListed);
}

// ADD NEW ITEM START OF LIST
function addToStart() {
  var itemListed = document.createElement("LI");
  var itemText = document.createTextNode("kale");
  itemListed.appendChild(itemText);
  document.getElementsByTagName("ul")[0].insertBefore(itemListed, document.getElementsByTagName("li")[0]);
}

// ADD A CLASS OF COOL TO ALL LIST ITEMS
function addClassCool() {
  for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    document.getElementsByTagName("LI")[i].setAttribute("class", "cool");
  }
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
function addNumItems() {
  var msg = '<span>' + document.getElementsByTagName("li").length + '</span>';
  console.log(msg);
  document.getElementsByTagName("H2")[0].innerHTML += msg;
}

addToEnd();
addToStart();
addClassCool();
addNumItems();
