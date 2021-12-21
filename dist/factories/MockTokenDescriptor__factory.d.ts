import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTokenDescriptor, MockTokenDescriptorInterface } from "../MockTokenDescriptor";
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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610195806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80632bf2bc8f1461003657610030565b60006000fd5b610050600480360381019061004b91906100b1565b610066565b60405161005d91906100e6565b60405180910390f35b60606040518060400160405280600881526020017f746573742075726900000000000000000000000000000000000000000000000081526020015090506100a8565b9190505661015e565b6000602082840312156100c2578081fd5b813567ffffffffffffffff8116811415156100db578182fd5b809150505b92915050565b6000602080835283518082850152825b8181101561011657828187010151604082870101525b82810190506100f6565b818111156101275783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565bfea2646970667358221220d69b53e7fb607c906c6a38144907006d080c3c3009f85fcf06aa9bacf138014864736f6c63430008040033";
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
