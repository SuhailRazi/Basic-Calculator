function buttonclick(val)
{
    document.getElementById("scrn").value=document.getElementById("scrn").value+val
}
function clr(){
    document.getElementById("scrn").value=""
}
function equalclick(){
    var text=document.getElementById("scrn").value
    var result=eval(text)
    document.getElementById("scrn").value=result
}