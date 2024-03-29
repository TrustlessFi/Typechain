/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Multicall2,
  Multicall2Interface,
} from "../../../../contracts/core/mocks/Multicall2";

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
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
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
    stateMutability: "nonpayable",
    type: "function",
  },
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
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
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
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
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
        name: "blockHash",
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
        name: "blockNumber",
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
        name: "coinbase",
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
        name: "difficulty",
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
        name: "gaslimit",
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
        name: "timestamp",
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
        name: "balance",
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
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
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
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryAggregate",
    outputs: [
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
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
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
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
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
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610e16806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100d95760003560e01c806372425d9d11610082578063bce38bd71161005c578063bce38bd714610226578063c3077fa914610256578063ee82ac5e14610288576100d9565b806372425d9d146101cc57806386d516e8146101ea578063a8b0574e14610208576100d9565b8063399542e9116100b3578063399542e91461014c57806342cbb15c1461017e5780634d2301cc1461019c576100d9565b80630f28c97d146100df578063252dba42146100fd57806327e86d6e1461012e576100d9565b60006000fd5b6100e76102b8565b6040516100f4919061070c565b60405180910390f35b6101176004803603810190610112919061097d565b6102c3565b604051610125929190610a37565b60405180910390f35b61013661045f565b6040516101439190610ac8565b60405180910390f35b61016660048036038101906101619190610ada565b610477565b60405161017593929190610bab565b60405180910390f35b6101866104a4565b604051610193919061070c565b60405180910390f35b6101b660048036038101906101b19190610bd5565b6104af565b6040516101c3919061070c565b60405180910390f35b6101d46104d3565b6040516101e1919061070c565b60405180910390f35b6101f26104de565b6040516101ff919061070c565b60405180910390f35b6102106104e9565b60405161021d9190610bfa565b60405180910390f35b610240600480360381019061023b9190610ada565b6104f4565b60405161024d9190610c22565b60405180910390f35b610270600480360381019061026b919061097d565b6106b0565b60405161027f93929190610bab565b60405180910390f35b6102a2600480360381019061029d9190610c3e565b6106db565b6040516102af9190610ac8565b60405180910390f35b600042905080505b90565b600060604391508150825167ffffffffffffffff8111156102e7576102e661071e565b5b60405190808252806020026020018201604052801561031a57816020015b60608152602001906001900390816103055790505b50905080506000600090505b83518110156104585760006000858381518110151561034857610347610c5c565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16868481518110151561037f5761037e610c5c565b5b6020026020010151602001516040516103989190610c8d565b6000604051808303816000865af19150503d80600081146103d5576040519150601f19603f3d011682016040523d82523d6000602084013e6103da565b606091505b5091509150811515610421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041890610cac565b60405180910390fd5b80848481518110151561043757610436610c5c565b5b602002602001018190525050505b808061045090610d1c565b915050610326565b505b915091565b600060014361046e9190610d5b565b40905080505b90565b600060006060439250825043409150815061049885856104f463ffffffff16565b905080505b9250925092565b600043905080505b90565b60008173ffffffffffffffffffffffffffffffffffffffff1631905080505b919050565b600044905080505b90565b600045905080505b90565b600041905080505b90565b6060815167ffffffffffffffff8111156105115761051061071e565b5b60405190808252806020026020018201604052801561054a57816020015b6105376106e9565b81526020019060019003908161052f5790505b50905080506000600090505b82518110156106a85760006000848381518110151561057857610577610c5c565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811015156105af576105ae610c5c565b5b6020026020010151602001516040516105c89190610c8d565b6000604051808303816000865af19150503d8060008114610605576040519150601f19603f3d011682016040523d82523d6000602084013e61060a565b606091505b5091509150851561065857811515610657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064e90610d7a565b60405180910390fd5b5b6040518060400160405280831515815260200182815260200150848481518110151561068757610686610c5c565b5b602002602001018190525050505b80806106a090610d1c565b915050610556565b505b92915050565b6000600060606106c760018561047763ffffffff16565b8093508194508295505050505b9193909250565b60008140905080505b919050565b604051806040016040528060001515815260200160608152602001509056610ddf565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b600060405190506040810181811067ffffffffffffffff821117156107775761077661071e565b5b80604052505b90565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156107cc576107cb61071e565b5b80604052505b919050565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156108025760006000fd5b5b919050565b6000601f8381840112151561081d5760006000fd5b8235602067ffffffffffffffff8083111561083b5761083a61071e565b5b8260051b61084a838201610780565b80858252848201915084838a01019550898611156108685760006000fd5b84890192505b8583101561096c578235848111156108875760008081fd505b808a01905060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08181848f030112156108c25760008081fd505b6108ca61074f565b6108d58985016107d7565b815282840135888111156108ea5760008081fd505b8085019450508d603f85011215156109035760008081fd505b88840135888111156109185761091761071e565b5b6109278a848e84011601610780565b92508083528e8482870101111561093f5760008081fd505b808486018b85013760008a82850101525081898201528086525050505084820191505b848301925061086e565b809750505050505050505b92915050565b6000602082840312156109905760006000fd5b813567ffffffffffffffff8111156109a85760006000fd5b6109b484828501610808565b9150505b92915050565b60005b838110156109dd5780820151818401525b6020810190506109c1565b506000838301525050505b565b60008151808452610a028160208601602086016109be565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015610ab7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452610a9f8683516109ea565b9550848201915084840193505b600181019050610a65565b5050505050809150505b9392505050565b60006020820190508282525b92915050565b6000600060408385031215610aef5760006000fd5b823580151581141515610b025760006000fd5b80925050602083013567ffffffffffffffff811115610b215760006000fd5b610b2d85828601610808565b9150505b9250929050565b6000815180845260208085019450848260051b860182860160005b85811015610b9b578383038952815160408151151585528682015191508087860152610b81818601836109ea565b94505050848201915084890198505b600181019050610b53565b5050809450505050505b92915050565b838152826020820152606060408201526000610bca6060830184610b38565b90505b949350505050565b600060208284031215610be85760006000fd5b610bf1826107d7565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b602081526000610c356020830184610b38565b90505b92915050565b600060208284031215610c515760006000fd5b813590505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b60008251610c9f8184602087016109be565b8083019150505b92915050565b60208152602060208201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564604082015260006060820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d4f57610d4e610ceb565b5b6001820190505b919050565b6000828203905081811115610d7357610d72610ceb565b5b5b92915050565b60208152602160208201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560408201527f6400000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565bfea26469706673582212206497f292ed010de6e608afa1ed23d738465c7b4aef19ed012c896f906984486564736f6c63430008100033";

type Multicall2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall2__factory extends ContractFactory {
  constructor(...args: Multicall2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall2> {
    return super.deploy(overrides || {}) as Promise<Multicall2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall2 {
    return super.attach(address) as Multicall2;
  }
  override connect(signer: Signer): Multicall2__factory {
    return super.connect(signer) as Multicall2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall2Interface {
    return new utils.Interface(_abi) as Multicall2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall2 {
    return new Contract(address, _abi, signerOrProvider) as Multicall2;
  }
}
