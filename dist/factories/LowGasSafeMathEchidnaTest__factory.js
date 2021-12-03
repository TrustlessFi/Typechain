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
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "checkAdd",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "y",
                type: "int256",
            },
        ],
        name: "checkAddi",
        outputs: [],
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
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "checkMul",
        outputs: [],
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
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "checkSub",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "y",
                type: "int256",
            },
        ],
        name: "checkSubi",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b6103d3806100266000396000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c80636d886fae116100515780636d886fae146100e45780639239e7771461011d578063bd78b20d146101565761006c565b80630f935000146100725780630fe48c5c146100ab5761006c565b60006000fd5b6100a9600480360360408110156100895760006000fd5b81019080803590602001909291908035906020019092919050505061018f565b005b6100e2600480360360408110156100c25760006000fd5b8101908080359060200190929190803590602001909291905050506101ce565b005b61011b600480360360408110156100fb5760006000fd5b810190808035906020019092919080359060200190929190505050610223565b005b610154600480360360408110156101345760006000fd5b810190808035906020019092919080359060200190929190505050610256565b005b61018d6004803603604081101561016d5760006000fd5b81019080803590602001909291908035906020019092919050505061029a565b005b60006101a183836102de63ffffffff16565b9050818301811415156101b057fe5b8281101580156101c05750818110155b15156101c857fe5b505b5050565b60006101e083836102fc63ffffffff16565b9050818302811415156101ef57fe5b60008314806101fe5750600082145b8061021557508281101580156102145750818110155b5b151561021d57fe5b505b5050565b6000610235838361032f63ffffffff16565b90508183038114151561024457fe5b82811115151561025057fe5b505b5050565b6000610268838361034d63ffffffff16565b90508183018114151561027757fe5b60008212610288578281121561028c565b8281125b151561029457fe5b505b5050565b60006102ac838361037563ffffffff16565b9050818303811415156102bb57fe5b600082126102cc57828113156102d0565b8281135b15156102d857fe5b505b5050565b600082828401915081101515156102f55760006000fd5b5b92915050565b6000600083148061031c5750818383850292508281151561031957fe5b04145b15156103285760006000fd5b5b92915050565b600082828403915081111515156103465760006000fd5b5b92915050565b600060008212151515838385019250821215151514151561036e5760006000fd5b5b92915050565b60006000821215151583838503925082131515151415156103965760006000fd5b5b9291505056fea264697066735822122025767f707eaace554736248a11371dbe52b28c2cc989ccd85e2ff6dad3aab78764736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LowGasSafeMathEchidnaTest__factory = /** @class */ (function (_super) {
    __extends(LowGasSafeMathEchidnaTest__factory, _super);
    function LowGasSafeMathEchidnaTest__factory() {
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
    LowGasSafeMathEchidnaTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LowGasSafeMathEchidnaTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LowGasSafeMathEchidnaTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LowGasSafeMathEchidnaTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LowGasSafeMathEchidnaTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    LowGasSafeMathEchidnaTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    LowGasSafeMathEchidnaTest__factory.bytecode = _bytecode;
    LowGasSafeMathEchidnaTest__factory.abi = _abi;
    return LowGasSafeMathEchidnaTest__factory;
}(ContractFactory));
export { LowGasSafeMathEchidnaTest__factory };
