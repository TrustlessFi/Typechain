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
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "swap0ForExact1",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "swap1ForExact0",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount0In",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "swapExact0For1",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount1In",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
        ],
        name: "swapExact1For0",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amount0Delta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "amount1Delta",
                type: "int256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV3SwapCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610d32806100266000396000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063e2be910911610051578063e2be910914610190578063f603482c1461021f578063fa461e33146102ae5761006c565b80636dfc0ddb14610072578063bac7bf78146101015761006c565b60006000fd5b6100ff600480360360808110156100895760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610341565b005b61018e600480360360808110156101185760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104df565b005b61021d600480360360808110156101a75760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610680565b005b6102ac600480360360808110156102365760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061081e565b005b61033f600480360360608110156102c55760006000fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156102f75760006000fd5b82018360208201111561030a5760006000fd5b8035906020019184600183028401116401000000008311171561032d5760006000fd5b909192939090919293905050506109bf565b005b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600161037187610cc0909063ffffffff16565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561043e5780820151818401525b602081019050610422565b50505050905090810190601f16801561046b5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b15801561048f5760006000fd5b505af11580156104a4573d600060003e3d6000fd5b505050506040513d60408110156104bb5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600161050f87610cc0909063ffffffff16565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105df5780820151818401525b6020810190506105c3565b50505050905090810190601f16801561060c5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156106305760006000fd5b505af1158015610645573d600060003e3d6000fd5b505050506040513d604081101561065c5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360006106b087610cc0909063ffffffff16565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561077d5780820151818401525b602081019050610761565b50505050905090810190601f1680156107aa5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156107ce5760006000fd5b505af11580156107e3573d600060003e3d6000fd5b505050506040513d60408110156107fa5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600061084e87610cc0909063ffffffff16565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561091e5780820151818401525b602081019050610902565b50505050905090810190601f16801561094b5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b15801561096f5760006000fd5b505af1158015610984573d600060003e3d6000fd5b505050506040513d604081101561099b5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b6000828260208110156109d25760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505090506000851315610b5a573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610a4b5760006000fd5b505afa158015610a60573d600060003e3d6000fd5b505050506040513d6020811015610a775760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610b175760006000fd5b505af1158015610b2c573d600060003e3d6000fd5b505050506040513d6020811015610b435760006000fd5b810190808051906020019092919050505050610cb8565b600084131515610b6657fe5b3373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610bad5760006000fd5b505afa158015610bc2573d600060003e3d6000fd5b505050506040513d6020811015610bd95760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610c795760006000fd5b505af1158015610c8e573d600060003e3d6000fd5b505050506040513d6020811015610ca55760006000fd5b8101908080519060200190929190505050505b505b50505050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515610cf15760006000fd5b81905080505b91905056fea26469706673582212205f0e369e93a313c18a5b443dab688b49351978aa5bdcac54bcafc042b835f80464736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestUniswapV3Callee__factory = /** @class */ (function (_super) {
    __extends(TestUniswapV3Callee__factory, _super);
    function TestUniswapV3Callee__factory() {
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
    TestUniswapV3Callee__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestUniswapV3Callee__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestUniswapV3Callee__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestUniswapV3Callee__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestUniswapV3Callee__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TestUniswapV3Callee__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TestUniswapV3Callee__factory.bytecode = _bytecode;
    TestUniswapV3Callee__factory.abi = _abi;
    return TestUniswapV3Callee__factory;
}(ContractFactory));
export { TestUniswapV3Callee__factory };
