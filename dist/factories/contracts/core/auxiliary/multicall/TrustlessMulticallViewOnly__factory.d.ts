import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrustlessMulticallViewOnly, TrustlessMulticallViewOnlyInterface } from "../../../../../contracts/core/auxiliary/multicall/TrustlessMulticallViewOnly";
declare type TrustlessMulticallViewOnlyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TrustlessMulticallViewOnly__factory extends ContractFactory {
    constructor(...args: TrustlessMulticallViewOnlyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrustlessMulticallViewOnly>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrustlessMulticallViewOnly;
    connect(signer: Signer): TrustlessMulticallViewOnly__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6104dd806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c806372425d9d116100775780638f1316d51161005c5780638f1316d5146101ad578063a8b0574e146101de578063ee82ac5e146101fc576100c3565b806372425d9d1461017157806386d516e81461018f576100c3565b80633408e470116100a85780633408e4701461010557806342cbb15c146101235780634d2301cc14610141576100c3565b80630f28c97d146100c957806327e86d6e146100e7576100c3565b60006000fd5b6100d161022c565b6040516100de9190610276565b60405180910390f35b6100ef610232565b6040516100fc9190610288565b60405180910390f35b61010d610238565b60405161011a9190610276565b60405180910390f35b61012b61023e565b6040516101389190610276565b60405180910390f35b61015b6004803603810190610156919061029a565b610244565b6040516101689190610276565b60405180910390f35b61017961024c565b6040516101869190610276565b60405180910390f35b610197610252565b6040516101a49190610276565b60405180910390f35b6101c760048036038101906101c291906102df565b610258565b6040516101d592919061035e565b60405180910390f35b6101e6610264565b6040516101f39190610460565b60405180910390f35b61021660048036038101906102119190610488565b61026a565b6040516102239190610288565b60405180910390f35b60005b90565b60005b90565b60005b90565b60005b90565b60005b919050565b60005b90565b60005b90565b600060605b9250929050565b60005b90565b60005b919050566104a6565b60006020820190508282525b92915050565b60006020820190508282525b92915050565b6000602082840312156102ad5760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811415156102d45760006000fd5b809150505b92915050565b60006000602083850312156102f45760006000fd5b823567ffffffffffffffff8082111561030d5760006000fd5b818501915085601f83011215156103245760006000fd5b8135818111156103345760006000fd5b8660208260051b850101111561034a5760006000fd5b6020830194508093505050505b9250929050565b6000604080830185845260208281860152818651808452606093508387019150838160051b8801018389016000805b8481101561044c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08b8503018652825180511515855287810151905089888601528051808b870152835b818110156103f7578981840101518b82890101525b89810190506103d8565b8181111561040757848b83890101525b50897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011687010195505050868301925086860195505b60018101905061038d565b5050508096505050505050505b9392505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020828403121561049b5760006000fd5b813590505b92915050565bfea26469706673582212202082456ccfe768f4b06e1af982fd97ab5897282c31d8c1e140bbec26616ebc0764736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
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
    static createInterface(): TrustlessMulticallViewOnlyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TrustlessMulticallViewOnly;
}
export {};
