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
        name: "parameters",
        outputs: [
            {
                internalType: "address",
                name: "factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
            },
            {
                internalType: "int24",
                name: "tickSpacing",
                type: "int24",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610188806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063890357301461003657610030565b60006000fd5b61003e610058565b60405161004f9594939291906100ff565b60405180910390f35b60006000508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900462ffffff16908060020160179054906101000a900460020b90508556610151565b600060a08201905073ffffffffffffffffffffffffffffffffffffffff8088168352808716602084015280861660408401525062ffffff841660608301528260020b60808301525b9695505050505050565bfea264697066735822122053b74d2a23f0181295507fd904efff84beb0f68a75d6d398f1c2d79f358c5df264736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var UniswapV3PoolDeployer__factory = /** @class */ (function (_super) {
    __extends(UniswapV3PoolDeployer__factory, _super);
    function UniswapV3PoolDeployer__factory() {
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
    UniswapV3PoolDeployer__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    UniswapV3PoolDeployer__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    UniswapV3PoolDeployer__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    UniswapV3PoolDeployer__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    UniswapV3PoolDeployer__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    UniswapV3PoolDeployer__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    UniswapV3PoolDeployer__factory.bytecode = _bytecode;
    UniswapV3PoolDeployer__factory.abi = _abi;
    return UniswapV3PoolDeployer__factory;
}(ContractFactory));
export { UniswapV3PoolDeployer__factory };
