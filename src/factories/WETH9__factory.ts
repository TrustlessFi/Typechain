/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH9, WETH9Interface } from "../WETH9";

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
];

const _bytecode =
  "0x60806040526040518060400160405280600d81526020017f5772617070656420457468657200000000000000000000000000000000000000815260200150600060005090805190602001906100559291906100d7565b506040518060400160405280600481526020017f5745544800000000000000000000000000000000000000000000000000000000815260200150600160005090805190602001906100a79291906100d7565b506012600260006101000a81548160ff021916908360ff1602179055503480156100d15760006000fd5b50610187565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011857805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014a578251826000509090559160200191906001019061012a565b5b509050610158919061015c565b5090565b6101849190610166565b808211156101805760008181506000905550600101610166565b5090565b90565b610e3780620001976000396000f3fe6080604052600436106100c05760003560e01c8063313ce56711610074578063a9059cbb1161004e578063a9059cbb146103f6578063d0e30db01461046b578063dd62ed3e14610475576100c0565b8063313ce567146102cb57806370a08231146102fd57806395d89b4114610364576100c0565b806318160ddd116100a557806318160ddd146101cd57806323b872dd146101f95780632e1a7d4d1461028e576100c0565b806306fdde03146100c6578063095ea7b314610158576100c0565b60006000fd5b3480156100d35760006000fd5b506100dc6104fc565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011d5780820151818401525b602081019050610101565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101655760006000fd5b506101b36004803603604081101561017d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059d565b604051808215151515815260200191505060405180910390f35b3480156101da5760006000fd5b506101e361069f565b6040518082815260200191505060405180910390f35b3480156102065760006000fd5b506102746004803603606081101561021e5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106ac565b604051808215151515815260200191505060405180910390f35b34801561029b5760006000fd5b506102c9600480360360208110156102b35760006000fd5b8101908080359060200190929190505050610aba565b005b3480156102d85760006000fd5b506102e1610c42565b604051808260ff1660ff16815260200191505060405180910390f35b34801561030a5760006000fd5b5061034e600480360360208110156103225760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c55565b6040518082815260200191505060405180910390f35b3480156103715760006000fd5b5061037a610c70565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103bb5780820151818401525b60208101905061039f565b50505050905090810190601f1680156103e85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104035760006000fd5b506104516004803603604081101561041b5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d11565b604051808215151515815260200191505060405180910390f35b610473610d31565b005b3480156104825760006000fd5b506104e66004803603604081101561049a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd6565b6040518082815260200191505060405180910390f35b60006000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105955780601f1061056a57610100808354040283529160200191610595565b820191906000526020600020905b81548152906001019060200180831161057857829003601f168201915b505050505081565b600081600460005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a360019050610699565b92915050565b60004790506106a9565b90565b600081600360005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410151515610748576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260008152602001805060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561082957507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505414155b1561099d5781600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410151515610908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260008152602001805060200191505060405180910390fd5b81600460005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190909055505b81600360005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540392505081909090555081600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610ab3565b9392505050565b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410151515610b54576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260008152602001805060200191505060405180910390fd5b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190909055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610bef573d600060003e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040518082815260200191505060405180910390a25b50565b600260009054906101000a900460ff1681565b60036000506020528060005260406000206000915090505481565b60016000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d095780601f10610cde57610100808354040283529160200191610d09565b820191906000526020600020905b815481529060010190602001808311610cec57829003601f168201915b505050505081565b6000610d243384846106ac63ffffffff16565b9050610d2b565b92915050565b34600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190909055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a25b565b600460005060205281600052604060002060005060205280600052604060002060009150915050548156fea26469706673582212200da6638606e1664b11c34662f532884a3e814885d6b2de6eed3ea5bc94811f2564736f6c63430006060033";

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

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETH9> {
    return super.deploy(overrides || {}) as Promise<WETH9>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WETH9 {
    return super.attach(address) as WETH9;
  }
  connect(signer: Signer): WETH9__factory {
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
