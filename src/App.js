import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

console.log("App.js: loaded");
export class App {
    constructor() {
        // 1. TodoListの初期化
        this.todoListView = new TodoListView();
        this.todoListModel = new TodoListModel();
    }

    /**
     * Todoを追加する時に呼び出されるリスナー関数
     * @param {string} title
     */
    handleAdd(title) {
        this.todoListModel.addTodo(
            new TodoItemModel({ title, completed: false })
        );
    }

    /**
     * Todoの状態を更新した時に呼ばれるリスナー関数
     * @param {{ id:number, completed: boolean }}
     */
    handleUpdate({ id, completed }) {
        this.todoListModel.updateTodo({ id, completed });
    }

    /**
     * Todoを削除した時に呼ばれるリスナー関数
     * @param {{ id: number }}
     */
    handleDelete({ id }) {
        this.todoListModel.deleteTodo({ id });
    }

    mount() {
        // JSでHTMLで入力された情報を扱うため、id属性の要素を取得する
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        // 2. TodoListModelの状態が更新されたら表示を更新する
        this.todoListModel.onChange(() => {
            // それぞれのTodoItem要素をtodoListElement以下へ追加する
            const todoItems = this.todoListModel.getTodoItems();

            // TodoリストをまとめるList要素
            const todoListElement = this.todoListView.createElement(todoItems, {
                // Todoアイテムが更新イベントを発生した時に呼ばれるリスナー関数
                onUpdateTodo: ({ id, completed }) => {
                    this.handleUpdate({ id, completed });
                },
                // Todoアイテムが削除イベントを発生した時に呼ばれるリスナー関数
                onDeleteTodo: ({ id }) => {
                    this.handleDelete({ id });
                },
            });

            // コンテナ要素の中身をTodoリストをまとめるList要素で上書きする
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
