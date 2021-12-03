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
                internalType: "uint160",
                name: "sqrtPriceRaw",
                type: "uint160",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceTargetRaw",
                type: "uint160",
            },
            {
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
            {
                internalType: "int256",
                name: "amountRemaining",
                type: "int256",
            },
            {
                internalType: "uint24",
                name: "feePips",
                type: "uint24",
            },
        ],
        name: "checkComputeSwapStepInvariants",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b610f7c806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063d7e3056f1461003657610030565b60006000fd5b6100ce600480360360a081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803562ffffff1690602001909291905050506100d0565b005b60008573ffffffffffffffffffffffffffffffffffffffff161115156100f65760006000fd5b60008473ffffffffffffffffffffffffffffffffffffffff1611151561011c5760006000fd5b60008162ffffff161115156101315760006000fd5b620f42408162ffffff161015156101485760006000fd5b600060006000600061016389898989896103dc63ffffffff16565b9350935093509350807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831115151561019957fe5b60008612156101b6578560000382111515156101b157fe5b6101c5565b85818401111515156101c457fe5b5b8773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614156102555760008314151561020557fe5b60008214151561021157fe5b60008114151561021d57fe5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151561025457fe5b5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415156102b55760008612156102a65785600003821415156102a157fe5b6102b4565b858184011415156102b357fe5b5b5b8873ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1611151561035f578873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115151561032257fe5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161015151561035a57fe5b6103d0565b8873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161015151561039757fe5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111515156103cf57fe5b5b505050505b5050505050565b600060006000600060008873ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161015905060006000881215905080156104ae5760006104478989620f42400362ffffff16620f42406106a263ffffffff16565b905082610466576104618c8c8c60016107a363ffffffff16565b61047a565b6104798b8d8c600161088e63ffffffff16565b5b955085508581101515610491578a965086506104a8565b6104a38c8b83866109e263ffffffff16565b965086505b50610514565b816104cb576104c68b8b8b600061088e63ffffffff16565b6104df565b6104de8a8c8b60006107a363ffffffff16565b5b9350835083886000031015156104f9578995508550610513565b61050e8b8a8a60000385610a6c63ffffffff16565b955085505b5b60008673ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1614905082156105ab578080156105575750815b6105735761056e878d8c600161088e63ffffffff16565b610575565b855b95508550808015610584575081155b6105a05761059b878d8c60006107a363ffffffff16565b6105a2565b845b94508450610605565b8080156105b55750815b6105d1576105cc8c888c60016107a363ffffffff16565b6105d3565b855b955085508080156105e2575081155b6105fe576105f98c888c600061088e63ffffffff16565b610600565b845b945084505b8115801561061557508860000385115b156106235788600003945084505b81801561065c57508a73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b1561066d5785890393508350610692565b61068d868962ffffff168a620f42400362ffffff16610af663ffffffff16565b935083505b5050505b95509550955095915050565b60006000600060001985870985870292508281108382030391505060008114156106e5576000841115156106d65760006000fd5b8382049250829250505061079c565b80841115156106f45760006000fd5b600084868809905082811182039150808303925060008586600003169050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550859550505050505061079c5650505050505b9392505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1611156107e457838580955081965050505b8161083657610831836fffffffffffffffffffffffffffffffff1686860373ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000006106a263ffffffff16565b61087f565b61087e836fffffffffffffffffffffffffffffffff1686860373ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000610af663ffffffff16565b5b9050610886565b949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1611156108cf57838580955081965050505b6000606060ff16846fffffffffffffffffffffffffffffffff16901b9050600086860373ffffffffffffffffffffffffffffffffffffffff16905060008773ffffffffffffffffffffffffffffffffffffffff161115156109305760006000fd5b83610982578673ffffffffffffffffffffffffffffffffffffffff1661097383838973ffffffffffffffffffffffffffffffffffffffff166106a263ffffffff16565b81151561097c57fe5b046109cf565b6109ce6109ac83838973ffffffffffffffffffffffffffffffffffffffff16610af663ffffffff16565b8873ffffffffffffffffffffffffffffffffffffffff16610b6263ffffffff16565b5b925050506109da5650505b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff16111515610a0a5760006000fd5b6000846fffffffffffffffffffffffffffffffff16111515610a2c5760006000fd5b81610a4957610a448585856001610b7763ffffffff16565b610a5d565b610a5c8585856001610d3b63ffffffff16565b5b9050610a64565b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff16111515610a945760006000fd5b6000846fffffffffffffffffffffffffffffffff16111515610ab65760006000fd5b81610ad357610ace8585856000610d3b63ffffffff16565b610ae7565b610ae68585856000610b7763ffffffff16565b5b9050610aee565b949350505050565b6000610b098484846106a263ffffffff16565b90508050600082801515610b1957fe5b8486091115610b5a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101515610b515760006000fd5b80806001019150505b5b9392505050565b60006000828406118284040190505b92915050565b60008115610c5657600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff16841115610be857610be3846c01000000000000000000000000876fffffffffffffffffffffffffffffffff166106a263ffffffff16565b610c0e565b846fffffffffffffffffffffffffffffffff16606060ff1685901b811515610c0c57fe5b045b9050610c49610c3c828873ffffffffffffffffffffffffffffffffffffffff16610ef890919063ffffffff16565b610f16909063ffffffff16565b915050610d335650610d32565b600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff16841115610cbf57610cba846c01000000000000000000000000876fffffffffffffffffffffffffffffffff16610af663ffffffff16565b610ce9565b610ce8606060ff1685901b866fffffffffffffffffffffffffffffffff16610b6263ffffffff16565b5b9050808673ffffffffffffffffffffffffffffffffffffffff16111515610d105760006000fd5b808673ffffffffffffffffffffffffffffffffffffffff1603915050610d3356505b5b949350505050565b60006000831415610d4e57849050610ef0565b6000606060ff16856fffffffffffffffffffffffffffffffff16901b90508215610e4c5760008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff168702925082811515610db157fe5b041415610dfb57600081830190508281101515610df957610def838973ffffffffffffffffffffffffffffffffffffffff1683610af663ffffffff16565b9350505050610ef0565b505b610e3e82610e33878a73ffffffffffffffffffffffffffffffffffffffff1686811515610e2457fe5b04610ef890919063ffffffff16565b610b6263ffffffff16565b92505050610ef05650610eee565b60008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff168702925082811515610e8b57fe5b04148015610e9857508082115b1515610ea45760006000fd5b60008183039050610ee2610ed5848a73ffffffffffffffffffffffffffffffffffffffff1684610af663ffffffff16565b610f16909063ffffffff16565b9350505050610ef05650505b505b949350505050565b60008282840191508110151515610f0f5760006000fd5b5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff16141515610f405760006000fd5b5b91905056fea2646970667358221220bef4ce39e4f2304cb4551c6786a832b9986ca88349f84091ad8cf3f7d8bc5f2064736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var SwapMathEchidnaTest__factory = /** @class */ (function (_super) {
    __extends(SwapMathEchidnaTest__factory, _super);
    function SwapMathEchidnaTest__factory() {
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
    SwapMathEchidnaTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SwapMathEchidnaTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SwapMathEchidnaTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SwapMathEchidnaTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SwapMathEchidnaTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    SwapMathEchidnaTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    SwapMathEchidnaTest__factory.bytecode = _bytecode;
    SwapMathEchidnaTest__factory.abi = _abi;
    return SwapMathEchidnaTest__factory;
}(ContractFactory));
export { SwapMathEchidnaTest__factory };