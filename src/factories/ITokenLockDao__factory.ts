/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITokenLockDao, ITokenLockDaoInterface } from "../ITokenLockDao";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "tokenID",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "lockDurationMonths",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "lockTokens",
    outputs: [
      {
        internalType: "uint64",
        name: "positionNFTTokenID",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITokenLockDao__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenLockDaoInterface {
    return new utils.Interface(_abi) as ITokenLockDaoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenLockDao {
    return new Contract(address, _abi, signerOrProvider) as ITokenLockDao;
  }
}
