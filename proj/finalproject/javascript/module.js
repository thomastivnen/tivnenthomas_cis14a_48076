// written by Thomas Tivnen for module cart
var Some = (function() {
    var util = { /* cart */ };
    return {
        Namespace: (function() {
            return {
                Whatever: (function() {
                    var Foo = function(config) {
                        this.foo = config.foo || "foo";
                        this.bar = config.bar || "bar";
                    };
                    var Bar = function() {};
                    Foo.prototype.toString = function() {
                        return this.foo + " "  + this.bar;
                    };
                    return {
                        Foo: Foo,
                        Bar: Bar
                    }
                }())
            };
        }())
    };
}());

var foo = new Some.Namespace.Whatever.Foo({foo: "call", bar: "cart"});
foo.toString() // "for cart"