/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3PoolSwapTest,
  UniswapV3PoolSwapTestInterface,
} from "../../../../contracts/uniswap-v3-core/test/UniswapV3PoolSwapTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "getSwapResult",
    outputs: [
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
        internalType: "uint160",
        name: "nextSqrtRatio",
        type: "uint160",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60806040523480156100115760006000fd5b50610017565b61080d806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80637f2ba7bc14610041578063fa461e33146100735761003b565b60006000fd5b61005b6004803603810190610056919061042e565b61008f565b60405161006a9392919061048b565b60405180910390f35b61008d600480360381019061008891906104c1565b6101d6565b005b6000600060008673ffffffffffffffffffffffffffffffffffffffff1663128acb086000888888336040516020016100c79190610551565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016100f6959493929190610579565b6040604051808303816000875af1158015610116573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013a919061062d565b80935081945050508673ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801561018e573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b29190610674565b909192939450909192935090919250909150905050809150505b9450945094915050565b600082828101906101e79190610721565b905060008513156102e8573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023e573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610262919061074a565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b815260040161029e93929190610773565b6020604051808303816000875af11580156102be573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e291906107ad565b506103e4565b60008413156103e3573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561033d573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610361919061074a565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b815260040161039d93929190610773565b6020604051808303816000875af11580156103bd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e191906107ad565b505b5b505b50505050566107d6565b73ffffffffffffffffffffffffffffffffffffffff8116811415156104155760006000fd5b505b565b8015158114151561042a5760006000fd5b505b565b6000600060006000608085870312156104475760006000fd5b8435610452816103f0565b80945050602085013561046481610419565b8093505060408501359150606085013561047d816103f0565b809150505b92959194509250565b600060608201905084825283602083015273ffffffffffffffffffffffffffffffffffffffff831660408301525b949350505050565b6000600060006000606085870312156104da5760006000fd5b8435935060208501359250604085013567ffffffffffffffff808211156105015760006000fd5b818701915087601f83011215156105185760006000fd5b8135818111156105285760006000fd5b88602082850101111561053b5760006000fd5b6020830194508093505050505b92959194509250565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352602087151581850152866040850152818616606085015260a06080850152845191508160a085015260005b828110156105e05781818701015160c082870101525b81810190506105c0565b828111156105f257600060c084870101525b505060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b9695505050505050565b60006000604083850312156106425760006000fd5b82519150602083015190505b9250929050565b60008151905061ffff81168114151561066e5760006000fd5b5b919050565b600060006000600060006000600060e0888a0312156106935760006000fd5b875161069e816103f0565b8097505060208801518060020b811415156106b95760006000fd5b809650506106c960408901610655565b94506106d760608901610655565b93506106e560808901610655565b925060a088015160ff8116811415156106fe5760006000fd5b8092505060c088015161071081610419565b809150505b92959891949750929550565b6000602082840312156107345760006000fd5b813561073f816103f0565b809150505b92915050565b60006020828403121561075d5760006000fd5b8151610768816103f0565b809150505b92915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152508260408301525b949350505050565b6000602082840312156107c05760006000fd5b81516107cb81610419565b809150505b92915050565bfea26469706673582212200ee45ee8809c0cd77e53ddb1da77192ac3c6f71e2fed9208dba4dc7f9925d12564736f6c634300080c0033";

type UniswapV3PoolSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PoolSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PoolSwapTest__factory extends ContractFactory {
  constructor(...args: UniswapV3PoolSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3PoolSwapTest> {
    return super.deploy(overrides || {}) as Promise<UniswapV3PoolSwapTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV3PoolSwapTest {
    return super.attach(address) as UniswapV3PoolSwapTest;
  }
  override connect(signer: Signer): UniswapV3PoolSwapTest__factory {
    return super.connect(signer) as UniswapV3PoolSwapTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PoolSwapTestInterface {
    return new utils.Interface(_abi) as UniswapV3PoolSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3PoolSwapTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3PoolSwapTest;
  }
}
