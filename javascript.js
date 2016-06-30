
function swapAbout(){
  document.getElementById("aboutID").style.zIndex="1";
  document.getElementById("project1ID").style.zIndex="0";
  document.getElementById("project2ID").style.zIndex= "0";
  document.getElementById("blankID").style.zIndex= "0";
}
function swapProject1(){
  document.getElementById("aboutID").style.zIndex="0";
  document.getElementById("project1ID").style.zIndex="1";
  document.getElementById("project2ID").style.zIndex= "0";
  document.getElementById("blankID").style.zIndex= "0";
}
function swapProject2(){
  document.getElementById("aboutID").style.zIndex="0";
  document.getElementById("project1ID").style.zIndex="0";
  document.getElementById("project2ID").style.zIndex= "1";
  document.getElementById("blankID").style.zIndex= "0";
}
function swapBlank(){
  document.getElementById("aboutID").style.zIndex="0";
  document.getElementById("project1ID").style.zIndex="0";
  document.getElementById("project2ID").style.zIndex= "0";
  document.getElementById("blankID").style.zIndex= "1";
}
