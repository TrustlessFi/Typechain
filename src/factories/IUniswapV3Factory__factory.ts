/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3Factory,
  IUniswapV3FactoryInterface,
} from "../IUniswapV3Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IUniswapV3Factory__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3FactoryInterface {
    return new utils.Interface(_abi) as IUniswapV3FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3Factory {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV3Factory;
  }
}
