import { encode } from "./index";
import { assert } from "chai";

describe("encode", () => {
  test("encodes object as strings with equal", () => {
    assert.equal(
      encode({ "form-field": "form-value", one: "two" }),
      "form-field=form-value&one=two"
    );
  });
  test("returns empty string on empty object", () => {
    assert.equal(encode({}), "");
  });
});
