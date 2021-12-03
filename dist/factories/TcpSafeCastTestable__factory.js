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
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt128",
        outputs: [
            {
                internalType: "int128",
                name: "r",
                type: "int128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt16",
        outputs: [
            {
                internalType: "int16",
                name: "r",
                type: "int16",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt24",
        outputs: [
            {
                internalType: "int24",
                name: "r",
                type: "int24",
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
        ],
        name: "_toInt256",
        outputs: [
            {
                internalType: "int256",
                name: "r",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt32",
        outputs: [
            {
                internalType: "int32",
                name: "r",
                type: "int32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt64",
        outputs: [
            {
                internalType: "int64",
                name: "r",
                type: "int64",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toInt8",
        outputs: [
            {
                internalType: "int8",
                name: "r",
                type: "int8",
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
        ],
        name: "_toUint128",
        outputs: [
            {
                internalType: "uint128",
                name: "r",
                type: "uint128",
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
        ],
        name: "_toUint16",
        outputs: [
            {
                internalType: "uint16",
                name: "r",
                type: "uint16",
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
        ],
        name: "_toUint160",
        outputs: [
            {
                internalType: "uint160",
                name: "r",
                type: "uint160",
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
        ],
        name: "_toUint176",
        outputs: [
            {
                internalType: "uint176",
                name: "r",
                type: "uint176",
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
        ],
        name: "_toUint184",
        outputs: [
            {
                internalType: "uint184",
                name: "r",
                type: "uint184",
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
        ],
        name: "_toUint192",
        outputs: [
            {
                internalType: "uint192",
                name: "r",
                type: "uint192",
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
        ],
        name: "_toUint216",
        outputs: [
            {
                internalType: "uint216",
                name: "r",
                type: "uint216",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256",
            },
        ],
        name: "_toUint256",
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
        ],
        name: "_toUint32",
        outputs: [
            {
                internalType: "uint32",
                name: "r",
                type: "uint32",
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
        ],
        name: "_toUint40",
        outputs: [
            {
                internalType: "uint40",
                name: "r",
                type: "uint40",
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
        ],
        name: "_toUint48",
        outputs: [
            {
                internalType: "uint48",
                name: "r",
                type: "uint48",
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
        ],
        name: "_toUint64",
        outputs: [
            {
                internalType: "uint64",
                name: "r",
                type: "uint64",
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
        ],
        name: "_toUint8",
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
                name: "a",
                type: "uint256",
            },
        ],
        name: "_toUint96",
        outputs: [
            {
                internalType: "uint96",
                name: "r",
                type: "uint96",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b6117ae806100266000396000f3fe60806040523480156100115760006000fd5b506004361061017c5760003560e01c806387112273116100d9578063be0bdabc1161008d578063d142b87711610067578063d142b877146106d8578063e13450ca14610735578063fa514ee5146107825761017c565b8063be0bdabc146105ec578063d093dc4e14610632578063d0dcdf7b146106785761017c565b806393fcc268116100be57806393fcc2681461051d578063a8d43fc914610563578063b414a9be146105a95761017c565b8063871122731461049457806391ab11b6146104d75761017c565b806347af8c4a11610130578063668e8b4a11610115578063668e8b4a146103975780636cabde0d146103e05780636dc3c6041461043b5761017c565b806347af8c4a146102ff578063529e9fea146103505761017c565b80630dd3fd46116101615780630dd3fd461461022857806322174fe71461026e5780632e510f3f146102b95761017c565b80630147e1e3146101825780630d2506e4146101de5761017c565b60006000fd5b6101af600480360360208110156101995760006000fd5b81019080803590602001909291905050506107d7565b604051808276ffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61020b600480360360208110156101f55760006000fd5b81019080803590602001909291905050506107f4565b604051808264ffffffffff16815260200191505060405180910390f35b6102556004803603602081101561023f5760006000fd5b8101908080359060200190929190505050610811565b604051808260030b815260200191505060405180910390f35b61029b600480360360208110156102855760006000fd5b810190808035906020019092919050505061082e565b604051808265ffffffffffff16815260200191505060405180910390f35b6102e6600480360360208110156102d05760006000fd5b810190808035906020019092919050505061084b565b6040518082600f0b815260200191505060405180910390f35b61032c600480360360208110156103165760006000fd5b8101908080359060200190929190505050610868565b60405180826bffffffffffffffffffffffff16815260200191505060405180910390f35b61037d600480360360208110156103675760006000fd5b8101908080359060200190929190505050610885565b604051808261ffff16815260200191505060405180910390f35b6103c4600480360360208110156103ae5760006000fd5b81019080803590602001909291905050506108a2565b604051808263ffffffff16815260200191505060405180910390f35b61040d600480360360208110156103f75760006000fd5b81019080803590602001909291905050506108bf565b604051808275ffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610468600480360360208110156104525760006000fd5b81019080803590602001909291905050506108dc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104c1600480360360208110156104ab5760006000fd5b81019080803590602001909291905050506108f9565b6040518082815260200191505060405180910390f35b610504600480360360208110156104ee5760006000fd5b8101908080359060200190929190505050610916565b604051808260000b815260200191505060405180910390f35b61054a600480360360208110156105345760006000fd5b8101908080359060200190929190505050610933565b604051808260020b815260200191505060405180910390f35b6105906004803603602081101561057a5760006000fd5b8101908080359060200190929190505050610950565b604051808260ff16815260200191505060405180910390f35b6105d6600480360360208110156105c05760006000fd5b810190808035906020019092919050505061096d565b6040518082815260200191505060405180910390f35b610619600480360360208110156106035760006000fd5b810190808035906020019092919050505061098a565b604051808260070b815260200191505060405180910390f35b61065f600480360360208110156106495760006000fd5b81019080803590602001909291905050506109a7565b604051808260010b815260200191505060405180910390f35b6106a56004803603602081101561068f5760006000fd5b81019080803590602001909291905050506109c4565b60405180827affffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610705600480360360208110156106ef5760006000fd5b81019080803590602001909291905050506109e1565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107626004803603602081101561074c5760006000fd5b81019080803590602001909291905050506109fe565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6107af600480360360208110156107995760006000fd5b8101908080359060200190929190505050610a1b565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006107ea82610a38909063ffffffff16565b905080505b919050565b600061080782610ad9909063ffffffff16565b905080505b919050565b600061082482610b68909063ffffffff16565b905080505b919050565b600061084182610c21909063ffffffff16565b905080505b919050565b600061085e82610cb1909063ffffffff16565b905080505b919050565b600061087b82610d76909063ffffffff16565b905080505b919050565b600061089882610e0c909063ffffffff16565b905080505b919050565b60006108b582610e98909063ffffffff16565b905080505b919050565b60006108d282610f26909063ffffffff16565b905080505b919050565b60006108ef82610fc6909063ffffffff16565b905080505b919050565b600061090c82611064909063ffffffff16565b905080505b919050565b60006109298261110d909063ffffffff16565b905080505b919050565b6000610946826111c3909063ffffffff16565b905080505b919050565b60006109638261127b909063ffffffff16565b905080505b919050565b600061098082611306909063ffffffff16565b905080505b919050565b600061099d82611391909063ffffffff16565b905080505b919050565b60006109ba8261144e909063ffffffff16565b905080505b919050565b60006109d782611505909063ffffffff16565b905080505b919050565b60006109f4826115aa909063ffffffff16565b905080505b919050565b6000610a118261164c909063ffffffff16565b905080505b919050565b6000610a2e826116de909063ffffffff16565b905080505b919050565b60007701000000000000000000000000000000000000000000000082101515610acc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203138342062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610ad4565b919050565b60006501000000000082101515610b5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203430206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610b63565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000008212158015610b9d5750638000000082125b1515610c14576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203332206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610c1c565b919050565b6000660100000000000082101515610ca4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203438206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610cac565b919050565b60007fffffffffffffffffffffffffffffffff800000000000000000000000000000008212158015610cf257506f8000000000000000000000000000000082125b1515610d69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610d71565b919050565b60006c0100000000000000000000000082101515610dff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203936206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610e07565b919050565b60006201000082101515610e8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203136206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610e93565b919050565b600064010000000082101515610f19576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203332206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610f21565b919050565b600076010000000000000000000000000000000000000000000082101515610fb9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203137362062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610fc1565b919050565b60007401000000000000000000000000000000000000000082101515611057576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203136302062697473000000000000000000000000000081526020015060200191505060405180910390fd5b81905061105f565b919050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515611100576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f6f2062696720666f7220696e74323536000000000000000000000000000081526020015060200191505060405180910390fd5b819050611108565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80821215801561113f5750608082125b15156111b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6d6f7265207468616e203820626974730000000000000000000000000000000081526020015060200191505060405180910390fd5b8190506111be565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000082121580156111f757506280000082125b151561126e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203234206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611276565b919050565b6000610100821015156112f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6d6f7265207468616e203820626974730000000000000000000000000000000081526020015060200191505060405180910390fd5b819050611301565b919050565b600060008212151515611384576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76616c7565206e6f7420706f736974697665000000000000000000000000000081526020015060200191505060405180910390fd5b81905061138c565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffff800000000000000082121580156113ca575067800000000000000082125b1515611441576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611449565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008212158015611481575061800082125b15156114f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203136206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611500565b919050565b60007b010000000000000000000000000000000000000000000000000000008210151561159d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203231362062697473000000000000000000000000000081526020015060200191505060405180910390fd5b8190506115a5565b919050565b600078010000000000000000000000000000000000000000000000008210151561163f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203139322062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050611647565b919050565b600068010000000000000000821015156116d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506116d9565b919050565b60007001000000000000000000000000000000008210151561176b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050611773565b91905056fea2646970667358221220ba4fd88f84f8578cd0a487b2d6ffba163b0acc793316836cb555651bb0d52fbe64736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TcpSafeCastTestable__factory = /** @class */ (function (_super) {
    __extends(TcpSafeCastTestable__factory, _super);
    function TcpSafeCastTestable__factory() {
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
    TcpSafeCastTestable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TcpSafeCastTestable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TcpSafeCastTestable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TcpSafeCastTestable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TcpSafeCastTestable__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TcpSafeCastTestable__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TcpSafeCastTestable__factory.bytecode = _bytecode;
    TcpSafeCastTestable__factory.abi = _abi;
    return TcpSafeCastTestable__factory;
}(ContractFactory));
export { TcpSafeCastTestable__factory };