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
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "incentiveContractMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ITDaoWithIncentiveContractMint__factory = /** @class */ (function () {
    function ITDaoWithIncentiveContractMint__factory() {
    }
    ITDaoWithIncentiveContractMint__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ITDaoWithIncentiveContractMint__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ITDaoWithIncentiveContractMint__factory.abi = _abi;
    return ITDaoWithIncentiveContractMint__factory;
}());
export { ITDaoWithIncentiveContractMint__factory };
