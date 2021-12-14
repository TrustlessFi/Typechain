/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProtocolDataAggregator,
  ProtocolDataAggregatorInterface,
  ConstructorParamsStruct,
} from "../ProtocolDataAggregator";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IGovernor",
            name: "Governor",
            type: "address",
          },
          {
            internalType: "contract INonfungiblePositionManager",
            name: "NftPositionManager",
            type: "address",
          },
        ],
        internalType: "struct ProtocolDataAggregator.ConstructorParams",
        name: "params",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "convertSqrtPriceX96ToTick",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "convertTickToSqrtPriceX96",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getIncentivizedPools",
    outputs: [
      {
        components: [
          {
            internalType: "contract IUniswapV3Pool",
            name: "pool",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "rewardsPortion",
            type: "uint64",
          },
        ],
        internalType: "struct IRewards.PoolConfig[]",
        name: "poolConfigs",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "start",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "end",
        type: "uint32",
      },
    ],
    name: "getLockedNFTIDs",
    outputs: [
      {
        internalType: "uint256[]",
        name: "nftIDs",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "nftIDs",
        type: "uint256[]",
      },
    ],
    name: "getUniswapPositionTickStatuses",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
        ],
        internalType: "struct ProtocolDataAggregator.NftPositionTickStatus[]",
        name: "tickStatuses",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "contract IGovernor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftPositionManager",
    outputs: [
      {
        internalType: "contract INonfungiblePositionManager",
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
        internalType: "uint64[]",
        name: "positionIDs",
        type: "uint64[]",
      },
    ],
    name: "positionsCollateralization",
    outputs: [
      {
        internalType: "uint256[]",
        name: "collateralizations",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015620000125760006000fd5b5060405162001ed338038062001ed38339818101604052810190620000389190620000d0565b5b8060000151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060200151600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50620001555662000154565b600060408284031215620000e2578081fd5b604051604081018181106001600160401b0382111715620000ff57fe5b80604052508251620001118162000137565b808252506020830151620001258162000137565b80602083015250809150505b92915050565b6001600160a01b03811681141515620001505760006000fd5b5b50565b5b611d6e80620001656000396000f3fe60806040523480156100115760006000fd5b506004361061008d5760003560e01c8063a04ebaec1161005c578063a04ebaec1461012f578063adc7f3011461015f578063bd2699e31461017d578063d423b073146101ad5761008d565b80630c340a241461009357806321da34af146100b15780635e016b90146100e157806384397888146101115761008d565b60006000fd5b61009b6101dd565b6040516100a89190611bbc565b60405180910390f35b6100cb60048036038101906100c6919061163b565b610203565b6040516100d89190611a50565b60405180910390f35b6100fb60048036038101906100f691906116df565b61041a565b6040516101089190611b6e565b60405180910390f35b610119610635565b6040516101269190611be4565b60405180910390f35b610149600480360381019061014491906118fd565b61065b565b6040516101569190611b6e565b60405180910390f35b610167610871565b6040516101749190611af3565b60405180910390f35b610197600480360381019061019291906117dc565b610aed565b6040516101a49190611c21565b60405180910390f35b6101c760048036038101906101c29190611865565b610b0a565b6040516101d49190611c0c565b60405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000825190508067ffffffffffffffff811180156102235760006000fd5b5060405190808252806020026020018201604052801561025d57816020015b61024a6114f9565b8152602001906001900390816102425790505b5091508150600060006000600060006000600090505b8681101561040057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399fbab888a838151811015156102c757fe5b60200260200101516040518263ffffffff1660e01b81526004016102eb9190611c5f565b6101806040518083038186803b1580156103055760006000fd5b505afa15801561031a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033e9190611931565b909192939495969798999a509091929394959697989950909192935090919250909150905050809650819750829850839950849a5050505050506040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018562ffffff1681526020018460020b81526020018360020b81526020015088828151811015156103e757fe5b60200260200101819052505b8080600101915050610273565b50869650505050505050610415565050505050505b919050565b60606000825190508067ffffffffffffffff8111801561043a5760006000fd5b506040519080825280602002602001820160405280156104695781602001602082028036833780820191505090505b50915081506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104d95760006000fd5b505afa1580156104ee573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610512919061178e565b9050600060006000600090505b8481101561061f578373ffffffffffffffffffffffffffffffffffffffff16636594da9f888381518110151561055157fe5b60200260200101516040518263ffffffff1660e01b81526004016105759190611c71565b60406040518083038186803b15801561058e5760006000fd5b505afa1580156105a3573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c791906118d7565b8093508194505050600083146105ef576105ea8383610b2790919063ffffffff16565b6105f2565b60005b868281518110151561060057fe5b60200260200101909081815260200150505b808060010191505061051f565b508494505050505061063056505050505b919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60608163ffffffff168363ffffffff161015156106785760006000fd5b82820363ffffffff1667ffffffffffffffff811180156106985760006000fd5b506040519080825280602002602001820160405280156106c75781602001602082028036833780820191505090505b50905080506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107375760006000fd5b505afa15801561074c573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610770919061178e565b905060005b8363ffffffff168563ffffffff16101561086857600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5983878060010198506040518363ffffffff1660e01b81526004016107ec929190611a1b565b60206040518083038186803b1580156108055760006000fd5b505afa15801561081a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e91906118bb565b838280600101935081518110151561085257fe5b6020026020010190908181526020015050610775565b50505b92915050565b60606000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b1580156108de5760006000fd5b505afa1580156108f3573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091791906117b5565b905060008173ffffffffffffffffffffffffffffffffffffffff16636fcdfed66040518163ffffffff1660e01b815260040160206040518083038186803b1580156109625760006000fd5b505afa158015610977573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099b919061188c565b61ffff16905060008114156109b8578292505050610aea56610a10565b8067ffffffffffffffff811180156109d05760006000fd5b50604051908082528060200260200182016040528015610a0a57816020015b6109f7611562565b8152602001906001900390816109ef5790505b50925082505b6000600190505b818161ffff16111515610add578273ffffffffffffffffffffffffffffffffffffffff1663fbff7efd826040518263ffffffff1660e01b8152600401610a5d9190611c49565b60406040518083038186803b158015610a765760006000fd5b505afa158015610a8b573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190611803565b846001830361ffff16815181101515610ac457fe5b60200260200101819052505b8080600101915050610a17565b508292505050610aea5650505b90565b6000610afe82610b4d63ffffffff16565b9050610b05565b919050565b6000610b1b82610fe463ffffffff16565b9050610b22565b919050565b6000610b4283670de0b6b3a7640000846113f863ffffffff16565b905080505b92915050565b6000600060008360020b12610b65578260020b610b6d565b8260020b6000035b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b8111151515610c10576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f540000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b60006000600183161415610c3557700100000000000000000000000000000000610c47565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600060028316141515610c855760806ffff97272373d413259a46990580e213a8202901c905080505b600060048316141515610cae5760806ffff2e50f5f656932ef12357cf3c7fdcc8202901c905080505b600060088316141515610cd75760806fffe5caca7e10e4e61c3624eaa0941cd08202901c905080505b600060108316141515610d005760806fffcb9843d60f6159c9db58835c9266448202901c905080505b600060208316141515610d295760806fff973b41fa98c081472e6896dfb254c08202901c905080505b600060408316141515610d525760806fff2ea16466c96a3843ec78b326b528618202901c905080505b600060808316141515610d7b5760806ffe5dee046a99a2a811c461f1969c30538202901c905080505b60006101008316141515610da55760806ffcbe86c7900a88aedcffc83b479aa3a48202901c905080505b60006102008316141515610dcf5760806ff987a7253ac413176f2b074cf7815e548202901c905080505b60006104008316141515610df95760806ff3392b0822b70005940c7a398e4b70f38202901c905080505b60006108008316141515610e235760806fe7159475a2c29b7443b29c7fa6e889d98202901c905080505b60006110008316141515610e4d5760806fd097f3bdfd2022b8845ad8f792aa58258202901c905080505b60006120008316141515610e775760806fa9f746462d870fdf8a65dc1f90e061e58202901c905080505b60006140008316141515610ea15760806f70d869a156d2a1b890bb3df62baf32f78202901c905080505b60006180008316141515610ecb5760806f31be135f97d08fd981231505542fcfa68202901c905080505b6000620100008316141515610ef65760806f09aa508b5b7a84e1c677de54f3e99bc98202901c905080505b6000620200008316141515610f205760806e5d6af8dedb81196699c329225ee6048202901c905080505b6000620400008316141515610f495760806d2216e584f5fa1ea926041bedfe988202901c905080505b6000620800008316141515610f705760806b048a170391f7dc42444e8fa28202901c905080505b60008460020b1315610fad57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811515610fa757fe5b04905080505b600064010000000082811515610fbf57fe5b0614610fcc576001610fcf565b60005b60ff16602082901c019250825050505b919050565b60006401000276a373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1610158015611066575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16105b15156110dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f520000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600060208373ffffffffffffffffffffffffffffffffffffffff16901b905060008190506000600090506fffffffffffffffffffffffffffffffff821160071b808217915082811c92505067ffffffffffffffff821160061b808217915082811c92505063ffffffff821160051b808217915082811c92505061ffff821160041b808217915082811c92505060ff821160031b808217915082811c925050600f821160021b808217915082811c9250506003821160011b808217915082811c925050600182118082179150506080811015156111c357607f810383901c915081506111cf565b80607f0383901b915081505b6000604060808303901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b82179150506000693627a301d71055774c8582029050600060806f028f6481ab7f045a5af012a19d003aaa8303901d9050600060806fdb2df09e81959a81455e260799a0632f8401901d90508060020b8260020b146113e5578873ffffffffffffffffffffffffffffffffffffffff166113bc82610b4d63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1611156113de57816113e0565b805b6113e7565b815b97508750505050505050505b919050565b600060006000600019858709858702925082811083820303915050600081141561143b5760008411151561142c5760006000fd5b838204925082925050506114f2565b808411151561144a5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506114f25650505050505b9392505050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff168152602001600060020b8152602001600060020b81526020015090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001509056611d37565b6000815190506115b281611cdb565b5b919050565b6000815190506115c781611d04565b5b919050565b6000815190506fffffffffffffffffffffffffffffffff8116811415156115f45760006000fd5b5b919050565b60008151905062ffffff8116811415156116145760006000fd5b5b919050565b60008135905063ffffffff8116811415156116355760006000fd5b5b919050565b6000602080838503121561164d578182fd5b823567ffffffffffffffff811115611663578283fd5b808401905084601f8201121515611678578283fd5b803561168b61168682611cb8565b611c8d565b808282528482019150848401888687860287010111156116a9578687fd5b8694505b838510156116cf5780358352858301925085810190505b6001850194506116ad565b5080955050505050505b92915050565b600060208083850312156116f1578182fd5b823567ffffffffffffffff811115611707578283fd5b808401905084601f820112151561171c578283fd5b803561172f61172a82611cb8565b611c8d565b8082825284820191508484018886878602870101111561174d578687fd5b8694505b8385101561177e57803561176481611d1a565b80845250858301925085810190505b600185019450611751565b5080955050505050505b92915050565b60006020828403121561179f578081fd5b81516117aa81611cdb565b809150505b92915050565b6000602082840312156117c6578081fd5b81516117d181611cdb565b809150505b92915050565b6000602082840312156117ed578081fd5b81356117f881611d04565b809150505b92915050565b600060408284031215611814578081fd5b6040516040810181811067ffffffffffffffff8211171561183157fe5b8060405250825161184181611cdb565b80825250602083015161185381611d1a565b80602083015250809150505b92915050565b600060208284031215611876578081fd5b813561188181611cdb565b809150505b92915050565b60006020828403121561189d578081fd5b815161ffff8116811415156118b0578182fd5b809150505b92915050565b6000602082840312156118cc578081fd5b815190505b92915050565b60006000604083850312156118ea578081fd5b82519150602083015190505b9250929050565b6000600060408385031215611910578182fd5b6119198361161a565b91506119276020840161161a565b90505b9250929050565b6000600060006000600060006000600060006000600060006101808d8f031215611959578788fd5b8c516bffffffffffffffffffffffff811681141515611976578889fd5b809c505061198660208e016115a3565b9a5061199460408e016115a3565b99506119a260608e016115a3565b98506119b060808e016115fa565b97506119be60a08e016115b8565b96506119cc60c08e016115b8565b95506119da60e08e016115cd565b94506101008d015193506101208d015192506119f96101408e016115cd565b9150611a086101608e016115cd565b90505b9295989b509295989b509295989b565b600060408201905073ffffffffffffffffffffffffffffffffffffffff8416825263ffffffff831660208301525b9392505050565b60006020808301818452808551808352604092508286019150838701855b82811015611ae357815173ffffffffffffffffffffffffffffffffffffffff808251168652808883015116888701525062ffffff868201511686860152606080820151600281810b838901526080925082840151810b838901525050505060a08401935085820191505b600181019050611a6e565b5050508093505050505b92915050565b60006020808301818452808551808352604092508286019150838701855b82811015611b5e57815173ffffffffffffffffffffffffffffffffffffffff815116855267ffffffffffffffff87820151168786015250848401935085820191505b600181019050611b11565b5050508093505050505b92915050565b600060208083018184528085518083526040860191508387019250845b81811015611bad5783518352848301925084840193505b600181019050611b8b565b50508093505050505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508260020b82525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905061ffff831682525b92915050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b6000604051905081810181811067ffffffffffffffff82111715611cad57fe5b80604052505b919050565b600067ffffffffffffffff821115611ccc57fe5b6020602083020190505b919050565b73ffffffffffffffffffffffffffffffffffffffff811681141515611d005760006000fd5b5b50565b8060020b81141515611d165760006000fd5b5b50565b67ffffffffffffffff811681141515611d335760006000fd5b5b50565bfea2646970667358221220fd3a6b61393cc09c329841a556c9ef80cc3775aef531e5f67700f768754123d264736f6c63430007060033";

type ProtocolDataAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolDataAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolDataAggregator__factory extends ContractFactory {
  constructor(...args: ProtocolDataAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProtocolDataAggregator> {
    return super.deploy(
      params,
      overrides || {}
    ) as Promise<ProtocolDataAggregator>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): ProtocolDataAggregator {
    return super.attach(address) as ProtocolDataAggregator;
  }
  connect(signer: Signer): ProtocolDataAggregator__factory {
    return super.connect(signer) as ProtocolDataAggregator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolDataAggregatorInterface {
    return new utils.Interface(_abi) as ProtocolDataAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolDataAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProtocolDataAggregator;
  }
}
