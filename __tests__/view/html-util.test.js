// Jestによる単体テスト（ユニットテスト）の例
// cf. https://jestjs.io/ja/docs/getting-started
import { escapeSpecialChars } from "../../src/view/html-util.js"; // テスト対象の関数を指定する

// escapeSpecialChars関数のテスト
describe("escapeSpecialCharsのテスト", () => {
    // test関数は、第1引数にテスト名称を記載し、第2引数にテストを記述する。
    test("'&' を '&amp;' に 変換するテスト", () => {
        // expect関数の引数にテスト対象の処理を記述し、マッチャー( toBe toEqual など)で期待する動作を検証する。
        expect(escapeSpecialChars("&")).toBe("&amp;");
    });
    test("'<' を '&lt;' に 変換するテスト", () => {
        expect(escapeSpecialChars("<")).toBe("&lt;");
    });
    test("'>' を '&lt;' に 変換するテスト", () => {
        expect(escapeSpecialChars(">")).toBe("&gt;");
    });
    test("'\"' を '&quot;' に 変換するテスト", () => {
        expect(escapeSpecialChars('"')).toBe("&quot;");
    });
    test("''' を '&%039;' に 変換するテスト", () => {
        expect(escapeSpecialChars("'")).toBe("&%039;");
    });
});
