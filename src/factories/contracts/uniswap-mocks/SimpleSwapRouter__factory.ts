/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleSwapRouter,
  SimpleSwapRouterInterface,
} from "../../../contracts/uniswap-mocks/SimpleSwapRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct SimpleSwapRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeBips",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
    ],
    name: "sweepTokenWithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeBips",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9WithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60006000509090553480156200003b5760006000fd5b5060405162002b4738038062002b47833981810160405281019062000061919062000109565b5b81815b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815260200150505b50505b5050620001455662000144565b6000815190506001600160a01b03811681141515620001035760006000fd5b5b919050565b60006000604083850312156200011f5760006000fd5b6200012a83620000e4565b91506200013a60208401620000e4565b90505b9250929050565b5b60805160a051612997620001b06000396000818160a201528181610286015281816103710152818161041501528181610458015281816105430152818161118d015281816111ed01526112700152600081816107af01528181610a5b015261172701526129976000f3fe60806040526004361061009a5760003560e01c8063c04b8d5911610069578063df2ab5bb1161004e578063df2ab5bb14610203578063e0e189a01461021f578063fa461e331461023b57610133565b8063c04b8d59146101a7578063c45a0155146101d757610133565b806312210e8a1461013957806349404b7c146101435780634aa4a4fc1461015f5780639b2c0a371461018b57610133565b36610133575b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012790611d29565b60405180910390fd5b5b005b60006000fd5b610141610265565b005b61015d60048036038101906101589190611d91565b610282565b005b34801561016c5760006000fd5b50610175610413565b6040516101829190611dc4565b60405180910390f35b6101a560048036038101906101a09190611dec565b610437565b005b6101c160048036038101906101bc9190611f53565b610631565b6040516101ce9190611ffd565b60405180910390f35b3480156101e45760006000fd5b506101ed6107ad565b6040516101fa9190611dc4565b60405180910390f35b61021d6004803603810190610218919061200f565b6107d1565b005b61023960048036038101906102349190612056565b6108b7565b005b3480156102485760006000fd5b50610263600480360381019061025e91906120bd565b610a07565b005b600047111561027f5761027e3347610ba663ffffffff16565b5b5b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102dd9190611dc4565b602060405180830381865afa1580156102fb573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031f919061214d565b9050828110151515610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035d9061216b565b60405180910390fd5b600081111561040d577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b81526004016103c89190611ffd565b600060405180830381600087803b1580156103e35760006000fd5b505af11580156103f8573d600060003e3d6000fd5b5050505061040c8282610ba663ffffffff16565b5b505b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600082118015610448575060648211155b15156104545760006000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104af9190611dc4565b602060405180830381865afa1580156104cd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f1919061214d565b9050848110151515610538576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052f9061216b565b60405180910390fd5b6000811115610629577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040161059a9190611ffd565b600060405180830381600087803b1580156105b55760006000fd5b505af11580156105ca573d600060003e3d6000fd5b5050505060006127106105e68584610ca990919063ffffffff16565b6105f091906121db565b9050600081111561060c5761060b8382610ba663ffffffff16565b5b61062785828461061c919061221f565b610ba663ffffffff16565b505b505b50505050565b6000816040015180421115151561067d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106749061223e565b60405180910390fd5b60003390505b60011561075b5760006106a18560000151610ce5909063ffffffff16565b905061070b8560600151826106ba5786602001516106bc565b305b600060405180604001604052806106de8b60000151610d29909063ffffffff16565b81526020018773ffffffffffffffffffffffffffffffffffffffff16815260200150610d6663ffffffff16565b856060019090818152602001505080156107465730915081506107398560000151610f56909063ffffffff16565b8560000181905250610755565b8460600151935083505061075b565b50610683565b836080015183101515156107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b9061227d565b60405180910390fd5b505b5b50919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161080c9190611dc4565b602060405180830381865afa15801561082a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e919061214d565b9050828110151515610895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088c906122bc565b60405180910390fd5b60008111156108b0576108af848383610f9f63ffffffff16565b5b505b505050565b6000821180156108c8575060648211155b15156108d45760006000fd5b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161090f9190611dc4565b602060405180830381865afa15801561092d573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610951919061214d565b9050848110151515610998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098f906122bc565b60405180910390fd5b60008111156109fe5760006127106109b98584610ca990919063ffffffff16565b6109c391906121db565b905060008111156109e0576109df878483610f9f63ffffffff16565b5b6109fc878683856109f1919061221f565b610f9f63ffffffff16565b505b505b5050505050565b6000841380610a165750600083135b1515610a225760006000fd5b60008282810190610a3391906122fb565b9050600060006000610a5084600001516110f8909063ffffffff16565b925092509250610a887f000000000000000000000000000000000000000000000000000000000000000084848461115a63ffffffff16565b506000600060008a13610aca578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161089610afb565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16108a5b915091508115610b2057610b1b858760200151338461118b63ffffffff16565b610b99565b610b358660000151610ce5909063ffffffff16565b15610b7057610b4f8660000151610f56909063ffffffff16565b8660000181905250610b6a813360008961137863ffffffff16565b50610b98565b8060006000508190909055508394508450610b97858760200151338461118b63ffffffff16565b5b5b5050505050505b50505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff811115610bdb57610bda611e3e565b5b6040519080825280601f01601f191660200182016040528015610c0d5781602001600182028036833780820191505090505b50604051610c1b91906123d5565b60006040518083038185875af1925050503d8060008114610c58576040519150601f19603f3d011682016040523d82523d6000602084013e610c5d565b606091505b50509050801515610ca3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9a906123f4565b60405180910390fd5b505b5050565b60006000831480610cd2575081838385610cc39190612433565b925082610cd091906121db565b145b1515610cde5760006000fd5b5b92915050565b600060036014610cf59190612478565b601460036014610d059190612478565b610d0f9190612478565b610d199190612478565b825110159050610d24565b919050565b6060610d5a6000601460036014610d409190612478565b610d4a9190612478565b846115aa9092919063ffffffff16565b9050610d61565b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610da35730935083505b600060006000610dbe85600001516110f8909063ffffffff16565b92509250925060008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610905060006000610e0c86868661172363ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b85610e3a8f6117d2909063ffffffff16565b60008e73ffffffffffffffffffffffffffffffffffffffff1614610e5e578d610e9d565b87610e8957600173fffd8963efd1fc6a506488495d951d5263988d26610e849190612498565b610e9c565b60016401000276a3610e9b91906124d6565b5b5b8d604051602001610eae9190612562565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610edd9594939291906125ab565b6040604051808303816000875af1158015610efd573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2191906125ff565b9150915082610f305781610f32565b805b610f3b90612627565b9650505050505050610f4e565050505050505b949350505050565b6060610f9360036014610f699190612478565b60036014610f779190612478565b8451610f83919061221f565b846115aa9092919063ffffffff16565b9050610f9a565b919050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b8585604051602401610fd5929190612666565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161103f91906123d5565b6000604051808303816000865af19150503d806000811461107c576040519150601f19603f3d011682016040523d82523d6000602084013e611081565b606091505b50915091508180156110af57506000815114806110ae5750808060200190518101906110ad9190612695565b5b5b15156110f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e7906126c6565b60405180910390fd5b50505b505050565b60006000600061111260008561180e90919063ffffffff16565b9250825061112a6014856118dd90919063ffffffff16565b9050805061114e6003601461113f9190612478565b8561180e90919063ffffffff16565b915081505b9193909250565b600061117c8561117186868661199d63ffffffff16565b611a4163ffffffff16565b9050611183565b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480156111e65750804710155b15611313577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156112545760006000fd5b505af1158015611269573d600060003e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b81526004016112c9929190612666565b6020604051808303816000875af11580156112e9573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d9190612695565b50611371565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561135d57611358848383610f9f63ffffffff16565b611370565b61136f84848484611a9963ffffffff16565b5b5b5b50505050565b6000600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156113b55730935083505b6000600060006113d085600001516110f8909063ffffffff16565b92509250925060008373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161090506000600061141e85878661172363ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b8561144c8f6117d2909063ffffffff16565b61145590612627565b60008e73ffffffffffffffffffffffffffffffffffffffff1614611479578d6114b8565b876114a457600173fffd8963efd1fc6a506488495d951d5263988d2661149f9190612498565b6114b7565b60016401000276a36114b691906124d6565b5b5b8d6040516020016114c99190612562565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016114f89594939291906125ab565b6040604051808303816000875af1158015611518573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153c91906125ff565b9150915060008361155757818361155290612627565b611563565b828261156290612627565b5b809250819950505060008a73ffffffffffffffffffffffffffffffffffffffff16141561159a578b811415156115995760006000fd5b5b505050505050505b949350505050565b606081601f836115ba9190612478565b101515156115fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f490612705565b60405180910390fd5b82828461160a9190612478565b1015151561164d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164490612705565b60405180910390fd5b81836116599190612478565b84511015151561169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590612744565b60405180910390fd5b60608215600081146116bf5760405191506000825260208201604052611711565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156116fe57805183525b6020830192506020810190506116e0565b5050858452601f19601f82011660405250505b508091505061171c56505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631698ee828585856040518463ffffffff1660e01b815260040161178293929190612783565b602060405180830381865afa1580156117a0573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c491906127c2565b90506117cb565b9392505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821015156118035760006000fd5b81905080505b919050565b60008160148361181e9190612478565b10151515611861576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611858906127eb565b60405180910390fd5b60148261186e9190612478565b8351101515156118b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118aa9061282a565b60405180910390fd5b60006c0100000000000000000000000083602086010151049050809150506118d756505b92915050565b6000816003836118ed9190612478565b10151515611930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192790612869565b60405180910390fd5b60038261193d9190612478565b835110151515611982576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611979906128a8565b60405180910390fd5b60008260038501015190508091505061199756505b92915050565b6119a5611cd0565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1611156119e457828480945081955050505b60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff168152602001509050611a3a565b9392505050565b6000611a538383611bf563ffffffff16565b905080508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a925760006000fd5b5b92915050565b600060008573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b868686604051602401611ad1939291906128e7565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051611b3b91906123d5565b6000604051808303816000865af19150503d8060008114611b78576040519150601f19603f3d011682016040523d82523d6000602084013e611b7d565b606091505b5091509150818015611bab5750600081511480611baa575080806020019051810190611ba99190612695565b5b5b1515611bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611be390612921565b60405180910390fd5b50505b50505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff16101515611c3a5760006000fd5b8273ffffffffffffffffffffffffffffffffffffffff16631698ee828360000151846020015185604001516040518463ffffffff1660e01b8152600401611c8393929190612783565b602060405180830381865afa158015611ca1573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc591906127c2565b905080505b92915050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff168152602001509056612960565b60208152600960208201527f4e6f742057455448390000000000000000000000000000000000000000000000604082015260006060820190505b919050565b73ffffffffffffffffffffffffffffffffffffffff811681141515611d8d5760006000fd5b505b565b6000600060408385031215611da65760006000fd5b823591506020830135611db881611d68565b809150505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060006000600060808587031215611e055760006000fd5b843593506020850135611e1781611d68565b80935050604085013591506060850135611e3081611d68565b809150505b92959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b6000604051905060a0810181811067ffffffffffffffff82111715611e9757611e96611e3e565b5b80604052505b90565b600082601f8301121515611eb45760006000fd5b813567ffffffffffffffff80821115611ed057611ecf611e3e565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f8701160116810191508082108383111715611f1857611f17611e3e565b5b81604052838152866020858801011115611f325760006000fd5b83602087016020830137600060208583010152809450505050505b92915050565b600060208284031215611f665760006000fd5b813567ffffffffffffffff80821115611f7f5760006000fd5b818401915060a08286031215611f955760006000fd5b611f9d611e6f565b823582811115611fad5760006000fd5b611fb987828601611ea0565b82525060208301359150611fcc82611d68565b8160208201526040830135604082015260608301356060820152608083013560808201528093505050505b92915050565b60006020820190508282525b92915050565b600060006000606084860312156120265760006000fd5b833561203181611d68565b8093505060208401359150604084013561204a81611d68565b809150505b9250925092565b6000600060006000600060a086880312156120715760006000fd5b853561207c81611d68565b8095505060208601359350604086013561209581611d68565b809350506060860135915060808601356120ae81611d68565b809150505b9295509295909350565b6000600060006000606085870312156120d65760006000fd5b8435935060208501359250604085013567ffffffffffffffff808211156120fd5760006000fd5b818701915087601f83011215156121145760006000fd5b8135818111156121245760006000fd5b8860208285010111156121375760006000fd5b6020830194508093505050505b92959194509250565b6000602082840312156121605760006000fd5b815190505b92915050565b60208152601260208201527f496e73756666696369656e742057455448390000000000000000000000000000604082015260006060820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000821515612213577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565b600082821015612232576122316121aa565b5b82820390505b92915050565b60208152601360208201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604082015260006060820190505b919050565b60208152601360208201527f546f6f206c6974746c6520726563656976656400000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604082015260006060820190505b919050565b60006020828403121561230e5760006000fd5b813567ffffffffffffffff808211156123275760006000fd5b81840191506040828603121561233d5760006000fd5b60405160408101818110838211171561235957612358611e3e565b5b806040525082358281111561236e5760006000fd5b61237a87828601611ea0565b8252506020830135925061238d83611d68565b8260208201528093505050505b92915050565b60005b838110156123bf5780820151818401525b6020810190506123a3565b838111156123ce576000848401525b505050505b565b600082516123e78184602087016123a0565b8083019150505b92915050565b60208152600360208201527f5354450000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561246c5761246b6121aa565b5b82820290505b92915050565b6000821982111561248c5761248b6121aa565b5b82820190505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8083168185169150818110156124c8576124c76121aa565b5b818103925050505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808316818516808303821115612506576125056121aa565b5b80820193505050505b92915050565b6000815180845261252d8160208601602086016123a0565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b60208152600082516040602084015261257e6060840182612515565b905073ffffffffffffffffffffffffffffffffffffffff6020850151166040840152809150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a060808301526125f260a0830184612515565b90505b9695505050505050565b60006000604083850312156126145760006000fd5b82519150602083015190505b9250929050565b60007f800000000000000000000000000000000000000000000000000000000000000082141561265a576126596121aa565b5b8160000390505b919050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b6000602082840312156126a85760006000fd5b8151801515811415156126bb5760006000fd5b809150505b92915050565b60208152600260208201527f5354000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604082015260006060820190505b919050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525062ffffff831660408301525b949350505050565b6000602082840312156127d55760006000fd5b81516127e081611d68565b809150505b92915050565b60208152601260208201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604082015260006060820190505b919050565b60208152601560208201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604082015260006060820190505b919050565b60208152601460208201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604082015260006060820190505b919050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152508260408301525b949350505050565b60208152600360208201527f5354460000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565bfea264697066735822122034abb9f73a2824e1716cc220a4f2debb7f7cdae3ca8c0ac2eca5ad26e9e0f47d64736f6c634300080c0033";

type SimpleSwapRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleSwapRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleSwapRouter__factory extends ContractFactory {
  constructor(...args: SimpleSwapRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleSwapRouter> {
    return super.deploy(
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<SimpleSwapRouter>;
  }
  override getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  override attach(address: string): SimpleSwapRouter {
    return super.attach(address) as SimpleSwapRouter;
  }
  override connect(signer: Signer): SimpleSwapRouter__factory {
    return super.connect(signer) as SimpleSwapRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleSwapRouterInterface {
    return new utils.Interface(_abi) as SimpleSwapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleSwapRouter {
    return new Contract(address, _abi, signerOrProvider) as SimpleSwapRouter;
  }
}