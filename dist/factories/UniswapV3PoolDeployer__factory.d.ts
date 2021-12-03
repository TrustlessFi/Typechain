import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3PoolDeployer, UniswapV3PoolDeployerInterface } from "../UniswapV3PoolDeployer";
declare type UniswapV3PoolDeployerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniswapV3PoolDeployer__factory extends ContractFactory {
    constructor(...args: UniswapV3PoolDeployerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3PoolDeployer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3PoolDeployer;
    connect(signer: Signer): UniswapV3PoolDeployer__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610193806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063890357301461003657610030565b60006000fd5b61003e6100ba565b604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff1681526020018260020b81526020019550505050505060405180910390f35b60006000508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900462ffffff16908060020160179054906101000a900460020b90508556fea2646970667358221220f002d579f7a8a4360f907a164f2d435911052f80614360bf3a2f3efa123f579064736f6c63430007060033";
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
