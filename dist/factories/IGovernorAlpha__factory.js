/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "support",
                type: "bool",
            },
        ],
        name: "castVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IGovernorAlpha__factory = /** @class */ (function () {
    function IGovernorAlpha__factory() {
    }
    IGovernorAlpha__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IGovernorAlpha__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IGovernorAlpha__factory.abi = _abi;
    return IGovernorAlpha__factory;
}());
export { IGovernorAlpha__factory };
