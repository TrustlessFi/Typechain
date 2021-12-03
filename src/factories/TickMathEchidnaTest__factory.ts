/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TickMathEchidnaTest,
  TickMathEchidnaTestInterface,
} from "../TickMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "checkGetSqrtRatioAtTickInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "ratio",
        type: "uint160",
      },
    ],
    name: "checkGetTickAtSqrtRatioInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610bd6806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c806347d38f4d14610041578063df01e52d146100735761003b565b60006000fd5b610071600480360360208110156100585760006000fd5b81019080803560020b90602001909291905050506100b8565b005b6100b66004803603602081101561008a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101e9565b005b60006100c9826102f563ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff166100f4600184036102f563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161080156101535750610124600183016102f563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16105b151561015b57fe5b6401000276a373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161015151561019857fe5b73fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16111515156101e457fe5b505b50565b60006101fa8261078c63ffffffff16565b905061020b816102f563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16101580156102825750610253600182016102f563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16105b151561028a57fe5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860020b8160020b121515156102bc57fe5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b8160020b1215156102f057fe5b505b50565b6000600060008360020b1261030d578260020b610315565b8260020b6000035b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b81111515156103b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f540000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600060006001831614156103dd577001000000000000000000000000000000006103ef565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060006002831614151561042d5760806ffff97272373d413259a46990580e213a8202901c905080505b6000600483161415156104565760806ffff2e50f5f656932ef12357cf3c7fdcc8202901c905080505b60006008831614151561047f5760806fffe5caca7e10e4e61c3624eaa0941cd08202901c905080505b6000601083161415156104a85760806fffcb9843d60f6159c9db58835c9266448202901c905080505b6000602083161415156104d15760806fff973b41fa98c081472e6896dfb254c08202901c905080505b6000604083161415156104fa5760806fff2ea16466c96a3843ec78b326b528618202901c905080505b6000608083161415156105235760806ffe5dee046a99a2a811c461f1969c30538202901c905080505b6000610100831614151561054d5760806ffcbe86c7900a88aedcffc83b479aa3a48202901c905080505b600061020083161415156105775760806ff987a7253ac413176f2b074cf7815e548202901c905080505b600061040083161415156105a15760806ff3392b0822b70005940c7a398e4b70f38202901c905080505b600061080083161415156105cb5760806fe7159475a2c29b7443b29c7fa6e889d98202901c905080505b600061100083161415156105f55760806fd097f3bdfd2022b8845ad8f792aa58258202901c905080505b6000612000831614151561061f5760806fa9f746462d870fdf8a65dc1f90e061e58202901c905080505b600061400083161415156106495760806f70d869a156d2a1b890bb3df62baf32f78202901c905080505b600061800083161415156106735760806f31be135f97d08fd981231505542fcfa68202901c905080505b600062010000831614151561069e5760806f09aa508b5b7a84e1c677de54f3e99bc98202901c905080505b60006202000083161415156106c85760806e5d6af8dedb81196699c329225ee6048202901c905080505b60006204000083161415156106f15760806d2216e584f5fa1ea926041bedfe988202901c905080505b60006208000083161415156107185760806b048a170391f7dc42444e8fa28202901c905080505b60008460020b131561075557807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81151561074f57fe5b04905080505b60006401000000008281151561076757fe5b0614610774576001610777565b60005b60ff16602082901c019250825050505b919050565b60006401000276a373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161015801561080e575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16105b1515610885576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f520000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600060208373ffffffffffffffffffffffffffffffffffffffff16901b905060008190506000600090506fffffffffffffffffffffffffffffffff821160071b808217915082811c92505067ffffffffffffffff821160061b808217915082811c92505063ffffffff821160051b808217915082811c92505061ffff821160041b808217915082811c92505060ff821160031b808217915082811c925050600f821160021b808217915082811c9250506003821160011b808217915082811c9250506001821180821791505060808110151561096b57607f810383901c91508150610977565b80607f0383901b915081505b6000604060808303901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b82179150506000693627a301d71055774c8582029050600060806f028f6481ab7f045a5af012a19d003aaa8303901d9050600060806fdb2df09e81959a81455e260799a0632f8401901d90508060020b8260020b14610b8d578873ffffffffffffffffffffffffffffffffffffffff16610b64826102f563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161115610b865781610b88565b805b610b8f565b815b97508750505050505050505b91905056fea26469706673582212200a746606de816aadf5a9055363efd9ec84ef449ffddd6a43e94f7180b429fa6a64736f6c63430007060033";

type TickMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: TickMathEchidnaTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickMathEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickMathEchidnaTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickMathEchidnaTest {
    return super.attach(address) as TickMathEchidnaTest;
  }
  connect(signer: Signer): TickMathEchidnaTest__factory {
    return super.connect(signer) as TickMathEchidnaTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathEchidnaTestInterface {
    return new utils.Interface(_abi) as TickMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMathEchidnaTest {
    return new Contract(address, _abi, signerOrProvider) as TickMathEchidnaTest;
  }
}
