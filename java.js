function loveForm(){
var Name1 = document.getElementById("name1").value;
Name1= (Name1.split(" ")[0]);
var Name2 = document.getElementById("name2").value;
Name2= (Name2.split(" ")[0]);
document.getElementById("Name").innerHTML= Name1 + "❤" + Name2;
var n = Math.random();
var m = Math.floor((n*100)+1);
document.getElementById("num").innerHTML= m +"%";
return false;
}
