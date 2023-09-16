//クリックするとtrueになる変数…
let btn = document.getElementById("btn");
let test = true;
btn.addEventListener("click",function(){
    test = false;
});

//イベントハンドラの指定をする
let element_pa = document.getElementById("pa");
element_pa.addEventListener("click",function(){janken(0)});
let element_chi = document.getElementById("chi");
element_chi.addEventListener("click",function(){janken(1)});
let element_gu = document.getElementById("gu");
element_gu.addEventListener("click",function(){janken(2)});


function janken(num){
   
    if (!test){
        return;
    }

    if(test){
        //パソコンの手を決める
        let pc_janken = ["pa.jpg","chi.jpg","gu.jpg"]
        let pc = Math.floor(Math.random()*3);
        //パソコンの手の画像を出す
        let pcImg = document.getElementById("pcImg")
        pcImg.src = pc_janken[pc]
        //自分の手の画像を一旦白丸にする
        let paImg = document.getElementById("pa")
        paImg.src= "maru.jpg"
        let chiImg = document.getElementById("chi")
        chiImg.src= "maru.jpg"
        let guImg = document.getElementById("gu")
        guImg.src= "maru.jpg"
    //勝敗を決める
        function end(){
            if(num === 0){
                paImg.src= "pa.jpg"
                if(pc === 0){
                    return "結果：あいこ"
                }
                else if(pc === 1){
                    return "結果：負け！"
                }
                else{
                    return "結果：勝ち！"
                }
            }
            else if (num === 1){
                chiImg.src= "chi.jpg"
                if(pc === 0){
                    return "結果：勝ち！"
                }
                else if(pc === 1){
                    return "結果：あいこ"
                }
                else{
                    return "結果：負け！"
                }
            }
            else{
                guImg.src= "gu.jpg"
                if(pc === 0){
                    return "結果：負け！"
                }
                else if(pc === 1){
                    return "結果：勝ち！"
                }
                else{
                    return "結果：あいこ"
                }
            }
        }         
        //勝敗結果をHTMLに出力する
        return document.getElementById("result").innerHTML = end();
    }

}
