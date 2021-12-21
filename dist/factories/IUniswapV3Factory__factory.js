/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
            {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
            },
        ],
        name: "getPool",
        outputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IUniswapV3Factory__factory = /** @class */ (function () {
    function IUniswapV3Factory__factory() {
    }
    IUniswapV3Factory__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IUniswapV3Factory__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IUniswapV3Factory__factory.abi = _abi;
    return IUniswapV3Factory__factory;
}());
export { IUniswapV3Factory__factory };
