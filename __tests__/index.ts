import * as assert from "assert";
import Application from "../src/application";

it("should return the average of two numbers", () => {
  assert.equal(Application.getAverage(2, 2), 2);
});
