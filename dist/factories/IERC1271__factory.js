/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "magicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IERC1271__factory = /** @class */ (function () {
    function IERC1271__factory() {
    }
    IERC1271__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IERC1271__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IERC1271__factory.abi = _abi;
    return IERC1271__factory;
}());
export { IERC1271__factory };