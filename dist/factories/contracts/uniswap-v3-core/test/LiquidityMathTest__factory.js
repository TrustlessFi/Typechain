var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "addDelta",
        outputs: [
            {
                internalType: "uint128",
                name: "z",
                type: "uint128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "getGasCostOfAddDelta",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b61045b806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063402d44fb14610041578063cf41632f146100715761003b565b60006000fd5b61005b60048036038101906100569190610208565b6100a1565b6040516100689190610267565b60405180910390f35b61008b60048036038101906100869190610208565b6100c0565b604051610098919061028b565b60405180910390f35b60006100b383836100f363ffffffff16565b90506100ba565b92915050565b600060005a90506100d784846100f363ffffffff16565b505a816100e491906102ce565b9150506100ed56505b92915050565b6000600082600f0b121561018557826fffffffffffffffffffffffffffffffff168261011e906102ed565b846101299190610331565b9150816fffffffffffffffffffffffffffffffff16101515610180576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101779061036b565b60405180910390fd5b6101fd565b826fffffffffffffffffffffffffffffffff1682846101a491906103aa565b9150816fffffffffffffffffffffffffffffffff16101515156101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f3906103e5565b60405180910390fd5b5b5b9291505056610424565b600060006040838503121561021d5760006000fd5b82356fffffffffffffffffffffffffffffffff8116811415156102405760006000fd5b80925050602083013580600f0b8114151561025b5760006000fd5b809150505b9250929050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828210156102e1576102e061029d565b5b82820390505b92915050565b600081600f0b7fffffffffffffffffffffffffffffffff800000000000000000000000000000008114156103245761032361029d565b5b806000039150505b919050565b60006fffffffffffffffffffffffffffffffff80831681851691508181101561035d5761035c61029d565b5b818103925050505b92915050565b60208152600260208201527f4c53000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156103d6576103d561029d565b5b80820193505050505b92915050565b60208152600260208201527f4c41000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565bfea2646970667358221220f97af364166c45478f21bdf421ec3e0fab72b0f118fc6a0c3c312673d97a445c64736f6c634300080c0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LiquidityMathTest__factory = /** @class */ (function (_super) {
    __extends(LiquidityMathTest__factory, _super);
    function LiquidityMathTest__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    LiquidityMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LiquidityMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LiquidityMathTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    LiquidityMathTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    LiquidityMathTest__factory.bytecode = _bytecode;
    LiquidityMathTest__factory.abi = _abi;
    return LiquidityMathTest__factory;
}(ContractFactory));
export { LiquidityMathTest__factory };