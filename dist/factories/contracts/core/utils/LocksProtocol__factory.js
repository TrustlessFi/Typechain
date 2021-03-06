/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        anonymous: false,
        inputs: [],
        name: "Stopped",
        type: "event",
    },
    {
        inputs: [],
        name: "governor",
        outputs: [
            {
                internalType: "contract IGovernor",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "stopped",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        name: "validUpdate",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var LocksProtocol__factory = /** @class */ (function () {
    function LocksProtocol__factory() {
    }
    LocksProtocol__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    LocksProtocol__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    LocksProtocol__factory.abi = _abi;
    return LocksProtocol__factory;
}());
export { LocksProtocol__factory };
