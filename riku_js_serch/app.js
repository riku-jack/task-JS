
function search() {
  let sentence = document.getElementById("sumple").innerHTML;
  let serchword = document.getElementById("word").value;
  let result = sentence.indexOf(serchword);


  if ( !serchword.trim() ){
    document.getElementById("output").innerHTML = ""
  }
  else if( result < 0 ){
    document.getElementById("output").innerHTML = "含まれていません。"
  }
  else{
    document.getElementById("output").innerHTML = "含まれています。"
  }  
}

