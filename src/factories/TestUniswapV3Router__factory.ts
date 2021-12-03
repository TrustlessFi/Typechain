/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestUniswapV3Router,
  TestUniswapV3RouterInterface,
} from "../TestUniswapV3Router";

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
  "0x60806040523480156100115760006000fd5b50610017565b610fd7806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063c35a2b681461004c578063c96aa6c7146100db578063fa461e331461016a57610046565b60006000fd5b6100d9600480360360808110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101fd565b005b610168600480360360808110156100f25760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061048b565b005b6101fb600480360360608110156101815760006000fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156101b35760006000fd5b8201836020820111156101c65760006000fd5b803590602001918460018302840111640100000000831117156101e95760006000fd5b90919293909091929390505050610728565b005b6000600167ffffffffffffffff811180156102185760006000fd5b506040519080825280602002602001820160405280156102475781602001602082028036833780820191505090505b5090508381600081518110151561025a57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150508273ffffffffffffffffffffffffffffffffffffffff1663128acb088660016102c786610f65909063ffffffff16565b60000360016401000276a301863360405160200180806020018373ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b838110156103385780820151818401525b60208101905061031c565b5050505090500193505050506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103e95780820151818401525b6020810190506103cd565b50505050905090810190601f1680156104165780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b15801561043a5760006000fd5b505af115801561044f573d600060003e3d6000fd5b505050506040513d60408110156104665760006000fd5b8101908080519060200190929190805190602001909291905050505050505b50505050565b6000600167ffffffffffffffff811180156104a65760006000fd5b506040519080825280602002602001820160405280156104d55781602001602082028036833780820191505090505b509050838160008151811015156104e857fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150508273ffffffffffffffffffffffffffffffffffffffff1663128acb0886600061055586610f65909063ffffffff16565b600003600173fffd8963efd1fc6a506488495d951d5263988d2603863360405160200180806020018373ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b838110156105d55780820151818401525b6020810190506105b9565b5050505090500193505050506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106865780820151818401525b60208101905061066a565b50505050905090810190601f1680156106b35780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156106d75760006000fd5b505af11580156106ec573d600060003e3d6000fd5b505050506040513d60408110156107035760006000fd5b8101908080519060200190929190805190602001909291905050505050505b50505050565b7fd48241df4a75e663b29e55f9506b31f77ed0f48cfe7e7612d1163144995dc1ca8484604051808381526020018281526020019250505060405180910390a1600060008383604081101561077c5760006000fd5b810190808035906020019064010000000081111561079a5760006000fd5b8201836020820111156107ad5760006000fd5b803590602001918460208302840111640100000000831117156107d05760006000fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050909091929090919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505091509150600182511415610caa576000600087136108df573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561089d5760006000fd5b505afa1580156108b2573d600060003e3d6000fd5b505050506040513d60208110156108c95760006000fd5b8101908080519060200190929190505050610964565b3373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156109265760006000fd5b505afa15801561093b573d600060003e3d6000fd5b505050506040513d60208110156109525760006000fd5b81019080805190602001909291905050505b90506000600088136109765786610978565b875b9050600084600081518110151561098b57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156109d95760006000fd5b505afa1580156109ee573d600060003e3d6000fd5b505050506040513d6020811015610a055760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16149050846000815181101515610a5557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663128acb0833838560000385610aa057600173fffd8963efd1fc6a506488495d951d5263988d2603610aaa565b60016401000276a3015b600067ffffffffffffffff81118015610ac35760006000fd5b50604051908082528060200260200182016040528015610af25781602001602082028036833780820191505090505b508a60405160200180806020018373ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b83811015610b575780820151818401525b602081019050610b3b565b5050505090500193505050506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c085780820151818401525b602081019050610bec565b50505050905090810190601f168015610c355780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b158015610c595760006000fd5b505af1158015610c6e573d600060003e3d6000fd5b505050506040513d6040811015610c855760006000fd5b8101908080519060200190929190805190602001909291905050505050505050610f5c565b6000861315610e09573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610cfa5760006000fd5b505afa158015610d0f573d600060003e3d6000fd5b505050506040513d6020811015610d265760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233896040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610dc65760006000fd5b505af1158015610ddb573d600060003e3d6000fd5b505050506040513d6020811015610df25760006000fd5b810190808051906020019092919050505050610f5b565b3373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610e505760006000fd5b505afa158015610e65573d600060003e3d6000fd5b505050506040513d6020811015610e7c5760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610f1c5760006000fd5b505af1158015610f31573d600060003e3d6000fd5b505050506040513d6020811015610f485760006000fd5b8101908080519060200190929190505050505b5b50505b50505050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515610f965760006000fd5b81905080505b91905056fea26469706673582212200467903fa982a0bb545c6468e63e2c46dc886ad16f1bd9ea5e02d57538ec985b64736f6c63430007060033";

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

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUniswapV3Router> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3Router>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUniswapV3Router {
    return super.attach(address) as TestUniswapV3Router;
  }
  connect(signer: Signer): TestUniswapV3Router__factory {
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
