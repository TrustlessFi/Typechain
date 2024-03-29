/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MathTestable,
  MathTestableInterface,
} from "../../../../contracts/core/mocks/MathTestable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "_sqrt",
    outputs: [
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b61032e806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80636a263f021461003657610030565b60006000fd5b610050600480360381019061004b9190610296565b610066565b60405161005d91906102b4565b60405180910390f35b60006100778261008163ffffffff16565b905080505b919050565b60006000821415610095576000905061026f565b60006001905060008390506000608082901c11156100c057608081901c90508050604082901b915081505b6000604082901c11156100e057604081901c90508050602082901b915081505b6000602082901c111561010057602081901c90508050601082901b915081505b6000601082901c111561012057601081901c90508050600882901b915081505b6000600882901c111561014057600881901c90508050600482901b915081505b6000600482901c111561016057600481901c90508050600282901b915081505b6000600282901c111561017757600182901b915081505b6001828581151561018b5761018a6102c6565b5b048301901c91508150600182858115156101a8576101a76102c6565b5b048301901c91508150600182858115156101c5576101c46102c6565b5b048301901c91508150600182858115156101e2576101e16102c6565b5b048301901c91508150600182858115156101ff576101fe6102c6565b5b048301901c915081506001828581151561021c5761021b6102c6565b5b048301901c9150815060018285811515610239576102386102c6565b5b048301901c91508150610264828386811515610258576102576102c6565b5b0461027463ffffffff16565b9250505061026f5650505b919050565b60008183106102835781610285565b825b905061028c565b92915050566102f7565b6000602082840312156102a95760006000fd5b813590505b92915050565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565bfea26469706673582212204f1a1d56518367f676d76de394b94511a82ddbf6bde0ca49e255ca1e6ebfd14d64736f6c63430008100033";

type MathTestableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MathTestableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MathTestable__factory extends ContractFactory {
  constructor(...args: MathTestableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MathTestable> {
    return super.deploy(overrides || {}) as Promise<MathTestable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MathTestable {
    return super.attach(address) as MathTestable;
  }
  override connect(signer: Signer): MathTestable__factory {
    return super.connect(signer) as MathTestable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathTestableInterface {
    return new utils.Interface(_abi) as MathTestableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MathTestable {
    return new Contract(address, _abi, signerOrProvider) as MathTestable;
  }
}
