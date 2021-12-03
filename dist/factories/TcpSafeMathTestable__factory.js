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
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "_div",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "_mul",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "c",
                type: "uint256",
            },
        ],
        name: "_mulDiv",
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
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610323806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c806329f5278a1461004c57806340248bc3146100a35780634bad3327146100f057610046565b60006000fd5b61008d600480360360608110156100635760006000fd5b8101908080359060200190929190803590602001909291908035906020019092919050505061013d565b6040518082815260200191505060405180910390f35b6100da600480360360408110156100ba5760006000fd5b810190808035906020019092919080359060200190929190505050610160565b6040518082815260200191505060405180910390f35b610127600480360360408110156101075760006000fd5b810190808035906020019092919080359060200190929190505050610180565b6040518082815260200191505060405180910390f35b60006101548383866101a09092919063ffffffff16565b905080505b9392505050565b600061017582846102a190919063ffffffff16565b905080505b92915050565b600061019582846102c790919063ffffffff16565b905080505b92915050565b60006000600060001985870985870292508281108382030391505060008114156101e3576000841115156101d45760006000fd5b8382049250829250505061029a565b80841115156101f25760006000fd5b600084868809905082811182039150808303925060008586600003169050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550859550505050505061029a5650505050505b9392505050565b60006102bc83670de0b6b3a7640000846101a063ffffffff16565b905080505b92915050565b60006102e28383670de0b6b3a76400006101a063ffffffff16565b905080505b9291505056fea264697066735822122045f3a8ca2d74c444dd10985c59293a579a03e67f9e4746505cd352bb8a51b52e64736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TcpSafeMathTestable__factory = /** @class */ (function (_super) {
    __extends(TcpSafeMathTestable__factory, _super);
    function TcpSafeMathTestable__factory() {
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
    TcpSafeMathTestable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TcpSafeMathTestable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TcpSafeMathTestable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TcpSafeMathTestable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TcpSafeMathTestable__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TcpSafeMathTestable__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TcpSafeMathTestable__factory.bytecode = _bytecode;
    TcpSafeMathTestable__factory.abi = _abi;
    return TcpSafeMathTestable__factory;
}(ContractFactory));
export { TcpSafeMathTestable__factory };