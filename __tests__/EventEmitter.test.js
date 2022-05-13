import { EventEmitter } from "../src/EventEmitter";

test("constructorのテスト", () => {
    // cf. https://jestjs.io/docs/jest-object#jestspyonobject-methodname
    const spy = jest.spyOn(EventEmitter, "constructor");
    EventEmitter.constructor();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
});

test("emitのテストです", () => {
    // const spy = jest.spyOn(EventEmitter, "constructor");
    // const obj = EventEmitter.constructor();
    // obj.addEventListener("hello-event", () => console.log("Two!"));
    // obj.emit("hello-event");
    // expect(spy).toHaveBeenCalled();
    // spy.mockRestore();
    // const event = new EventEmitter();
    // event.addEventListener("hello-event", () => console.log("Two!"));
    // event.emit("hello-event");
    // expect(event).toHaveBeenCalled();
    // expect(event.emit("hello-event")).toBe("hello");
    // event.addEventListener("test-event", () => console.log("Two!"));
    // event.emit("test-event");
    // jest.mock("../src/EventEmitter");
    // EventEmitter.mockClear();
    // const event = new EventEmitter();
    // event.addEventListener("hello-event", () => console.log("Two!"));
    // event.emit("test-event");
    // expect(event).toHaveBeenCalledTimes(1);
    // const spy = jest.spyOn(console, "log");
    // TODO: UnitTest
});
