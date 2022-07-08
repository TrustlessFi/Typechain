/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TickBitmapEchidnaTest,
  TickBitmapEchidnaTestInterface,
} from "../../../../contracts/uniswap-v3-core/test/TickBitmapEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "checkNextInitializedTickWithinOneWordInvariants",
    outputs: [],
    stateMutability: "view",
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
    name: "flipTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610d58806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80632854ac0a146100415780638815912f1461005d5761003b565b60006000fd5b61005b600480360381019061005691906108e0565b610079565b005b61007760048036038101906100729190610922565b610252565b005b600060006100998460018560006000506102a9909392919063ffffffff16565b915091508215610182577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8001008460020b121515156100d65760006000fd5b8360020b8260020b131515156100ef576100ee610947565b5b61010082856100fe91906109a9565b60020b12151561011157610110610947565b5b60008490505b8260020b8160020b131561015857610134816104c163ffffffff16565b15151561014457610143610947565b5b5b808061015090610a14565b915050610117565b5080151561016b836104c163ffffffff16565b151514151561017d5761017c610947565b5b61024b565b627ffeff8460020b1215156101975760006000fd5b8360020b8260020b1315156101af576101ae610947565b5b61010084836101be91906109a9565b60020b131515156101d2576101d1610947565b5b60006001856101e19190610a77565b90505b8260020b8160020b121561022557610201816104c163ffffffff16565b15151561021157610210610947565b5b5b808061021d90610ae2565b9150506101e4565b50801515610238836104c163ffffffff16565b151514151561024a57610249610947565b5b5b50505b5050565b6000610263826104c163ffffffff16565b905061027f826001600060005061050e9092919063ffffffff16565b80151515610292836104c163ffffffff16565b15151415156102a4576102a3610947565b5b505b50565b60006000600084866102bb9190610b3a565b905060008660020b1280156102df5750600085876102d99190610bb7565b60020b14155b156102f35780806102ef90610a14565b9150505b83156103ca576000600061030c8361058d63ffffffff16565b9150915060008160ff166001901b60018360ff166001901b61032e9190610bdd565b6103389190610bfc565b90506000818b60008660010b60010b8152602001908152602001600020600050541690506000811415955085508561038957888360ff168661037a91906109a9565b6103849190610c1c565b6103bd565b88610399826105b563ffffffff16565b846103a49190610ccc565b60ff16866103b291906109a9565b6103bc9190610c1c565b5b96508650505050506104b6565b600060006103e96001846103de9190610a77565b61058d63ffffffff16565b91509150600060018260ff166001901b6104039190610bdd565b1990506000818b60008660010b60010b8152602001908152602001600020600050541690506000811415955085508561046d57888360ff6104449190610ccc565b60ff166001876104549190610a77565b61045e9190610a77565b6104689190610c1c565b6104ad565b888361047e8361070b63ffffffff16565b6104889190610ccc565b60ff166001876104989190610a77565b6104a29190610a77565b6104ac9190610c1c565b5b96508650505050505b505b94509492505050565b6000600060006104e4846001600160006000506102a9909392919063ffffffff16565b915091508360020b8260020b146104fc5760006104fe565b805b925050506105095650505b919050565b6000818361051c9190610bb7565b60020b14151561052c5760006000fd5b6000600061054a838561053f9190610b3a565b61058d63ffffffff16565b9150915060008160ff166001901b9050808660008560010b60010b815260200190815260200160002060008282825054189250508190909055505050505b505050565b6000600060088360020b901d91508150610100836105ab9190610bb7565b905080505b915091565b60006000821115156105c75760006000fd5b700100000000000000000000000000000000821015156105fc57608082901c915081506080816105f79190610cf5565b905080505b680100000000000000008210151561062957604082901c915081506040816106249190610cf5565b905080505b6401000000008210151561065257602082901c9150815060208161064d9190610cf5565b905080505b620100008210151561067957601082901c915081506010816106749190610cf5565b905080505b6101008210151561069f57600882901c9150815060088161069a9190610cf5565b905080505b6010821015156106c457600482901c915081506004816106bf9190610cf5565b905080505b6004821015156106e957600282901c915081506002816106e49190610cf5565b905080505b600282101515610705576001816107009190610cf5565b905080505b5b919050565b600060008211151561071d5760006000fd5b60ff9050805060006fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff16831611156107665760808161075d9190610ccc565b90508050610770565b608082901c915081505b600067ffffffffffffffff67ffffffffffffffff16831611156107a35760408161079a9190610ccc565b905080506107ad565b604082901c915081505b600063ffffffff63ffffffff16831611156107d8576020816107cf9190610ccc565b905080506107e2565b602082901c915081505b600061ffff61ffff1683161115610809576010816108009190610ccc565b90508050610813565b601082901c915081505b600060ff60ff16831611156108385760088161082f9190610ccc565b90508050610842565b600882901c915081505b6000600f831611156108645760048161085b9190610ccc565b9050805061086e565b600482901c915081505b6000600383161115610890576002816108879190610ccc565b9050805061089a565b600282901c915081505b60006001831611156108b8576001816108b39190610ccc565b905080505b5b91905056610d21565b6000813590508060020b811415156108da5760006000fd5b5b919050565b60006000604083850312156108f55760006000fd5b6108fe836108c2565b91506020830135801515811415156109165760006000fd5b809150505b9250929050565b6000602082840312156109355760006000fd5b61093e826108c2565b90505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60008160020b8360020b60008112817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000018312811516156109ed576109ec610978565b5b81627fffff018313811615610a0557610a04610978565b5b50808203925050505b92915050565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000811415610a4b57610a4a610978565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019150505b919050565b60008160020b8360020b6000821282627fffff03821381151615610a9e57610a9d610978565b5b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000038212811615610ad357610ad2610978565b5b50808201925050505b92915050565b60008160020b627fffff811415610afc57610afb610978565b5b600181019150505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b60008160020b8360020b801515610b5457610b53610b09565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000083141615610ba957610ba8610978565b5b808205925050505b92915050565b60008260020b801515610bcd57610bcc610b09565b5b808360020b079150505b92915050565b600082821015610bf057610bef610978565b5b82820390505b92915050565b60008219821115610c1057610c0f610978565b5b82820190505b92915050565b60008160020b8360020b627fffff600082136000841383830485118282161615610c4957610c48610978565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000006000851286820586128184161615610c8557610c84610978565b5b60008712925085820587128484161615610ca257610ca1610978565b5b85850587128184161615610cb957610cb8610978565b5b5050505050808202925050505b92915050565b600060ff821660ff841680821015610ce757610ce6610978565b5b808203925050505b92915050565b600060ff821660ff84168060ff03821115610d1357610d12610978565b5b808201925050505b92915050565bfea2646970667358221220865e9bf6ff7e5c12bd462ba9ca575269dd40f42bfe9ccfa7fe72724277884df664736f6c634300080c0033";

type TickBitmapEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickBitmapEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickBitmapEchidnaTest__factory extends ContractFactory {
  constructor(...args: TickBitmapEchidnaTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickBitmapEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickBitmapEchidnaTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TickBitmapEchidnaTest {
    return super.attach(address) as TickBitmapEchidnaTest;
  }
  override connect(signer: Signer): TickBitmapEchidnaTest__factory {
    return super.connect(signer) as TickBitmapEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickBitmapEchidnaTestInterface {
    return new utils.Interface(_abi) as TickBitmapEchidnaTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickBitmapEchidnaTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TickBitmapEchidnaTest;
  }
}
