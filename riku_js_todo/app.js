const form = document.getElementById("form");
const input = document.getElementById("input");
const btn1 = document.getElementById("btn1");
const ul = document.getElementById("ul");
const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => {
        add(todo);
    })
}

//追加ボタンを押したらaddが発動
btn1.addEventListener("click",function(){
    add();
});

//addの中身
function add(todo){
    let todoText = input.value;

    //データがあれば表示される
    if(todo){
        todoText = todo;
    }

    //もし入力があった場合liを作成する
    if(todoText.length > 0){
        //liを作って入力したものをHTMLに出力する
        const div = document.createElement("div");
        ul.appendChild(div);

        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        //ulにliを追加する
        div.appendChild(li);

        //編集inputを追加
        const editInput = document.createElement("input");
        editInput.classList.add("edit");
        div.appendChild(editInput);
        //編集ボタンをliに追加する
        const editButton = document.createElement("button");
        editButton.innerHTML = "編集";
        editButton.classList.add("btn2");
        div.appendChild(editButton);
        //編集ボタンを押すとイベント発動
        editButton.addEventListener("click",() => {
            li.innerHTML = editInput.value;
            div.appendChild(editInput);
            div.appendChild(editButton);
            div.appendChild(deleteButton);
            editInput.value = ""
        });

        //削除ボタンをliに追加する
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "削除";
        deleteButton.classList.add("btn3");
        div.appendChild(deleteButton);

        //削除ボタンを押すとタスクを削除する
        deleteButton.addEventListener("click",() => {
            div.remove();
            saveData();
        });
    
        //入力したあとは文字を空にする
        input.value="";
        //データセーブ
        saveData();
    }
}

//データセーブの中身
function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}


