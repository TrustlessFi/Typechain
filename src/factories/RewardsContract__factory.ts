/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  RewardsContract,
  RewardsContractInterface,
} from "../RewardsContract";

const _abi = [
  {
    inputs: [],
    name: "countPools",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
      },
    ],
    name: "poolConfigForPoolID",
    outputs: [
      {
        components: [
          {
            internalType: "contract IUniswapV2Pair",
            name: "pool",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "rewardsPortion",
            type: "uint64",
          },
        ],
        internalType: "struct IRewards.PoolConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RewardsContract__factory {
  static readonly abi = _abi;
  static createInterface(): RewardsContractInterface {
    return new utils.Interface(_abi) as RewardsContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardsContract {
    return new Contract(address, _abi, signerOrProvider) as RewardsContract;
  }
}
