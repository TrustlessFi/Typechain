/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITDaoWithIncentiveContractMint,
  ITDaoWithIncentiveContractMintInterface,
} from "../../../../../contracts/core/mocks/MockTFIncentiveContract.sol/ITDaoWithIncentiveContractMint";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "incentiveContractMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITDaoWithIncentiveContractMint__factory {
  static readonly abi = _abi;
  static createInterface(): ITDaoWithIncentiveContractMintInterface {
    return new utils.Interface(_abi) as ITDaoWithIncentiveContractMintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITDaoWithIncentiveContractMint {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITDaoWithIncentiveContractMint;
  }
}
