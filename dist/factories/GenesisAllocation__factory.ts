/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GenesisAllocation,
  GenesisAllocationInterface,
  ConstructorParamsStruct,
} from "../GenesisAllocation";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "Authenticator",
            type: "address",
          },
          {
            internalType: "address",
            name: "Guardian",
            type: "address",
          },
          {
            internalType: "contract ITcpAllocation",
            name: "TcpAllocation",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "GenesisClaimDuration",
            type: "uint64",
          },
        ],
        internalType: "struct GenesisAllocation.ConstructorParams",
        name: "params",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "deadline",
        type: "uint64",
      },
    ],
    name: "DeadlineSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "roundID",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "SignatureProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "TokensTransferredToIncentiveGuardian",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "abdicate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "authenticator",
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
    name: "chainID",
    outputs: [
      {
        internalType: "uint256",
        name: "_chainID",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct GenesisAllocation.Auth",
            name: "auth",
            type: "tuple",
          },
          {
            internalType: "uint16",
            name: "roundID",
            type: "uint16",
          },
          {
            internalType: "uint128",
            name: "count",
            type: "uint128",
          },
        ],
        internalType: "struct GenesisAllocation.ClaimAllocationData[]",
        name: "claimAllocationData",
        type: "tuple[]",
      },
    ],
    name: "claimAllocations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "claimedSig",
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
    name: "deadline",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newDeadline",
        type: "uint64",
      },
    ],
    name: "extendDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "roundID",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "getMessage",
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
    name: "guardian",
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
    name: "tcpAllocation",
    outputs: [
      {
        internalType: "contract ITcpAllocation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "transferAllocationToIncentiveGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052348015620000125760006000fd5b5060405162001d6f38038062001d6f83398181016040528101906200003891906200033b565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806040015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150506200011f6200011382606001516200012760201b60201c565b6200016660201b60201c565b5b5062000414565b60006200015c826200013e620001e260201b60201c565b67ffffffffffffffff166200020460201b62000c5f1790919060201c565b905080505b919050565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051620001d69190620003db565b60405180910390a15b50565b6000620001fc42620002a260201b62000cfc17909060201c565b905080505b90565b60008267ffffffffffffffff1682840191508167ffffffffffffffff16101515156200029b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000680100000000000000008210151562000328576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b81905062000331565b9190505662000413565b6000608082840312156200034d578081fd5b604051608081016001600160401b0382821081831117156200036b57fe5b81604052845191506200037e82620003f6565b818352602085015191506200039382620003f6565b81602084015260408501519150620003ab82620003f6565b8160408401526060850151915080821682141515620003c8578384fd5b5080606083015250809150505b92915050565b60006020820190506001600160401b03831682525b92915050565b6001600160a01b038116811415156200040f5760006000fd5b5b50565b5b60805160601c60a05160601c61191d620004526000398061057552806105b152806107795280610bc95250806103af5280610930525061191d6000f3fe60806040523480156100115760006000fd5b50600436106100d95760003560e01c8063a3f4df7e11610082578063f00000ee1161005c578063f00000ee146101e7578063f22122e314610205578063f5fa0d7314610235576100d9565b8063a3f4df7e1461017b578063adc879e914610199578063bea676cd146101b7576100d9565b8063314e99a2116100b3578063314e99a214610137578063452a9320146101415780635176e45c1461015f576100d9565b806308805f75146100df5780632335c76b146100fb57806329dcb0cf14610119576100d9565b60006000fd5b6100f960048036038101906100f4919061148f565b610251565b005b6101036103ad565b604051610110919061157f565b60405180910390f35b6101216103d1565b60405161012e91906117fd565b60405180910390f35b61013f6103eb565b005b610149610473565b604051610156919061157f565b60405180910390f35b6101796004803603810190610174919061146c565b610499565b005b6101836106dd565b6040516101909190611677565b60405180910390f35b6101a1610719565b6040516101ae91906117eb565b60405180910390f35b6101d160048036038101906101cc91906112e1565b610722565b6040516101de9190611629565b60405180910390f35b6101ef610777565b6040516101fc919061164f565b60405180910390f35b61021f600480360381019061021a9190611299565b61079b565b60405161022c919061163d565b60405180910390f35b61024f600480360381019061024a919061132d565b610821565b005b6102b0600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8e63ffffffff16565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166102df610dd463ffffffff16565b67ffffffffffffffff1610151561032b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032290611788565b60405180910390fd5b8067ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039090611749565b60405180910390fd5b6103a881610def63ffffffff16565b5b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060149054906101000a900467ffffffffffffffff1681565b61044a600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8e63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6104f8600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8e63ffffffff16565b610506610dd463ffffffff16565b67ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610573576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056a9061170a565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee47f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166368f3ba0d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106165760006000fd5b505afa15801561062b573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064f9190611272565b836040518363ffffffff1660e01b815260040161066d9291906115e8565b600060405180830381600087803b1580156106885760006000fd5b505af115801561069d573d600060003e3d6000fd5b505050507f4602162910139ab1973a81e10eaf7992fc5aed1568055f6ac3f2a10ee903ba1a816040516106d091906117c7565b60405180910390a15b5b50565b6040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015081565b60004690505b90565b600160005060205283600052604060002060005060205282600052604060002060005060205281600052604060002060005060205280600052604060002060009350935050509054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e000000000000000000008152602001506107e461071963ffffffff16565b308686866040516020016107fd969594939291906114c4565b60405160208183030381529060405280519060200120905061081a565b9392505050565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16610850610dd463ffffffff16565b67ffffffffffffffff1610151561089c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089390611788565b60405180910390fd5b6000815190506108aa611195565b600060003390506000600090505b84811015610baa5785818151811015156108ce57fe5b602002602001015193508350600061092c6109066108fb858860200151896040015161079b63ffffffff16565b610e6963ffffffff16565b866000015160000151876000015160200151886000015160400151610ecd63ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156109895750610b9d565b600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600086600001516000015160ff1660ff16815260200190815260200160002060005060008660000151602001516000191660001916815260200190815260200160002060005060008660000151604001516000191660001916815260200190815260200160002060009054906101000a900460ff1615610a4e5750610b9d565b6001600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600087600001516000015160ff1660ff16815260200190815260200160002060005060008760000151602001516000191660001916815260200190815260200160002060005060008760000151604001516000191660001916815260200190815260200160002060006101000a81548160ff021916908315150217905550610b3c8560400151856fffffffffffffffffffffffffffffffff166110e890919063ffffffff16565b93508350846020015161ffff168373ffffffffffffffffffffffffffffffffffffffff167f11edbb07a13b9bf33e7b6f1d08ebaf3bf42049dece1a89868d3d1ef7fa7cae088760400151604051610b9391906117c7565b60405180910390a3505b80806001019150506108b8565b506000826fffffffffffffffffffffffffffffffff16141515610c57577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee433846040518363ffffffff1660e01b8152600401610c229291906115a7565b600060405180830381600087803b158015610c3d5760006000fd5b505af1158015610c52573d600060003e3d6000fd5b505050505b505050505b50565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515610cf5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006801000000000000000082101515610d81576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610d89565b919050565b801515610dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc7906116cb565b60405180910390fd5b5b50565b6000610de742610cfc909063ffffffff16565b905080505b90565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051610e5d91906117fd565b60405180910390a15b50565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815260200150601c0182600019168152602001915050604051602081830303815290604052805190602001209050610ec8565b919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c11151515610f4d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118a46022913960400191505060405180910390fd5b601b8460ff161480610f625750601c8460ff16145b1515610fb9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118c66022913960400191505060405180910390fd5b60006001868686866040516000815260200160405260405180856000191681526020018460ff16815260200183600019168152602001826000191681526020019450505050506020604051602081039080840390855afa158015611022573d600060003e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156110d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f45434453413a20696e76616c6964207369676e6174757265000000000000000081526020015060200191505060405180910390fd5b809150506110e056505b949350505050565b6000826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff161015151561118e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60405180606001604052806111a86111d5565b8152602001600061ffff16815260200160006fffffffffffffffffffffffffffffffff1681526020015090565b6040518060600160405280600060ff168152602001600060001916815260200160006000191681526020015090566118a2565b6000813590506fffffffffffffffffffffffffffffffff81168114151561122f5760006000fd5b5b919050565b60008135905061ffff81168114151561124e5760006000fd5b5b919050565b60008135905060ff81168114151561126c5760006000fd5b5b919050565b600060208284031215611283578081fd5b815161128e81611879565b809150505b92915050565b600060006000606084860312156112ae578182fd5b83356112b981611879565b809350506112c960208501611235565b91506112d760408501611208565b90505b9250925092565b6000600060006000608085870312156112f8578081fd5b843561130381611879565b8094505061131360208601611254565b925060408501359150606085013590505b92959194509250565b6000602080838503121561133f578182fd5b823567ffffffffffffffff80821115611356578384fd5b818501915085601f830112151561136b578384fd5b81358181111561137757fe5b6113848485830201611819565b80828252858201915085850160a08a8882870289010111156113a4578889fd5b8896505b8487101561145a57818b03818112156113bf57898afd5b6040805160608082018281108b821117156113d657fe5b808452818512156113e5578d8efd5b60c0830194508085108b861117156113f957fe5b84845261140587611254565b8152608094508c8701358584015283870135868401528083525061142a818701611235565b8c8301525061143a838601611208565b82820152808752505050878401935080820191505b6001870196506113a8565b50508096505050505050505b92915050565b60006020828403121561147d578081fd5b61148682611208565b90505b92915050565b6000602082840312156114a0578081fd5b813567ffffffffffffffff8116811415156114b9578182fd5b809150505b92915050565b600087516114d6818460208c01611844565b80830190508781527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808860601b166020830152808760601b166034830152507fffff0000000000000000000000000000000000000000000000000000000000008560f01b1660488201527fffffffffffffffffffffffffffffffff000000000000000000000000000000008460801b16604a820152605a81019150505b979650505050505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082528251806020840152611696816040850160208701611844565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b600060208252600e60208301527f4e6f7420417574686f72697a656400000000000000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f446561646c696e65206e6f74207061737365640000000000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f4d75737420657874656e6400000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252600f60208301527f446561646c696e6520706173736564000000000000000000000000000000000060408301526060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b6000604051905081810181811067ffffffffffffffff8211171561183957fe5b80604052505b919050565b60005b838110156118635780820151818401525b602081019050611847565b83811115611872576000848401525b505b505050565b73ffffffffffffffffffffffffffffffffffffffff81168114151561189e5760006000fd5b5b50565bfe45434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212207ceb7a3bb1536d4a85d3e70b197f19d5e69299af79e61cd1d7cdf263574f32cf64736f6c63430007060033";

type GenesisAllocationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenesisAllocationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenesisAllocation__factory extends ContractFactory {
  constructor(...args: GenesisAllocationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenesisAllocation> {
    return super.deploy(params, overrides || {}) as Promise<GenesisAllocation>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): GenesisAllocation {
    return super.attach(address) as GenesisAllocation;
  }
  connect(signer: Signer): GenesisAllocation__factory {
    return super.connect(signer) as GenesisAllocation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenesisAllocationInterface {
    return new utils.Interface(_abi) as GenesisAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenesisAllocation {
    return new Contract(address, _abi, signerOrProvider) as GenesisAllocation;
  }
}
