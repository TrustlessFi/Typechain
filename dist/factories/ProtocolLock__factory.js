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
                        internalType: "contract IGovernor",
                        name: "Governor",
                        type: "address",
                    },
                ],
                internalType: "struct IProtocolLock.ConstructorParams",
                name: "params",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address",
            },
        ],
        name: "CallerAuthorized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address",
            },
        ],
        name: "CallerUnauthorized",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "caller",
                type: "address",
            },
        ],
        name: "authorizeCaller",
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
        ],
        name: "authorizedCaller",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "enter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "governor",
        outputs: [
            {
                internalType: "contract IGovernor",
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
                name: "caller",
                type: "address",
            },
        ],
        name: "unauthorizeCaller",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60a06040526001600160005090905534801561001b5760006000fd5b506040516107ad3803806107ad833981810160405281019061003d9190610087565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100f3566100f2565b600060208284031215610098578081fd5b604051602081018181106001600160401b03821117156100c657634e487b7160e01b83526041600452602483fd5b806040525082516001600160a01b038116811415156100e3578283fd5b80825250809150505b92915050565b5b60805160601c61068e61011f60003960008181610119015281816101400152610240015261068e6000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c806398f6ef121161005157806398f6ef12146100d3578063e97dcb6214610103578063e9fad8ee1461010d57610077565b80630c340a241461007d5780632c388d5d1461009b5780634ac8c5ae146100b757610077565b60006000fd5b610085610117565b6040516100929190610572565b60405180910390f35b6100b560048036038101906100b0919061051d565b61013b565b005b6100d160048036038101906100cc919061051d565b61023b565b005b6100ed60048036038101906100e8919061051d565b61033b565b6040516100fa919061055e565b60405180910390f35b61010b610360565b005b61011561041a565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b6101987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6001600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f6acfd92212f0ec670af78f8ba2273e4a85ac17023475650c25be0440602bff2d60405160405180910390a25b5b50565b6102987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f37967118b05f7af84a44112f7e4b59ab8aa3a73cebb4154828b43b934224522a60405160405180910390a25b5b50565b600060005060205280600052604060002060009150909054906101000a900460ff1681565b6103be600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b600260016000505414151515610409576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610400906105d9565b60405180910390fd5b600260016000508190909055505b5b565b610478600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b60026001600050541415156104c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b99061059a565b60405180910390fd5b600160016000508190909055505b5b565b801515610515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050c90610618565b60405180910390fd5b5b5056610657565b60006020828403121561052e578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515610553578182fd5b809150505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600860208201527f504c206572726f72000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600d60208201527f504c205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f504c3a204e6f7420417574686f72697a65640000000000000000000000000000604082015260006060820190505b919050565bfea26469706673582212203636fea87a6c8ff07afc0ee390f4ff639df664c0461d7350f864b8b950aa98c464736f6c63430008040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ProtocolLock__factory = /** @class */ (function (_super) {
    __extends(ProtocolLock__factory, _super);
    function ProtocolLock__factory() {
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
    ProtocolLock__factory.prototype.deploy = function (params, overrides) {
        return _super.prototype.deploy.call(this, params, overrides || {});
    };
    ProtocolLock__factory.prototype.getDeployTransaction = function (params, overrides) {
        return _super.prototype.getDeployTransaction.call(this, params, overrides || {});
    };
    ProtocolLock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ProtocolLock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ProtocolLock__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ProtocolLock__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ProtocolLock__factory.bytecode = _bytecode;
    ProtocolLock__factory.abi = _abi;
    return ProtocolLock__factory;
}(ContractFactory));
export { ProtocolLock__factory };
