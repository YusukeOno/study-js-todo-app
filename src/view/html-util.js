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
