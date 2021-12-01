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
                name: "factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "PERIOD",
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
        inputs: [],
        name: "blockTimestampLast",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "consult",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price0Average",
        outputs: [
            {
                internalType: "uint224",
                name: "_x",
                type: "uint224",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price0CumulativeLast",
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
        inputs: [],
        name: "price1Average",
        outputs: [
            {
                internalType: "uint224",
                name: "_x",
                type: "uint224",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price1CumulativeLast",
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
        inputs: [],
        name: "token0",
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
        inputs: [],
        name: "token1",
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
        inputs: [],
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60e0604052348015620000125760006000fd5b5060405162001e0c38038062001e0c83398181016040526060811015620000395760006000fd5b810190808051906020019092919080519060200190929190805190602001909291905050505b600062000079848484620004dc60201b620012141760201c565b90508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015620000fd5760006000fd5b505afa15801562000113573d600060003e3d6000fd5b505050506040513d60208110156200012b5760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015620001bd5760006000fd5b505afa158015620001d3573d600060003e3d6000fd5b505050506040513d6020811015620001eb5760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b1580156200027d5760006000fd5b505afa15801562000293573d600060003e3d6000fd5b505050506040513d6020811015620002ab5760006000fd5b810190808051906020019092919050505060006000508190909055508073ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030f5760006000fd5b505afa15801562000325573d600060003e3d6000fd5b505050506040513d60208110156200033d5760006000fd5b81019080805190602001909291905050506001600050819090905550600060008273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015620003a55760006000fd5b505afa158015620003bb573d600060003e3d6000fd5b505050506040513d6060811015620003d35760006000fd5b81019080805190602001909291908051906020019092919080519060200190929190505050600260008291906101000a81548163ffffffff021916908363ffffffff1602179055508193508294505050506000826dffffffffffffffffffffffffffff16141580156200045757506000816dffffffffffffffffffffffffffff1614155b1515620004cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4578616d706c654f7261636c6553696d706c653a204e4f5f524553455256455381526020015060200191505060405180910390fd5b5050505b505050620007d6565b600060006000620004f485856200065160201b60201c565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152602001506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018260001916600019168152602001807f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f815260200150602001925050506040516020818303038152906040528051906020012060001c9250825050505b9392505050565b600060008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515620006de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062001de76025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106200071a5782846200071d565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515620007ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081526020015060200191505060405180910390fd5b5b9250929050565b60805160601c60a05160601c60c05160601c6115d1620008166000398061043e528061088a525080610304528061032a5250806105f952506115d16000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c8063a2e6204511610077578063b4d1d7951161005c578063b4d1d79514610270578063c5700a021461028e578063d21220a7146102b8576100c3565b8063a2e620451461020c578063a6bb453914610216576100c3565b80635909c0d5116100a85780635909c0d5146101765780635a3d5493146101945780635e6aaf2c146101b2576100c3565b80630dfe1681146100c95780633ddac95314610113576100c3565b60006000fd5b6100d1610302565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101606004803603604081101561012a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610326565b6040518082815260200191505060405180910390f35b61017e6105a5565b6040518082815260200191505060405180910390f35b61019c6105ae565b6040518082815260200191505060405180910390f35b6101ba6105b7565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102146105ee565b005b61021e610834565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027861086b565b6040518082815260200191505060405180910390f35b610296610872565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6102c0610888565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561043c5761041f6104128360036000506040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150506108ac90919063ffffffff16565b6109b4909063ffffffff16565b71ffffffffffffffffffffffffffffffffffff169050805061059e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156104e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806115536022913960400191505060405180910390fd5b6105856105788360046000506040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150506108ac90919063ffffffff16565b6109b4909063ffffffff16565b71ffffffffffffffffffffffffffffffffffff16905080505b5b92915050565b60006000505481565b60016000505481565b60046000508060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905081565b6000600060006106237f00000000000000000000000000000000000000000000000000000000000000006109ce63ffffffff16565b9250925092506000600260009054906101000a900463ffffffff1682039050620151808163ffffffff16101515156106a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115756027913960400191505060405180910390fd5b60405180602001604052808263ffffffff1660006000505487038115156106c957fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150600360005060008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555090505060405180602001604052808263ffffffff16600160005054860381151561077057fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150600460005060008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555090505083600060005081909090555082600160005081909090555081600260006101000a81548163ffffffff021916908363ffffffff160217905550505050505b565b60036000508060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905081565b6201518081565b600260009054906101000a900463ffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6108b46111ca565b600060009050600083148061091c575083600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16838486600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160292508281151561091957fe5b04145b1515610993576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4669786564506f696e743a3a6d756c3a206f766572666c6f770000000000000081526020015060200191505060405180910390fd5b6040518060200160405280828152602001509150506109ae56505b92915050565b6000607060ff168260000151901c90506109c9565b919050565b6000600060006109e2610c8363ffffffff16565b905080508373ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2d5760006000fd5b505afa158015610a42573d600060003e3d6000fd5b505050506040513d6020811015610a595760006000fd5b8101908080519060200190929190505050925082508373ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b158015610ab55760006000fd5b505afa158015610aca573d600060003e3d6000fd5b505050506040513d6020811015610ae15760006000fd5b8101908080519060200190929190505050915081506000600060008673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610b435760006000fd5b505afa158015610b58573d600060003e3d6000fd5b505050506040513d6060811015610b6f5760006000fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092508363ffffffff168163ffffffff16141515610c7857600081850390508063ffffffff16610bed846dffffffffffffffffffffffffffff16866dffffffffffffffffffffffffffff16610ca063ffffffff16565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16028701965086508063ffffffff16610c4d856dffffffffffffffffffffffffffff16856dffffffffffffffffffffffffffff16610ca063ffffffff16565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602860195508550505b5050505b9193909250565b600064010000000042811515610c9557fe5b069050610c9d565b90565b610ca86111e0565b600082111515610d03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061152d6026913960400191505060405180910390fd5b6000831415610d4457604051806020016040528060007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152602001509050610fa5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff71ffffffffffffffffffffffffffffffffffff1683111515610e8e57600082607060ff1685901b811515610d9557fe5b0490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168111151515610e51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f77000081526020015060200191505060405180910390fd5b6040518060200160405280827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150915050610fa55650610fa4565b6000610eb0846e01000000000000000000000000000085610fab63ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168111151515610f6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f77000081526020015060200191505060405180910390fd5b6040518060200160405280827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200150915050610fa556505b5b92915050565b600060006000610fc186866110ac63ffffffff16565b91509150600084801515610fd157fe5b868809905082811115610fe75760018203915081505b80830392508250600082141561100d57848381151561100257fe5b0493505050506110a5565b8482101515611087576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f5700000000000081526020015060200191505060405180910390fd5b61109883838761110963ffffffff16565b93505050506110a5565050505b9392505050565b6000600060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8015156110dc57fe5b84860990508385029250825082810391508150828110156111005760018203915081505b505b9250929050565b600060008260000383169050808381151561112057fe5b0492508250808581151561113057fe5b04945084506001818260000381151561114557fe5b04018402850194508450600060019050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808602925050506111c35650505b9392505050565b6040518060200160405280600081526020015090565b604051806020016040528060007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681526020015090565b60006000600061122a858561138763ffffffff16565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152602001506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018260001916600019168152602001807f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f815260200150602001925050506040516020818303038152906040528051906020012060001c9250825050505b9392505050565b600060008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515611412576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806115086025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161061144c57828461144f565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156114ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081526020015060200191505060405180910390fd5b5b925092905056fe556e697377617056324c6962726172793a204944454e544943414c5f4144445245535345534669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726f4578616d706c654f7261636c6553696d706c653a20494e56414c49445f544f4b454e4578616d706c654f7261636c6553696d706c653a20504552494f445f4e4f545f454c4150534544a2646970667358221220730efcba8ab920b090b0ae3db59133ea43dc48c52861f364612465356805325964736f6c63430006060033556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ExampleOracleSimple__factory = /** @class */ (function (_super) {
    __extends(ExampleOracleSimple__factory, _super);
    function ExampleOracleSimple__factory() {
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
    ExampleOracleSimple__factory.prototype.deploy = function (factory, tokenA, tokenB, overrides) {
        return _super.prototype.deploy.call(this, factory, tokenA, tokenB, overrides || {});
    };
    ExampleOracleSimple__factory.prototype.getDeployTransaction = function (factory, tokenA, tokenB, overrides) {
        return _super.prototype.getDeployTransaction.call(this, factory, tokenA, tokenB, overrides || {});
    };
    ExampleOracleSimple__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ExampleOracleSimple__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ExampleOracleSimple__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ExampleOracleSimple__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ExampleOracleSimple__factory.bytecode = _bytecode;
    ExampleOracleSimple__factory.abi = _abi;
    return ExampleOracleSimple__factory;
}(ContractFactory));
export { ExampleOracleSimple__factory };
