
//クイズ
qa = new Array();
qa[0] = [ '三角形の内角の和は','360度','90度','180度','270度',3];
  
qa[1] = [ 'ホワイトハウスにないのは','テニスコート','映画館','ボウリング場','水族館',4];
  
qa[2] = ['ガリガリ君の当たり確率は','1%','2%','3%','4%',3];

//初期設定
count = 0; //問題番号
q_sel = 4; //選択肢の数

//最初の問題
quiz();

//問題表示
function quiz() {
	//問題
	document.getElementById("text_q").innerHTML = "第" + (count + 1) + "問　" + qa[count][0];
	//選択肢
	document.getElementById("text_s1").innerHTML = qa[count][1];
  document.getElementById("text_s2").innerHTML = qa[count][2];
  document.getElementById("text_s3").innerHTML = qa[count][3];
  document.getElementById("text_s4").innerHTML = qa[count][4];
}

	//合計点
let total = 0;

//解答表示
function answer(num) {

	//答え合わせ
	if (num === qa[count][q_sel + 1]) {
		//正解
    console.log("正解");
		total = total + 1;
	} else {
		//不正解
		console.log("不正解");
	}

	//次の問題を表示
  count++;
	if (count < qa.length) {
		quiz();
	} else {
		//終了
		document.getElementById("text_q").innerHTML = "";
		document.getElementById("text_s1").innerHTML = "お";
		document.getElementById("text_s2").innerHTML = "し";
		document.getElementById("text_s3").innerHTML = "ま";
		document.getElementById("text_s4").innerHTML = "い";
		//アラート
		if(total === 3){
				alert("全問正解!!!");
		}
		else if(total === 2){
				alert("惜しい!!!");
		}
		else if(total === 1){
				alert("まだまだ!!!");
		}
		else{
				alert("残念!!!");
		}
	}
}



