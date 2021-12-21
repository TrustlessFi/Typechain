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
                        internalType: "contract ITcpAllocation",
                        name: "TcpAllocation",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "Guardian",
                        type: "address",
                    },
                ],
                internalType: "struct IncentiveAllocation.ConstructorParams",
                name: "params",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "abdicate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
        ],
        name: "getTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "guardian",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
            {
                internalType: "uint8",
                name: "lockDurationMonths",
                type: "uint8",
            },
        ],
        name: "lockTokensIntoDao",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "tcpAllocation",
        outputs: [
            {
                internalType: "contract ITcpAllocation",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156100115760006000fd5b506040516107a83803806107a8833981810160405281019061003391906100c2565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061015256610151565b6000604082840312156100d3578081fd5b604051604081018181106001600160401b038211171561010157634e487b7160e01b83526041600452602483fd5b8060405250825161011181610135565b80825250602083015161012381610135565b80602083015250809150505b92915050565b6001600160a01b0381168114151561014d5760006000fd5b505b565b5b60805160601c61062a61017e600039600081816101ff015281816102f6015261038b015261062a6000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063628e2e8511610051578063628e2e851461009a578063a9778eb0146100b6578063f00000ee146100d25761006c565b8063314e99a214610072578063452a93201461007c5761006c565b60006000fd5b61007a6100f0565b005b610084610178565b60405161009191906104d8565b60405180910390f35b6100b460048036038101906100af9190610489565b61019e565b005b6100d060048036038101906100cb9190610455565b610295565b005b6100da610389565b6040516100e7919061058c565b60405180910390f35b61014f600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101fd600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663628e2e858484846040518463ffffffff1660e01b815260040161025a93929190610541565b600060405180830381600087803b1580156102755760006000fd5b505af115801561028a573d600060003e3d6000fd5b505050505b5b505050565b6102f4600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9778eb083836040518363ffffffff1660e01b815260040161034f929190610500565b600060405180830381600087803b15801561036a5760006000fd5b505af115801561037f573d600060003e3d6000fd5b505050505b5b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b8015156103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e6906105b4565b60405180910390fd5b5b50566105f3565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156104225760006000fd5b5b919050565b6000813590506fffffffffffffffffffffffffffffffff81168114151561044f5760006000fd5b5b919050565b6000600060408385031215610468578182fd5b610471836103f7565b915061047f60208401610428565b90505b9250929050565b6000600060006060848603121561049e578081fd5b6104a7846103f7565b92506104b560208501610428565b9150604084013560ff8116811415156104cc578182fd5b809150505b9250925092565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff8416602083015260ff831660408301525b949350505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565bfea2646970667358221220a0a9ac96b30022f88d00fbff73f2a56f5671df8d93892f9277bb5282be1ad14064736f6c63430008040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var IncentiveAllocation__factory = /** @class */ (function (_super) {
    __extends(IncentiveAllocation__factory, _super);
    function IncentiveAllocation__factory() {
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
    IncentiveAllocation__factory.prototype.deploy = function (params, overrides) {
        return _super.prototype.deploy.call(this, params, overrides || {});
    };
    IncentiveAllocation__factory.prototype.getDeployTransaction = function (params, overrides) {
        return _super.prototype.getDeployTransaction.call(this, params, overrides || {});
    };
    IncentiveAllocation__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    IncentiveAllocation__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    IncentiveAllocation__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IncentiveAllocation__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IncentiveAllocation__factory.bytecode = _bytecode;
    IncentiveAllocation__factory.abi = _abi;
    return IncentiveAllocation__factory;
}(ContractFactory));
export { IncentiveAllocation__factory };
