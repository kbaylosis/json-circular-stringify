var stringify = require("json-stringify-safe");

JSON.origStringify = JSON.stringify;

JSON.stringify = (obj, replacer, spaces, cycleReplacer) =>
	JSON.origStringify(obj, stringify.getSerialize(replacer, cycleReplacer), spaces);
