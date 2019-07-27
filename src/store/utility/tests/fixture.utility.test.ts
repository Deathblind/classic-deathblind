import { loadMap } from "./fixture.utility";

it("should give back the correct state", () => {
    const result = loadMap({ 1: "Foo", 5: "Bar" });

    expect(result[1]!.data).toEqual("Foo");
    expect(result[5]!.data).toEqual("Bar");
});
