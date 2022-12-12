function display(val){
    const inp=document.getElementById("inp");
    inp.value += val;
}
function inputClr(){
    document.getElementById("inp").value="";
}
function calKro(){
    const inp=document.getElementById("inp");
    inp.value=eval(inp.value);
}