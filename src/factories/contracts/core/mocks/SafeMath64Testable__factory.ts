/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeMath64Testable,
  SafeMath64TestableInterface,
} from "../../../../contracts/core/mocks/SafeMath64Testable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "a",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "b",
        type: "uint64",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint64",
        name: "r",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "a",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "b",
        type: "uint64",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "uint64",
        name: "r",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "a",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "b",
        type: "uint64",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "uint64",
        name: "r",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b61032a806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c806322c6ae151461004c5780636e2c732d1461007c578063911b5f4e146100ac57610046565b60006000fd5b610066600480360381019061006191906101d4565b6100dc565b604051610073919061020a565b60405180910390f35b610096600480360381019061009191906101d4565b610106565b6040516100a3919061020a565b60405180910390f35b6100c660048036038101906100c191906101d4565b610130565b6040516100d3919061020a565b60405180910390f35b60006100fb828467ffffffffffffffff1661015a90919063ffffffff16565b905080505b92915050565b6000610125828467ffffffffffffffff1661017590919063ffffffff16565b905080505b92915050565b600061014f828467ffffffffffffffff1661019090919063ffffffff16565b905080505b92915050565b600081836101689190610257565b905061016f565b92915050565b60008183610183919061028e565b905061018a565b92915050565b6000818361019e91906102c1565b90506101a5565b92915050566102f3565b60008135905067ffffffffffffffff8116811415156101ce5760006000fd5b5b919050565b60006000604083850312156101e95760006000fd5b6101f2836101af565b9150610200602084016101af565b90505b9250929050565b600060208201905067ffffffffffffffff831682525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600067ffffffffffffffff8083168185168183048111821515161561027f5761027e610226565b5b80820293505050505b92915050565b600067ffffffffffffffff8083168185168083038211156102b2576102b1610226565b5b80820193505050505b92915050565b600067ffffffffffffffff8083168185169150818110156102e5576102e4610226565b5b818103925050505b92915050565bfea26469706673582212202003d38a4043a3c52abac464cc0fc8cc0760dc5f2beb0234bcdf9bf39228e1ae64736f6c634300080c0033";

type SafeMath64TestableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeMath64TestableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeMath64Testable__factory extends ContractFactory {
  constructor(...args: SafeMath64TestableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMath64Testable> {
    return super.deploy(overrides || {}) as Promise<SafeMath64Testable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeMath64Testable {
    return super.attach(address) as SafeMath64Testable;
  }
  override connect(signer: Signer): SafeMath64Testable__factory {
    return super.connect(signer) as SafeMath64Testable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMath64TestableInterface {
    return new utils.Interface(_abi) as SafeMath64TestableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMath64Testable {
    return new Contract(address, _abi, signerOrProvider) as SafeMath64Testable;
  }
}