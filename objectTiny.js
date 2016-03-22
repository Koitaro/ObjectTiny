// (c) 2016 鯉渕 保司 (yKoibuti@mail.gmail.com)
// Artistic License 2.0

var ObjectTiny = function() {
    var obj = function(arg) {
        if (!arg) return;
        var self = this;
        Object.keys(arg).forEach(function(key) {self["_"+key] = arg[key]});
    }
    for (var i = 0; i < arguments.length; i++) {
        (function(attr) {
            obj.prototype[attr] = function() { return this["_"+attr] }
        })(arguments[i])
    }
    return obj;
}
