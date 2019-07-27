import { dataSelector } from "./selector";

it("should return the data", () => {
    const result = dataSelector({
        data: { id: 1 },
        loading: false,
        firstLoad: false,
        error: null
    });

    expect(result!.id).toBe(1);
});
