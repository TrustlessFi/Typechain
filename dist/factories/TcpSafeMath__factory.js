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
        inputs: [],
        name: "ONE",
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
var _bytecode = "0x609a610027600b82828239805160001a6073141515601957fe5b30600052607381538281f350fe730000000000000000000000000000000000000000301460806040526004361060365760003560e01c8063c2ee3a0814603c576036565b60006000fd5b60426058565b6040518082815260200191505060405180910390f35b670de0b6b3a76400008156fea26469706673582212204e8d0bcb5c2efd27883ff03ad25bd9389e41d970f27078b0fce3764ec54781c064736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TcpSafeMath__factory = /** @class */ (function (_super) {
    __extends(TcpSafeMath__factory, _super);
    function TcpSafeMath__factory() {
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
    TcpSafeMath__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TcpSafeMath__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TcpSafeMath__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TcpSafeMath__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TcpSafeMath__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TcpSafeMath__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TcpSafeMath__factory.bytecode = _bytecode;
    TcpSafeMath__factory.abi = _abi;
    return TcpSafeMath__factory;
}(ContractFactory));
export { TcpSafeMath__factory };