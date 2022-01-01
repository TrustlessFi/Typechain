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
                    {
                        internalType: "contract IProtocolLock",
                        name: "ProtocolLock",
                        type: "address",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "Tcp",
                        type: "address",
                    },
                ],
                internalType: "struct IEnforcedDecentralization.ConstructorParams",
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
                name: "target",
                type: "address",
            },
            {
                indexed: true,
                internalType: "string",
                name: "signature",
                type: "string",
            },
        ],
        name: "ActionBlacklisted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
            },
        ],
        name: "PhaseOneStartTimeSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint8",
                name: "phase",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "delaysRemaining",
                type: "uint8",
            },
        ],
        name: "PhaseStartDelayed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "Stopped",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "locktime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "delaysRemaining",
                type: "uint8",
            },
        ],
        name: "UpdateLockDelayed",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "string",
                name: "signature",
                type: "string",
            },
        ],
        name: "blacklistAction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "currentPhase",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "phaseNumber",
                type: "uint8",
            },
        ],
        name: "delayPhaseStartTime",
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
                name: "",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        name: "isBlacklistedAction",
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
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "isPermanentAction",
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
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "isProtocolAction",
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
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "isUpgradeAction",
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
        inputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        name: "phaseInfo",
        outputs: [
            {
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
            },
            {
                internalType: "uint8",
                name: "phaseStartDelaysRemaining",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "string",
                name: "signature",
                type: "string",
            },
        ],
        name: "requireValidAction",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "phaseOneStartTime",
                type: "uint64",
            },
        ],
        name: "setPhaseOneStartTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "stopped",
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
        inputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        name: "validUpdate",
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
];
var _bytecode = "0x60c0604052600160026000509090553480156200001c5760006000fd5b50604051620035de380380620035de8339818101604052810190620000429190620008e6565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b5050620000dd60006000620004b560201b60201c565b620000f160016000620004b560201b60201c565b6200010560026003620004b560201b60201c565b6200011960036003620004b560201b60201c565b600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000632c388d5d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000634ac8c5ae60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e97dcb6260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e9fad8ee60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016001600050600063eb02312060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550620004ad816040015182600001517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6200055260201b6200197c1760201c565b5b5062000b50565b6040518060400160405280600067ffffffffffffffff1681526020018260ff16815260200150600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050505b5050565b620005dd8363095ea7b360e01b84846040516024016200057492919062000997565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620005e360201b60201c565b5b505050565b60006200064f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff16620006bd60201b62001a09179092919060201c565b9050600081511115620006b75780806020019051810190620006729190620008b7565b1515620006b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006ad9062000a95565b60405180910390fd5b5b505b5050565b6060620006d48484600085620006e360201b60201c565b9050620006dc565b9392505050565b60608247101515156200072d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200072490620009f1565b60405180910390fd5b6200073e856200081e60201b60201c565b151562000782576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007799062000a56565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff168587604051620007ae919062000976565b60006040518083038185875af1925050503d8060008114620007ed576040519150601f19603f3d011682016040523d82523d6000602084013e620007f2565b606091505b50915091506200080a8282866200083960201b60201c565b92505050620008165650505b949350505050565b60006000823b9050600081119150506200083456505b919050565b606083156200085057829050620008ab56620008aa565b6000835111156200086a5782518084602001fd50620008a9565b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008a09190620009b9565b60405180910390fd5b5b5b93925050505662000b4f565b600060208284031215620008c9578081fd5b815180151581141515620008db578182fd5b809150505b92915050565b600060608284031215620008f8578081fd5b604051606081018181106001600160401b03821117156200092757634e487b7160e01b83526041600452602483fd5b80604052508251620009398162000b32565b8082525060208301516200094d8162000b32565b806020830152506040830151620009648162000b32565b80604083015250809150505b92915050565b600082516200098a81846020870162000afa565b8083019150505b92915050565b60006040820190506001600160a01b03841682528260208301525b9392505050565b6020815260008251806020840152620009da81604085016020870162000afa565b6040601f19601f8301168401019150505b92915050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60005b8381101562000b1b5780820151818401525b60208101905062000afd565b8381111562000b2b576000848401525b505050505b565b6001600160a01b0381168114151562000b4b5760006000fd5b505b565b5b60805160601c60a05160601c612a2a62000bb460003960008181611a490152611ba70152600081816103cd0152818161041801528181610644015281816107c40152818161095501528181611335015281816114360152611b290152612a2a6000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c80636f2b849f1161008d578063a43c36af11610067578063a43c36af14610251578063b8188c811461026d578063bd2ab47214610289578063eb023120146102b9576100e4565b80636f2b849f146101d2578063719e712d1461020257806375f12b2114610233576100e4565b80632c3ac786116100be5780632c3ac78614610156578063388b3cee1461018657806350e6c229146101b6576100e4565b8063055ad42e146100ea5780630c340a2414610108578063113cf1ab14610126576100e4565b60006000fd5b6100f26102d5565b6040516100ff919061287d565b60405180910390f35b6101106103cb565b60405161011d9190612305565b60405180910390f35b610140600480360381019061013b919061212e565b6103ef565b60405161014d91906122bd565b60405180910390f35b610170600480360381019061016b9190611fe3565b610414565b60405161017d91906122bd565b60405180910390f35b6101a0600480360381019061019b9190611fe3565b610951565b6040516101ad91906122bd565b60405180910390f35b6101d060048036038101906101cb919061201b565b610be0565b005b6101ec60048036038101906101e79190611fe3565b610d25565b6040516101f991906122bd565b60405180910390f35b61021c60048036038101906102179190612222565b610d5a565b60405161022a929190612857565b60405180910390f35b61023b610da2565b60405161024891906122bd565b60405180910390f35b61026b6004803603810190610266919061201b565b610db5565b005b610287600480360381019061028291906121ed565b611075565b005b6102a3600480360381019061029e9190611fe3565b611331565b6040516102b091906122bd565b60405180910390f35b6102d360048036038101906102ce9190612222565b6115fc565b005b6000600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16141561032757600090506103c8565b6000610337611a2c63ffffffff16565b90506000600390505b60008160ff1611156103bc578167ffffffffffffffff16600360005060008360ff1660ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610156103a85780925050506103c8565b5b80806103b490612926565b915050610340565b5060009150506103c856505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561047d5760006000fd5b505afa158015610492573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b69190612178565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064257636e16ead260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561053f576001905061094b565b63c381c1e660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610595576001905061094b565b63150147d760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105eb576001905061094b565b63fc2a11e860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610641576001905061094b565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a95760006000fd5b505afa1580156106be573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e29190612151565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c25763397d359260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561076b576001905061094b565b630b218d2460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107c1576001905061094b565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b1580156108295760006000fd5b505afa15801561083e573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610862919061219f565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561094257636161189060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108eb576001905061094b565b6328d10de860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610941576001905061094b565b5b6000905061094b565b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156109b15760009050610bda565b63e97a99b660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a48575063b971dc0560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a97575063ff26df7260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ae657506383208f5360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b35575063a1c1f90d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b8457506380304d0960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610bd35750638f40b82f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050610bda565b92915050565b610bee611a4763ffffffff16565b610bfc611b2463ffffffff16565b6001600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610c5484611b8463ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555080604051610cc5919061226f565b60405180910390208273ffffffffffffffffffffffffffffffffffffffff167f7765b2c9b4f271477d3d98e0d032233ed6b45059eaf1f5815095b2f855bcfe1660405160405180910390a35b5b610d20611b9863ffffffff16565b5b5050565b60046000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16905082565b600060009054906101000a900460ff1681565b6000610dc682611b8463ffffffff16565b9050610dd8838261133163ffffffff16565b15610de35750611071565b600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16151515610ec7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebe90612521565b60405180910390fd5b610ed7838261041463ffffffff16565b15610ee25750611071565b6000610ef26102d563ffffffff16565b9050600360ff168160ff16101515610f3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3690612560565b60405180910390fd5b610f4f848361095163ffffffff16565b15610fa15760028160ff16101515610f9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f939061269b565b60405180910390fd5b61106e565b8373ffffffffffffffffffffffffffffffffffffffff1663113cf1ab836040518263ffffffff1660e01b8152600401610fda91906122d1565b60206040518083038186803b158015610ff35760006000fd5b505afa158015611008573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102c9190612101565b151561106d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106490612381565b60405180910390fd5b5b50505b5050565b611083611a4763ffffffff16565b611091611b2463ffffffff16565b600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16141515611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b9061259f565b60405180910390fd5b60006111246102d563ffffffff16565b60ff16141515611169576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116090612719565b60405180910390fd5b8067ffffffffffffffff1661118662015180611c2a63ffffffff16565b67ffffffffffffffff161015156111d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c9906123ff565b60405180910390fd5b8060036000506000600160ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061123962f142808267ffffffffffffffff16611c6090919063ffffffff16565b60036000506000600260ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506112a06301e133808267ffffffffffffffff16611c6090919063ffffffff16565b60036000506000600360ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f18e32a18f3c57a652a4a5c7d49e929120f265175598b362abd1716d0d64c2ad181604051611315919061283b565b60405180910390a15b5b61132d611b9863ffffffff16565b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114345763232948ea60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156113dd57600190506115f6565b6380b5c66560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561143357600190506115f6565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663511606306040518163ffffffff1660e01b815260040160206040518083038186803b15801561149b5760006000fd5b505afa1580156114b0573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d491906121c6565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148015611552575063e4e9bcca60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561156057600190506115f6565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480156115df57506350e6c22960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156115ed57600190506115f6565b600090506115f6565b92915050565b61160a611a4763ffffffff16565b611618611b2463ffffffff16565b60008160ff16111515611660576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611657906123c0565b60405180910390fd5b8060ff1660016116746102d563ffffffff16565b61167e91906128c5565b60ff161415156116c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ba9061265c565b60405180910390fd5b600360ff168160ff161115151561170f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117069061261d565b60405180910390fd5b6000600360005060008360ff1660ff1681526020019081526020016000206000506040518060400160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460ff1660ff1660ff168152602001505090506117a162278d00611c2a63ffffffff16565b67ffffffffffffffff16816000015167ffffffffffffffff161015156117fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f3906127fc565b60405180910390fd5b6000816020015160ff16111515611848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183f906125de565b60405180910390fd5b61186c62278d00826000015167ffffffffffffffff16611c6090919063ffffffff16565b816000019067ffffffffffffffff16908167ffffffffffffffff16815260200150508060200180518091906118a090612926565b909060ff1660ff168152602001505080600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050508160ff167f4c5477e514459ab04fc3defdfdc3db8562422e8e9b25a0e0050b1b81629757188260000151836020015160405161195f929190612857565b60405180910390a2505b5b611978611b9863ffffffff16565b5b50565b611a038363095ea7b360e01b848460405160240161199b92919061228e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c7b63ffffffff16565b5b505050565b6060611a1e8484600085611d4863ffffffff16565b9050611a25565b9392505050565b6000611a3f42611e74909063ffffffff16565b905080505b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611ab05760006000fd5b505af1158015611ac5573d600060003e3d6000fd5b50505050600260026000505414151515611b14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0b906124e2565b60405180910390fd5b600260026000508190909055505b565b611b817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ed063ffffffff16565b5b565b60008180519060200120905080505b919050565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611c0e5760006000fd5b505af1158015611c23573d600060003e3d6000fd5b505050505b565b6000611c5682611c3e611a2c63ffffffff16565b67ffffffffffffffff16611c6090919063ffffffff16565b905080505b919050565b60008183611c6e9190612892565b9050611c75565b92915050565b6000611ce0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff16611a099092919063ffffffff16565b9050600081511115611d425780806020019051810190611d009190612101565b1515611d41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3890612758565b60405180910390fd5b5b505b5050565b6060824710151515611d8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d869061243e565b60405180910390fd5b611d9e85611f1663ffffffff16565b1515611ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dd6906126da565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff168587604051611e099190612250565b60006040518083038185875af1925050503d8060008114611e46576040519150601f19603f3d011682016040523d82523d6000602084013e611e4b565b606091505b5091509150611e61828286611f3063ffffffff16565b92505050611e6c5650505b949350505050565b60006801000000000000000082101515611ec3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eba906127bd565b60405180910390fd5b819050611ecb565b919050565b801515611f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f09906124a3565b60405180910390fd5b5b50565b60006000823b905060008111915050611f2b56505b919050565b60608315611f4457829050611f9b56611f9a565b600083511115611f5c5782518084602001fd50611f99565b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f90919061232d565b60405180910390fd5b5b5b9392505050566129f3565b6000813590507fffffffff00000000000000000000000000000000000000000000000000000000811681141515611fdd5760006000fd5b5b919050565b6000600060408385031215611ff6578182fd5b8235612001816129ca565b8092505061201160208401611fa6565b90505b9250929050565b600060006040838503121561202e578182fd5b8235612039816129ca565b80925050602083013567ffffffffffffffff80821115612057578283fd5b818501915085601f830112151561206c578283fd5b81358181111561207f5761207e612999565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f86011601168101915080821084831117156120c7576120c6612999565b5b816040528281528860208487010111156120df578586fd5b82602086016020830137856020848301015280955050505050505b9250929050565b600060208284031215612112578081fd5b815180151581141515612123578182fd5b809150505b92915050565b60006020828403121561213f578081fd5b61214882611fa6565b90505b92915050565b600060208284031215612162578081fd5b815161216d816129ca565b809150505b92915050565b600060208284031215612189578081fd5b8151612194816129ca565b809150505b92915050565b6000602082840312156121b0578081fd5b81516121bb816129ca565b809150505b92915050565b6000602082840312156121d7578081fd5b81516121e2816129ca565b809150505b92915050565b6000602082840312156121fe578081fd5b813567ffffffffffffffff811681141515612217578182fd5b809150505b92915050565b600060208284031215612233578081fd5b813560ff811681141515612245578182fd5b809150505b92915050565b600082516122628184602087016128f1565b8083019150505b92915050565b600082516122818184602087016128f1565b8083019150505b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060208201905082151582525b92915050565b60006020820190507fffffffff00000000000000000000000000000000000000000000000000000000831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b602081526000825180602084015261234c8160408501602087016128f1565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b60208152601960208201527f55706461746520616374696f6e206e6f7420616c6c6f77656400000000000000604082015260006060820190505b919050565b60208152601260208201527f43616e742064656c617920302070686173650000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f4e6f7420656e6f756768207761726e696e670000000000000000000000000000604082015260006060820190505b919050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600d60208201527f4c50205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f416374696f6e20626c61636b6c69737465640000000000000000000000000000604082015260006060820190505b919050565b60208152601660208201527f5065726d616e656e7420616374696f6e73206f6e6c7900000000000000000000604082015260006060820190505b919050565b60208152600b60208201527f416c726561647920736574000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601360208201527f4e6f2064656c6179732072656d61696e696e6700000000000000000000000000604082015260006060820190505b919050565b60208152600d60208201527f556e6b6e6f776e20706861736500000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601960208201527f43616e206f6e6c792064656c6179206e65787420706861736500000000000000604082015260006060820190505b919050565b60208152601660208201527f557067726164652077696e646f77206578706972656400000000000000000000604082015260006060820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60208152600b60208201527f4e6f742070686173652030000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601760208201527f5068617365207374617274206973206e6f74206e656172000000000000000000604082015260006060820190505b919050565b600060208201905067ffffffffffffffff831682525b92915050565b600060408201905067ffffffffffffffff8416825260ff831660208301525b9392505050565b600060208201905060ff831682525b92915050565b600067ffffffffffffffff8083168185168083038211156128b6576128b5612968565b5b80820193505050505b92915050565b600060ff821660ff84168060ff038211156128e3576128e2612968565b5b808201925050505b92915050565b60005b838110156129105780820151818401525b6020810190506128f4565b8381111561291f576000848401525b505050505b565b600060ff821680151561293c5761293b612968565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019150505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff8116811415156129ef5760006000fd5b505b565bfea2646970667358221220f389904d47dc82fb6891f3d67661d8b7488899089c54624610bfd8d3a8ae6ee164736f6c63430008040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var EnforcedDecentralization__factory = /** @class */ (function (_super) {
    __extends(EnforcedDecentralization__factory, _super);
    function EnforcedDecentralization__factory() {
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
    EnforcedDecentralization__factory.prototype.deploy = function (params, overrides) {
        return _super.prototype.deploy.call(this, params, overrides || {});
    };
    EnforcedDecentralization__factory.prototype.getDeployTransaction = function (params, overrides) {
        return _super.prototype.getDeployTransaction.call(this, params, overrides || {});
    };
    EnforcedDecentralization__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    EnforcedDecentralization__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    EnforcedDecentralization__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    EnforcedDecentralization__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    EnforcedDecentralization__factory.bytecode = _bytecode;
    EnforcedDecentralization__factory.abi = _abi;
    return EnforcedDecentralization__factory;
}(ContractFactory));
export { EnforcedDecentralization__factory };
