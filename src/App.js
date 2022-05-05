import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element, render } from "./view/html-util.js";

console.log("App.js: loaded");
export class App {
    constructor() {
        // 1. TodoListの初期化
        this.todoListModel = new TodoListModel();
    }

    mount() {
        // JSでHTMLで入力された情報を扱うため、id属性の要素を取得する
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        // 2. TodoListModelの状態が更新されたら表示を更新する
        this.todoListModel.onChange(() => {
            // TodoリストをまとめるList要素
            const todoListElement = element`<ul />`;

            // それぞれのTodoItem要素をtodoListElement以下へ追加する
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach((item) => {
                // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
                // input要素にはcheckboxクラスをつける
                const todoItemElement = item.completed
                    ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s></li>`
                    : element`<li><input type="checkbox" class="checkbox">${item.title}</li>`;

                // チェックボックスがトグルした時のイベントリスナー関数を登録
                const inputCheckboxElement =
                    todoItemElement.querySelector(".checkbox");
                inputCheckboxElement.addEventListener("change", () => {
                    // 指定したTodoアイテムの完了状態を反転させる
                    this.todoListModel.updateTodo({
                        id: item.id,
                        completed: !item.completed,
                    });
                });

                // TodoアイテムをtodoListElementに追加する
                todoListElement.appendChild(todoItemElement);
            });

            // コンテナ要素の中身をTodoリストをあm止めるList要素で上書きする
            render(todoListElement, containerElement);

            // アイテム数の表示を更新
            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });

        // 3. フォームを送信したら、新しいTodoItemModelを追加する
        // form要素で発生したsubmitイベントを受け取る
        formElement.addEventListener("submit", (event) => {
            // この中はイベントが発生した時に呼ばれるコールバック関数（イベントリスナー）
            // イベントリスナーとか、イベントハンドラーと呼ばれる

            // formタグのaction属性に記載されたURLに遷移させないため（画面をリロードさせないため）に、
            // submitイベントの動作を止める。
            // cf. https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
            event.preventDefault();

            // 新しいTodoItemをTodoListへ追加する
            this.todoListModel.addTodo(
                new TodoItemModel({
                    title: inputElement.value,
                    completed: false,
                })
            );

            // 入力欄を空文字にしてリセットする
            inputElement.value = "";
        });
    }
}
