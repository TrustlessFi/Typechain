/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestUniswapV3SwapPay,
  TestUniswapV3SwapPayInterface,
} from "../../../../contracts/uniswap-v3-core/test/TestUniswapV3SwapPay";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "pay0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pay1",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b6106ad806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063f13cdf9014610041578063fa461e331461005d5761003b565b60006000fd5b61005b6004803603810190610056919061038f565b610079565b005b61007760048036038101906100729190610415565b61012d565b005b8673ffffffffffffffffffffffffffffffffffffffff1663128acb08878786883388886040516020016100ae939291906104a5565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016100dd9594939291906104db565b6040604051808303816000875af11580156100fd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101219190610586565b50505b50505050505050565b600060006000848481019061014291906105ae565b9250925092506000821115610247573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561019d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c191906105ea565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8433856040518463ffffffff1660e01b81526004016101fd93929190610613565b6020604051808303816000875af115801561021d573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610241919061064d565b50610343565b6000811115610342573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561029c573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c091906105ea565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8433846040518463ffffffff1660e01b81526004016102fc93929190610613565b6020604051808303816000875af115801561031c573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610340919061064d565b505b5b5050505b5050505056610676565b73ffffffffffffffffffffffffffffffffffffffff8116811415156103765760006000fd5b505b565b8015158114151561038b5760006000fd5b505b565b600060006000600060006000600060e0888a0312156103ae5760006000fd5b87356103b981610351565b8097505060208801356103cb81610351565b8096505060408801356103dd8161037a565b8095505060608801356103ef81610351565b809450506080880135925060a0880135915060c088013590505b92959891949750929550565b60006000600060006060858703121561042e5760006000fd5b8435935060208501359250604085013567ffffffffffffffff808211156104555760006000fd5b818701915087601f830112151561046c5760006000fd5b81358181111561047c5760006000fd5b88602082850101111561048f5760006000fd5b6020830194508093505050505b92959194509250565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682528360208301528260408301525b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352602087151581850152866040850152818616606085015260a06080850152845191508160a085015260005b828110156105425781818701015160c082870101525b8181019050610522565b5050600060c0828501015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b9695505050505050565b600060006040838503121561059b5760006000fd5b82519150602083015190505b9250929050565b600060006000606084860312156105c55760006000fd5b83356105d081610351565b8093505060208401359150604084013590505b9250925092565b6000602082840312156105fd5760006000fd5b815161060881610351565b809150505b92915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152508260408301525b949350505050565b6000602082840312156106605760006000fd5b815161066b8161037a565b809150505b92915050565bfea26469706673582212202dc5a9a453058664bbf461daee6ed381704c9d54aed5742c40ef54b8e98c520464736f6c63430008100033";

type TestUniswapV3SwapPayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapV3SwapPayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapV3SwapPay__factory extends ContractFactory {
  constructor(...args: TestUniswapV3SwapPayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUniswapV3SwapPay> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3SwapPay>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUniswapV3SwapPay {
    return super.attach(address) as TestUniswapV3SwapPay;
  }
  override connect(signer: Signer): TestUniswapV3SwapPay__factory {
    return super.connect(signer) as TestUniswapV3SwapPay__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3SwapPayInterface {
    return new utils.Interface(_abi) as TestUniswapV3SwapPayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3SwapPay {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestUniswapV3SwapPay;
  }
}
