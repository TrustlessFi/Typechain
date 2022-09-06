import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SwapMathEchidnaTest, SwapMathEchidnaTestInterface } from "../../../../contracts/uniswap-v3-core/test/SwapMathEchidnaTest";
declare type SwapMathEchidnaTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapMathEchidnaTest__factory extends ContractFactory {
    constructor(...args: SwapMathEchidnaTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SwapMathEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SwapMathEchidnaTest;
    connect(signer: Signer): SwapMathEchidnaTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b611330806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063d7e3056f1461003657610030565b60006000fd5b610050600480360381019061004b9190611033565b610052565b005b60008573ffffffffffffffffffffffffffffffffffffffff161115156100785760006000fd5b60008473ffffffffffffffffffffffffffffffffffffffff1611151561009e5760006000fd5b60008162ffffff161115156100b35760006000fd5b620f42408162ffffff161015156100ca5760006000fd5b60006000600060006100e589898989896103e063ffffffff16565b9350935093509350807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61011991906110f1565b831115151561012b5761012a611110565b5b6000861215610155578561013e90611141565b82111515156101505761014f611110565b5b610174565b8581846101629190611180565b1115151561017357610172611110565b5b5b8773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff161415610220576000831415156101bb576101ba611110565b5b6000821415156101ce576101cd611110565b5b6000811415156101e1576101e0611110565b5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151561021f5761021e611110565b5b5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151561029d57600086121561027e578561026890611141565b8214151561027957610278611110565b5b61029c565b85818461028b9190611180565b14151561029b5761029a611110565b5b5b5b8873ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16111515610355578873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115151561031157610310611110565b5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16101515156103505761034f611110565b5b6103d4565b8873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161015151561039457610393611110565b5b8773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111515156103d3576103d2611110565b5b5b505050505b5050505050565b600060006000600060008873ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161015905060006000881215905080156104bb5760006104548989620f4240610440919061119f565b62ffffff16620f42406106d963ffffffff16565b9050826104735761046e8c8c8c60016107fd63ffffffff16565b610487565b6104868b8d8c60016108fa63ffffffff16565b5b95508550858110151561049e578a965086506104b5565b6104b08c8b8386610a5763ffffffff16565b965086505b5061052d565b816104d8576104d38b8b8b60006108fa63ffffffff16565b6104ec565b6104eb8a8c8b60006107fd63ffffffff16565b5b9350835083886104fb90611141565b10151561050c57899550855061052c565b6105278b8a8a61051b90611141565b85610ae163ffffffff16565b955085505b5b60008673ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1614905082156105c4578080156105705750815b61058c57610587878d8c60016108fa63ffffffff16565b61058e565b855b9550855080801561059d575081155b6105b9576105b4878d8c60006107fd63ffffffff16565b6105bb565b845b9450845061061e565b8080156105ce5750815b6105ea576105e58c888c60016107fd63ffffffff16565b6105ec565b855b955085508080156105fb575081155b610617576106128c888c60006108fa63ffffffff16565b610619565b845b945084505b8115801561063457508861063190611141565b85115b15610648578861064390611141565b945084505b81801561068157508a73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b1561069b57858961069291906110f1565b935083506106c9565b6106c4868962ffffff168a620f42406106b4919061119f565b62ffffff16610b6b63ffffffff16565b935083505b5050505b95509550955095915050565b600060006000600019858709858702925082811083820303915050600081141561071c5760008411151561070d5760006000fd5b838204925082925050506107f6565b808411151561072b5760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0301169050805080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855050849450505050506107f656505050505b9392505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16111561083e57838580955081965050505b8161089957610894836fffffffffffffffffffffffffffffffff16868661086591906111c7565b73ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000006106d963ffffffff16565b6108eb565b6108ea836fffffffffffffffffffffffffffffffff1686866108bb91906111c7565b73ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000610b6b63ffffffff16565b5b90506108f2565b949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16111561093b57838580955081965050505b6000606060ff16846fffffffffffffffffffffffffffffffff16901b90506000868661096791906111c7565b73ffffffffffffffffffffffffffffffffffffffff16905060008773ffffffffffffffffffffffffffffffffffffffff161115156109a55760006000fd5b836109f7578673ffffffffffffffffffffffffffffffffffffffff166109e883838973ffffffffffffffffffffffffffffffffffffffff166106d963ffffffff16565b6109f29190611231565b610a44565b610a43610a2183838973ffffffffffffffffffffffffffffffffffffffff16610b6b63ffffffff16565b8873ffffffffffffffffffffffffffffffffffffffff16610be463ffffffff16565b5b92505050610a4f5650505b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff16111515610a7f5760006000fd5b6000846fffffffffffffffffffffffffffffffff16111515610aa15760006000fd5b81610abe57610ab98585856001610bf963ffffffff16565b610ad2565b610ad18585856001610dc663ffffffff16565b5b9050610ad9565b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff16111515610b095760006000fd5b6000846fffffffffffffffffffffffffffffffff16111515610b2b5760006000fd5b81610b4857610b438585856000610dc663ffffffff16565b610b5c565b610b5b8585856000610bf963ffffffff16565b5b9050610b63565b949350505050565b6000610b7e8484846106d963ffffffff16565b90508050600082801515610b9557610b94611200565b5b8486091115610bdc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101515610bcd5760006000fd5b8080610bd890611275565b9150505b5b9392505050565b60006000828406118284040190505b92915050565b60008115610cd857600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff16841115610c6a57610c65846c01000000000000000000000000876fffffffffffffffffffffffffffffffff166106d963ffffffff16565b610c90565b846fffffffffffffffffffffffffffffffff16606060ff1685901b610c8f9190611231565b5b9050610ccb610cbe828873ffffffffffffffffffffffffffffffffffffffff16610fa790919063ffffffff16565b610fce909063ffffffff16565b915050610dbe5650610dbd565b600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff16841115610d4157610d3c846c01000000000000000000000000876fffffffffffffffffffffffffffffffff16610b6b63ffffffff16565b610d6b565b610d6a606060ff1685901b866fffffffffffffffffffffffffffffffff16610be463ffffffff16565b5b9050808673ffffffffffffffffffffffffffffffffffffffff16111515610d925760006000fd5b808673ffffffffffffffffffffffffffffffffffffffff16610db491906110f1565b915050610dbe56505b5b949350505050565b60006000831415610dd957849050610f9f565b6000606060ff16856fffffffffffffffffffffffffffffffff16901b90508215610ee95760008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687610e3991906112b4565b925082610e469190611231565b1415610e985760008183610e5a9190611180565b90508281101515610e9657610e8c838973ffffffffffffffffffffffffffffffffffffffff1683610b6b63ffffffff16565b9350505050610f9f565b505b610edb82610ed0878a73ffffffffffffffffffffffffffffffffffffffff1686610ec29190611231565b610fa790919063ffffffff16565b610be463ffffffff16565b92505050610f9f5650610f9d565b60008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687610f2591906112b4565b925082610f329190611231565b148015610f3e57508082115b1515610f4a5760006000fd5b60008183610f5891906110f1565b9050610f91610f84848a73ffffffffffffffffffffffffffffffffffffffff1684610b6b63ffffffff16565b610fce909063ffffffff16565b9350505050610f9f5650505b505b949350505050565b6000828284610fb69190611180565b91508110151515610fc75760006000fd5b5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff16141515610ff85760006000fd5b5b919050566112f9565b60008135905073ffffffffffffffffffffffffffffffffffffffff81168114151561102d5760006000fd5b5b919050565b6000600060006000600060a0868803121561104e5760006000fd5b61105786611002565b945061106560208701611002565b935060408601356fffffffffffffffffffffffffffffffff81168114151561108d5760006000fd5b8093505060608601359150608086013562ffffff8116811415156110b15760006000fd5b809150505b9295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828203905081811115611109576111086110c0565b5b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b565b60007f8000000000000000000000000000000000000000000000000000000000000000821415611174576111736110c0565b5b8160000390505b919050565b6000828201905080821115611198576111976110c0565b5b5b92915050565b600062ffffff808416818416039150808211156111bf576111be6110c0565b5b505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808416818416039150808211156111f8576111f76110c0565b5b505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b6000821515611269577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156112a8576112a76110c0565b5b6001820190505b919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112ed576112ec6110c0565b5b82820290505b92915050565bfea2646970667358221220bebbebb25d052fe55b7c6c4f3833d32145d2b08b422d905f773de1f4579662ad64736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): SwapMathEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapMathEchidnaTest;
}
export {};
