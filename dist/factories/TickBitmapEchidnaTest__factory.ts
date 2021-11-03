/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TickBitmapEchidnaTest,
  TickBitmapEchidnaTestInterface,
} from "../TickBitmapEchidnaTest";

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
  "0x60806040523480156100115760006000fd5b50610017565b6107b4806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80632854ac0a146100415780638815912f1461007f5761003b565b60006000fd5b61007d600480360360408110156100585760006000fd5b81019080803560020b90602001909291908035151590602001909291905050506100b1565b005b6100af600480360360208110156100965760006000fd5b81019080803560020b906020019092919050505061022c565b005b600060006100d184600185600060005061027c909392919063ffffffff16565b915091508215610190577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8001008460020b1215151561010e5760006000fd5b8360020b8260020b1315151561012057fe5b61010082850360020b12151561013257fe5b60008490505b8260020b8160020b131561016d576101558161040263ffffffff16565b15151561015e57fe5b5b808060019003915050610138565b508015156101808361040263ffffffff16565b151514151561018b57fe5b610225565b627ffeff8460020b1215156101a55760006000fd5b8360020b8260020b1315156101b657fe5b61010084830360020b131515156101c957fe5b60006001850190505b8260020b8160020b1215610206576101ef8161040263ffffffff16565b1515156101f857fe5b5b80806001019150506101d2565b508015156102198361040263ffffffff16565b151514151561022457fe5b5b50505b5050565b600061023d8261040263ffffffff16565b9050610259826001600060005061044f9092919063ffffffff16565b8015151561026c8361040263ffffffff16565b151514151561027757fe5b505b50565b6000600060008460020b8660020b81151561029357fe5b05905060008660020b1280156102be575060008560020b8760020b8115156102b757fe5b0760020b14155b156102cd578080600190039150505b831561036557600060006102e6836104da63ffffffff16565b9150915060008160ff166001901b60018360ff166001901b030190506000818b60008660010b60010b8152602001908152602001600020600050541690506000811415955085508561033f57888360ff16860302610358565b8861034f8261050563ffffffff16565b840360ff168603025b96508650505050506103f7565b6000600061037b600184016104da63ffffffff16565b91509150600060018260ff166001901b031990506000818b60008660010b60010b815260200190815260200160002060005054169050600081141595508550856103d257888360ff0360ff166001870101026103ee565b88836103e38361061363ffffffff16565b0360ff166001870101025b96508650505050505b505b94509492505050565b6000600060006104258460016001600060005061027c909392919063ffffffff16565b915091508360020b8260020b1461043d57600061043f565b805b9250505061044a5650505b919050565b60008160020b8360020b81151561046257fe5b0760020b1415156104735760006000fd5b600060006104978360020b8560020b81151561048b57fe5b056104da63ffffffff16565b9150915060008160ff166001901b9050808660008560010b60010b815260200190815260200160002060008282825054189250508190909055505050505b505050565b6000600060088360020b901d915081506101008360020b8115156104fa57fe5b07905080505b915091565b60006000821115156105175760006000fd5b7001000000000000000000000000000000008210151561054357608082901c9150815060808101905080505b680100000000000000008210151561056757604082901c9150815060408101905080505b6401000000008210151561058757602082901c9150815060208101905080505b62010000821015156105a557601082901c9150815060108101905080505b610100821015156105c257600882901c9150815060088101905080505b6010821015156105de57600482901c9150815060048101905080505b6004821015156105fa57600282901c9150815060028101905080505b60028210151561060d5760018101905080505b5b919050565b60006000821115156106255760006000fd5b60ff9050805060006fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff168316111561066557608081039050805061066f565b608082901c915081505b600067ffffffffffffffff67ffffffffffffffff16831611156106995760408103905080506106a3565b604082901c915081505b600063ffffffff63ffffffff16831611156106c55760208103905080506106cf565b602082901c915081505b600061ffff61ffff16831611156106ed5760108103905080506106f7565b601082901c915081505b600060ff60ff168316111561071357600881039050805061071d565b600882901c915081505b6000600f83161115610736576004810390508050610740565b600482901c915081505b6000600383161115610759576002810390508050610763565b600282901c915081505b60006001831611156107785760018103905080505b5b91905056fea26469706673582212207e64493a7ffd0f80b131aa881d7ac823284349dc3c5c682e33f4ee58f208f98e64736f6c63430007060033";

export class TickBitmapEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickBitmapEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickBitmapEchidnaTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickBitmapEchidnaTest {
    return super.attach(address) as TickBitmapEchidnaTest;
  }
  connect(signer: Signer): TickBitmapEchidnaTest__factory {
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
