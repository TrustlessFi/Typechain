/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TrustlessMulticall,
  TrustlessMulticallInterface,
} from "../../../../../contracts/core/auxiliary/multicall/TrustlessMulticall";

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
        components: [
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
        internalType: "struct TrustlessMulticall.Result[]",
        name: "results",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
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
    stateMutability: "view",
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
  "0x60806040523480156100115760006000fd5b50610017565b6108d0806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c806372425d9d116100775780638f1316d51161005c5780638f1316d5146101ad578063a8b0574e146101de578063ee82ac5e146101fc576100c3565b806372425d9d1461017157806386d516e81461018f576100c3565b80633408e470116100a85780633408e4701461010557806342cbb15c146101235780634d2301cc14610141576100c3565b80630f28c97d146100c957806327e86d6e146100e7576100c3565b60006000fd5b6100d161022c565b6040516100de91906104ad565b60405180910390f35b6100ef610239565b6040516100fc91906104bf565b60405180910390f35b61010d610253565b60405161011a91906104ad565b60405180910390f35b61012b610260565b60405161013891906104ad565b60405180910390f35b61015b600480360381019061015691906104d1565b61026d565b60405161016891906104ad565b60405180910390f35b610179610293565b60405161018691906104ad565b60405180910390f35b6101976102a0565b6040516101a491906104ad565b60405180910390f35b6101c760048036038101906101c29190610516565b6102ad565b6040516101d5929190610595565b60405180910390f35b6101e661046d565b6040516101f3919061068e565b60405180910390f35b610216600480360381019061021191906106b6565b61047a565b60405161022391906104bf565b60405180910390f35b6000429050610236565b90565b60006001436102489190610705565b409050610250565b90565b600046905061025d565b90565b600043905061026a565b90565b60008173ffffffffffffffffffffffffffffffffffffffff1631905061028e565b919050565b600044905061029d565b90565b60004590506102aa565b90565b600060608383905067ffffffffffffffff8111156102ce576102cd610724565b5b60405190808252806020026020018201604052801561030757816020015b6102f461048a565b8152602001906001900390816102ec5790505b50905080506000600090505b8484905081101561045a57848482818110151561033357610332610755565b5b90506020028101906103459190610786565b600001602081019061035791906104d1565b73ffffffffffffffffffffffffffffffffffffffff16858583818110151561038257610381610755565b5b90506020028101906103949190610786565b80602001906103a391906107ca565b6040516103b1929190610841565b6000604051808303816000865af19150503d80600081146103ee576040519150601f19603f3d011682016040523d82523d6000602084013e6103f3565b606091505b50838381518110151561040957610408610755565b5b6020026020010151600001848481518110151561042957610428610755565b5b60200260200101516020018290528290901515151581526020015050505b80806104529061085a565b915050610313565b50438191509150610466565b9250929050565b6000419050610477565b90565b600081409050610485565b919050565b604051806040016040528060001515815260200160608152602001509056610899565b60006020820190508282525b92915050565b60006020820190508282525b92915050565b6000602082840312156104e45760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114151561050b5760006000fd5b809150505b92915050565b600060006020838503121561052b5760006000fd5b823567ffffffffffffffff808211156105445760006000fd5b818501915085601f830112151561055b5760006000fd5b81358181111561056b5760006000fd5b8660208260051b85010111156105815760006000fd5b6020830194508093505050505b9250929050565b6000604080830185845260208281860152818651808452606093508387019150838160051b8801018389016000805b8481101561067a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08b8503018652825180511515855287810151905089888601528051808b870152835b8181101561062e578981840101518b82890101525b898101905061060f565b50838a8288010152897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011687010195505050868301925086860195505b6001810190506105c4565b5050508096505050505050505b9392505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156106c95760006000fd5b813590505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600082820390508181111561071d5761071c6106d4565b5b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc183360301811215156107bd5760006000fd5b8083019150505b92915050565b6000600083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811215156108035760006000fd5b80840190508035915067ffffffffffffffff8211156108225760006000fd5b602081019250508036038213156108395760006000fd5b5b9250929050565b81838237600082820160008152809150505b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561088d5761088c6106d4565b5b6001820190505b919050565bfea2646970667358221220810ea71c2095df9b163f34d2fb8e185751276730272ecf26189599c0eca074c264736f6c63430008100033";

type TrustlessMulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrustlessMulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrustlessMulticall__factory extends ContractFactory {
  constructor(...args: TrustlessMulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TrustlessMulticall> {
    return super.deploy(overrides || {}) as Promise<TrustlessMulticall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TrustlessMulticall {
    return super.attach(address) as TrustlessMulticall;
  }
  override connect(signer: Signer): TrustlessMulticall__factory {
    return super.connect(signer) as TrustlessMulticall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustlessMulticallInterface {
    return new utils.Interface(_abi) as TrustlessMulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustlessMulticall {
    return new Contract(address, _abi, signerOrProvider) as TrustlessMulticall;
  }
}
