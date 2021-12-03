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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fee0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fee1",
                type: "uint256",
            },
        ],
        name: "FlashCallback",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0Owed",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1Owed",
                type: "uint256",
            },
        ],
        name: "MintCallback",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "int256",
                name: "amount0Delta",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "amount1Delta",
                type: "int256",
            },
        ],
        name: "SwapCallback",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "pay0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "pay1",
                type: "uint256",
            },
        ],
        name: "flash",
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
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "mint",
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
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "swapToHigherSqrtPrice",
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
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "swapToLowerSqrtPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fee0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee1",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV3FlashCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount0Owed",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1Owed",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV3MintCallback",
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
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b611e0d806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100ce5760003560e01c8063bac7bf7811610082578063e9cbafb01161005c578063e9cbafb014610546578063f603482c146105d9578063fa461e3314610668576100ce565b8063bac7bf7814610395578063d348799714610424578063e2be9109146104b7576100ce565b80636dfc0ddb116100b35780636dfc0ddb146101e65780637b4f5327146102755780639e77b80514610310576100ce565b8063034b0f8f146100d45780632ec20bf914610161576100ce565b60006000fd5b61015f600480360360c08110156100eb5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506106fb565b005b6101e4600480360360608110156101785760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084a565b005b610273600480360360808110156101fd5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f7565b005b61030e600480360360a081101561028c5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560020b9060200190929190803560020b906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190505050610b95565b005b610393600480360360608110156103275760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d23565b005b610422600480360360808110156103ac5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed0565b005b6104b56004803603606081101561043b5760006000fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561046d5760006000fd5b8201836020820111156104805760006000fd5b803590602001918460018302840111640100000000831117156104a35760006000fd5b90919293909091929390505050611071565b005b610544600480360360808110156104ce5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113aa565b005b6105d76004803603606081101561055d5760006000fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561058f5760006000fd5b8201836020820111156105a25760006000fd5b803590602001918460018302840111640100000000831117156105c55760006000fd5b90919293909091929390505050611548565b005b610666600480360360808110156105f05760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061189f565b005b6106f96004803603606081101561067f5760006000fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156106b15760006000fd5b8201836020820111156106c45760006000fd5b803590602001918460018302840111640100000000831117156106e75760006000fd5b90919293909091929390505050611a40565b005b8573ffffffffffffffffffffffffffffffffffffffff1663490e6cbc868686338787604051602001808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040516020818303038152906040526040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107d85780820151818401525b6020810190506107bc565b50505050905090810190601f1680156108055780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156108285760006000fd5b505af115801561083d573d600060003e3d6000fd5b505050505b505050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663128acb088260017f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109575780820151818401525b60208101905061093b565b50505050905090810190601f1680156109845780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156109a85760006000fd5b505af11580156109bd573d600060003e3d6000fd5b505050506040513d60408110156109d45760006000fd5b81019080805190602001909291908051906020019092919050505050505b505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb08836001610a2787611d9b909063ffffffff16565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610af45780820151818401525b602081019050610ad8565b50505050905090810190601f168015610b215780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b158015610b455760006000fd5b505af1158015610b5a573d600060003e3d6000fd5b505050506040513d6040811015610b715760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b8473ffffffffffffffffffffffffffffffffffffffff16633c8a7d8d8585858533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018560020b81526020018460020b8152602001836fffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c815780820151818401525b602081019050610c65565b50505050905090810190601f168015610cae5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b158015610cd25760006000fd5b505af1158015610ce7573d600060003e3d6000fd5b505050506040513d6040811015610cfe5760006000fd5b81019080805190602001909291908051906020019092919050505050505b5050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663128acb088260007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e305780820151818401525b602081019050610e14565b50505050905090810190601f168015610e5d5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b158015610e815760006000fd5b505af1158015610e96573d600060003e3d6000fd5b505050506040513d6040811015610ead5760006000fd5b81019080805190602001909291908051906020019092919050505050505b505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb08836001610f0087611d9b909063ffffffff16565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fd05780820151818401525b602081019050610fb4565b50505050905090810190601f168015610ffd5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156110215760006000fd5b505af1158015611036573d600060003e3d6000fd5b505050506040513d604081101561104d5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b6000828260208110156110845760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505090507fa0968be00566083701c9ef671c169d7fb05ac8907de4ca17185de74ccbb694d48585604051808381526020018281526020019250505060405180910390a16000851115611247573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561113c5760006000fd5b505afa158015611151573d600060003e3d6000fd5b505050506040513d60208110156111685760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156112085760006000fd5b505af115801561121d573d600060003e3d6000fd5b505050506040513d60208110156112345760006000fd5b8101908080519060200190929190505050505b60008411156113a2573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156112975760006000fd5b505afa1580156112ac573d600060003e3d6000fd5b505050506040513d60208110156112c35760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156113635760006000fd5b505af1158015611378573d600060003e3d6000fd5b505050506040513d602081101561138f5760006000fd5b8101908080519060200190929190505050505b505b50505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360006113da87611d9b909063ffffffff16565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114a75780820151818401525b60208101905061148b565b50505050905090810190601f1680156114d45780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156114f85760006000fd5b505af115801561150d573d600060003e3d6000fd5b505050506040513d60408110156115245760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b7f2b0391b4fa408cfe47abd1977d72985695b2e5ebd3175f55be25f2c68c5df21b8484604051808381526020018281526020019250505060405180910390a16000600060008484606081101561159e5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050925092509250600082111561173a573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561162f5760006000fd5b505afa158015611644573d600060003e3d6000fd5b505050506040513d602081101561165b5760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156116fb5760006000fd5b505af1158015611710573d600060003e3d6000fd5b505050506040513d60208110156117275760006000fd5b8101908080519060200190929190505050505b6000811115611895573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561178a5760006000fd5b505afa15801561179f573d600060003e3d6000fd5b505050506040513d60208110156117b65760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156118565760006000fd5b505af115801561186b573d600060003e3d6000fd5b505050506040513d60208110156118825760006000fd5b8101908080519060200190929190505050505b5050505b50505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360006118cf87611d9b909063ffffffff16565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561199f5780820151818401525b602081019050611983565b50505050905090810190601f1680156119cc5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156119f05760006000fd5b505af1158015611a05573d600060003e3d6000fd5b505050506040513d6040811015611a1c5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050565b600082826020811015611a535760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505090507fd48241df4a75e663b29e55f9506b31f77ed0f48cfe7e7612d1163144995dc1ca8585604051808381526020018281526020019250505060405180910390a16000851315611c1a573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015611b0b5760006000fd5b505afa158015611b20573d600060003e3d6000fd5b505050506040513d6020811015611b375760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611bd75760006000fd5b505af1158015611bec573d600060003e3d6000fd5b505050506040513d6020811015611c035760006000fd5b810190808051906020019092919050505050611d93565b6000841315611d79573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015611c6a5760006000fd5b505afa158015611c7f573d600060003e3d6000fd5b505050506040513d6020811015611c965760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611d365760006000fd5b505af1158015611d4b573d600060003e3d6000fd5b505050506040513d6020811015611d625760006000fd5b810190808051906020019092919050505050611d92565b600085148015611d895750600084145b1515611d9157fe5b5b5b505b50505050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515611dcc5760006000fd5b81905080505b91905056fea2646970667358221220df6dc139e2597586725e24297d4a42a6dd4634460c9b629ad847aba2eac1c9a864736f6c63430007060033";
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