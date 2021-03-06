/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IExecutor,
  IExecutorInterface,
} from "../../../../contracts/core/interfaces/IExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IExecutor__factory {
  static readonly abi = _abi;
  static createInterface(): IExecutorInterface {
    return new utils.Interface(_abi) as IExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExecutor {
    return new Contract(address, _abi, signerOrProvider) as IExecutor;
  }
}
