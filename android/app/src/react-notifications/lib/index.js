'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notifyInformation = exports.notifyWarning = exports.notifySuccess = exports.notifyFormFailure = exports.notifyFailure = undefined;

var _effects = require('redux-saga/effects');

var _reduxForm = require('redux-form');

var _reactReduxToastr = require('react-redux-toastr');

var _apiValidationHelper = require('../api-validation-helper/lib');

var _constants = require('./constants');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(notifyFormFailure),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(notifySuccess),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(notifyFailure),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(notifyWarning),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(notifyInformation);

function notifyFormFailure(e, form) {
    var errors;
    return regeneratorRuntime.wrap(function notifyFormFailure$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    errors = {};

                    if (!(e.status === _constants.BAD_REQUEST_HTTP_CODE)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return (0, _effects.call)(_apiValidationHelper.extractApiErrors, e.response);

                case 4:
                    errors = _context.sent;
                    _context.next = 8;
                    break;

                case 7:
                    if (e.status === _constants.UNPROCESSABLE_ENTITY_HTTP_CODE) {
                        e.response.errorMessages.forEach(function (message) {
                            _reactReduxToastr.toastr.error(message);
                        });
                    } else {
                        _reactReduxToastr.toastr.error('An unexpected error has occurred.');
                    }

                case 8:
                    _context.next = 10;
                    return (0, _effects.put)((0, _reduxForm.stopSubmit)(form, errors));

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function notifySuccess(message) {
    return regeneratorRuntime.wrap(function notifySuccess$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _reactReduxToastr.toastr.success(message);

                case 1:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

function notifyFailure(e, defaultMessage) {
    return regeneratorRuntime.wrap(function notifyFailure$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    if (e && e.response && e.response.errorMessages) {
                        e.response.errorMessages.forEach(function (message) {
                            _reactReduxToastr.toastr.error(message);
                        });
                    } else {
                        _reactReduxToastr.toastr.error(defaultMessage);
                    }

                case 1:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

function notifyWarning(title, message) {
    var toastrType;
    return regeneratorRuntime.wrap(function notifyWarning$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    toastrType = 'warning';

                    _reactReduxToastr.toastr.light(title, message, {
                        icon: toastrType,
                        status: toastrType
                    });

                case 2:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}

function notifyInformation(message) {
    var toastrType;
    return regeneratorRuntime.wrap(function notifyInformation$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    toastrType = 'info';

                    _reactReduxToastr.toastr.light(message, {
                        icon: toastrType,
                        status: toastrType
                    });

                case 2:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}

exports.notifyFailure = notifyFailure;
exports.notifyFormFailure = notifyFormFailure;
exports.notifySuccess = notifySuccess;
exports.notifyWarning = notifyWarning;
exports.notifyInformation = notifyInformation;