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
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "_sqrt",
        outputs: [
            {
                internalType: "uint256",
                name: "r",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b61012c806100266000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80636a263f0214603257602c565b60006000fd5b605c6004803603602081101560475760006000fd5b81019080803590602001909291905050506072565b6040518082815260200191505060405180910390f35b6000608182608b63ffffffff16565b905080505b919050565b6000600382111560df5781905080506000600160028481151560a957fe5b040190505b8181101560da578091508150600281828581151560c757fe5b040181151560d157fe5b049050805060ae565b5060f0565b60008214151560ef576001905080505b5b5b91905056fea26469706673582212203e081b0b57354c0439652c945d1fc6606d06496f207a72cdad84c733642d532064736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MathTestable__factory = /** @class */ (function (_super) {
    __extends(MathTestable__factory, _super);
    function MathTestable__factory() {
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
    MathTestable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MathTestable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MathTestable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MathTestable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MathTestable__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MathTestable__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MathTestable__factory.bytecode = _bytecode;
    MathTestable__factory.abi = _abi;
    return MathTestable__factory;
}(ContractFactory));
export { MathTestable__factory };