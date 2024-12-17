import { assert } from "chai";
import { addition } from "../calculator";

describe("Calculator Tests", () => {
  it("should return 5 when 2 is added to 3", () => {
    const result = addition(2, 3);
    assert.equal(result, 5);
  });
  it("should return 5 when 2 is added to 3，但給予錯誤回應", () => {
    const result = addition(2, 7);
    assert.equal(result, 5);
  });
});
