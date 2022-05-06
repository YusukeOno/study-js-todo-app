// プラグインの読み込み
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // production or development
    mode: "development",
    // "plugins" エントリーを追加
    plugins: [
        // プラグインのインスタンスを作成
        new HtmlWebpackPlugin({
            // テンプレート
            template: "./src/index.html",
            // <script> ~ </script> タグの挿入位置
            inject: "body",
            // スクリプト読み込みのタイプ
            scriptLoading: "defer",
            // ファビコンも <link rel="shortcut icon" ~ /> として挿入できる
            // favicon: "./src/favicon.ico",
        }),
    ],
};
