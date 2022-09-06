import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockTokenDescriptor, MockTokenDescriptorInterface } from "../../../../contracts/core/mocks/MockTokenDescriptor";
declare type MockTokenDescriptorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockTokenDescriptor__factory extends ContractFactory {
    constructor(...args: MockTokenDescriptorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockTokenDescriptor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockTokenDescriptor;
    connect(signer: Signer): MockTokenDescriptor__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61027b806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063b3154c081461004c578063c7ab2dbc1461007c578063dbe16c07146100ac57610046565b60006000fd5b610066600480360381019061006191906101b5565b6100dc565b60405161007391906101d3565b60405180910390f35b610096600480360381019061009191906101b5565b610123565b6040516100a391906101d3565b60405180910390f35b6100c660048036038101906100c191906101b5565b61016a565b6040516100d391906101d3565b60405180910390f35b60606040518060400160405280601681526020017f7465737420746f6b656e206465736372697074696f6e00000000000000000000815260200150905061011e565b919050565b60606040518060400160405280600881526020017f74657374207376670000000000000000000000000000000000000000000000008152602001509050610165565b919050565b60606040518060400160405280600f81526020017f7465737420746f6b656e206e616d65000000000000000000000000000000000081526020015090506101ac565b91905056610244565b6000602082840312156101c85760006000fd5b813590505b92915050565b600060208083528351808285015260005b8181101561020457828187010151604082870101525b82810190506101e4565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565bfea26469706673582212205d44e2ef13b975756fd69b1f31739d504ed141fc034b0659f3ff9d48d741730364736f6c63430008100033";
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
