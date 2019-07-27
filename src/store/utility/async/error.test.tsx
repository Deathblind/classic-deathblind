import { createErrorObject } from "./error";

it("should log the error if no errorcode is present", () => {
    const spy = {} as any;
    spy.console = jest.spyOn(console, "error").mockImplementation(() => {});

    createErrorObject({});
    expect(console.error).toHaveBeenCalled();

    spy.console.mockRestore();
});

it("should return default error object on empty error object", () => {
    const spy = {} as any;
    spy.console = jest.spyOn(console, "error").mockImplementation(() => {});

    const result = createErrorObject({});
    expect(result.code).toEqual(0);
    expect(result.message).toEqual("Unknown Error");

    spy.console.mockRestore();
});

it("should return error object with correct data", () => {
    const result = createErrorObject({ errorCode: 404, message: "Not Found" });
    expect(result.code).toEqual(404);
    expect(result.message).toEqual("Not Found");
});
