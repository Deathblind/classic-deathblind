import { type } from "./action";

it("should return the given string", () => {
    expect(type("[Foobar] Type 1")).toEqual("[Foobar] Type 1");
});

it("should not allow the same type twice", () => {
    const label = "[Foobar] Type 2";
    type(label);
    expect(function() {
        type(label);
    }).toThrow(new Error(`Action type "[Foobar] Type 2" is not unqiue`));
});
