import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProtocolLock, ProtocolLockInterface, ConstructorParamsStruct } from "../ProtocolLock";
declare type ProtocolLockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProtocolLock__factory extends ContractFactory {
    constructor(...args: ProtocolLockConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ProtocolLock>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProtocolLock;
    connect(signer: Signer): ProtocolLock__factory;
    static readonly bytecode = "0x60a06040526001600160005090905534801561001b5760006000fd5b506040516107ad3803806107ad833981810160405281019061003d9190610087565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100f3566100f2565b600060208284031215610098578081fd5b604051602081018181106001600160401b03821117156100c657634e487b7160e01b83526041600452602483fd5b806040525082516001600160a01b038116811415156100e3578283fd5b80825250809150505b92915050565b5b60805160601c61068e61011f60003960008181610119015281816101400152610240015261068e6000f3fe60806040523480156100115760006000fd5b50600436106100775760003560e01c806398f6ef121161005157806398f6ef12146100d3578063e97dcb6214610103578063e9fad8ee1461010d57610077565b80630c340a241461007d5780632c388d5d1461009b5780634ac8c5ae146100b757610077565b60006000fd5b610085610117565b6040516100929190610572565b60405180910390f35b6100b560048036038101906100b0919061051d565b61013b565b005b6100d160048036038101906100cc919061051d565b61023b565b005b6100ed60048036038101906100e8919061051d565b61033b565b6040516100fa919061055e565b60405180910390f35b61010b610360565b005b61011561041a565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b6101987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6001600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f6acfd92212f0ec670af78f8ba2273e4a85ac17023475650c25be0440602bff2d60405160405180910390a25b5b50565b6102987f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d363ffffffff16565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f37967118b05f7af84a44112f7e4b59ab8aa3a73cebb4154828b43b934224522a60405160405180910390a25b5b50565b600060005060205280600052604060002060009150909054906101000a900460ff1681565b6103be600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b600260016000505414151515610409576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610400906105d9565b60405180910390fd5b600260016000508190909055505b5b565b610478600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104d363ffffffff16565b60026001600050541415156104c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b99061059a565b60405180910390fd5b600160016000508190909055505b5b565b801515610515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050c90610618565b60405180910390fd5b5b5056610657565b60006020828403121561052e578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515610553578182fd5b809150505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600860208201527f504c206572726f72000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600d60208201527f504c205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f504c3a204e6f7420417574686f72697a65640000000000000000000000000000604082015260006060820190505b919050565bfea26469706673582212203636fea87a6c8ff07afc0ee390f4ff639df664c0461d7350f864b8b950aa98c464736f6c63430008040033";
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
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): ProtocolLockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProtocolLock;
}
export {};
