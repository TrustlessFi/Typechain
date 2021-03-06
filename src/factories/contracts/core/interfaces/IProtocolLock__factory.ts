/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProtocolLock,
  IProtocolLockInterface,
} from "../../../../contracts/core/interfaces/IProtocolLock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerAuthorized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerUnauthorized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "authorizeCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "unauthorizeCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IProtocolLock__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolLockInterface {
    return new utils.Interface(_abi) as IProtocolLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolLock {
    return new Contract(address, _abi, signerOrProvider) as IProtocolLock;
  }
}
