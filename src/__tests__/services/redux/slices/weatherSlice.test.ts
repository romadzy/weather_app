import reducer, { addCity, removeCity, setUnit, setCities, setInitialized } from "@/services/redux/slices/weatherSlice";

describe("weatherSlice", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      cities: [],
      unit: "metric",
      initialized: false,
    });
  });

  it("should add a city", () => {
    const state = reducer(undefined, addCity("London"));
    expect(state.cities).toContain("London");
  });

  it("should not add duplicate city", () => {
    const state = reducer({ cities: ["London"], unit: "metric", initialized: false }, addCity("London"));
    expect(state.cities).toEqual(["London"]);
  });

  it("should remove a city", () => {
    const state = reducer({ cities: ["London", "Paris"], unit: "metric", initialized: false }, removeCity("London"));
    expect(state.cities).toEqual(["Paris"]);
  });

  it("should set unit", () => {
    const state = reducer(undefined, setUnit("imperial"));
    expect(state.unit).toBe("imperial");
  });

  it("should set cities", () => {
    const state = reducer(undefined, setCities(["London", "Paris"]));
    expect(state.cities).toEqual(["London", "Paris"]);
  });

  it("should set initialized", () => {
    const state = reducer(undefined, setInitialized());
    expect(state.initialized).toBe(true);
  });
});
