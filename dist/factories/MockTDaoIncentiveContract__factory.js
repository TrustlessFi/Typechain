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
                internalType: "contract ITDaoWithIncentiveContractMint",
                name: "_tDao",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b5060405161020b38038061020b833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061008f565b61016d8061009e6000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c806340c10f191461003657610030565b60006000fd5b6100836004803603604081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610085565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639383ac4483836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156101195760006000fd5b505af115801561012e573d600060003e3d6000fd5b505050505b505056fea2646970667358221220f2593e92757348df9c7f0d7e909743e8d01232e83730ffd8fab58c265356f9b464736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockTDaoIncentiveContract__factory = /** @class */ (function (_super) {
    __extends(MockTDaoIncentiveContract__factory, _super);
    function MockTDaoIncentiveContract__factory() {
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
    MockTDaoIncentiveContract__factory.prototype.deploy = function (_tDao, overrides) {
        return _super.prototype.deploy.call(this, _tDao, overrides || {});
    };
    MockTDaoIncentiveContract__factory.prototype.getDeployTransaction = function (_tDao, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _tDao, overrides || {});
    };
    MockTDaoIncentiveContract__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockTDaoIncentiveContract__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockTDaoIncentiveContract__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockTDaoIncentiveContract__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockTDaoIncentiveContract__factory.bytecode = _bytecode;
    MockTDaoIncentiveContract__factory.abi = _abi;
    return MockTDaoIncentiveContract__factory;
}(ContractFactory));
export { MockTDaoIncentiveContract__factory };