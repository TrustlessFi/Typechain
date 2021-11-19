/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableUint128SetTestable,
  EnumerableUint128SetTestableInterface,
} from "../EnumerableUint128SetTestable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint128",
        name: "value",
        type: "uint128",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "value",
        type: "uint128",
      },
    ],
    name: "contains",
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
    inputs: [],
    name: "getAll",
    outputs: [
      {
        internalType: "uint128[]",
        name: "",
        type: "uint128[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "length",
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
    inputs: [
      {
        internalType: "uint128",
        name: "value",
        type: "uint128",
      },
    ],
    name: "remove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610857806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c806353ed51431161005157806353ed5143146101495780637208e1e4146101a9578063e0886f901461020057610077565b80631f7b6d321461007d57806343114db81461009b57806344121cc5146100f257610077565b60006000fd5b610085610255565b6040518082815260200191505060405180910390f35b6100da600480360360208110156100b25760006000fd5b8101908080356fffffffffffffffffffffffffffffffff169060200190929190505050610276565b60405180821515815260200191505060405180910390f35b610131600480360360208110156101095760006000fd5b8101908080356fffffffffffffffffffffffffffffffff16906020019092919050505061029b565b60405180821515815260200191505060405180910390f35b6101516102c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101955780820151818401525b602081019050610179565b505050509050019250505060405180910390f35b6101e8600480360360208110156101c05760006000fd5b8101908080356fffffffffffffffffffffffffffffffff1690602001909291905050506102e1565b60405180821515815260200191505060405180910390f35b61022d600480360360208110156102175760006000fd5b8101908080359060200190929190505050610306565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600061026c600060005061032b909063ffffffff16565b9050610273565b90565b600061028f82600060005061034490919063ffffffff16565b9050610296565b919050565b60006102b482600060005061043590919063ffffffff16565b90506102bb565b919050565b60606102d7600060005061064c909063ffffffff16565b90506102de565b90565b60006102fa8260006000506106f290919063ffffffff16565b9050610301565b919050565b600061031f82600060005061074590919063ffffffff16565b9050610326565b919050565b60008160000160005080549050905061033f565b919050565b600061035683836106f263ffffffff16565b151561042557826000016000508290806001815401808255809150506001900390600052602060002090600291828204019190066010025b9091909190916101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508260000160005080549050836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506001905061042f5661042e565b6000905061042f565b5b92915050565b60006000836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905060008114151561063a576000600182039050600060018660000160005080549050039050600086600001600050828154811015156104b557fe5b90600052602060002090600291828204019190066010025b9054906101000a90046fffffffffffffffffffffffffffffffff1690508087600001600050848154811015156104ff57fe5b90600052602060002090600291828204019190066010025b6101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060018301876001016000506000836fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508660000160005080548015156105a657fe5b60019003818190600052602060002090600291828204019190066010025b6101000a8154906fffffffffffffffffffffffffffffffff02191690559055866001016000506000876fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200190815260200160002060005060009055600194505050505061064656505050610644565b6000915050610646565b505b92915050565b6060816000016000508054806020026020016040519081016040528092919081815260200182805480156106e357602002820191906000526020600020906000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f0104928301926001038202915080841161068e5790505b5050505050905080505b919050565b60006000836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020600050541415905061073f565b92915050565b60008183600001600050805490501115156107ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806108006022913960400191505060405180910390fd5b82600001600050828154811015156107bf57fe5b90600052602060002090600291828204019190066010025b9054906101000a90046fffffffffffffffffffffffffffffffff1690506107f9565b9291505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473a2646970667358221220a42317dc513ab32cfee3f4a191bb17f4f9995f453deda836b9321769192ad7f664736f6c63430007060033";

type EnumerableUint128SetTestableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableUint128SetTestableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableUint128SetTestable__factory extends ContractFactory {
  constructor(...args: EnumerableUint128SetTestableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableUint128SetTestable> {
    return super.deploy(
      overrides || {}
    ) as Promise<EnumerableUint128SetTestable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableUint128SetTestable {
    return super.attach(address) as EnumerableUint128SetTestable;
  }
  connect(signer: Signer): EnumerableUint128SetTestable__factory {
    return super.connect(signer) as EnumerableUint128SetTestable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableUint128SetTestableInterface {
    return new utils.Interface(_abi) as EnumerableUint128SetTestableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableUint128SetTestable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnumerableUint128SetTestable;
  }
}
