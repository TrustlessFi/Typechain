/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  WETH9,
  WETH9Interface,
} from "../../../../contracts/core/mocks/WETH9";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "decimals",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600d81526020017f577261707065642045746865720000000000000000000000000000000000000081526020015060006000509081620000509190620001b9565b506040518060400160405280600481526020017f5745544800000000000000000000000000000000000000000000000000000000815260200150600160005090816200009d9190620001b9565b506012600260006101000a81548160ff021916908360ff160217905550348015620000c85760006000fd5b50620002965662000295565b634e487b7160e01b600052604160045260246000fd5b565b60008160011c9050600182168015156200010757607f821691505b602082108114156200012957634e487b7160e01b600052602260045260246000fd5b505b919050565b80600052506000602060002090505b90565b601f8211156200019857600081815260208120601f850160051c810160208610156200016c578190505b601f850160051c820191508090505b8181101562000194578281555b6001810190506200017b565b5050505b5050505b565b60008260011b6000198460031b1c1983161790505b92915050565b81516001600160401b03811115620001d657620001d5620000d4565b5b620001ee81620001e78454620000ec565b8462000142565b60006020809150601f83116001811462000227576000841562000212578387015190505b6200021e85826200019e565b8655506200028c565b601f198416620002378662000130565b60005b82811015620002605785890151825560018201915084860195505b84810190506200023a565b508582101562000280578488015160001960f88860031b161c1981168255505b505060018460011b0185555b5050505050505b565b5b610e0380620002a66000396000f3fe6080604052600436106100c05760003560e01c8063313ce56711610074578063a9059cbb1161004e578063a9059cbb14610271578063d0e30db0146102af578063dd62ed3e146102b9576100d7565b8063313ce567146101db57806370a082311461020757806395d89b4114610245576100d7565b806318160ddd116100a557806318160ddd1461014757806323b872dd146101735780632e1a7d4d146101b1576100d7565b806306fdde03146100dd578063095ea7b314610109576100d7565b366100d7575b6100d46102f763ffffffff16565b5b005b60006000fd5b3480156100ea5760006000fd5b506100f36103a5565b6040516101009190610b3e565b60405180910390f35b3480156101165760006000fd5b50610131600480360381019061012c9190610be0565b610436565b60405161013e9190610c0f565b60405180910390f35b3480156101545760006000fd5b5061015d610538565b60405161016a9190610c23565b60405180910390f35b3480156101805760006000fd5b5061019b60048036038101906101969190610c35565b610545565b6040516101a89190610c0f565b60405180910390f35b3480156101be5760006000fd5b506101d960048036038101906101d49190610c74565b6108e4565b005b3480156101e85760006000fd5b506101f1610a30565b6040516101fe9190610c92565b60405180910390f35b3480156102145760006000fd5b5061022f600480360381019061022a9190610ca7565b610a43565b60405161023c9190610c23565b60405180910390f35b3480156102525760006000fd5b5061025b610a5e565b6040516102689190610b3e565b60405180910390f35b34801561027e5760006000fd5b5061029960048036038101906102949190610be0565b610aef565b6040516102a69190610c0f565b60405180910390f35b6102b76102f7565b005b3480156102c65760006000fd5b506102e160048036038101906102dc9190610ccc565b610b0f565b6040516102ee9190610c23565b60405180910390f35b34600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461034b9190610d33565b9250508190909055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3460405161039a9190610c23565b60405180910390a25b565b600060005080546103b590610d52565b80601f01602080910402602001604051908101604052809291908181526020018280546103e190610d52565b801561042e5780601f106104035761010080835404028352916020019161042e565b820191906000526020600020905b81548152906001019060200180831161041157829003601f168201915b505050505081565b600081600460005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516105219190610c23565b60405180910390a360019050610532565b92915050565b6000479050610542565b90565b600081600360005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015151561059c5760006000fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561067d57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505414155b156107b55781600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101515156107175760006000fd5b81600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546107ab9190610dad565b9250508190909055505b81600360005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546108099190610dad565b92505081909090555081600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546108669190610d33565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108cc9190610c23565b60405180910390a3600190506108dd565b9392505050565b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101515156109395760006000fd5b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461098d9190610dad565b9250508190909055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156109dd573d600060003e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6582604051610a249190610c23565b60405180910390a25b50565b600260009054906101000a900460ff1681565b60036000506020528060005260406000206000915090505481565b60016000508054610a6e90610d52565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9a90610d52565b8015610ae75780601f10610abc57610100808354040283529160200191610ae7565b820191906000526020600020905b815481529060010190602001808311610aca57829003601f168201915b505050505081565b6000610b0233848461054563ffffffff16565b9050610b09565b92915050565b600460005060205281600052604060002060005060205280600052604060002060009150915050548156610dcc565b600060208083528351808285015260005b81811015610b6f57828187010151604082870101525b8281019050610b4f565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610bda5760006000fd5b5b919050565b6000600060408385031215610bf55760006000fd5b610bfe83610baf565b9150602083013590505b9250929050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b60006000600060608486031215610c4c5760006000fd5b610c5584610baf565b9250610c6360208501610baf565b9150604084013590505b9250925092565b600060208284031215610c875760006000fd5b813590505b92915050565b600060208201905060ff831682525b92915050565b600060208284031215610cba5760006000fd5b610cc382610baf565b90505b92915050565b6000600060408385031215610ce15760006000fd5b610cea83610baf565b9150610cf860208401610baf565b90505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828201905080821115610d4b57610d4a610d02565b5b5b92915050565b60008160011c905060018216801515610d6c57607f821691505b60208210811415610da6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b6000828203905081811115610dc557610dc4610d02565b5b5b92915050565bfea2646970667358221220fda826d2ebe379c583fb63e053ff846ddda45ad0a7c1c70defa00cf45a02488b64736f6c63430008100033";

type WETH9ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETH9ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH9__factory extends ContractFactory {
  constructor(...args: WETH9ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETH9> {
    return super.deploy(overrides || {}) as Promise<WETH9>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WETH9 {
    return super.attach(address) as WETH9;
  }
  override connect(signer: Signer): WETH9__factory {
    return super.connect(signer) as WETH9__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETH9Interface {
    return new utils.Interface(_abi) as WETH9Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH9 {
    return new Contract(address, _abi, signerOrProvider) as WETH9;
  }
}
