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
                name: "",
                type: "address",
            },
        ],
        name: "allocations",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "",
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
        name: "incentiveAllocation",
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
                name: "allocatee",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "count",
                type: "uint128",
            },
        ],
        name: "increaseAllocation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        name: "lockTokensIntoDao",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610519806100266000396000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063628e2e8511610051578063628e2e85146100c0578063a9778eb0146100dc578063ee5f1ee4146100f85761006c565b8063262406de1461007257806352a9039c146100905761006c565b60006000fd5b61007a610114565b60405161008791906103f8565b60405180910390f35b6100aa60048036038101906100a59190610352565b610122565b6040516100b7919061045f565b60405180910390f35b6100da60048036038101906100d591906103a9565b610156565b005b6100f660048036038101906100f19190610375565b610196565b005b610112600480360381019061010d9190610375565b6101d5565b005b60006000905061011f565b90565b600060005060205280600052604060002060009150909054906101000a90046fffffffffffffffffffffffffffffffff1681565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018890610420565b60405180910390fd5b505050565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c890610420565b60405180910390fd5b5050565b61025881600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166102d590919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b5050565b600081836102e39190610483565b90506102ea565b92915050566104e2565b60008135905073ffffffffffffffffffffffffffffffffffffffff81168114151561031f5760006000fd5b5b919050565b6000813590506fffffffffffffffffffffffffffffffff81168114151561034c5760006000fd5b5b919050565b600060208284031215610363578081fd5b61036c826102f4565b90505b92915050565b6000600060408385031215610388578081fd5b610391836102f4565b915061039f60208401610325565b90505b9250929050565b600060006000606084860312156103be578081fd5b6103c7846102f4565b92506103d560208501610325565b9150604084013560ff8116811415156103ec578182fd5b809150505b9250925092565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600f60208201527f4e6f7420496d706c656d656e7465640000000000000000000000000000000000604082015260006060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156104d3577f4e487b710000000000000000000000000000000000000000000000000000000084526011600452602484fd5b80820193505050505b92915050565bfea2646970667358221220510d07e8b1db461d9001ac4ae37a760790a5b841c640a2346b8259994192f3b964736f6c63430008040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockTcpAllocation__factory = /** @class */ (function (_super) {
    __extends(MockTcpAllocation__factory, _super);
    function MockTcpAllocation__factory() {
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
    MockTcpAllocation__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockTcpAllocation__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockTcpAllocation__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockTcpAllocation__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockTcpAllocation__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MockTcpAllocation__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MockTcpAllocation__factory.bytecode = _bytecode;
    MockTcpAllocation__factory.abi = _abi;
    return MockTcpAllocation__factory;
}(ContractFactory));
export { MockTcpAllocation__factory };
