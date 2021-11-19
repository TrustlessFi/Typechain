/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TrustlessMulticallViewOnly,
  TrustlessMulticallViewOnlyInterface,
} from "../TrustlessMulticallViewOnly";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct TrustlessMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "all",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
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
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
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
    inputs: [],
    name: "getCurrentBlockGasLimit",
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
    inputs: [],
    name: "getCurrentBlockTimestamp",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
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
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610516806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c806372425d9d116100775780638f1316d51161005c5780638f1316d5146101ad578063a8b0574e146101de578063ee82ac5e146101fc576100c3565b806372425d9d1461017157806386d516e81461018f576100c3565b80633408e470116100a85780633408e4701461010557806342cbb15c146101235780634d2301cc14610141576100c3565b80630f28c97d146100c957806327e86d6e146100e7576100c3565b60006000fd5b6100d161022c565b6040516100de91906103e4565b60405180910390f35b6100ef610239565b6040516100fc91906103d2565b60405180910390f35b61010d61024a565b60405161011a91906103e4565b60405180910390f35b61012b61025e565b60405161013891906103e4565b60405180910390f35b61015b600480360381019061015691906102d8565b61026b565b60405161016891906103e4565b60405180910390f35b610179610291565b60405161018691906103e4565b60405180910390f35b61019761029e565b6040516101a491906103e4565b60405180910390f35b6101c760048036038101906101c29190610319565b6102ab565b6040516101d59291906103f6565b60405180910390f35b6101e66102b7565b6040516101f391906103aa565b60405180910390f35b6102166004803603810190610211919061038e565b6102c4565b60405161022391906103d2565b60405180910390f35b6000429050610236565b90565b600060014303409050610247565b90565b600060004690508091505061025b56505b90565b6000439050610268565b90565b60008173ffffffffffffffffffffffffffffffffffffffff1631905061028c565b919050565b600044905061029b565b90565b60004590506102a8565b90565b600060605b9250929050565b60004190506102c1565b90565b6000814090506102cf565b919050566104df565b6000602082840312156102e9578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114151561030e578182fd5b809150505b92915050565b600060006020838503121561032c578081fd5b823567ffffffffffffffff80821115610343578283fd5b818501915085601f8301121515610358578283fd5b813581811115610366578384fd5b86602060208302850101111561037a578384fd5b6020830194508093505050505b9250929050565b60006020828403121561039f578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b60006020820190508282525b92915050565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156104ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa088870301845281518051808852885b818110156104795787818401015188828b0101525b878101905061045a565b81811115610489578988838b0101525b50867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011689010197505050848201915084840193505b600181019050610422565b5050505050809150505b9392505050565bfea26469706673582212208f32a8b84a8d0ae3ace1c9396986154457aae94d5043139f26c7088cc059b65c64736f6c63430007060033";

type TrustlessMulticallViewOnlyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrustlessMulticallViewOnlyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrustlessMulticallViewOnly__factory extends ContractFactory {
  constructor(...args: TrustlessMulticallViewOnlyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrustlessMulticallViewOnly> {
    return super.deploy(overrides || {}) as Promise<TrustlessMulticallViewOnly>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrustlessMulticallViewOnly {
    return super.attach(address) as TrustlessMulticallViewOnly;
  }
  connect(signer: Signer): TrustlessMulticallViewOnly__factory {
    return super.connect(signer) as TrustlessMulticallViewOnly__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustlessMulticallViewOnlyInterface {
    return new utils.Interface(_abi) as TrustlessMulticallViewOnlyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustlessMulticallViewOnly {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TrustlessMulticallViewOnly;
  }
}
