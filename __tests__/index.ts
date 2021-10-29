import * as assert from "assert";
import Application from "../src/application";

it("should return the average of two numbers", function () {
  assert.equal(Application.getAverage(2, 2), 2);
});

it("should create new `Application` instance", function () {
  assert.fail(new Application());
});
