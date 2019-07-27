import { configureStore } from "./store";

it("should be able to get the state from the store", () => {
    const store = configureStore();
    const state = store.getState();

    expect(state).toBeDefined();
});
