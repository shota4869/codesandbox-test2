import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  //押された削除ボタンの親タグを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了にリストを設定する
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //liの生成
  const li = document.createElement("li");

  //完了ボタン削除ボタンの作成
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  deleteButton.innerText = "削除";
  completeButton.innerText = "完了";

  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode;

    //TODOの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    console.log(addTarget.textContent);
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻るボタン実装
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //押された削除ボタンの親タグを未完了リストから削除
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = returnButton.parentElement.firstElementChild.innerText;

      //未完了のTODOリストに追加する
      createIncompleteList(text);
    });

    addTarget.appendChild(p);
    div.appendChild(returnButton);

    //liの生成
    const li = document.createElement("li");
    li.appendChild(div);

    //li以下を生成
    document.getElementById("complete-list").appendChild(li);
  });
  //divタグのｌ子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  // console.log(li);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
