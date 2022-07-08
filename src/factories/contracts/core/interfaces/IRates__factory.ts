/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRates,
  IRatesInterface,
} from "../../../../contracts/core/interfaces/IRates";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "error",
        type: "uint128",
      },
    ],
    name: "AcceptableErrorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "error",
        type: "uint128",
      },
    ],
    name: "ErrorIntervalUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "step",
        type: "uint128",
      },
    ],
    name: "InterestRateStepUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int128",
        name: "max",
        type: "int128",
      },
    ],
    name: "MaxRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "steps",
        type: "uint64",
      },
    ],
    name: "MaxStepsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int128",
        name: "min",
        type: "int128",
      },
    ],
    name: "MinRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "time",
        type: "uint64",
      },
    ],
    name: "MinTimeBetweenUpdatesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "interestRate",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nextUpdateTime",
        type: "uint64",
      },
    ],
    name: "RateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ratesUpdateContract",
        type: "address",
      },
    ],
    name: "RatesContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "ReferencePoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "ReferencePoolRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
    ],
    name: "addReferencePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newRate",
        type: "int256",
      },
    ],
    name: "executeRatesUpdateContractUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "interestRateAbsoluteValue",
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
    name: "positiveInterestRate",
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
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
    ],
    name: "removeReferencePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "step",
        type: "uint128",
      },
    ],
    name: "setInterestRateStep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ratesUpdateContract",
        type: "address",
      },
    ],
    name: "setRatesUpdateContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRates__factory {
  static readonly abi = _abi;
  static createInterface(): IRatesInterface {
    return new utils.Interface(_abi) as IRatesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IRates {
    return new Contract(address, _abi, signerOrProvider) as IRates;
  }
}