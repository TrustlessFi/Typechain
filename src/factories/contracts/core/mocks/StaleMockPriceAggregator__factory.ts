/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StaleMockPriceAggregator,
  StaleMockPriceAggregatorInterface,
} from "../../../../contracts/core/mocks/StaleMockPriceAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "__decimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "__answer",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b5060405161027f38038061027f83398181016040528101906100339190610067565b5b81600060006101000a81548160ff021916908360ff1602179055508060016000508190909055505b50506100a4566100a3565b600060006040838503121561007c5760006000fd5b825160ff8116811415156100905760006000fd5b80925050602083015190505b9250929050565b5b6101cc806100b36000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063313ce56714610041578063feaf968c1461005f5761003b565b60006000fd5b610049610081565b60405161005691906100fd565b60405180910390f35b61006761009d565b604051610078959493929190610112565b60405180910390f35b6000600060009054906101000a900460ff16905061009a565b90565b60006000600060006000680300000000000018ed9450845060016000505493508350612a30426100cd9190610150565b92508250612544426100df9190610150565b91508150680300000000000018ed905080505b909192939456610195565b600060208201905060ff831682525b92915050565b600060a08201905069ffffffffffffffffffff80881683528660208401528560408401528460608401528084166080840152505b9695505050505050565b600082821015610189577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b82820390505b92915050565bfea2646970667358221220af21e421ed2e6f99892a4df8d3cb2d1687e0b2a435c420b29ea37a2867eae4a864736f6c634300080c0033";

type StaleMockPriceAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StaleMockPriceAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StaleMockPriceAggregator__factory extends ContractFactory {
  constructor(...args: StaleMockPriceAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    __decimals: BigNumberish,
    __answer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StaleMockPriceAggregator> {
    return super.deploy(
      __decimals,
      __answer,
      overrides || {}
    ) as Promise<StaleMockPriceAggregator>;
  }
  override getDeployTransaction(
    __decimals: BigNumberish,
    __answer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(__decimals, __answer, overrides || {});
  }
  override attach(address: string): StaleMockPriceAggregator {
    return super.attach(address) as StaleMockPriceAggregator;
  }
  override connect(signer: Signer): StaleMockPriceAggregator__factory {
    return super.connect(signer) as StaleMockPriceAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StaleMockPriceAggregatorInterface {
    return new utils.Interface(_abi) as StaleMockPriceAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StaleMockPriceAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StaleMockPriceAggregator;
  }
}