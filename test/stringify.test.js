require("..");

describe("Stringify", function() {
	it("must stringify circular objects", function() {
		var obj = {name: "Alice"};
		obj.self = obj;
		var json = JSON.stringify(obj);
		json.must.eql(JSON.origStringify({name: "Alice", self: "[Circular ~]"}));
	});

	it("must stringify circular objects with intermediaries", function() {
		var obj = {name: "Alice"};
		obj.identity = {self: obj};
		var json = JSON.stringify(obj);
		json.must.eql(JSON.origStringify({name: "Alice", identity: {self: "[Circular ~]"}}));
	});
});
