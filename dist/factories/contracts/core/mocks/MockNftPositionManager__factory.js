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
                internalType: "address",
                name: "_weth",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "WETH9",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156100115760006000fd5b506040516101a13803806101a183398181016040528101906100339190610076565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b506100af566100ae565b6000602082840312156100895760006000fd5b81516001600160a01b038116811415156100a35760006000fd5b809150505b92915050565b5b60805160da6100c760003960006050015260da6000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80634aa4a4fc14603257602c565b60006000fd5b6038604c565b60405160439190607b565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000090506075565b905660a3565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565bfea264697066735822122075058a8c008357e628f94127d5e68ed446f5908d3861f92329d7dd5f85cc21ad64736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockNftPositionManager__factory = /** @class */ (function (_super) {
    __extends(MockNftPositionManager__factory, _super);
    function MockNftPositionManager__factory() {
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
    MockNftPositionManager__factory.prototype.deploy = function (_weth, overrides) {
        return _super.prototype.deploy.call(this, _weth, overrides || {});
    };
    MockNftPositionManager__factory.prototype.getDeployTransaction = function (_weth, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _weth, overrides || {});
    };
    MockNftPositionManager__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockNftPositionManager__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockNftPositionManager__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockNftPositionManager__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockNftPositionManager__factory.bytecode = _bytecode;
    MockNftPositionManager__factory.abi = _abi;
    return MockNftPositionManager__factory;
}(ContractFactory));
export { MockNftPositionManager__factory };
