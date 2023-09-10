var addItemId= 0;
function addToCart2(item){
    addItemId+= 1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img=document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title=document.createElement('div');
    title.innerHTML=item.children[1].innerText;
    var label=document.createElement('div');
    label.innerHTML=item.children[2].innerText;
    var delBtn=document.createElement('button');
    delBtn.innerText='Delete';
    delBtn.setAttribute('onclick','del('+ addItemId+')')
    var cartItems=document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}
function del(item){
    document.getElementById(item).remove();
}
