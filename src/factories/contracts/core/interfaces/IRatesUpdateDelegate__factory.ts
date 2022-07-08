/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRatesUpdateDelegate,
  IRatesUpdateDelegateInterface,
} from "../../../../contracts/core/interfaces/IRatesUpdateDelegate";

const _abi = [
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
];

export class IRatesUpdateDelegate__factory {
  static readonly abi = _abi;
  static createInterface(): IRatesUpdateDelegateInterface {
    return new utils.Interface(_abi) as IRatesUpdateDelegateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRatesUpdateDelegate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRatesUpdateDelegate;
  }
}