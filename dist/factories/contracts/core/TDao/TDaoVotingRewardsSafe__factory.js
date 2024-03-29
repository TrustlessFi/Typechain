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
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "auth",
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
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156100115760006000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b610050565b6080516107b261007160003960008181607d015261013201526107b26000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063d1660f9914610041578063de9375f21461005d5761003b565b60006000fd5b61005b600480360381019061005691906104c5565b61007b565b005b610065610130565b604051610072919061050c565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561010b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010290610534565b60405180910390fd5b60008114156101195761012b565b61012a83838361015463ffffffff16565b5b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101db8363a9059cbb60e01b8484604051602401610173929190610573565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506101e163ffffffff16565b5b505050565b6000610246826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff166102ae9092919063ffffffff16565b90506000815111156102a8578080602001905181019061026691906105a2565b15156102a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029e906105d3565b60405180910390fd5b5b505b5050565b60606102c384846000856102d163ffffffff16565b90506102ca565b9392505050565b6060824710151515610318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030f90610638565b60405180910390fd5b610327856103fd63ffffffff16565b1515610368576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035f9061069d565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff1685876040516103929190610708565b60006040518083038185875af1925050503d80600081146103cf576040519150601f19603f3d011682016040523d82523d6000602084013e6103d4565b606091505b50915091506103ea82828661042663ffffffff16565b925050506103f55650505b949350505050565b600060008273ffffffffffffffffffffffffffffffffffffffff163b119050610421565b919050565b6060831561043a5782905061049156610490565b6000835111156104525782518084602001fd5061048f565b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104869190610727565b60405180910390fd5b5b5b93925050505661077b565b73ffffffffffffffffffffffffffffffffffffffff8116811415156104c15760006000fd5b505b565b600060006000606084860312156104dc5760006000fd5b83356104e78161049c565b8093505060208401356104f98161049c565b80925050604084013590505b9250925092565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b6000602082840312156105b55760006000fd5b8151801515811415156105c85760006000fd5b809150505b92915050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60005b838110156106fb5780820151818401525b6020810190506106df565b506000838301525050505b565b6000825161071a8184602087016106dc565b8083019150505b92915050565b60208152600082518060208401526107468160408501602087016106dc565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565bfea26469706673582212205bf0e1d20dbfcccae9a2a5a76cec6f4d43b9e9497c7117f48b1aa08144f58dd064736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TDaoVotingRewardsSafe__factory = /** @class */ (function (_super) {
    __extends(TDaoVotingRewardsSafe__factory, _super);
    function TDaoVotingRewardsSafe__factory() {
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
    TDaoVotingRewardsSafe__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TDaoVotingRewardsSafe__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TDaoVotingRewardsSafe__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TDaoVotingRewardsSafe__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TDaoVotingRewardsSafe__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TDaoVotingRewardsSafe__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TDaoVotingRewardsSafe__factory.bytecode = _bytecode;
    TDaoVotingRewardsSafe__factory.abi = _abi;
    return TDaoVotingRewardsSafe__factory;
}(ContractFactory));
export { TDaoVotingRewardsSafe__factory };
