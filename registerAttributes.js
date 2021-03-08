"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Greek_1 = require("./Greek");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Greek',
    nation: 'Greece',
    colors: ['#2175D8', '#FFF'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Greek_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map