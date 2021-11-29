/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  UpdateableContract,
  UpdateableContractInterface,
} from "../UpdateableContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "action",
        type: "bytes4",
      },
    ],
    name: "validUpdate",
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
];

export class UpdateableContract__factory {
  static readonly abi = _abi;
  static createInterface(): UpdateableContractInterface {
    return new utils.Interface(_abi) as UpdateableContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdateableContract {
    return new Contract(address, _abi, signerOrProvider) as UpdateableContract;
  }
}