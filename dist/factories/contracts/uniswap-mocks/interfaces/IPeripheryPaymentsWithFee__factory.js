/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [],
        name: "refundETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "sweepToken",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "feeBips",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "feeRecipient",
                type: "address",
            },
        ],
        name: "sweepTokenWithFee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "unwrapWETH9",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "feeBips",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "feeRecipient",
                type: "address",
            },
        ],
        name: "unwrapWETH9WithFee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IPeripheryPaymentsWithFee__factory = /** @class */ (function () {
    function IPeripheryPaymentsWithFee__factory() {
    }
    IPeripheryPaymentsWithFee__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IPeripheryPaymentsWithFee__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IPeripheryPaymentsWithFee__factory.abi = _abi;
    return IPeripheryPaymentsWithFee__factory;
}());
export { IPeripheryPaymentsWithFee__factory };
