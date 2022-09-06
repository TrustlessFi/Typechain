/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SwapMathTest,
  SwapMathTestInterface,
} from "../../../../contracts/uniswap-v3-core/test/SwapMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint24",
        name: "feePips",
        type: "uint24",
      },
    ],
    name: "computeSwapStep",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint24",
        name: "feePips",
        type: "uint24",
      },
    ],
    name: "getGasCostOfComputeSwapStep",
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
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b611082806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063100d3f7414610041578063d28c51b7146100745761003b565b60006000fd5b61005b60048036038101906100569190610d67565b6100a4565b60405161006b9493929190610df4565b60405180910390f35b61008e60048036038101906100899190610d67565b6100d8565b60405161009b9190610e31565b60405180910390f35b60006000600060006100bf898989898961011463ffffffff16565b93509350935093506100cc565b95509550955095915050565b600060005a90506100f2878787878761011463ffffffff16565b505050505a816101029190610e74565b91505061010b56505b95945050505050565b600060006000600060008873ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161015905060006000881215905080156101ef5760006101888989620f42406101749190610e93565b62ffffff16620f424061040d63ffffffff16565b9050826101a7576101a28c8c8c600161053163ffffffff16565b6101bb565b6101ba8b8d8c600161062e63ffffffff16565b5b9550855085811015156101d2578a965086506101e9565b6101e48c8b838661078b63ffffffff16565b965086505b50610261565b8161020c576102078b8b8b600061062e63ffffffff16565b610220565b61021f8a8c8b600061053163ffffffff16565b5b93508350838861022f90610ebb565b101515610240578995508550610260565b61025b8b8a8a61024f90610ebb565b8561081563ffffffff16565b955085505b5b60008673ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1614905082156102f8578080156102a45750815b6102c0576102bb878d8c600161062e63ffffffff16565b6102c2565b855b955085508080156102d1575081155b6102ed576102e8878d8c600061053163ffffffff16565b6102ef565b845b94508450610352565b8080156103025750815b61031e576103198c888c600161053163ffffffff16565b610320565b855b9550855080801561032f575081155b61034b576103468c888c600061062e63ffffffff16565b61034d565b845b945084505b8115801561036857508861036590610ebb565b85115b1561037c578861037790610ebb565b945084505b8180156103b557508a73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b156103cf5785896103c69190610e74565b935083506103fd565b6103f8868962ffffff168a620f42406103e89190610e93565b62ffffff1661089f63ffffffff16565b935083505b5050505b95509550955095915050565b6000600060006000198587098587029250828110838203039150506000811415610450576000841115156104415760006000fd5b8382049250829250505061052a565b808411151561045f5760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03011690508050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550508494505050505061052a56505050505b9392505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16111561057257838580955081965050505b816105cd576105c8836fffffffffffffffffffffffffffffffff1686866105999190610efa565b73ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000061040d63ffffffff16565b61061f565b61061e836fffffffffffffffffffffffffffffffff1686866105ef9190610efa565b73ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000061089f63ffffffff16565b5b9050610626565b949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16111561066f57838580955081965050505b6000606060ff16846fffffffffffffffffffffffffffffffff16901b90506000868661069b9190610efa565b73ffffffffffffffffffffffffffffffffffffffff16905060008773ffffffffffffffffffffffffffffffffffffffff161115156106d95760006000fd5b8361072b578673ffffffffffffffffffffffffffffffffffffffff1661071c83838973ffffffffffffffffffffffffffffffffffffffff1661040d63ffffffff16565b6107269190610f64565b610778565b61077761075583838973ffffffffffffffffffffffffffffffffffffffff1661089f63ffffffff16565b8873ffffffffffffffffffffffffffffffffffffffff1661091863ffffffff16565b5b925050506107835650505b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff161115156107b35760006000fd5b6000846fffffffffffffffffffffffffffffffff161115156107d55760006000fd5b816107f2576107ed858585600161092d63ffffffff16565b610806565b6108058585856001610afa63ffffffff16565b5b905061080d565b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff1611151561083d5760006000fd5b6000846fffffffffffffffffffffffffffffffff1611151561085f5760006000fd5b8161087c576108778585856000610afa63ffffffff16565b610890565b61088f858585600061092d63ffffffff16565b5b9050610897565b949350505050565b60006108b284848461040d63ffffffff16565b905080506000828015156108c9576108c8610f33565b5b8486091115610910577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015156109015760006000fd5b808061090c90610fa8565b9150505b5b9392505050565b60006000828406118284040190505b92915050565b60008115610a0c57600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff1684111561099e57610999846c01000000000000000000000000876fffffffffffffffffffffffffffffffff1661040d63ffffffff16565b6109c4565b846fffffffffffffffffffffffffffffffff16606060ff1685901b6109c39190610f64565b5b90506109ff6109f2828873ffffffffffffffffffffffffffffffffffffffff16610cdb90919063ffffffff16565b610d02909063ffffffff16565b915050610af25650610af1565b600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff16841115610a7557610a70846c01000000000000000000000000876fffffffffffffffffffffffffffffffff1661089f63ffffffff16565b610a9f565b610a9e606060ff1685901b866fffffffffffffffffffffffffffffffff1661091863ffffffff16565b5b9050808673ffffffffffffffffffffffffffffffffffffffff16111515610ac65760006000fd5b808673ffffffffffffffffffffffffffffffffffffffff16610ae89190610e74565b915050610af256505b5b949350505050565b60006000831415610b0d57849050610cd3565b6000606060ff16856fffffffffffffffffffffffffffffffff16901b90508215610c1d5760008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687610b6d9190610fe7565b925082610b7a9190610f64565b1415610bcc5760008183610b8e919061102c565b90508281101515610bca57610bc0838973ffffffffffffffffffffffffffffffffffffffff168361089f63ffffffff16565b9350505050610cd3565b505b610c0f82610c04878a73ffffffffffffffffffffffffffffffffffffffff1686610bf69190610f64565b610cdb90919063ffffffff16565b61091863ffffffff16565b92505050610cd35650610cd1565b60008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687610c599190610fe7565b925082610c669190610f64565b148015610c7257508082115b1515610c7e5760006000fd5b60008183610c8c9190610e74565b9050610cc5610cb8848a73ffffffffffffffffffffffffffffffffffffffff168461089f63ffffffff16565b610d02909063ffffffff16565b9350505050610cd35650505b505b949350505050565b6000828284610cea919061102c565b91508110151515610cfb5760006000fd5b5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff16141515610d2c5760006000fd5b5b9190505661104b565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610d615760006000fd5b5b919050565b6000600060006000600060a08688031215610d825760006000fd5b610d8b86610d36565b9450610d9960208701610d36565b935060408601356fffffffffffffffffffffffffffffffff811681141515610dc15760006000fd5b8093505060608601359150608086013562ffffff811681141515610de55760006000fd5b809150505b9295509295909350565b600060808201905073ffffffffffffffffffffffffffffffffffffffff861682528460208301528360408301528260608301525b95945050505050565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828203905081811115610e8c57610e8b610e43565b5b5b92915050565b600062ffffff80841681841603915080821115610eb357610eb2610e43565b5b505b92915050565b60007f8000000000000000000000000000000000000000000000000000000000000000821415610eee57610eed610e43565b5b8160000390505b919050565b600073ffffffffffffffffffffffffffffffffffffffff80841681841603915080821115610f2b57610f2a610e43565b5b505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b6000821515610f9c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fdb57610fda610e43565b5b6001820190505b919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110205761101f610e43565b5b82820290505b92915050565b600082820190508082111561104457611043610e43565b5b5b92915050565bfea2646970667358221220f8e571976d5bc281b1e38609e03c3f832cf29343370242ea0c15fb623294c89b64736f6c63430008100033";

type SwapMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapMathTest__factory extends ContractFactory {
  constructor(...args: SwapMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapMathTest> {
    return super.deploy(overrides || {}) as Promise<SwapMathTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapMathTest {
    return super.attach(address) as SwapMathTest;
  }
  override connect(signer: Signer): SwapMathTest__factory {
    return super.connect(signer) as SwapMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapMathTestInterface {
    return new utils.Interface(_abi) as SwapMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapMathTest {
    return new Contract(address, _abi, signerOrProvider) as SwapMathTest;
  }
}
