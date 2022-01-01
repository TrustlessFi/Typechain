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
        internalType: "uint256",
        name: "roundID",
        type: "uint256",
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
    name: "TokensTransferredToIncentiveAllocation",
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
            internalType: "uint256",
            name: "roundID",
            type: "uint256",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "uint256",
        name: "roundID",
        type: "uint256",
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
    name: "transferAllocationToIncentiveAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052348015620000125760006000fd5b5060405162001fc938038062001fc9833981810160405281019062000038919062000287565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806040015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150506200011f6200011382606001516200012760201b60201c565b6200016660201b60201c565b5b50620003ef565b60006200015c826200013e620001e260201b60201c565b67ffffffffffffffff166200020460201b62000b8b1790919060201c565b905080505b919050565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051620001d6919062000378565b60405180910390a15b50565b6000620001fc426200022260201b62000ba617909060201c565b905080505b90565b6000818362000214919062000393565b90506200021c565b92915050565b6000680100000000000000008210151562000274576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026b9062000339565b60405180910390fd5b8190506200027d565b91905056620003ee565b60006080828403121562000299578081fd5b604051608081016001600160401b038282108183111715620002c957634e487b7160e01b84526041600452602484fd5b8160405284519150620002dc82620003d1565b81835260208501519150620002f182620003d1565b816020840152604085015191506200030982620003d1565b816040840152606085015191508082168214151562000326578384fd5b5080606083015250809150505b92915050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60006020820190506001600160401b03831682525b92915050565b60006001600160401b03808316818516808303821115620003c257634e487b7160e01b84526011600452602484fd5b80820193505050505b92915050565b6001600160a01b03811681141515620003ea5760006000fd5b505b565b5b60805160601c60a05160601c611b92620004376000396000818161077d015281816109ff01528181610a3b0152610b6901526000818161038601526105860152611b926000f3fe60806040523480156100115760006000fd5b50600436106100ce5760003560e01c8063452a932011610082578063a3f4df7e1161005c578063a3f4df7e146101d0578063e643b524146101ee578063f00000ee1461020a576100ce565b8063452a9320146101525780636a0b0134146101705780636fca301e146101a0576100ce565b806329dcb0cf116100b357806329dcb0cf1461010e578063314e99a21461012c578063351b64f114610136576100ce565b806308805f75146100d45780632335c76b146100f0576100ce565b60006000fd5b6100ee60048036038101906100e9919061146b565b610228565b005b6100f8610384565b604051610105919061156e565b60405180910390f35b6101166103a8565b604051610123919061194a565b60405180910390f35b6101346103c2565b005b610150600480360381019061014b919061131b565b61044a565b005b61015a610813565b604051610167919061156e565b60405180910390f35b61018a600480360381019061018591906112a9565b610839565b60405161019791906115d7565b60405180910390f35b6101ba60048036038101906101b591906112da565b61086e565b6040516101c791906115eb565b60405180910390f35b6101d86108e7565b6040516101e5919061164f565b60405180910390f35b61020860048036038101906102039190611448565b610923565b005b610212610b67565b60405161021f9190611627565b60405180910390f35b610287600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c0263ffffffff16565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166102b6610c4863ffffffff16565b67ffffffffffffffff16101515610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f9906118a8565b60405180910390fd5b8067ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610370576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036790611869565b60405180910390fd5b61037f81610c6363ffffffff16565b5b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060149054906101000a900467ffffffffffffffff1681565b610421600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c0263ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16610479610c4863ffffffff16565b67ffffffffffffffff161015156104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc906118a8565b60405180910390fd5b6000815190506104d36111e6565b600060003390506000600090505b8481101561075e578581815181101515610524577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015193508350600061058261055c610551858860200151896040015161086e63ffffffff16565b610cdd63ffffffff16565b866000015160000151876000015160200151886000015160400151610d1263ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156105df575061074b565b600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008660200151815260200190815260200160002060009054906101000a900460ff1615610652575061074b565b6001600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008760200151815260200190815260200160002060006101000a81548160ff0219169083151502179055506106ee8560400151856fffffffffffffffffffffffffffffffff16610d5190919063ffffffff16565b9350835084602001518373ffffffffffffffffffffffffffffffffffffffff167fe5aaaaece9a1bf6b24f1b99c8d79bbc51f548f6a81947bc3631c216a99ac489287604001516040516107419190611926565b60405180910390a3505b808061075690611a91565b9150506104e1565b506000826fffffffffffffffffffffffffffffffff1614151561080b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee482846040518363ffffffff1660e01b81526004016107d6929190611596565b600060405180830381600087803b1580156107f15760006000fd5b505af1158015610806573d600060003e3d6000fd5b505050505b505050505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60006040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015046308686866040516020016108c3969594939291906114a0565b6040516020818303038152906040528051906020012090506108e0565b9392505050565b6040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015081565b610982600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c0263ffffffff16565b610990610c4863ffffffff16565b67ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff161015156109fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f49061182a565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee47f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663262406de6040518163ffffffff1660e01b815260040160206040518083038186803b158015610aa05760006000fd5b505afa158015610ab5573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad99190611282565b836040518363ffffffff1660e01b8152600401610af7929190611596565b600060405180830381600087803b158015610b125760006000fd5b505af1158015610b27573d600060003e3d6000fd5b505050507fab66120f2ae5ab429499bbccd7be767f5037aa678a6550988dbcdcecc1c95f6881604051610b5a9190611926565b60405180910390a15b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008183610b999190611a29565b9050610ba0565b92915050565b60006801000000000000000082101515610bf5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bec906118e7565b60405180910390fd5b819050610bfd565b919050565b801515610c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b90611786565b60405180910390fd5b5b50565b6000610c5b42610ba6909063ffffffff16565b905080505b90565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051610cd1919061194a565b60405180910390a15b50565b600081604051602001610cf09190611536565b604051602081830303815290604052805190602001209050610d0d565b919050565b600060006000610d2a87878787610d6c63ffffffff16565b91509150610d3d81610e8063ffffffff16565b8192505050610d495650505b949350505050565b60008183610d5f91906119ee565b9050610d66565b92915050565b600060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610da8576000600391509150610e77565b601b8560ff1614158015610dc05750601c8560ff1614155b15610dd2576000600491509150610e77565b600060018787878760405160008152602001604052604051610df794939291906115fd565b6020604051602081039080840390855afa158015610e1a573d600060003e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e6957600060019250925050610e77565b8060009250925050610e7756505b94509492505050565b60006004811115610eba577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115610ef3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610f02576111e3566111e2565b60016004811115610f3c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115610f75577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610fba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fad906116a3565b60405180910390fd6111e1565b60026004811115610ff4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561102d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415611072576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611065906116e2565b60405180910390fd6111e0565b600360048111156110ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156110e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561112a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111d90611721565b60405180910390fd6111df565b60046004811115611164577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561119d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156111de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d5906117c5565b60405180910390fd5b5b5b5b5b5b50565b60405180606001604052806111f9611222565b81526020016000815260200160006fffffffffffffffffffffffffffffffff1681526020015090565b6040518060600160405280600060ff16815260200160006000191681526020016000600019168152602001509056611b5b565b6000813590506fffffffffffffffffffffffffffffffff81168114151561127c5760006000fd5b5b919050565b600060208284031215611293578081fd5b815161129e81611b32565b809150505b92915050565b60006000604083850312156112bc578081fd5b82356112c781611b32565b80925050602083013590505b9250929050565b600060006000606084860312156112ef578081fd5b83356112fa81611b32565b809350506020840135915061131160408501611255565b90505b9250925092565b6000602080838503121561132d578182fd5b823567ffffffffffffffff80821115611344578384fd5b818501915085601f8301121515611359578384fd5b81358181111561136c5761136b611b01565b5b61137a848260051b01611997565b915081818352848301925084840160a08987828602880101111561139c578788fd5b8795505b8386101561143757818a03818112156113b7578889fd5b6113bf611966565b6060808312156113cd578a8bfd5b6113d5611966565b9250843560ff8116811415156113e9578b8cfd5b80845250898501358a84015260408086013581850152838352818601358b84015261141660808701611255565b8184015250508087525050868501945080820191505b6001860195506113a0565b505080955050505050505b92915050565b600060208284031215611459578081fd5b61146282611255565b90505b92915050565b60006020828403121561147c578081fd5b813567ffffffffffffffff811681141515611495578182fd5b809150505b92915050565b600087516114b2818460208c01611a5c565b80830190508781527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808860601b166020830152808760601b166034830152508460488201527fffffffffffffffffffffffffffffffff000000000000000000000000000000008460801b166068820152607881019150505b979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000815281601c8201526000603c820190505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b600060808201905085825260ff851660208301528360408301528260608301525b95945050505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b602081526000825180602084015261166e816040850160208701611a5c565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b60208152601860208201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260006060820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601360208201527f446561646c696e65206e6f742070617373656400000000000000000000000000604082015260006060820190505b919050565b60208152600b60208201527f4d75737420657874656e64000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600f60208201527f446561646c696e65207061737365640000000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b600060405190506060810181811067ffffffffffffffff8211171561198e5761198d611b01565b5b80604052505b90565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156119e3576119e2611b01565b5b80604052505b919050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611a1a57611a19611ad0565b5b80820193505050505b92915050565b600067ffffffffffffffff808316818516808303821115611a4d57611a4c611ad0565b5b80820193505050505b92915050565b60005b83811015611a7b5780820151818401525b602081019050611a5f565b83811115611a8a576000848401525b505050505b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ac457611ac3611ad0565b5b6001820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff811681141515611b575760006000fd5b505b565bfea2646970667358221220255a5ce81d450578341328c14788a2d67d66edc5e996204ceb1886aaed096ed764736f6c63430008040033";

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
