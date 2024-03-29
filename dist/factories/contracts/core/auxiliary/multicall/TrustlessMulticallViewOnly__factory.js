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
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct TrustlessMulticall.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "all",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "success",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "returnData",
                        type: "bytes",
                    },
                ],
                internalType: "struct TrustlessMulticall.Result[]",
                name: "results",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getChainId",
        outputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockCoinbase",
        outputs: [
            {
                internalType: "address",
                name: "blockCoinbase",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockDifficulty",
        outputs: [
            {
                internalType: "uint256",
                name: "blockDifficulty",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockGasLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "blockGasLimit",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "blockTimestamp",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "getEthBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "ethBalances",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b6104d4806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c806372425d9d116100775780638f1316d51161005c5780638f1316d5146101ad578063a8b0574e146101de578063ee82ac5e146101fc576100c3565b806372425d9d1461017157806386d516e81461018f576100c3565b80633408e470116100a85780633408e4701461010557806342cbb15c146101235780634d2301cc14610141576100c3565b80630f28c97d146100c957806327e86d6e146100e7576100c3565b60006000fd5b6100d161022c565b6040516100de9190610276565b60405180910390f35b6100ef610232565b6040516100fc9190610288565b60405180910390f35b61010d610238565b60405161011a9190610276565b60405180910390f35b61012b61023e565b6040516101389190610276565b60405180910390f35b61015b6004803603810190610156919061029a565b610244565b6040516101689190610276565b60405180910390f35b61017961024c565b6040516101869190610276565b60405180910390f35b610197610252565b6040516101a49190610276565b60405180910390f35b6101c760048036038101906101c291906102df565b610258565b6040516101d592919061035e565b60405180910390f35b6101e6610264565b6040516101f39190610457565b60405180910390f35b6102166004803603810190610211919061047f565b61026a565b6040516102239190610288565b60405180910390f35b60005b90565b60005b90565b60005b90565b60005b90565b60005b919050565b60005b90565b60005b90565b600060605b9250929050565b60005b90565b60005b9190505661049d565b60006020820190508282525b92915050565b60006020820190508282525b92915050565b6000602082840312156102ad5760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811415156102d45760006000fd5b809150505b92915050565b60006000602083850312156102f45760006000fd5b823567ffffffffffffffff8082111561030d5760006000fd5b818501915085601f83011215156103245760006000fd5b8135818111156103345760006000fd5b8660208260051b850101111561034a5760006000fd5b6020830194508093505050505b9250929050565b6000604080830185845260208281860152818651808452606093508387019150838160051b8801018389016000805b84811015610443577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08b8503018652825180511515855287810151905089888601528051808b870152835b818110156103f7578981840101518b82890101525b89810190506103d8565b50838a8288010152897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011687010195505050868301925086860195505b60018101905061038d565b5050508096505050505050505b9392505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156104925760006000fd5b813590505b92915050565bfea26469706673582212203e7a2d64e5dfe36dd623e1f5d76046498ea87fa5d45362f72e1d7de26aaf982264736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TrustlessMulticallViewOnly__factory = /** @class */ (function (_super) {
    __extends(TrustlessMulticallViewOnly__factory, _super);
    function TrustlessMulticallViewOnly__factory() {
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
    TrustlessMulticallViewOnly__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TrustlessMulticallViewOnly__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TrustlessMulticallViewOnly__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TrustlessMulticallViewOnly__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TrustlessMulticallViewOnly__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TrustlessMulticallViewOnly__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TrustlessMulticallViewOnly__factory.bytecode = _bytecode;
    TrustlessMulticallViewOnly__factory.abi = _abi;
    return TrustlessMulticallViewOnly__factory;
}(ContractFactory));
export { TrustlessMulticallViewOnly__factory };
