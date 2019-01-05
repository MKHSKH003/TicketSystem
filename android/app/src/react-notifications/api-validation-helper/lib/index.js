'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _marked = /*#__PURE__*/regeneratorRuntime.mark(extractApiErrors);

var unflatten = require('flat').unflatten;

var toCamelCase = function toCamelCase(str) {
    return str.split('.').map(function (subString) {
        return subString.charAt(0).toLowerCase() + subString.slice(1);
    }).join('.');
};

var mapModelStateToErrors = function mapModelStateToErrors(modelState, singlePropertyError) {
    // Fields need to be camelcase.
    var formErrors = _.mapKeys(modelState, function (v, k) {
        return toCamelCase(k).replace('[', '.').replace(']', '');
    });

    // Only display the first error for each field in the errors array if singlePropertyError is true. Otherwise return all.
    return singlePropertyError ? unflatten(_.mapValues(formErrors, function (v) {
        return v[0];
    })) : formErrors;
};

function extractApiErrors(responseError) {
    return regeneratorRuntime.wrap(function extractApiErrors$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    return _context.abrupt('return', responseError ? mapModelStateToErrors(responseError, true) : { _error: 'An unexpected error has occurred.' });

                case 1:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

exports.mapModelStateToErrors = mapModelStateToErrors;
exports.extractApiErrors = extractApiErrors;