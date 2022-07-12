guestlist=[];
function submit(){
n1= document.getElementById("name1").value ;
guestlist.push(n1);
document.getElementById("display_name").innerHTML=guestlist.toString() ;
} 
function show(){
i=guestlist.join("<br>");
document.getElementById("p1").innerHTML=i.toString();
}
function  searching(){
s1=document.getElementById("search_bar").value ;
var j;
var found=0;
for(j=0;j<guestlist.length;j++){
if(s1==guestlist[j]){
found=found+1;
}
}
document.getElementById("p2").innerHTML="name found "+found+" times";
}