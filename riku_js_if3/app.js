let japanese = 40;
let math = 40;
let science = 40;
let social = 40;
let english = 40;

let totala = japanese + math + science + social + english;
let totalb = math + science;
let totalc =japanese + social + english;  

if ((totala>=400) && (japanese>=80) && (math>=80) && (science>=80) && (social>=80) && (english>=80)){
    console.log("特進クラス");
}
else if ((totala>=350) && (japanese>=70) && (math>=70) && (science>=70) && (social>=70) && (english>=70)){
    console.log("準特進クラス");
}
else if ((totala>=300) && (english>=95)){
    console.log("国際進学Aクラス");
}
else if ((totala>=300) && (english>=90)){
    console.log("国際進学Bクラス");
}
else if (totalb>=150){
    console.log("理系Aクラス");
}
else if (totalb>=130){
    console.log("理系Bクラス");
}
else if (totalc>=250){
    console.log("文系Aクラス");
}
else if (totalc>=200){
    console.log("文系Bクラス");
}
else {
    console.log("普通クラス");
}