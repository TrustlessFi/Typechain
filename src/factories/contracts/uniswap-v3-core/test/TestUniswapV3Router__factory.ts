/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestUniswapV3Router,
  TestUniswapV3RouterInterface,
} from "../../../../contracts/uniswap-v3-core/test/TestUniswapV3Router";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
    ],
    name: "SwapCallback",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolInput",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOutput",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
    ],
    name: "swapForExact0Multi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolInput",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOutput",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
    ],
    name: "swapForExact1Multi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610f26806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063c35a2b681461004c578063c96aa6c714610068578063fa461e331461008457610046565b60006000fd5b6100666004803603810190610061919061099d565b6100a0565b005b610082600480360381019061007d919061099d565b61021d565b005b61009e600480360381019061009991906109fa565b6103a9565b005b6000600167ffffffffffffffff8111156100bd576100bc610a8a565b5b6040519080825280602002602001820160405280156100eb5781602001602082028036833780820191505090505b5090508381600081518110151561010557610104610abb565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150508273ffffffffffffffffffffffffffffffffffffffff1663128acb088660016101728661091f909063ffffffff16565b61017b90610b1d565b60016401000276a361018d9190610b5c565b86336040516020016101a0929190610b9b565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016101cf959493929190610c1e565b6040604051808303816000875af11580156101ef573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102139190610cd2565b5050505b50505050565b6000600167ffffffffffffffff81111561023a57610239610a8a565b5b6040519080825280602002602001820160405280156102685781602001602082028036833780820191505090505b5090508381600081518110151561028257610281610abb565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150508273ffffffffffffffffffffffffffffffffffffffff1663128acb088660006102ef8661091f909063ffffffff16565b6102f890610b1d565b600173fffd8963efd1fc6a506488495d951d5263988d266103199190610cfa565b863360405160200161032c929190610b9b565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161035b959493929190610c1e565b6040604051808303816000875af115801561037b573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190610cd2565b5050505b50505050565b7fd48241df4a75e663b29e55f9506b31f77ed0f48cfe7e7612d1163144995dc1ca84846040516103da929190610d38565b60405180910390a16000600083838101906103f59190610d51565b9150915060018251141561072457600060008713610482573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610459573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d9190610e5b565b6104f3565b3373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104ce573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f29190610e5b565b5b90506000600088136105055786610507565b875b9050600084600081518110151561052157610520610abb565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610574573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105989190610e5b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161490508460008151811015156105de576105dd610abb565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663128acb0833838561060d90610b1d565b8561063857600173fffd8963efd1fc6a506488495d951d5263988d266106339190610cfa565b61064b565b60016401000276a361064a9190610b5c565b5b600067ffffffffffffffff81111561066657610665610a8a565b5b6040519080825280602002602001820160405280156106945781602001602082028036833780820191505090505b508a6040516020016106a7929190610b9b565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016106d6959493929190610c1e565b6040604051808303816000875af11580156106f6573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071a9190610cd2565b5050505050610916565b6000861315610823573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610779573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079d9190610e5b565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8233896040518463ffffffff1660e01b81526004016107d993929190610e84565b6020604051808303816000875af11580156107f9573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081d9190610ebe565b50610915565b3373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561086f573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108939190610e5b565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b81526004016108cf93929190610e84565b6020604051808303816000875af11580156108ef573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109139190610ebe565b505b5b50505b50505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821015156109505760006000fd5b81905080505b91905056610eef565b73ffffffffffffffffffffffffffffffffffffffff8116811415156109845760006000fd5b505b565b6000813590506109978161095f565b5b919050565b6000600060006000608085870312156109b65760006000fd5b84356109c18161095f565b8094505060208501356109d38161095f565b8093505060408501356109e58161095f565b80925050606085013590505b92959194509250565b600060006000600060608587031215610a135760006000fd5b8435935060208501359250604085013567ffffffffffffffff80821115610a3a5760006000fd5b818701915087601f8301121515610a515760006000fd5b813581811115610a615760006000fd5b886020828501011115610a745760006000fd5b6020830194508093505050505b92959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60007f8000000000000000000000000000000000000000000000000000000000000000821415610b5057610b4f610aec565b5b8160000390505b919050565b600073ffffffffffffffffffffffffffffffffffffffff808316818516808303821115610b8c57610b8b610aec565b5b80820193505050505b92915050565b600060408201604083528085518083526060850191506020925082870160005b82811015610bf35773ffffffffffffffffffffffffffffffffffffffff8251168452848401935084820191505b600181019050610bbb565b5050508092505073ffffffffffffffffffffffffffffffffffffffff841681840152505b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352602087151581850152866040850152818616606085015260a06080850152845191508160a085015260005b82811015610c855781818701015160c082870101525b8181019050610c65565b82811115610c9757600060c084870101525b505060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b9695505050505050565b6000600060408385031215610ce75760006000fd5b82519150602083015190505b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808316818516915081811015610d2a57610d29610aec565b5b818103925050505b92915050565b60006040820190508382528260208301525b9392505050565b6000600060408385031215610d665760006000fd5b823567ffffffffffffffff80821115610d7f5760006000fd5b818501915085601f8301121515610d965760006000fd5b8135602082821115610dab57610daa610a8a565b5b8160051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108682111715610def57610dee610a8a565b5b806040525080945083815282810194508282870101935089841115610e145760006000fd5b82860195505b83861015610e3d57610e2b86610988565b855282850194505b8286019550610e1a565b8097505050610e4d818801610988565b9450505050505b9250929050565b600060208284031215610e6e5760006000fd5b8151610e798161095f565b809150505b92915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152508260408301525b949350505050565b600060208284031215610ed15760006000fd5b815180151581141515610ee45760006000fd5b809150505b92915050565bfea2646970667358221220ed0e30582ae437ce46a4345478de574502cc231546fa86a9b2feab76c9f37e6c64736f6c634300080c0033";

type TestUniswapV3RouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapV3RouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapV3Router__factory extends ContractFactory {
  constructor(...args: TestUniswapV3RouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUniswapV3Router> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3Router>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUniswapV3Router {
    return super.attach(address) as TestUniswapV3Router;
  }
  override connect(signer: Signer): TestUniswapV3Router__factory {
    return super.connect(signer) as TestUniswapV3Router__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3RouterInterface {
    return new utils.Interface(_abi) as TestUniswapV3RouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3Router {
    return new Contract(address, _abi, signerOrProvider) as TestUniswapV3Router;
  }
}
