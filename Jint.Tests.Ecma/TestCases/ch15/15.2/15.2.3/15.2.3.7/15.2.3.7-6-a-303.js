/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-303.js
 * @description Object.defineProperties - 'O' is an Arguments object, 'P' is generic property, and 'desc' is accessor descriptor, test 'P' is defined in 'O' with all correct attribute values (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        var arg = (function () {
            return arguments;
        }(1, 2, 3));

        function getFun() {
            return "getFunctionString";
        }
        function setFun(value) {
            arg.testGetFunction = value;
        }
        Object.defineProperties(arg, {
            "genericProperty": {
                get: getFun,
                set: setFun,
                enumerable: true,
                configurable: true
            }
        });

        return accessorPropertyAttributesAreCorrect(arg, "genericProperty", getFun, setFun, "testGetFunction", true, true);
    }
runTestCase(testcase);
