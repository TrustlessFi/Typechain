import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTokenDescriptor, MockTokenDescriptorInterface } from "../../../../contracts/core/mocks/MockTokenDescriptor";
declare type MockTokenDescriptorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockTokenDescriptor__factory extends ContractFactory {
    constructor(...args: MockTokenDescriptorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTokenDescriptor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTokenDescriptor;
    connect(signer: Signer): MockTokenDescriptor__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610284806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063b3154c081461004c578063c7ab2dbc1461007c578063dbe16c07146100ac57610046565b60006000fd5b610066600480360381019061006191906101b5565b6100dc565b60405161007391906101d3565b60405180910390f35b610096600480360381019061009191906101b5565b610123565b6040516100a391906101d3565b60405180910390f35b6100c660048036038101906100c191906101b5565b61016a565b6040516100d391906101d3565b60405180910390f35b60606040518060400160405280601681526020017f7465737420746f6b656e206465736372697074696f6e00000000000000000000815260200150905061011e565b919050565b60606040518060400160405280600881526020017f74657374207376670000000000000000000000000000000000000000000000008152602001509050610165565b919050565b60606040518060400160405280600f81526020017f7465737420746f6b656e206e616d65000000000000000000000000000000000081526020015090506101ac565b9190505661024d565b6000602082840312156101c85760006000fd5b813590505b92915050565b600060208083528351808285015260005b8181101561020457828187010151604082870101525b82810190506101e4565b81811115610216576000604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565bfea26469706673582212202f3003e10621e1de1eea79157fb62e6b09ec8b3b9e3ba6812306613341863f4464736f6c634300080c0033";
    static readonly abi: {
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
    }[];
    static createInterface(): MockTokenDescriptorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTokenDescriptor;
}
export {};
