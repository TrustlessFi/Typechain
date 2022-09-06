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
        name: "callsIntoNoDelegateCallFunction",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "canBeDelegateCalled",
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
    {
        inputs: [],
        name: "cannotBeDelegateCalled",
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
    {
        inputs: [],
        name: "getGasCostOfCanBeDelegateCalled",
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
    {
        inputs: [],
        name: "getGasCostOfCannotBeDelegateCalled",
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
var _bytecode = "0x60a06040523480156100115760006000fd5b505b3073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b610050565b6080516102e861006b60003960006101a401526102e86000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063423ecb0511610051578063423ecb05146100ae57806364270164146100cc578063f45f416e146100d65761006c565b80633045a6e0146100725780633c7c8dd0146100905761006c565b60006000fd5b61007a6100f4565b6040516100879190610216565b60405180910390f35b610098610122565b6040516100a59190610216565b60405180910390f35b6100b6610150565b6040516100c39190610216565b60405180910390f35b6100d4610178565b005b6100de610189565b6040516100eb9190610216565b60405180910390f35b600060005a905061010961018963ffffffff16565b505a816101169190610228565b91505061011f56505b90565b600060005a905061013761015063ffffffff16565b505a816101449190610228565b91505061014d56505b90565b60006101606101a263ffffffff16565b60054261016d919061026d565b9050610174565b5b90565b61018661020063ffffffff16565b5b565b6000600542610198919061026d565b905061019f565b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415156101fd5760006000fd5b5b565b61020e6101a263ffffffff16565b5b5b566102b1565b60006020820190508282525b92915050565b6000828203905081811115610266577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5b92915050565b60008215156102a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565bfea26469706673582212200919bfa014c421e3c411d551ade84a3fd22ed83be3d41fca894bf9ee7db8213064736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var NoDelegateCallTest__factory = /** @class */ (function (_super) {
    __extends(NoDelegateCallTest__factory, _super);
    function NoDelegateCallTest__factory() {
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
    NoDelegateCallTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    NoDelegateCallTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    NoDelegateCallTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    NoDelegateCallTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    NoDelegateCallTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    NoDelegateCallTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    NoDelegateCallTest__factory.bytecode = _bytecode;
    NoDelegateCallTest__factory.abi = _abi;
    return NoDelegateCallTest__factory;
}(ContractFactory));
export { NoDelegateCallTest__factory };
