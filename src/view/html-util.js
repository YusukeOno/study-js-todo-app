export function escapeSpecialChars(str) {
    // HTMLエスケープ処理: str引数に特殊記号が含まれた場合にエスケープする
    // エスケープしないと、入力値から任意のHTMLタグを動的生成されるため。
    // （独自実装することはあまりなく、一般的にはライブラリを使うことが多いです）
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&%039;");
}

/**
 * HTML文字列からHTML要素を作成して返す
 * @param {string} html
 */
export function htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;
}

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * @return {Element}
 * 
 * 引数の「...」はスプレッド構文
 * cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function element(strings, ...values) {
    // reduce()メソッド
    // cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const htmlString = strings.reduce((result, str, i) => {
        const value = values[i -1];
        if (typeof value === "string") {
            // 入力値が文字列を含む場合はHTMLエスケープする
            return result + escapeSpecialChars(value) + str;
        }
        else {
            // 入力値が文字列を含まない場合はHTMLエスケープ不要
            return result + String(value) + str;
        }
    });
    return htmlToElement(htmlString);
}

/** 
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */
export function render(bodyElement, containerElement) {
    // containerElementの中身を空にする
    containerElement.innerHTML = "";
    // containerElementの直下にbodyElementを追加する
    containerElement.appendChild(bodyElement);
}
