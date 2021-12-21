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
                internalType: "uint64",
                name: "positionID",
                type: "uint64",
            },
        ],
        name: "getTokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610195806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80632bf2bc8f1461003657610030565b60006000fd5b610050600480360381019061004b91906100b1565b610066565b60405161005d91906100e6565b60405180910390f35b60606040518060400160405280600881526020017f746573742075726900000000000000000000000000000000000000000000000081526020015090506100a8565b9190505661015e565b6000602082840312156100c2578081fd5b813567ffffffffffffffff8116811415156100db578182fd5b809150505b92915050565b6000602080835283518082850152825b8181101561011657828187010151604082870101525b82810190506100f6565b818111156101275783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565bfea2646970667358221220d69b53e7fb607c906c6a38144907006d080c3c3009f85fcf06aa9bacf138014864736f6c63430008040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockTokenDescriptor__factory = /** @class */ (function (_super) {
    __extends(MockTokenDescriptor__factory, _super);
    function MockTokenDescriptor__factory() {
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
    MockTokenDescriptor__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockTokenDescriptor__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockTokenDescriptor__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockTokenDescriptor__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockTokenDescriptor__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockTokenDescriptor__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockTokenDescriptor__factory.bytecode = _bytecode;
    MockTokenDescriptor__factory.abi = _abi;
    return MockTokenDescriptor__factory;
}(ContractFactory));
export { MockTokenDescriptor__factory };
