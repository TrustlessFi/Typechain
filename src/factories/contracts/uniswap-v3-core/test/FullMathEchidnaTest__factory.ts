/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FullMathEchidnaTest,
  FullMathEchidnaTestInterface,
} from "../../../../contracts/uniswap-v3-core/test/FullMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDiv",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDivRounding",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDivRoundingUp",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b6105f8806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063695363a31461004c57806379eee48714610068578063bf08c3911461008457610046565b60006000fd5b6100666004803603810190610061919061049f565b6100a0565b005b610082600480360381019061007d919061049f565b610134565b005b61009e6004803603810190610099919061049f565b610219565b005b6000811115156100b05760006000fd5b60006100c38484846102fe63ffffffff16565b905060006100d885858561037763ffffffff16565b90506000838015156100ed576100ec6104d0565b5b858709111561011957600181836101049190610532565b14151561011457610113610551565b5b61012c565b808214151561012b5761012a610551565b5b5b50505b505050565b6000811115156101445760006000fd5b60006101578484846102fe63ffffffff16565b905060008414806101685750600083145b15610186576000811415156101805761017f610551565b5b50610214565b600061019982848661037763ffffffff16565b905060006101ae83858861037763ffffffff16565b90508582101515156101c3576101c2610551565b5b8481101515156101d6576101d5610551565b5b8386836101e39190610532565b1015156101f3576101f2610551565b5b8385826102009190610532565b1015156102105761020f610551565b5b5050505b505050565b6000811115156102295760006000fd5b600061023c84848461037763ffffffff16565b9050600084148061024d5750600083145b1561026b5760008114151561026557610264610551565b5b506102f9565b600061027e82848661037763ffffffff16565b9050600061029383858861037763ffffffff16565b90508582111515156102a8576102a7610551565b5b8481111515156102bb576102ba610551565b5b8382876102c89190610532565b1015156102d8576102d7610551565b5b8381866102e59190610532565b1015156102f5576102f4610551565b5b5050505b505050565b600061031184848461037763ffffffff16565b90508050600082801515610328576103276104d0565b5b848609111561036f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015156103605760006000fd5b808061036b90610582565b9150505b5b9392505050565b60006000600060001985870985870292508281108382030391505060008114156103ba576000841115156103ab5760006000fd5b83820492508292505050610494565b80841115156103c95760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03011690508050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550508494505050505061049456505050505b9392505050566105c1565b600060006000606084860312156104b65760006000fd5b8335925060208401359150604084013590505b9250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600082820390508181111561054a57610549610501565b5b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156105b5576105b4610501565b5b6001820190505b919050565bfea2646970667358221220e276607b74684dd85f9999cf2301bea66a9b5c23bb36fc5eac1abe3e93daf76964736f6c63430008100033";

type FullMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FullMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FullMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: FullMathEchidnaTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FullMathEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<FullMathEchidnaTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FullMathEchidnaTest {
    return super.attach(address) as FullMathEchidnaTest;
  }
  override connect(signer: Signer): FullMathEchidnaTest__factory {
    return super.connect(signer) as FullMathEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FullMathEchidnaTestInterface {
    return new utils.Interface(_abi) as FullMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FullMathEchidnaTest {
    return new Contract(address, _abi, signerOrProvider) as FullMathEchidnaTest;
  }
}
