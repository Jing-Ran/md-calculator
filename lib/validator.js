(function(object) {
    object.validator = {};

    validator.containSpaces = function(input) {
        if (input.indexOf(" ") !== -1) return false;
        return true;
    };

    validator.isEmpty = function(input) {
        if (!input && input !== 0) return true;
        return false;
    };
})(window);