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
  "0x60806040523480156100115760006000fd5b50610017565b6109ef806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c806353ed51431161005157806353ed5143146100fb5780637208e1e414610119578063e0886f901461014957610077565b80631f7b6d321461007d57806343114db81461009b57806344121cc5146100cb57610077565b60006000fd5b610085610179565b6040516100929190610936565b60405180910390f35b6100b560048036038101906100b091906107e0565b61019a565b6040516100c29190610899565b60405180910390f35b6100e560048036038101906100e091906107e0565b6101bf565b6040516100f29190610899565b60405180910390f35b6101036101e4565b6040516101109190610839565b60405180910390f35b610133600480360381019061012e91906107e0565b610205565b6040516101409190610899565b60405180910390f35b610163600480360381019061015e919061081d565b61022a565b6040516101709190610912565b60405180910390f35b6000610190600060005061024f909063ffffffff16565b9050610197565b90565b60006101b382600060005061026890919063ffffffff16565b90506101ba565b919050565b60006101d882600060005061035990919063ffffffff16565b90506101df565b919050565b60606101fb6000600050610612909063ffffffff16565b9050610202565b90565b600061021e8260006000506106b890919063ffffffff16565b9050610225565b919050565b600061024382600060005061070b90919063ffffffff16565b905061024a565b919050565b600081600001600050805490509050610263565b919050565b600061027a83836106b863ffffffff16565b151561034957826000016000508290806001815401808255809150506001900390600052602060002090600291828204019190066010025b9091909190916101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508260000160005080549050836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506001905061035356610352565b60009050610353565b5b92915050565b60006000836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506000811415156106005760006001826103b89190610968565b90506000600186600001600050805490506103d39190610968565b905060008660000160005082815481101515610418577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600291828204019190066010025b9054906101000a90046fffffffffffffffffffffffffffffffff16905080876000016000508481548110151561048f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600291828204019190066010025b6101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506001836104e89190610948565b876001016000506000836fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555086600001600050805480151561056c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002090600291828204019190066010025b6101000a8154906fffffffffffffffffffffffffffffffff02191690559055866001016000506000876fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200190815260200160002060005060009055600194505050505061060c5650505061060a565b600091505061060c565b505b92915050565b6060816000016000508054806020026020016040519081016040528092919081815260200182805480156106a957602002820191906000526020600020906000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116106545790505b5050505050905080505b919050565b60006000836001016000506000846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019081526020016000206000505414159050610705565b92915050565b600081836000016000508054905011151561075b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610752906108ad565b60405180910390fd5b826000016000508281548110151561079c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600291828204019190066010025b9054906101000a90046fffffffffffffffffffffffffffffffff1690506107d6565b92915050566109b8565b6000602082840312156107f1578081fd5b81356fffffffffffffffffffffffffffffffff811681141515610812578182fd5b809150505b92915050565b60006020828403121561082e578081fd5b813590505b92915050565b600060208083018184528085518083526040860191508387019250845b8181101561088a576fffffffffffffffffffffffffffffffff8451168352848301925084840193505b600181019050610856565b50508093505050505b92915050565b600060208201905082151582525b92915050565b60208152602260208201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60408201527f6473000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b6000821982111561095c5761095b610987565b5b82820190505b92915050565b60008282101561097b5761097a610987565b5b82820390505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565bfea2646970667358221220d8974d2ad117be3cab23057f4137bb0786b03092e9d55bd823558871fdbec57c64736f6c63430008040033";

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
