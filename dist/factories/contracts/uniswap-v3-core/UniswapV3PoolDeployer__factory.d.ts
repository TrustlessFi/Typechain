import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { UniswapV3PoolDeployer, UniswapV3PoolDeployerInterface } from "../../../contracts/uniswap-v3-core/UniswapV3PoolDeployer";
declare type UniswapV3PoolDeployerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniswapV3PoolDeployer__factory extends ContractFactory {
    constructor(...args: UniswapV3PoolDeployerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UniswapV3PoolDeployer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3PoolDeployer;
    connect(signer: Signer): UniswapV3PoolDeployer__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610188806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063890357301461003657610030565b60006000fd5b61003e610058565b60405161004f9594939291906100ff565b60405180910390f35b60006000508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900462ffffff16908060020160179054906101000a900460020b90508556610151565b600060a08201905073ffffffffffffffffffffffffffffffffffffffff8088168352808716602084015280861660408401525062ffffff841660608301528260020b60808301525b9695505050505050565bfea264697066735822122053b74d2a23f0181295507fd904efff84beb0f68a75d6d398f1c2d79f358c5df264736f6c63430008100033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UniswapV3PoolDeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3PoolDeployer;
}
export {};
