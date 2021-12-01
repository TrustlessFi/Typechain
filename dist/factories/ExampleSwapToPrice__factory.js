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
                name: "factory_",
                type: "address",
            },
            {
                internalType: "contract IUniswapV2Router01",
                name: "router_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "factory",
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
        name: "router",
        outputs: [
            {
                internalType: "contract IUniswapV2Router01",
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
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "truePriceTokenA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "truePriceTokenB",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSpendTokenA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSpendTokenB",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapToPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156100115760006000fd5b50604051611735380380611735833981810160405260408110156100355760006000fd5b8101908080519060200190929190805190602001909291905050505b8173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50506100cd565b60805160601c60a05160601c611630610105600039806102b652806106bd5250806103b652806104ca52806106e152506116306000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063bef90fd31461004c578063c45a015514610104578063f887ea401461014e57610046565b60006000fd5b61010260048036036101008110156100645760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610198565b005b61010c6106bb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101566106df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600086141580156101aa575060008514155b1515610221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4578616d706c6553776170546f50726963653a205a45524f5f5052494345000081526020015060200191505060405180910390fd5b600084141580610232575060008314155b15156102a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4578616d706c6553776170546f50726963653a205a45524f5f5350454e44000081526020015060200191505060405180910390fd5b60006000600060006102e27f00000000000000000000000000000000000000000000000000000000000000008d8d61070363ffffffff16565b915091506102f88a8a848461083e63ffffffff16565b8094508195505050505060008111151561035d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806115d96022913960400191505060405180910390fd5b60008261036a578561036c565b865b90508082111561037c5780915081505b600083610389578a61038b565b8b5b905060008461039a578c61039c565b8b5b90506103b08233308761095863ffffffff16565b6103e1827f000000000000000000000000000000000000000000000000000000000000000086610b7063ffffffff16565b6060600267ffffffffffffffff811180156103fc5760006000fd5b5060405190808252806020026020018201604052801561042b5781602001602082028036833780820191505090505b5090508281600081518110151561043e57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150508181600181518110151561048b57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed1739866000848c8c6040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156105a15780820151818401525b602081019050610585565b505050509050019650505050505050600060405180830381600087803b1580156105cb5760006000fd5b505af11580156105e0573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561060b5760006000fd5b810190808051604051939291908464010000000082111561062c5760006000fd5b838201915060208201858111156106435760006000fd5b82518660208202830111640100000000821117156106615760006000fd5b8083526020830192505050908051906020019060200280838360005b838110156106995780820151818401525b60208101905061067d565b50505050905001604052602001505050505050505050505b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600060006107198585610d5363ffffffff16565b50905060006000610731888888610ed363ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156107775760006000fd5b505afa15801561078c573d600060003e3d6000fd5b505050506040513d60608110156107a35760006000fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161461082757808261082a565b81815b80955081965050505050505b935093915050565b600060008561085485878661104663ffffffff16565b1091508150600061086e848661114790919063ffffffff16565b905060006108d16108c661088d6103e88561114790919063ffffffff16565b86610898578961089a565b8a5b6108bb6103e5896108ab578d6108ad565b8c5b61114790919063ffffffff16565b61104663ffffffff16565b6111e563ffffffff16565b905060006103e5856108f7576108f26103e88861114790919063ffffffff16565b61090d565b61090c6103e88961114790919063ffffffff16565b5b81151561091657fe5b0490508082101561093457600060008090509450945050505061094f565b61094781836113b090919063ffffffff16565b935083505050505b94509492505050565b600060608573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083101515610a6857805182525b602082019150602081019050602083039250610a42565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610aca576040519150601f19603f3d011682016040523d82523d6000602084013e610acf565b606091505b5091509150818015610b105750600081511480610b0f5750808060200190516020811015610afd5760006000fd5b81019080805190602001909291905050505b5b1515610b67576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806115586031913960400191505060405180910390fd5b50505b50505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663095ea7b38585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083101515610c4c57805182525b602082019150602081019050602083039250610c26565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610cae576040519150601f19603f3d011682016040523d82523d6000602084013e610cb3565b606091505b5091509150818015610cf45750600081511480610cf35750808060200190516020811015610ce15760006000fd5b81019080805190602001909291905050505b5b1515610d4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806115ae602b913960400191505060405180910390fd5b50505b505050565b600060008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515610dde576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806115896025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610e18578284610e1b565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ecb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081526020015060200191505060405180910390fd5b5b9250929050565b600060006000610ee98585610d5363ffffffff16565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152602001506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018260001916600019168152602001807f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f815260200150602001925050506040516020818303038152906040528051906020012060001c9250825050505b9392505050565b60006000600061105c868661143963ffffffff16565b9150915060008480151561106c57fe5b8688099050828111156110825760018203915081505b8083039250825060008214156110a857848381151561109d57fe5b049350505050611140565b8482101515611122576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f5700000000000081526020015060200191505060405180910390fd5b61113383838761149663ffffffff16565b9350505050611140565050505b9392505050565b600060008214806111675750828283850292508281151561116457fe5b04145b15156111de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600060008214156111f957600090506113ab565b60008290506000600190507001000000000000000000000000000000008210151561123157608082901c91508150604081901b905080505b680100000000000000008210151561125657604082901c91508150602081901b905080505b6401000000008210151561127757602082901c91508150601081901b905080505b620100008210151561129657601082901c91508150600881901b905080505b610100821015156112b457600882901c91508150600481901b905080505b6010821015156112d157600482901c91508150600281901b905080505b6008821015156112e557600181901b905080505b600181858115156112f257fe5b048201901c905080506001818581151561130857fe5b048201901c905080506001818581151561131e57fe5b048201901c905080506001818581151561133457fe5b048201901c905080506001818581151561134a57fe5b048201901c905080506001818581151561136057fe5b048201901c905080506001818581151561137657fe5b048201901c905080506000818581151561138c57fe5b04905080821061139c578061139e565b815b93505050506113ab565050505b919050565b60008282840391508111151515611432576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000600060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80151561146957fe5b848609905083850292508250828103915081508281101561148d5760018203915081505b505b9250929050565b60006000826000038316905080838115156114ad57fe5b049250825080858115156114bd57fe5b0494508450600181826000038115156114d257fe5b04018402850194508450600060019050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808402600203810290508050808602925050506115505650505b939250505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c6564556e697377617056324c6962726172793a204944454e544943414c5f4144445245535345535472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c65644578616d706c6553776170546f50726963653a205a45524f5f414d4f554e545f494ea264697066735822122027ab76cedf1ae1a22691399dea79ebe7ae08f00cbbd47ab5baf7ceb75882195464736f6c63430006060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ExampleSwapToPrice__factory = /** @class */ (function (_super) {
    __extends(ExampleSwapToPrice__factory, _super);
    function ExampleSwapToPrice__factory() {
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
    ExampleSwapToPrice__factory.prototype.deploy = function (factory_, router_, overrides) {
        return _super.prototype.deploy.call(this, factory_, router_, overrides || {});
    };
    ExampleSwapToPrice__factory.prototype.getDeployTransaction = function (factory_, router_, overrides) {
        return _super.prototype.getDeployTransaction.call(this, factory_, router_, overrides || {});
    };
    ExampleSwapToPrice__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ExampleSwapToPrice__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ExampleSwapToPrice__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ExampleSwapToPrice__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ExampleSwapToPrice__factory.bytecode = _bytecode;
    ExampleSwapToPrice__factory.abi = _abi;
    return ExampleSwapToPrice__factory;
}(ContractFactory));
export { ExampleSwapToPrice__factory };
