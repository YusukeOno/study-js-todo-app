import { escapeSpecialChars } from "../../src/view/html-util.js";

// escapeSpecialChars関数のテスト
describe("escapeSpecialCharsのテスト", () => {
    test("'&' を '&amp;' に 変換するテスト", () => {
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
