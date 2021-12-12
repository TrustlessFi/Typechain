/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
        ],
        name: "getTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "incentiveAllocation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "allocatee",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
        ],
        name: "increaseAllocation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
            {
                internalType: "uint8",
                name: "lockDurationMonths",
                type: "uint8",
            },
        ],
        name: "lockTokensIntoDao",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ITcpAllocation__factory = /** @class */ (function () {
    function ITcpAllocation__factory() {
    }
    ITcpAllocation__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ITcpAllocation__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ITcpAllocation__factory.abi = _abi;
    return ITcpAllocation__factory;
}());
export { ITcpAllocation__factory };
