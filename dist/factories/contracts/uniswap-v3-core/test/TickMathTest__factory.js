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
        inputs: [],
        name: "MAX_SQRT_RATIO",
        outputs: [
            {
                internalType: "uint160",
                name: "",
                type: "uint160",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "MIN_SQRT_RATIO",
        outputs: [
            {
                internalType: "uint160",
                name: "",
                type: "uint160",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "getGasCostOfGetSqrtRatioAtTick",
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
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "getGasCostOfGetTickAtSqrtRatio",
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
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "getSqrtRatioAtTick",
        outputs: [
            {
                internalType: "uint160",
                name: "",
                type: "uint160",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "getTickAtSqrtRatio",
        outputs: [
            {
                internalType: "int24",
                name: "",
                type: "int24",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b611060806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c8063a7398eb411610051578063a7398eb4146100fb578063b0622f671461012b578063ee8847ff1461015b57610077565b80634f76c0581461007d5780636d2cc304146100ad578063986cfba3146100cb57610077565b60006000fd5b61009760048036038101906100929190610b81565b610179565b6040516100a49190610bc6565b60405180910390f35b6100b5610196565b6040516100c29190610bdb565b60405180910390f35b6100e560048036038101906100e09190610c03565b6101b7565b6040516100f29190610bdb565b60405180910390f35b61011560048036038101906101109190610c03565b6101d4565b6040516101229190610c35565b60405180910390f35b61014560048036038101906101409190610b81565b610205565b6040516101529190610c35565b60405180910390f35b610163610236565b6040516101709190610bdb565b60405180910390f35b600061018a8261024863ffffffff16565b9050610191565b919050565b600073fffd8963efd1fc6a506488495d951d5263988d2690506101b4565b90565b60006101c88261065c63ffffffff16565b90506101cf565b919050565b600060005a90506101ea8361065c63ffffffff16565b505a816101f79190610c78565b91505061020056505b919050565b600060005a905061021b8361024863ffffffff16565b505a816102289190610c78565b91505061023156505b919050565b60006401000276a39050610245565b90565b60006401000276a373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16101580156102ca575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16105b151561030b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030290610c97565b60405180910390fd5b600060208373ffffffffffffffffffffffffffffffffffffffff16901b905060008190506000600090506fffffffffffffffffffffffffffffffff821160071b808217915082811c92505067ffffffffffffffff821160061b808217915082811c92505063ffffffff821160051b808217915082811c92505061ffff821160041b808217915082811c92505060ff821160031b808217915082811c925050600f821160021b808217915082811c9250506003821160011b808217915082811c925050600182118082179150506080811015156103fa57607f816103ee9190610c78565b83901c9150815061040f565b80607f6104079190610c78565b83901b915081505b600060406080836104209190610cd6565b901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b82179150506000693627a301d71055774c85826105a39190610d54565b9050600060806f028f6481ab7f045a5af012a19d003aaa836105c59190610cd6565b901d9050600060806fdb2df09e81959a81455e260799a0632f846105e99190610e17565b901d90508060020b8260020b14610649578873ffffffffffffffffffffffffffffffffffffffff166106208261065c63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1611156106425781610644565b805b61064b565b815b97508750505050505050505b919050565b6000600060008360020b12610674578260020b610682565b8260020b61068190610e95565b5b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276186106ae90610ed4565b60020b81111515156106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90610f18565b60405180910390fd5b6000600060018316141561071a5770010000000000000000000000000000000061072c565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506000600283161415156107735760806ffff97272373d413259a46990580e213a8261076c9190610f57565b901c905080505b6000600483161415156107a55760806ffff2e50f5f656932ef12357cf3c7fdcc8261079e9190610f57565b901c905080505b6000600883161415156107d75760806fffe5caca7e10e4e61c3624eaa0941cd0826107d09190610f57565b901c905080505b6000601083161415156108095760806fffcb9843d60f6159c9db58835c926644826108029190610f57565b901c905080505b60006020831614151561083b5760806fff973b41fa98c081472e6896dfb254c0826108349190610f57565b901c905080505b60006040831614151561086d5760806fff2ea16466c96a3843ec78b326b52861826108669190610f57565b901c905080505b60006080831614151561089f5760806ffe5dee046a99a2a811c461f1969c3053826108989190610f57565b901c905080505b600061010083161415156108d25760806ffcbe86c7900a88aedcffc83b479aa3a4826108cb9190610f57565b901c905080505b600061020083161415156109055760806ff987a7253ac413176f2b074cf7815e54826108fe9190610f57565b901c905080505b600061040083161415156109385760806ff3392b0822b70005940c7a398e4b70f3826109319190610f57565b901c905080505b6000610800831614151561096b5760806fe7159475a2c29b7443b29c7fa6e889d9826109649190610f57565b901c905080505b6000611000831614151561099e5760806fd097f3bdfd2022b8845ad8f792aa5825826109979190610f57565b901c905080505b600061200083161415156109d15760806fa9f746462d870fdf8a65dc1f90e061e5826109ca9190610f57565b901c905080505b60006140008316141515610a045760806f70d869a156d2a1b890bb3df62baf32f7826109fd9190610f57565b901c905080505b60006180008316141515610a375760806f31be135f97d08fd981231505542fcfa682610a309190610f57565b901c905080505b6000620100008316141515610a6b5760806f09aa508b5b7a84e1c677de54f3e99bc982610a649190610f57565b901c905080505b6000620200008316141515610a9e5760806e5d6af8dedb81196699c329225ee60482610a979190610f57565b901c905080505b6000620400008316141515610ad05760806d2216e584f5fa1ea926041bedfe9882610ac99190610f57565b901c905080505b6000620800008316141515610b005760806b048a170391f7dc42444e8fa282610af99190610f57565b901c905080505b60008460020b1315610b3d57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b389190610fcd565b905080505b600064010000000082610b509190610feb565b14610b5c576001610b5f565b60005b60ff16602082901c610b719190611009565b9250825050505b91905056611029565b600060208284031215610b945760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515610bbb5760006000fd5b809150505b92915050565b60006020820190508260020b82525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208284031215610c165760006000fd5b81358060020b81141515610c2a5760006000fd5b809150505b92915050565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600082821015610c8b57610c8a610c47565b5b82820390505b92915050565b60208152600160208201527f5200000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b600060008312837f800000000000000000000000000000000000000000000000000000000000000001831281151615610d1257610d11610c47565b5b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615610d4757610d46610c47565b5b5082820390505b92915050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600084136000841385830485118282161615610d9657610d95610c47565b5b7f80000000000000000000000000000000000000000000000000000000000000006000871286820588128184161615610dd257610dd1610c47565b5b60008712925087820587128484161615610def57610dee610c47565b5b87850587128184161615610e0657610e05610c47565b5b505050505082820290505b92915050565b600060008212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615610e5357610e52610c47565b5b827f8000000000000000000000000000000000000000000000000000000000000000038412811615610e8857610e87610c47565b5b5082820190505b92915050565b60007f8000000000000000000000000000000000000000000000000000000000000000821415610ec857610ec7610c47565b5b8160000390505b919050565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000811415610f0b57610f0a610c47565b5b806000039150505b919050565b60208152600160208201527f5400000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f9057610f8f610c47565b5b82820290505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b6000821515610fdf57610fde610f9c565b5b82820490505b92915050565b6000821515610ffd57610ffc610f9c565b5b82820690505b92915050565b6000821982111561101d5761101c610c47565b5b82820190505b92915050565bfea2646970667358221220de4f274b0f88dafe822e35b4ea2a9f294c054eb126e575c715546cf8e11e875064736f6c634300080c0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TickMathTest__factory = /** @class */ (function (_super) {
    __extends(TickMathTest__factory, _super);
    function TickMathTest__factory() {
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
    TickMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TickMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TickMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TickMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TickMathTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TickMathTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TickMathTest__factory.bytecode = _bytecode;
    TickMathTest__factory.abi = _abi;
    return TickMathTest__factory;
}(ContractFactory));
export { TickMathTest__factory };
