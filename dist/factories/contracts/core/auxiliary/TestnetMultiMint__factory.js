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
                internalType: "contract TruEth",
                name: "_truEth",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "truEthMintCount",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "targetAddresses",
                type: "address[]",
            },
        ],
        name: "multiMint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "truEth",
        outputs: [
            {
                internalType: "contract TruEth",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156100115760006000fd5b5060405161072838038061072883398181016040528101906100339190610076565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b506100af566100ae565b6000602082840312156100895760006000fd5b81516001600160a01b038116811415156100a35760006000fd5b809150505b92915050565b5b6080516106516100d760003960008181607d01528181610159015261028801526106516000f3fe60806040526004361061002d5760003560e01c806355edb15314610033578063d2f827eb1461004f5761002d565b60006000fd5b61004d60048036038101906100489190610310565b61007b565b005b34801561005c5760006000fd5b50610065610286565b6040516100729190610413565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663aa271e1a336040518263ffffffff1660e01b81526004016100d4919061043b565b602060405180830381865afa1580156100f2573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101169190610463565b1515610157576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014e90610494565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634e6cca8f83836040518363ffffffff1660e01b81526004016101b29291906104d3565b600060405180830381600087803b1580156101cd5760006000fd5b505af11580156101e2573d600060003e3d6000fd5b5050505060008151346101f59190610540565b90506000600090505b825181101561027f57828181518110151561021c5761021b610584565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561026a573d600060003e3d6000fd5b505b8080610277906105b5565b9150506101fe565b50505b5050565b7f0000000000000000000000000000000000000000000000000000000000000000815661061a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b60008135905073ffffffffffffffffffffffffffffffffffffffff81168114151561030a5760006000fd5b5b919050565b60006000604083850312156103255760006000fd5b8235915060208084013567ffffffffffffffff808211156103465760006000fd5b818601915086601f830112151561035d5760006000fd5b8135818111156103705761036f6102ae565b5b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156103b4576103b36102ae565b5b8060405250809350828152858101935085828601019250898311156103d95760006000fd5b85850194505b82851015610402576103f0856102df565b845285840193505b85850194506103df565b8096505050505050505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156104765760006000fd5b8151801515811415156104895760006000fd5b809150505b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156105305773ffffffffffffffffffffffffffffffffffffffff8551168352838301925083850194505b6001810190506104f8565b50508093505050505b9392505050565b6000821515610578577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561060e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6001820190505b919050565bfea2646970667358221220c554a61b624ac9092d69a4d9363938874562f8d3679c0247af71e99e67f3138364736f6c634300080c0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestnetMultiMint__factory = /** @class */ (function (_super) {
    __extends(TestnetMultiMint__factory, _super);
    function TestnetMultiMint__factory() {
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
    TestnetMultiMint__factory.prototype.deploy = function (_truEth, overrides) {
        return _super.prototype.deploy.call(this, _truEth, overrides || {});
    };
    TestnetMultiMint__factory.prototype.getDeployTransaction = function (_truEth, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _truEth, overrides || {});
    };
    TestnetMultiMint__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestnetMultiMint__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestnetMultiMint__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TestnetMultiMint__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TestnetMultiMint__factory.bytecode = _bytecode;
    TestnetMultiMint__factory.abi = _abi;
    return TestnetMultiMint__factory;
}(ContractFactory));
export { TestnetMultiMint__factory };
