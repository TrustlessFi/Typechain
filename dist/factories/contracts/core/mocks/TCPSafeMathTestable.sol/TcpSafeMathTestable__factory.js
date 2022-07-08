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
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "_div",
        outputs: [
            {
                internalType: "uint256",
                name: "r",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "_mul",
        outputs: [
            {
                internalType: "uint256",
                name: "r",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "c",
                type: "uint256",
            },
        ],
        name: "_mulDiv",
        outputs: [
            {
                internalType: "uint256",
                name: "r",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610355806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c806329f5278a1461004c57806340248bc31461007c5780634bad3327146100ac57610046565b60006000fd5b610066600480360381019061006191906102b3565b6100dc565b60405161007391906102e4565b60405180910390f35b610096600480360381019061009191906102f6565b6100ff565b6040516100a391906102e4565b60405180910390f35b6100c660048036038101906100c191906102f6565b61011f565b6040516100d391906102e4565b60405180910390f35b60006100f383838661013f9092919063ffffffff16565b905080505b9392505050565b6000610114828461026390919063ffffffff16565b905080505b92915050565b6000610134828461028990919063ffffffff16565b905080505b92915050565b6000600060006000198587098587029250828110838203039150506000811415610182576000841115156101735760006000fd5b8382049250829250505061025c565b80841115156101915760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03011690508050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550508494505050505061025c56505050505b9392505050565b600061027e83670de0b6b3a76400008461013f63ffffffff16565b905080505b92915050565b60006102a48383670de0b6b3a764000061013f63ffffffff16565b905080505b929150505661031e565b600060006000606084860312156102ca5760006000fd5b8335925060208401359150604084013590505b9250925092565b60006020820190508282525b92915050565b600060006040838503121561030b5760006000fd5b82359150602083013590505b9250929050565bfea26469706673582212208e34f46ec40c78d5833d835e2e66dc88032defb17795ca0b6bab85b1a91341ca64736f6c634300080c0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TcpSafeMathTestable__factory = /** @class */ (function (_super) {
    __extends(TcpSafeMathTestable__factory, _super);
    function TcpSafeMathTestable__factory() {
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
    TcpSafeMathTestable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TcpSafeMathTestable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TcpSafeMathTestable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TcpSafeMathTestable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TcpSafeMathTestable__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TcpSafeMathTestable__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TcpSafeMathTestable__factory.bytecode = _bytecode;
    TcpSafeMathTestable__factory.abi = _abi;
    return TcpSafeMathTestable__factory;
}(ContractFactory));
export { TcpSafeMathTestable__factory };