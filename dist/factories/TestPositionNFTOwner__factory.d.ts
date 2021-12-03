import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestPositionNFTOwner, TestPositionNFTOwnerInterface } from "../TestPositionNFTOwner";
declare type TestPositionNFTOwnerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestPositionNFTOwner__factory extends ContractFactory {
    constructor(...args: TestPositionNFTOwnerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestPositionNFTOwner>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestPositionNFTOwner;
    connect(signer: Signer): TestPositionNFTOwner__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61037f806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c806313af40351461004c5780631626ba7e146100915780638da5cb5b1461019557610046565b60006000fd5b61008f600480360360208110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101c9565b005b610160600480360360408110156100a85760006000fd5b810190808035600019169060200190929190803590602001906401000000008111156100d45760006000fd5b8201836020820111156100e75760006000fd5b8035906020019184600183028401116401000000008311171561010a5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090909192909091929050505061020e565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61019d610323565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60006000600060006020850151925060408501519150606085015160001a9050600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166001878386866040516000815260200160405260405180856000191681526020018460ff16815260200183600019168152602001826000191681526020019450505050506020604051602081039080840390855afa1580156102ce573d600060003e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff16141561030a57631626ba7e60e01b935050505061031d56610319565b600060e01b935050505061031d565b5050505b92915050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220373a2d3437dd787aefdd527453f2e1da2b8aa49b9c6884d678b56aa2c186014064736f6c63430007060033";
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
    static createInterface(): TestPositionNFTOwnerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestPositionNFTOwner;
}
export {};
