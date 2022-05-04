/**
 * @jest-environment jsdom
 * cf. https://jestjs.io/docs/configuration#testenvironment-string
 */

import { debug } from "console";
import { htmlToElement } from "../../src/view/html-util.js";
import { element } from "../../src/view/html-util.js";
import { render } from "../../src/view/html-util.js";

// htmlToElement関数のテスト
test("htmlToElementのテスト", () => {
    const obj = document.createElement("div");
    expect(htmlToElement(`<div></div>`)).toEqual(obj);
});

// element関数のテスト
describe("elementのテスト", () => {
    // テスト対象のelement関数の引数「...」は、スプレッド構文という。
    // cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    //
    // 例) element`<ul>${input} and ${value}</ul>` の場合、それぞれ以下のようになる。
    // stringsには、straings[0]='<ul>', straings[1]='と', straings[2]='</ul>' が渡される。
    // valuesには、values[0]=${key}, values[1]=${value} が渡される。
    //
    // ちなみに、このスプレッド構文を使わない場合は、element(strings, value1, value2)と記述できるが、
    // 呼び出し元の${}が増えるたびに関数の修正が必要になってしまう。
    //
    // また、バッククォートで引数を渡せる構文は「タグ付きテンプレートリテラル」と呼ぶ
    // タグ付きテンプレートリテラルで引数を渡すと、プロパティの追加・更新・削除が不可となる。
    // cf. https://qiita.com/kura07/items/c9fa858870ad56dfec12
    test("入力値が数値のみのテスト", () => {
        // テスト対象の入力値を用意
        const input = 10;
        const value = 20;

        // 答え
        const obj = document.createElement("ul");
        const text = document.createTextNode("10 and 20");
        obj.appendChild(text); // <ul>10 and 20</ul>

        // element関数のテスト
        expect(element`<ul>${input} and ${value}</ul>`).toEqual(obj);
    });
    test("入力値が文字列のみのテスト", () => {
        // テスト対象の入力値を用意
        const input = "foo";
        const value = "bar";

        // 答え
        const obj = document.createElement("ul");
        const text = document.createTextNode("foo and bar");
        obj.appendChild(text); // <ul>foo and bar</ul>

        // element関数のテスト
        expect(element`<ul>${input} and ${value}</ul>`).toEqual(obj);
    });
    test("入力値が数値と文字列のテスト", () => {
        // テスト対象の入力値を用意
        const input = 10;
        const value = "bar";

        // 答え
        const obj = document.createElement("ul");
        const text = document.createTextNode("10 and bar");
        obj.appendChild(text); // <ul>10 and bar</ul>

        // element関数のテスト
        expect(element`<ul>${input} and ${value}</ul>`).toEqual(obj);
    });
});

// render関数のテスト
test("renderのテスト", () => {
    // テスト対象のDOMを用意
    const html = document.createElement("div");
    const html2 = document.createElement("span");

    // render関数はreturn値がないため、
    // 期待する引数を渡して、undefinedが返ってくることをテストする。
    // （自明であればテストコードは不要かも。
    expect(render(html, html2)).toBeUndefined();
});
