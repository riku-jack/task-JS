
setInterval(countdown,1000);

function countdown(){
    //今の日時
    const now = new Date();

    //明日
    const tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1) ;
  
    //差を出す
    const remainTime = tomorrow - now  
  
    //指定の日時を過ぎていたら処理をしない
    if(remainTime < 0) return false 
  
    //差分の日・時・分・秒を取得
    const difHour = Math.floor(remainTime / 1000 / 60 / 60 );
    const difMin  = Math.floor(remainTime / 1000 / 60) % 60;
    const difSec  = Math.floor(remainTime / 1000) % 60;
  
    //htmlに出す
    document.getElementById("countdown-hour").textContent = difHour
    document.getElementById("countdown-min").textContent  = difMin
    document.getElementById("countdown-sec").textContent  = difSec
  
    //指定の日時になればカウントを止める
    if(remainTime < 0) clearInterval(countdown);
  
}

