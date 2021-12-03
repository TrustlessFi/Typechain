/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "newRate",
                type: "int256",
            },
        ],
        name: "executeRatesUpdateContractUpdate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IRatesUpdateDelegate__factory = /** @class */ (function () {
    function IRatesUpdateDelegate__factory() {
    }
    IRatesUpdateDelegate__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IRatesUpdateDelegate__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IRatesUpdateDelegate__factory.abi = _abi;
    return IRatesUpdateDelegate__factory;
}());
export { IRatesUpdateDelegate__factory };