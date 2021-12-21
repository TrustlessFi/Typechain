/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenIncentiveMinter,
  MockTokenIncentiveMinterInterface,
} from "../MockTokenIncentiveMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "mintIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b5060405161078d38038061078d83398181016040528101906100339190610080565b5b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b506100b5566100b4565b600060208284031215610091578081fd5b81516001600160a01b038116811415156100a9578182fd5b809150505b92915050565b5b6106c9806100c46000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80634cd7a31514610041578063fc0c546a1461005d5761003b565b60006000fd5b61005b60048036038101906100569190610412565b61007b565b005b6100656100b3565b60405161007291906104d8565b60405180910390f35b6100ae600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683836100d963ffffffff16565b5b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101608363a9059cbb60e01b84846040516024016100f89291906104a9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061016663ffffffff16565b5b505050565b60006101cb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff166102339092919063ffffffff16565b905060008151111561022d57808060200190518101906101eb919061045d565b151561022c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610223906105f8565b60405180910390fd5b5b505b5050565b6060610248848460008561025663ffffffff16565b905061024f565b9392505050565b606082471015151561029d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029490610554565b60405180910390fd5b6102ac8561038263ffffffff16565b15156102ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e4906105b9565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff168587604051610317919061048a565b60006040518083038185875af1925050503d8060008114610354576040519150601f19603f3d011682016040523d82523d6000602084013e610359565b606091505b509150915061036f82828661039c63ffffffff16565b9250505061037a5650505b949350505050565b60006000823b90506000811191505061039756505b919050565b606083156103b05782905061040756610406565b6000835111156103c85782518084602001fd50610405565b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fc9190610500565b60405180910390fd5b5b5b939250505056610692565b6000600060408385031215610425578182fd5b823573ffffffffffffffffffffffffffffffffffffffff81168114151561044a578283fd5b80925050602083013590505b9250929050565b60006020828403121561046e578081fd5b81518015158114151561047f578182fd5b809150505b92915050565b6000825161049c81846020870161065d565b8083019150505b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b602081526000825180602084015261051f81604085016020870161065d565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60005b8381101561067c5780820151818401525b602081019050610660565b8381111561068b576000848401525b505050505b565bfea26469706673582212205ebe512b0e4eb3d5c66c78449f166b312dd7265313f282a91f464cc4c7b1b7c064736f6c63430008040033";

type MockTokenIncentiveMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTokenIncentiveMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTokenIncentiveMinter__factory extends ContractFactory {
  constructor(...args: MockTokenIncentiveMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenIncentiveMinter> {
    return super.deploy(
      _token,
      overrides || {}
    ) as Promise<MockTokenIncentiveMinter>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): MockTokenIncentiveMinter {
    return super.attach(address) as MockTokenIncentiveMinter;
  }
  connect(signer: Signer): MockTokenIncentiveMinter__factory {
    return super.connect(signer) as MockTokenIncentiveMinter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenIncentiveMinterInterface {
    return new utils.Interface(_abi) as MockTokenIncentiveMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenIncentiveMinter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTokenIncentiveMinter;
  }
}
