function modfiyAttrbt(elementID, Attrbt, modAttrbt) {
    const elmnt = document.getElementById(elementID);
    elmnt.setAttribute(Attrbt, modAttrbt);
}
function modfiyContent(elementID, Content) {
    const elmnt = document.getElementById(elementID);
    elmnt.innerHTML = Content;
}