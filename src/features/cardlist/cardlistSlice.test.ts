import cardlistReducer, { fetchRobots } from "./cardlistSlice";

describe("initializer reducer", () => {
  it("should hanldle initial state", () => {
    expect(cardlistReducer(undefined, { type: "unknown" })).toEqual({
      robots: [],
      status: "idle",
    });
  });

  it("should handle loading status", () => {
    const loading = cardlistReducer(undefined, fetchRobots.pending);
    expect(loading.status).toEqual("loading");
  });

  it("should handle failed status", () => {
    const loading = cardlistReducer(undefined, fetchRobots.rejected);
    expect(loading.status).toEqual("failed");
  });

  it("should handle idle status", () => {
    const loading = cardlistReducer(undefined, fetchRobots.fulfilled);
    expect(loading.status).toEqual("idle");
  });
});
