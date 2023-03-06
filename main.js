function searchFunction(){
 
 var input= document.getElementById('myInput');
 var filter=input.value.toUpperCase();
 var ul=document.getElementById("mylist");
 var li=ul.getElementsByTagName("li");
 for( var i=0; i < li.length; i++){
    var a=li[i].getElementsByTagName("a")[0];
    var textvalue=a.innerText;
    if (textvalue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display="";
    }
    else{
        li[i].style.display="none";
    }
 }
}
