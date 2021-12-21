import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrustlessMulticallViewOnly, TrustlessMulticallViewOnlyInterface } from "../TrustlessMulticallViewOnly";
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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6104ca806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100c35760003560e01c806372425d9d116100775780638f1316d51161005c5780638f1316d5146101ad578063a8b0574e146101de578063ee82ac5e146101fc576100c3565b806372425d9d1461017157806386d516e81461018f576100c3565b80633408e470116100a85780633408e4701461010557806342cbb15c146101235780634d2301cc14610141576100c3565b80630f28c97d146100c957806327e86d6e146100e7576100c3565b60006000fd5b6100d161022c565b6040516100de9190610382565b60405180910390f35b6100ef610232565b6040516100fc9190610370565b60405180910390f35b61010d610238565b60405161011a9190610382565b60405180910390f35b61012b61023e565b6040516101389190610382565b60405180910390f35b61015b60048036038101906101569190610276565b610244565b6040516101689190610382565b60405180910390f35b61017961024c565b6040516101869190610382565b60405180910390f35b610197610252565b6040516101a49190610382565b60405180910390f35b6101c760048036038101906101c291906102b7565b610258565b6040516101d5929190610394565b60405180910390f35b6101e6610264565b6040516101f39190610348565b60405180910390f35b6102166004803603810190610211919061032c565b61026a565b6040516102239190610370565b60405180910390f35b60005b90565b60005b90565b60005b90565b60005b90565b60005b919050565b60005b90565b60005b90565b600060605b9250929050565b60005b90565b60005b91905056610493565b600060208284031215610287578081fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811415156102ac578182fd5b809150505b92915050565b60006000602083850312156102ca578081fd5b823567ffffffffffffffff808211156102e1578283fd5b818501915085601f83011215156102f6578283fd5b813581811115610304578384fd5b8660208260051b8501011115610318578384fd5b6020830194508093505050505b9250929050565b60006020828403121561033d578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b60006020820190508282525b92915050565b6000604080830185845260208281860152818651808452606093508387019150838160051b880101838901875b83811015610480577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08a8403018552815180511515845286810151905088878501528051808a8601528a5b8181101561042b578881840101518a82880101525b888101905061040c565b8181111561043b578b8a83880101525b50887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011686010194505050858201915085850194505b6001810190506103c1565b50508096505050505050505b9392505050565bfea26469706673582212209ac7a4a283598ea94ec5f6f9f76dad3be37988a5226cd4c7905837476c97df8e64736f6c63430008040033";
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
