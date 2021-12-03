import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NonfungiblePositionManagerPositionsGasTest, NonfungiblePositionManagerPositionsGasTestInterface } from "../NonfungiblePositionManagerPositionsGasTest";
declare type NonfungiblePositionManagerPositionsGasTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonfungiblePositionManagerPositionsGasTest__factory extends ContractFactory {
    constructor(...args: NonfungiblePositionManagerPositionsGasTestConstructorParams);
    deploy(_nonfungiblePositionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NonfungiblePositionManagerPositionsGasTest>;
    getDeployTransaction(_nonfungiblePositionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NonfungiblePositionManagerPositionsGasTest;
    connect(signer: Signer): NonfungiblePositionManagerPositionsGasTest__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b50604051610296380380610296833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50610088565b60805160601c6101f26100a460003980608252506101f26000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063994ea42c1461003657610030565b60006000fd5b6100636004803603602081101561004d5760006000fd5b8101908080359060200190929190505050610079565b6040518082815260200191505060405180910390f35b600060005a90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399fbab88846040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b1580156100f35760006000fd5b505afa158015610108573d600060003e3d6000fd5b505050506040513d6101808110156101205760006000fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050505050505050505050505050505a81039150506101b756505b91905056fea26469706673582212209208699b34390cc72e9b80701273de677a740ee38525824f06ec551f2550aea664736f6c63430007060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): NonfungiblePositionManagerPositionsGasTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonfungiblePositionManagerPositionsGasTest;
}
export {};