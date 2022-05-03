console.log("App.js: loaded");
export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        // JSでHTMLで入力された情報を扱うため、id属性の要素を取得する
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");

        // form要素で発生したsubmitイベントを受け取る
        formElement.addEventListener("submit", (event) => {
            // この中はイベントが発生した時に呼ばれるコールバック関数（イベントリスナー）
            // イベントリスナーとか、イベントハンドラーと呼ばれる

            // formタグのaction属性に記載されたURLに遷移させないため（画面をリロードさせないため）に、
            // submitイベントの動作を止める。
            // cf. https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
            event.preventDefault();

            // 確認のため入力した値をコンソールログに出力する
            console.log(`入力欄の値:  ${inputElement.value}`);
        });
    }
}
