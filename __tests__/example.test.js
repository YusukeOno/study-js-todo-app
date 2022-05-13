test("アロー関数とコールバック関数の学習", () => {
    // 関数宣言とはfunctionで定義した処理のカタマリ。
    function singleFunc(num) {
        return num * 1;
    }
    // 関数式とは関数を変数に代入したもの。
    const doubleConst = function (num) {
        return num * 2;
    };
    // Arrow Function はfunctionを無くして、=>（アロー）で処理を定義したもの。
    const tripeArrowFunc = (num) => {
        return num * 3;
    };

    // コールバック関数を関数宣言で定義
    function singleFuncCallBack(Func, num) {
        return Func(num);
    }
    // コールバック関数を関数式で定義
    const doubleFuncCallBack = function (Func, num) {
        return Func(num);
    };
    // コールバック関数をArrow Functionで定義
    const tripleFuncCallBack = (Func, num) => {
        return Func(num);
    };

    // 関数呼び出し
    expect(singleFunc(10)).toBe(10);
    expect(doubleConst(20)).toBe(40);
    expect(tripeArrowFunc(30)).toBe(90);

    // 以下、コールバック関数で呼び出し
    expect(singleFuncCallBack(singleFunc, 10)).toBe(10);
    expect(singleFuncCallBack(doubleConst, 10)).toBe(20);
    expect(singleFuncCallBack(tripeArrowFunc, 10)).toBe(30);

    expect(doubleFuncCallBack(singleFunc, 10)).toBe(10);
    expect(doubleFuncCallBack(doubleConst, 10)).toBe(20);
    expect(doubleFuncCallBack(tripeArrowFunc, 10)).toBe(30);

    expect(tripleFuncCallBack(singleFunc, 10)).toBe(10);
    expect(tripleFuncCallBack(doubleConst, 10)).toBe(20);
    expect(tripleFuncCallBack(tripeArrowFunc, 10)).toBe(30);
});
