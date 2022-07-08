/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestUniswapV3ReentrantCallee,
  TestUniswapV3ReentrantCalleeInterface,
} from "../../../../contracts/uniswap-v3-core/test/TestUniswapV3ReentrantCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "swapToReenter",
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
        name: "",
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
  "0x60806040523480156100115760006000fd5b50610017565b611180806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063c22a2bfe14610041578063fa461e331461005d5761003b565b60006000fd5b61005b60048036038101906100569190610add565b610079565b005b61007760048036038101906100729190610b22565b610174565b005b8073ffffffffffffffffffffffffffffffffffffffff1663128acb08600060006001600173fffd8963efd1fc6a506488495d951d5263988d266100bc9190610bb2565b600067ffffffffffffffff8111156100d7576100d6610c16565b5b6040519080825280601f01601f1916602001820160405280156101095781602001600182028036833780820191505090505b506040518663ffffffff1660e01b815260040161012a959493929190610cbc565b6040604051808303816000875af115801561014a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016e9190610d10565b50505b50565b3373ffffffffffffffffffffffffffffffffffffffff1663128acb086000600060016000600067ffffffffffffffff8111156101b3576101b2610c16565b5b6040519080825280601f01601f1916602001820160405280156101e55781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401610206959493929190610d38565b6040604051808303816000875af192505050801561024257506040513d601f19601f8201168201806040525081019061023f9190610d10565b60015b6103215761024e610d8c565b806308c379a0141561030f5750610263610e20565b8061026e5750610311565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020016102b79190610ed2565b6040516020818303038152906040528051906020012060001916816040516020016102e29190610ed2565b60405160208183030381529060405280519060200120600019161415156103095760006000fd5b5061031c565b505b3d600060003e3d6000fd5b610324565b50505b3373ffffffffffffffffffffffffffffffffffffffff16633c8a7d8d6000600060006000600067ffffffffffffffff81111561036357610362610c16565b5b6040519080825280601f01601f1916602001820160405280156103955781602001600182028036833780820191505090505b506040518663ffffffff1660e01b81526004016103b6959493929190610eee565b6040604051808303816000875af19250505080156103f257506040513d601f19601f820116820180604052508101906103ef9190610f54565b60015b6104d1576103fe610d8c565b806308c379a014156104bf5750610413610e20565b8061041e57506104c1565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020016104679190610ed2565b6040516020818303038152906040528051906020012060001916816040516020016104929190610ed2565b60405160208183030381529060405280519060200120600019161415156104b95760006000fd5b506104cc565b505b3d600060003e3d6000fd5b6104d4565b50505b3373ffffffffffffffffffffffffffffffffffffffff16634f1eb3d8600060006000600060006040518663ffffffff1660e01b815260040161051a959493929190610f7c565b6040604051808303816000875af192505050801561055657506040513d601f19601f820116820180604052508101906105539190611009565b60015b61063557610562610d8c565b806308c379a014156106235750610577610e20565b806105825750610625565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020016105cb9190610ed2565b6040516020818303038152906040528051906020012060001916816040516020016105f69190610ed2565b604051602081830303815290604052805190602001206000191614151561061d5760006000fd5b50610630565b505b3d600060003e3d6000fd5b610638565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663a34123a76000600060006040518463ffffffff1660e01b81526004016106789392919061103f565b6040604051808303816000875af19250505080156106b457506040513d601f19601f820116820180604052508101906106b19190610f54565b60015b610793576106c0610d8c565b806308c379a0141561078157506106d5610e20565b806106e05750610783565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020016107299190610ed2565b6040516020818303038152906040528051906020012060001916816040516020016107549190610ed2565b604051602081830303815290604052805190602001206000191614151561077b5760006000fd5b5061078e565b505b3d600060003e3d6000fd5b610796565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663490e6cbc600060006000600067ffffffffffffffff8111156107d3576107d2610c16565b5b6040519080825280601f01601f1916602001820160405280156108055781602001600182028036833780820191505090505b506040518563ffffffff1660e01b81526004016108259493929190611077565b600060405180830381600087803b1580156108405760006000fd5b505af1925050508015610851575060015b6109305761085d610d8c565b806308c379a0141561091e5750610872610e20565b8061087d5750610920565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020016108c69190610ed2565b6040516020818303038152906040528051906020012060001916816040516020016108f19190610ed2565b60405160208183030381529060405280519060200120600019161415156109185760006000fd5b5061092b565b505b3d600060003e3d6000fd5b610931565b5b3373ffffffffffffffffffffffffffffffffffffffff166385b667296000600060006040518463ffffffff1660e01b8152600401610971939291906110be565b6040604051808303816000875af19250505080156109ad57506040513d601f19601f820116820180604052508101906109aa9190611009565b60015b610a8c576109b9610d8c565b806308c379a01415610a7a57506109ce610e20565b806109d95750610a7c565b6040518060400160405280600381526020017f4c4f4b0000000000000000000000000000000000000000000000000000000000815260200150604051602001610a229190610ed2565b604051602081830303815290604052805190602001206000191681604051602001610a4d9190610ed2565b6040516020818303038152906040528051906020012060001916141515610a745760006000fd5b50610a87565b505b3d600060003e3d6000fd5b610a8f565b50505b60001515610ad2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac99061110a565b60405180910390fd5b5b5050505056611149565b600060208284031215610af05760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515610b175760006000fd5b809150505b92915050565b600060006000600060608587031215610b3b5760006000fd5b8435935060208501359250604085013567ffffffffffffffff80821115610b625760006000fd5b818701915087601f8301121515610b795760006000fd5b813581811115610b895760006000fd5b886020828501011115610b9c5760006000fd5b6020830194508093505050505b92959194509250565b600073ffffffffffffffffffffffffffffffffffffffff808316818516915081811015610c08577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103925050505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b6000815180845260005b81811015610c74576020808286010151818388010152505b602081019050610c51565b81811115610c86576000602083870101525b5060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152610d0360a0830184610c47565b90505b9695505050505050565b6000600060408385031215610d255760006000fd5b82519150602083015190505b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152610d7f60a0830184610c47565b90505b9695505050505050565b600060033d1115610da7576004600060003e60005160e01c90505b5b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715610e16577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b806040525050505b565b600060443d1015610e3057610ecf565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715610e80575050505050610ecf565b8285019150815181811115610e9a57505050505050610ecf565b843d8701016020828501011115610eb657505050505050610ecf565b610ec560208286010187610dab565b5050809450505050505b90565b602081526000610ee56020830184610c47565b90505b92915050565b73ffffffffffffffffffffffffffffffffffffffff861681528460020b60208201528360020b60408201526fffffffffffffffffffffffffffffffff8316606082015260a060808201526000610f4760a0830184610c47565b90505b9695505050505050565b6000600060408385031215610f695760006000fd5b82519150602083015190505b9250929050565b600060a08201905073ffffffffffffffffffffffffffffffffffffffff871682528560020b60208301528460020b60408301526fffffffffffffffffffffffffffffffff80851660608401528084166080840152505b9695505050505050565b6000815190506fffffffffffffffffffffffffffffffff8116811415156110035760006000fd5b5b919050565b600060006040838503121561101e5760006000fd5b61102783610fdc565b915061103560208401610fdc565b90505b9250929050565b60006060820190508460020b82528360020b60208301526fffffffffffffffffffffffffffffffff831660408301525b949350505050565b73ffffffffffffffffffffffffffffffffffffffff851681528360208201528260408201526080606082015260006110b26080830184610c47565b90505b95945050505050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff80851660208401528084166040840152505b949350505050565b60208152601160208201527f556e61626c6520746f207265656e746572000000000000000000000000000000604082015260006060820190505b919050565bfea2646970667358221220abe42d50f5b6e736247003f0703df1b654c4418ee975dfd3020e46d56352606a64736f6c634300080c0033";

type TestUniswapV3ReentrantCalleeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapV3ReentrantCalleeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapV3ReentrantCallee__factory extends ContractFactory {
  constructor(...args: TestUniswapV3ReentrantCalleeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUniswapV3ReentrantCallee> {
    return super.deploy(
      overrides || {}
    ) as Promise<TestUniswapV3ReentrantCallee>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUniswapV3ReentrantCallee {
    return super.attach(address) as TestUniswapV3ReentrantCallee;
  }
  override connect(signer: Signer): TestUniswapV3ReentrantCallee__factory {
    return super.connect(signer) as TestUniswapV3ReentrantCallee__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3ReentrantCalleeInterface {
    return new utils.Interface(_abi) as TestUniswapV3ReentrantCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3ReentrantCallee {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestUniswapV3ReentrantCallee;
  }
}
