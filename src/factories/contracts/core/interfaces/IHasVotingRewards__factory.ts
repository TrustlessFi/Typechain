/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IHasVotingRewards,
  IHasVotingRewardsInterface,
} from "../../../../contracts/core/interfaces/IHasVotingRewards";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "VotingRewardsDistributed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "proposalIDs",
        type: "uint256[]",
      },
    ],
    name: "claimVotingRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementsVotingRewardsWithToken",
    outputs: [
      {
        internalType: "address",
        name: "votingToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IHasVotingRewards__factory {
  static readonly abi = _abi;
  static createInterface(): IHasVotingRewardsInterface {
    return new utils.Interface(_abi) as IHasVotingRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHasVotingRewards {
    return new Contract(address, _abi, signerOrProvider) as IHasVotingRewards;
  }
}