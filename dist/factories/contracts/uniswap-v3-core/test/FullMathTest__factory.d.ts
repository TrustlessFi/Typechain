import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FullMathTest, FullMathTestInterface } from "../../../../contracts/uniswap-v3-core/test/FullMathTest";
declare type FullMathTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FullMathTest__factory extends ContractFactory {
    constructor(...args: FullMathTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FullMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FullMathTest;
    connect(signer: Signer): FullMathTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610394806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80630af8b27f14610041578063aa9a0912146100715761003b565b60006000fd5b61005b60048036038101906100569190610284565b6100a1565b60405161006891906102b5565b60405180910390f35b61008b60048036038101906100869190610284565b6100c2565b60405161009891906102b5565b60405180910390f35b60006100b48484846100e363ffffffff16565b90506100bb565b9392505050565b60006100d584848461015c63ffffffff16565b90506100dc565b9392505050565b60006100f684848461015c63ffffffff16565b9050805060008280151561010d5761010c6102c7565b5b8486091115610154577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015156101455760006000fd5b8080610150906102f8565b9150505b5b9392505050565b600060006000600019858709858702925082811083820303915050600081141561019f576000841115156101905760006000fd5b83820492508292505050610279565b80841115156101ae5760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03011690508050808604955080840493506001818260000304019050808302841793508350600060028760030218905080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080870260020381029050805080850295508550508494505050505061027956505050505b93925050505661035d565b6000600060006060848603121561029b5760006000fd5b8335925060208401359150604084013590505b9250925092565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610351577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6001820190505b919050565bfea26469706673582212204114c81b85a8e079790607ac6c22881e1ce87ac4b545dc38db69424e939c27e364736f6c634300080c0033";
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
    static createInterface(): FullMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FullMathTest;
}
export {};