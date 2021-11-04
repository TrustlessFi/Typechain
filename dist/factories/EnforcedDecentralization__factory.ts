/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnforcedDecentralization,
  EnforcedDecentralizationInterface,
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
  "0x60c0604052600160026000509090553480156200001c5760006000fd5b5060405162002e8138038062002e8183398181016040528101906200004291906200076b565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b5050620000dd60006000620004b560201b60201c565b620000f160016000620004b560201b60201c565b6200010560026003620004b560201b60201c565b6200011960036003620004b560201b60201c565b600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000632c388d5d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000634ac8c5ae60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e97dcb6260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e9fad8ee60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016001600050600063eb02312060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550620004ad816040015182600001517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6200055260201b620019131760201c565b5b5062000807565b6040518060400160405280600067ffffffffffffffff1681526020018260ff16815260200150600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050505b5050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831015156200063957805182525b60208201915060208101905060208303925062000611565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146200069d576040519150601f19603f3d011682016040523d82523d6000602084013e620006a2565b606091505b5091509150818015620006e65750600081511480620006e55750808060200190516020811015620006d35760006000fd5b81019080805190602001909291905050505b5b15156200075e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b5050505662000806565b6000606082840312156200077d578081fd5b604051606081018181106001600160401b03821117156200079a57fe5b80604052508251620007ac81620007e9565b808252506020830151620007c081620007e9565b806020830152506040830151620007d781620007e9565b80604083015250809150505b92915050565b6001600160a01b03811681141515620008025760006000fd5b5b50565b5b60805160601c60a05160601c6126286200085960003980611b3c5280611cd05250806103c8528061041352806105e9528061076952806108fa52806112da52806113db5280611c5252506126286000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c80636f2b849f1161008d578063a43c36af11610067578063a43c36af14610251578063b8188c811461026d578063bd2ab47214610289578063eb023120146102b9576100e4565b80636f2b849f146101d2578063719e712d1461020257806375f12b2114610233576100e4565b80632c3ac786116100be5780632c3ac78614610156578063388b3cee1461018657806350e6c229146101b6576100e4565b8063055ad42e146100ea5780630c340a2414610108578063113cf1ab14610126576100e4565b60006000fd5b6100f26102d5565b6040516100ff91906125b3565b60405180910390f35b6101106103c6565b60405161011d9190612255565b60405180910390f35b610140600480360381019061013b91906120aa565b6103ea565b60405161014d919061220d565b60405180910390f35b610170600480360381019061016b9190611f75565b61040f565b60405161017d919061220d565b60405180910390f35b6101a0600480360381019061019b9190611f75565b6108f6565b6040516101ad919061220d565b60405180910390f35b6101d060048036038101906101cb9190611fad565b610b85565b005b6101ec60048036038101906101e79190611f75565b610cca565b6040516101f9919061220d565b60405180910390f35b61021c6004803603810190610217919061219e565b610cff565b60405161022a92919061258d565b60405180910390f35b61023b610d47565b604051610248919061220d565b60405180910390f35b61026b60048036038101906102669190611fad565b610d5a565b005b61028760048036038101906102829190612169565b61101a565b005b6102a3600480360381019061029e9190611f75565b6112d6565b6040516102b0919061220d565b60405180910390f35b6102d360048036038101906102ce919061219e565b6115a1565b005b6000600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16141561032757600090506103c3565b6000610337611b1f63ffffffff16565b90506000600390505b60008160ff1611156103b7578167ffffffffffffffff16600360005060008360ff1660ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610156103a85780925050506103c3565b5b808060019003915050610340565b5060009150506103c356505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104785760006000fd5b505afa15801561048d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b191906120f4565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e757636e16ead260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561053a57600190506108f0565b63c381c1e660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561059057600190506108f0565b63150147d760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105e657600190506108f0565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561064e5760006000fd5b505afa158015610663573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068791906120cd565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107675763397d359260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561071057600190506108f0565b630b218d2460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561076657600190506108f0565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b1580156107ce5760006000fd5b505afa1580156107e3573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610807919061211b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108e757636161189060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561089057600190506108f0565b6328d10de860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108e657600190506108f0565b5b600090506108f0565b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156109565760009050610b7f565b63e97a99b660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806109ed575063b971dc0560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a3c575063ff26df7260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a8b57506383208f5360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ada575063a1c1f90d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b2957506380304d0960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b785750638f40b82f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050610b7f565b92915050565b610b93611b3a63ffffffff16565b610ba1611c4d63ffffffff16565b6001600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610bf984611cad63ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555080604051610c6a91906121cc565b60405180910390208273ffffffffffffffffffffffffffffffffffffffff167f7765b2c9b4f271477d3d98e0d032233ed6b45059eaf1f5815095b2f855bcfe1660405160405180910390a35b5b610cc5611cc163ffffffff16565b5b5050565b60046000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16905082565b600060009054906101000a900460ff1681565b6000610d6b82611cad63ffffffff16565b9050610d7d83826112d663ffffffff16565b15610d885750611016565b600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16151515610e6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e639061233a565b60405180910390fd5b610e7c838261040f63ffffffff16565b15610e875750611016565b6000610e976102d563ffffffff16565b9050600360ff168160ff16101515610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb90612379565b60405180910390fd5b610ef484836108f663ffffffff16565b15610f465760028160ff16101515610f41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f38906124b4565b60405180910390fd5b611013565b8373ffffffffffffffffffffffffffffffffffffffff1663113cf1ab836040518263ffffffff1660e01b8152600401610f7f9190612221565b60206040518083038186803b158015610f985760006000fd5b505afa158015610fad573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd1919061207d565b1515611012576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110099061227d565b60405180910390fd5b5b50505b5050565b611028611b3a63ffffffff16565b611036611c4d63ffffffff16565b600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff161415156110b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b0906123b8565b60405180910390fd5b60006110c96102d563ffffffff16565b60ff1614151561110e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611105906124f3565b60405180910390fd5b8067ffffffffffffffff1661112b62015180611d5363ffffffff16565b67ffffffffffffffff16101515611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e906122fb565b60405180910390fd5b8060036000506000600160ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506111de62f142808267ffffffffffffffff16611d8990919063ffffffff16565b60036000506000600260ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506112456301e133808267ffffffffffffffff16611d8990919063ffffffff16565b60036000506000600360ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f18e32a18f3c57a652a4a5c7d49e929120f265175598b362abd1716d0d64c2ad1816040516112ba9190612571565b60405180910390a15b5b6112d2611cc163ffffffff16565b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113d95763232948ea60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611382576001905061159b565b6380b5c66560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156113d8576001905061159b565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663511606306040518163ffffffff1660e01b815260040160206040518083038186803b1580156114405760006000fd5b505afa158015611455573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114799190612142565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480156114f7575063e4e9bcca60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611505576001905061159b565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561158457506350e6c22960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611592576001905061159b565b6000905061159b565b92915050565b6115af611b3a63ffffffff16565b6115bd611c4d63ffffffff16565b60008160ff16111515611605576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fc906122bc565b60405180910390fd5b8060ff1660016116196102d563ffffffff16565b0160ff1614151561165f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165690612475565b60405180910390fd5b600360ff168160ff16111515156116ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a290612436565b60405180910390fd5b6000600360005060008360ff1660ff1681526020019081526020016000206000506040518060400160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460ff1660ff1660ff1681526020015050905061173d62278d00611d5363ffffffff16565b67ffffffffffffffff16816000015167ffffffffffffffff16101515611798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178f90612532565b60405180910390fd5b6000816020015160ff161115156117e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117db906123f7565b60405180910390fd5b61180862278d00826000015167ffffffffffffffff16611d8990919063ffffffff16565b816000019067ffffffffffffffff16908167ffffffffffffffff168152602001505080602001805180919060019003909060ff1660ff168152602001505080600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050508160ff167f4c5477e514459ab04fc3defdfdc3db8562422e8e9b25a0e0050b1b8162975718826000015183602001516040516118f692919061258d565b60405180910390a2505b5b61190f611cc163ffffffff16565b5b50565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831015156119f857805182525b6020820191506020810190506020830392506119d2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611a5a576040519150601f19603f3d011682016040523d82523d6000602084013e611a5f565b606091505b5091509150818015611aa05750600081511480611a9f5750808060200190516020811015611a8d5760006000fd5b81019080805190602001909291905050505b5b1515611b17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b505050565b6000611b3242611e26909063ffffffff16565b905080505b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611ba35760006000fd5b505af1158015611bb8573d600060003e3d6000fd5b50505050600260026000505414151515611c3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c50205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b611caa7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611eb863ffffffff16565b5b565b60008180519060200120905080505b919050565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611d375760006000fd5b505af1158015611d4c573d600060003e3d6000fd5b505050505b565b6000611d7f82611d67611b1f63ffffffff16565b67ffffffffffffffff16611d8990919063ffffffff16565b905080505b919050565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515611e1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006801000000000000000082101515611eab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611eb3565b919050565b801515611f30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50566125f1565b6000813590507fffffffff00000000000000000000000000000000000000000000000000000000811681141515611f6f5760006000fd5b5b919050565b6000600060408385031215611f88578182fd5b8235611f93816125c8565b80925050611fa360208401611f38565b90505b9250929050565b6000600060408385031215611fc0578182fd5b8235611fcb816125c8565b8092505060208084013567ffffffffffffffff80821115611fea578384fd5b818601915086601f8301121515611fff578384fd5b81358181111561200b57fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116820101818110848211171561204657fe5b8060405250818152888583860101111561205e578586fd5b81858501868301378585838301015280955050505050505b9250929050565b60006020828403121561208e578081fd5b81518015158114151561209f578182fd5b809150505b92915050565b6000602082840312156120bb578081fd5b6120c482611f38565b90505b92915050565b6000602082840312156120de578081fd5b81516120e9816125c8565b809150505b92915050565b600060208284031215612105578081fd5b8151612110816125c8565b809150505b92915050565b60006020828403121561212c578081fd5b8151612137816125c8565b809150505b92915050565b600060208284031215612153578081fd5b815161215e816125c8565b809150505b92915050565b60006020828403121561217a578081fd5b813567ffffffffffffffff811681141515612193578182fd5b809150505b92915050565b6000602082840312156121af578081fd5b813560ff8116811415156121c1578182fd5b809150505b92915050565b60008251815b818110156121f15760208186010151818501525b6020810190506121d2565b818111156121ff5782828501525b508083019150505b92915050565b600060208201905082151582525b92915050565b60006020820190507fffffffff00000000000000000000000000000000000000000000000000000000831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252601960208301527f55706461746520616374696f6e206e6f7420616c6c6f7765640000000000000060408301526060820190505b919050565b600060208252601260208301527f43616e742064656c61792030207068617365000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f4e6f7420656e6f756768207761726e696e67000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f416374696f6e20626c61636b6c6973746564000000000000000000000000000060408301526060820190505b919050565b600060208252601660208301527f5065726d616e656e7420616374696f6e73206f6e6c790000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f416c72656164792073657400000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f4e6f2064656c6179732072656d61696e696e670000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f556e6b6e6f776e2070686173650000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601960208301527f43616e206f6e6c792064656c6179206e6578742070686173650000000000000060408301526060820190505b919050565b600060208252601660208301527f557067726164652077696e646f7720657870697265640000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f4e6f74207068617365203000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601760208301527f5068617365207374617274206973206e6f74206e65617200000000000000000060408301526060820190505b919050565b600060208201905067ffffffffffffffff831682525b92915050565b600060408201905067ffffffffffffffff8416825260ff831660208301525b9392505050565b600060208201905060ff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156125ed5760006000fd5b5b50565bfea264697066735822122038ce7322fd279e2b882f8285e99f81dc6dba93b7272695d3d94bd24200b1754d64736f6c63430007060033";

export class EnforcedDecentralization__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    params: { Governor: string; ProtocolLock: string; Tcp: string },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnforcedDecentralization> {
    return super.deploy(
      params,
      overrides || {}
    ) as Promise<EnforcedDecentralization>;
  }
  getDeployTransaction(
    params: { Governor: string; ProtocolLock: string; Tcp: string },
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
