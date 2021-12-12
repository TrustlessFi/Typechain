/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnforcedDecentralization,
  EnforcedDecentralizationInterface,
  ConstructorParamsStruct,
} from "../EnforcedDecentralization";

const _abi = [
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
            internalType: "address",
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

const _bytecode =
  "0x60c0604052600160026000509090553480156200001c5760006000fd5b5060405162002ed738038062002ed783398181016040528101906200004291906200076b565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b5050620000dd60006000620004b560201b60201c565b620000f160016000620004b560201b60201c565b6200010560026003620004b560201b60201c565b6200011960036003620004b560201b60201c565b600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000632c388d5d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000634ac8c5ae60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e97dcb6260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e9fad8ee60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016001600050600063eb02312060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550620004ad816040015182600001517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6200055260201b620019691760201c565b5b5062000807565b6040518060400160405280600067ffffffffffffffff1681526020018260ff16815260200150600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050505b5050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831015156200063957805182525b60208201915060208101905060208303925062000611565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146200069d576040519150601f19603f3d011682016040523d82523d6000602084013e620006a2565b606091505b5091509150818015620006e65750600081511480620006e55750808060200190516020811015620006d35760006000fd5b81019080805190602001909291905050505b5b15156200075e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b5050505662000806565b6000606082840312156200077d578081fd5b604051606081018181106001600160401b03821117156200079a57fe5b80604052508251620007ac81620007e9565b808252506020830151620007c081620007e9565b806020830152506040830151620007d781620007e9565b80604083015250809150505b92915050565b6001600160a01b03811681141515620008025760006000fd5b5b50565b5b60805160601c60a05160601c61267e6200085960003980611b925280611d265250806103c85280610413528061063f52806107bf5280610950528061133052806114315280611ca8525061267e6000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c80636f2b849f1161008d578063a43c36af11610067578063a43c36af14610251578063b8188c811461026d578063bd2ab47214610289578063eb023120146102b9576100e4565b80636f2b849f146101d2578063719e712d1461020257806375f12b2114610233576100e4565b80632c3ac786116100be5780632c3ac78614610156578063388b3cee1461018657806350e6c229146101b6576100e4565b8063055ad42e146100ea5780630c340a2414610108578063113cf1ab14610126576100e4565b60006000fd5b6100f26102d5565b6040516100ff9190612609565b60405180910390f35b6101106103c6565b60405161011d91906122ab565b60405180910390f35b610140600480360381019061013b9190612100565b6103ea565b60405161014d9190612263565b60405180910390f35b610170600480360381019061016b9190611fcb565b61040f565b60405161017d9190612263565b60405180910390f35b6101a0600480360381019061019b9190611fcb565b61094c565b6040516101ad9190612263565b60405180910390f35b6101d060048036038101906101cb9190612003565b610bdb565b005b6101ec60048036038101906101e79190611fcb565b610d20565b6040516101f99190612263565b60405180910390f35b61021c600480360381019061021791906121f4565b610d55565b60405161022a9291906125e3565b60405180910390f35b61023b610d9d565b6040516102489190612263565b60405180910390f35b61026b60048036038101906102669190612003565b610db0565b005b610287600480360381019061028291906121bf565b611070565b005b6102a3600480360381019061029e9190611fcb565b61132c565b6040516102b09190612263565b60405180910390f35b6102d360048036038101906102ce91906121f4565b6115f7565b005b6000600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16141561032757600090506103c3565b6000610337611b7563ffffffff16565b90506000600390505b60008160ff1611156103b7578167ffffffffffffffff16600360005060008360ff1660ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610156103a85780925050506103c3565b5b808060019003915050610340565b5060009150506103c356505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104785760006000fd5b505afa15801561048d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b1919061214a565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561063d57636e16ead260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561053a5760019050610946565b63c381c1e660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105905760019050610946565b63150147d760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105e65760019050610946565b63fc2a11e860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561063c5760019050610946565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a45760006000fd5b505afa1580156106b9573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dd9190612123565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107bd5763397d359260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107665760019050610946565b630b218d2460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107bc5760019050610946565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b1580156108245760006000fd5b505afa158015610839573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085d9190612171565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561093d57636161189060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108e65760019050610946565b6328d10de860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561093c5760019050610946565b5b60009050610946565b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156109ac5760009050610bd5565b63e97a99b660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a43575063b971dc0560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a92575063ff26df7260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ae157506383208f5360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b30575063a1c1f90d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b7f57506380304d0960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610bce5750638f40b82f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050610bd5565b92915050565b610be9611b9063ffffffff16565b610bf7611ca363ffffffff16565b6001600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610c4f84611d0363ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555080604051610cc09190612222565b60405180910390208273ffffffffffffffffffffffffffffffffffffffff167f7765b2c9b4f271477d3d98e0d032233ed6b45059eaf1f5815095b2f855bcfe1660405160405180910390a35b5b610d1b611d1763ffffffff16565b5b5050565b60046000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16905082565b600060009054906101000a900460ff1681565b6000610dc182611d0363ffffffff16565b9050610dd3838261132c63ffffffff16565b15610dde575061106c565b600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16151515610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990612390565b60405180910390fd5b610ed2838261040f63ffffffff16565b15610edd575061106c565b6000610eed6102d563ffffffff16565b9050600360ff168160ff16101515610f3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f31906123cf565b60405180910390fd5b610f4a848361094c63ffffffff16565b15610f9c5760028160ff16101515610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e9061250a565b60405180910390fd5b611069565b8373ffffffffffffffffffffffffffffffffffffffff1663113cf1ab836040518263ffffffff1660e01b8152600401610fd59190612277565b60206040518083038186803b158015610fee5760006000fd5b505afa158015611003573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102791906120d3565b1515611068576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105f906122d3565b60405180910390fd5b5b50505b5050565b61107e611b9063ffffffff16565b61108c611ca363ffffffff16565b600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1614151561110f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111069061240e565b60405180910390fd5b600061111f6102d563ffffffff16565b60ff16141515611164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115b90612549565b60405180910390fd5b8067ffffffffffffffff1661118162015180611da963ffffffff16565b67ffffffffffffffff161015156111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c490612351565b60405180910390fd5b8060036000506000600160ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061123462f142808267ffffffffffffffff16611ddf90919063ffffffff16565b60036000506000600260ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061129b6301e133808267ffffffffffffffff16611ddf90919063ffffffff16565b60036000506000600360ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f18e32a18f3c57a652a4a5c7d49e929120f265175598b362abd1716d0d64c2ad18160405161131091906125c7565b60405180910390a15b5b611328611d1763ffffffff16565b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561142f5763232948ea60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156113d857600190506115f1565b6380b5c66560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561142e57600190506115f1565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663511606306040518163ffffffff1660e01b815260040160206040518083038186803b1580156114965760006000fd5b505afa1580156114ab573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cf9190612198565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561154d575063e4e9bcca60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561155b57600190506115f1565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480156115da57506350e6c22960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156115e857600190506115f1565b600090506115f1565b92915050565b611605611b9063ffffffff16565b611613611ca363ffffffff16565b60008160ff1611151561165b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165290612312565b60405180910390fd5b8060ff16600161166f6102d563ffffffff16565b0160ff161415156116b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ac906124cb565b60405180910390fd5b600360ff168160ff1611151515611701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f89061248c565b60405180910390fd5b6000600360005060008360ff1660ff1681526020019081526020016000206000506040518060400160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460ff1660ff1660ff1681526020015050905061179362278d00611da963ffffffff16565b67ffffffffffffffff16816000015167ffffffffffffffff161015156117ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e590612588565b60405180910390fd5b6000816020015160ff1611151561183a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118319061244d565b60405180910390fd5b61185e62278d00826000015167ffffffffffffffff16611ddf90919063ffffffff16565b816000019067ffffffffffffffff16908167ffffffffffffffff168152602001505080602001805180919060019003909060ff1660ff168152602001505080600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050508160ff167f4c5477e514459ab04fc3defdfdc3db8562422e8e9b25a0e0050b1b81629757188260000151836020015160405161194c9291906125e3565b60405180910390a2505b5b611965611d1763ffffffff16565b5b50565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083101515611a4e57805182525b602082019150602081019050602083039250611a28565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611ab0576040519150601f19603f3d011682016040523d82523d6000602084013e611ab5565b606091505b5091509150818015611af65750600081511480611af55750808060200190516020811015611ae35760006000fd5b81019080805190602001909291905050505b5b1515611b6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b505050565b6000611b8842611e7c909063ffffffff16565b905080505b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611bf95760006000fd5b505af1158015611c0e573d600060003e3d6000fd5b50505050600260026000505414151515611c93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c50205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b611d007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611f0e63ffffffff16565b5b565b60008180519060200120905080505b919050565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611d8d5760006000fd5b505af1158015611da2573d600060003e3d6000fd5b505050505b565b6000611dd582611dbd611b7563ffffffff16565b67ffffffffffffffff16611ddf90919063ffffffff16565b905080505b919050565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515611e75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006801000000000000000082101515611f01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611f09565b919050565b801515611f86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b5056612647565b6000813590507fffffffff00000000000000000000000000000000000000000000000000000000811681141515611fc55760006000fd5b5b919050565b6000600060408385031215611fde578182fd5b8235611fe98161261e565b80925050611ff960208401611f8e565b90505b9250929050565b6000600060408385031215612016578182fd5b82356120218161261e565b8092505060208084013567ffffffffffffffff80821115612040578384fd5b818601915086601f8301121515612055578384fd5b81358181111561206157fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116820101818110848211171561209c57fe5b806040525081815288858386010111156120b4578586fd5b81858501868301378585838301015280955050505050505b9250929050565b6000602082840312156120e4578081fd5b8151801515811415156120f5578182fd5b809150505b92915050565b600060208284031215612111578081fd5b61211a82611f8e565b90505b92915050565b600060208284031215612134578081fd5b815161213f8161261e565b809150505b92915050565b60006020828403121561215b578081fd5b81516121668161261e565b809150505b92915050565b600060208284031215612182578081fd5b815161218d8161261e565b809150505b92915050565b6000602082840312156121a9578081fd5b81516121b48161261e565b809150505b92915050565b6000602082840312156121d0578081fd5b813567ffffffffffffffff8116811415156121e9578182fd5b809150505b92915050565b600060208284031215612205578081fd5b813560ff811681141515612217578182fd5b809150505b92915050565b60008251815b818110156122475760208186010151818501525b602081019050612228565b818111156122555782828501525b508083019150505b92915050565b600060208201905082151582525b92915050565b60006020820190507fffffffff00000000000000000000000000000000000000000000000000000000831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252601960208301527f55706461746520616374696f6e206e6f7420616c6c6f7765640000000000000060408301526060820190505b919050565b600060208252601260208301527f43616e742064656c61792030207068617365000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f4e6f7420656e6f756768207761726e696e67000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f416374696f6e20626c61636b6c6973746564000000000000000000000000000060408301526060820190505b919050565b600060208252601660208301527f5065726d616e656e7420616374696f6e73206f6e6c790000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f416c72656164792073657400000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f4e6f2064656c6179732072656d61696e696e670000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f556e6b6e6f776e2070686173650000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601960208301527f43616e206f6e6c792064656c6179206e6578742070686173650000000000000060408301526060820190505b919050565b600060208252601660208301527f557067726164652077696e646f7720657870697265640000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f4e6f74207068617365203000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601760208301527f5068617365207374617274206973206e6f74206e65617200000000000000000060408301526060820190505b919050565b600060208201905067ffffffffffffffff831682525b92915050565b600060408201905067ffffffffffffffff8416825260ff831660208301525b9392505050565b600060208201905060ff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156126435760006000fd5b5b50565bfea26469706673582212202a87eacd3d547397b83b03491c7d89eabf9ad730d4e3a5c382c137087e76979664736f6c63430007060033";

type EnforcedDecentralizationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnforcedDecentralizationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnforcedDecentralization__factory extends ContractFactory {
  constructor(...args: EnforcedDecentralizationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnforcedDecentralization> {
    return super.deploy(
      params,
      overrides || {}
    ) as Promise<EnforcedDecentralization>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): EnforcedDecentralization {
    return super.attach(address) as EnforcedDecentralization;
  }
  connect(signer: Signer): EnforcedDecentralization__factory {
    return super.connect(signer) as EnforcedDecentralization__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnforcedDecentralizationInterface {
    return new utils.Interface(_abi) as EnforcedDecentralizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnforcedDecentralization {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnforcedDecentralization;
  }
}
