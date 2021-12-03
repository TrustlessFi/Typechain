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
                name: "x",
                type: "uint256",
            },
        ],
        name: "getGasCostOfLeastSignificantBit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "getGasCostOfMostSignificantBit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "leastSignificantBit",
        outputs: [
            {
                internalType: "uint8",
                name: "r",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "mostSignificantBit",
        outputs: [
            {
                internalType: "uint8",
                name: "r",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b6104a1806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100505760003560e01c806246b777146100565780636b83cf2614610099578063d230d23f146100dc578063e6bcbc651461012257610050565b60006000fd5b6100836004803603602081101561006d5760006000fd5b8101908080359060200190929190505050610168565b6040518082815260200191505060405180910390f35b6100c6600480360360208110156100b05760006000fd5b8101908080359060200190929190505050610190565b6040518082815260200191505060405180910390f35b610109600480360360208110156100f35760006000fd5b81019080803590602001909291905050506101b8565b604051808260ff16815260200191505060405180910390f35b61014f600480360360208110156101395760006000fd5b81019080803590602001909291905050506101d5565b604051808260ff16815260200191505060405180910390f35b600060005a905061017e836101f263ffffffff16565b505a810391505061018b56505b919050565b600060005a90506101a68361030063ffffffff16565b505a81039150506101b356505b919050565b60006101c98261030063ffffffff16565b90506101d0565b919050565b60006101e6826101f263ffffffff16565b90506101ed565b919050565b60006000821115156102045760006000fd5b7001000000000000000000000000000000008210151561023057608082901c9150815060808101905080505b680100000000000000008210151561025457604082901c9150815060408101905080505b6401000000008210151561027457602082901c9150815060208101905080505b620100008210151561029257601082901c9150815060108101905080505b610100821015156102af57600882901c9150815060088101905080505b6010821015156102cb57600482901c9150815060048101905080505b6004821015156102e757600282901c9150815060028101905080505b6002821015156102fa5760018101905080505b5b919050565b60006000821115156103125760006000fd5b60ff9050805060006fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff168316111561035257608081039050805061035c565b608082901c915081505b600067ffffffffffffffff67ffffffffffffffff1683161115610386576040810390508050610390565b604082901c915081505b600063ffffffff63ffffffff16831611156103b25760208103905080506103bc565b602082901c915081505b600061ffff61ffff16831611156103da5760108103905080506103e4565b601082901c915081505b600060ff60ff168316111561040057600881039050805061040a565b600882901c915081505b6000600f8316111561042357600481039050805061042d565b600482901c915081505b6000600383161115610446576002810390508050610450565b600282901c915081505b60006001831611156104655760018103905080505b5b91905056fea26469706673582212204f8a3ed3c5a952a5de9de501926397a233e532ad5c4b9d1f872f7bd287ba83e564736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var BitMathTest__factory = /** @class */ (function (_super) {
    __extends(BitMathTest__factory, _super);
    function BitMathTest__factory() {
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
    BitMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BitMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BitMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BitMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BitMathTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    BitMathTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    BitMathTest__factory.bytecode = _bytecode;
    BitMathTest__factory.abi = _abi;
    return BitMathTest__factory;
}(ContractFactory));
export { BitMathTest__factory };