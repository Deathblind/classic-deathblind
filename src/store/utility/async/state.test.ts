import { createLoadingAsyncState } from "./state";

it("should return a loading state with no error", () => {
    const state = createLoadingAsyncState();

    expect(state.data).toBeFalsy();
    expect(state.loading).toBeTruthy();
    expect(state.error).toBeFalsy();
});
