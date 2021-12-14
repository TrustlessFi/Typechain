/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProtocolLock,
  ProtocolLockInterface,
  ConstructorParamsStruct,
} from "../ProtocolLock";

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
        ],
        internalType: "struct IProtocolLock.ConstructorParams",
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
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerAuthorized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerUnauthorized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "authorizeCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorizedCaller",
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
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
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
        name: "caller",
        type: "address",
      },
    ],
    name: "unauthorizeCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526001600160005090905534801561001b5760006000fd5b50604051610796380380610796833981810160405281019061003d9190610087565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100e1566100e0565b600060208284031215610098578081fd5b604051602081018181106001600160401b03821117156100b457fe5b806040525082516001600160a01b038116811415156100d1578283fd5b80825250809150505b92915050565b5b60805160601c61068e6101086000398061011952806101405280610240525061068e6000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c806398f6ef121161005157806398f6ef12146100d3578063e97dcb6214610103578063e9fad8ee1461010d57610077565b80630c340a241461007d5780632c388d5d1461009b5780634ac8c5ae146100b757610077565b60006000fd5b610085610117565b6040516100929190610572565b60405180910390f35b6100b560048036038101906100b0919061051d565b61013b565b005b6100d160048036038101906100cc919061051d565b61023b565b005b6100ed60048036038101906100e8919061051d565b61033b565b6040516100fa919061055e565b60405180910390f35b61010b610360565b005b61011561041a565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b6101987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6001600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f6acfd92212f0ec670af78f8ba2273e4a85ac17023475650c25be0440602bff2d60405160405180910390a25b5b50565b6102987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f37967118b05f7af84a44112f7e4b59ab8aa3a73cebb4154828b43b934224522a60405160405180910390a25b5b50565b600060005060205280600052604060002060009150909054906101000a900460ff1681565b6103be600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b600260016000505414151515610409576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610400906105d9565b60405180910390fd5b600260016000508190909055505b5b565b610478600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b60026001600050541415156104c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b99061059a565b60405180910390fd5b600160016000508190909055505b5b565b801515610515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050c90610618565b60405180910390fd5b5b5056610657565b60006020828403121561052e578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515610553578182fd5b809150505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252600860208301527f504c206572726f7200000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f504c205265656e7472616e63790000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f504c3a204e6f7420417574686f72697a6564000000000000000000000000000060408301526060820190505b919050565bfea2646970667358221220639cd4e3143b06623e4673e6dd61d8f4d18be197fef50586274b91028bafe9c864736f6c63430007060033";

type ProtocolLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolLock__factory extends ContractFactory {
  constructor(...args: ProtocolLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProtocolLock> {
    return super.deploy(params, overrides || {}) as Promise<ProtocolLock>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): ProtocolLock {
    return super.attach(address) as ProtocolLock;
  }
  connect(signer: Signer): ProtocolLock__factory {
    return super.connect(signer) as ProtocolLock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolLockInterface {
    return new utils.Interface(_abi) as ProtocolLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolLock {
    return new Contract(address, _abi, signerOrProvider) as ProtocolLock;
  }
}
