// プラグインの読み込み
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    // production or development
    mode: "development",
    // ここは絶対パスで指定する必要がある。
    output: {
        // path: `${__dirname}/dist`,
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
    },
    // "plugins" エントリーを追加
    plugins: [
        // プラグインのインスタンスを作成
        new HtmlWebpackPlugin({
            // テンプレート
            template: "./src/index.html",
            // <script> ~ </script> タグの挿入位置
            inject: false,
            // スクリプト読み込みのタイプ
            scriptLoading: "defer",
            // ファビコンも <link rel="shortcut icon" ~ /> として挿入できる
            // favicon: "./src/favicon.ico",
        }),
    ],
};
