import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TDaoTimelock, TDaoTimelockInterface } from "../../../../contracts/core/TDao/TDaoTimelock";
declare type TDaoTimelockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TDaoTimelock__factory extends ContractFactory {
    constructor(...args: TDaoTimelockConstructorParams);
    deploy(_executor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TDaoTimelock>;
    getDeployTransaction(_executor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TDaoTimelock;
    connect(signer: Signer): TDaoTimelock__factory;
    static readonly bytecode = "0x60a0604052348015620000125760006000fd5b5060405162001953380380620019538339818101604052810190620000389190620001b0565b5b6202a300815b6200005082620000d360201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152602001505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50505b50620002b5565b6201518081101515156200011e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011590620001ea565b60405180910390fd5b62127500811115151562000169576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000160906200024f565b60405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056620002b4565b600060208284031215620001c45760006000fd5b81516001600160a01b03811681141515620001df5760006000fd5b809150505b92915050565b60208152603460208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560408201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000606082015260006080820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60408201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000606082015260006080820190505b919050565b5b60805161167b620002d86000396000818161086d0152610a32015261167b6000f3fe60806040523480156100115760006000fd5b50600436106100e35760003560e01c80637d645fab1161008d578063d5f3948811610067578063d5f3948814610217578063e177246e14610235578063f2b0653714610251578063f851a44014610281576100e3565b80637d645fab146101bd578063b1b43ae5146101db578063c1a287e2146101f9576100e3565b80633ec5ab32116100be5780633ec5ab32146101515780636a42b8f8146101815780636e9960c31461019f576100e3565b80624b1f12146100e95780630e70eace1461010557806319ab453c14610135576100e3565b60006000fd5b61010360048036038101906100fe9190610dad565b61029f565b005b61011f600480360381019061011a9190610dad565b6103e3565b60405161012c9190610e65565b60405180910390f35b61014f600480360381019061014a9190610e77565b610598565b005b61016b60048036038101906101669190610dad565b61065f565b6040516101789190610f1e565b60405180910390f35b6101896109bd565b6040516101969190610f3a565b60405180910390f35b6101a76109c6565b6040516101b49190610f4c565b60405180910390f35b6101c56109f5565b6040516101d29190610f3a565b60405180910390f35b6101e36109fc565b6040516101f09190610f3a565b60405180910390f35b610201610a03565b60405161020e9190610f3a565b60405180910390f35b61021f610a0a565b60405161022c9190610f4c565b60405180910390f35b61024f600480360381019061024a9190610f74565b610a30565b005b61026b60048036038101906102669190610f92565b610ad3565b6040516102789190610fb0565b60405180910390f35b610289610af8565b6040516102969190610f4c565b60405180910390f35b6102ad6109c663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561031c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031390610fc4565b60405180910390fd5b6000848484846040516020016103359493929190611029565b604051602081830303815290604052805190602001209050600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff1681600019167f39805be0099a319b88cf17675318997e223b45eef7836c0bdfa20b4009e67cc68686866040516103d39392919061107d565b60405180910390a3505b50505050565b60006103f36109c663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610462576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610459906110b4565b60405180910390fd5b610484610473610b1e63ffffffff16565b600160005054610b2b63ffffffff16565b82101515156104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf90611119565b60405180910390fd5b6000858585856040516020016104e19493929190611029565b604051602081830303815290604052805190602001209050600160026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff1681600019167ed038d9209423c0ba06a7d606d7a0eeafe97cb5bdb3a9dd5b35c019b0966a9587878760405161057e9392919061107d565b60405180910390a38091505061059056505b949350505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f55760006000fd5b600360006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b606061066f6109c663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d5906111a4565b60405180910390fd5b6000858585856040516020016106f79493929190611029565b60405160208183030381529060405280519060200120905060026000506000826000191660001916815260200190815260200160002060009054906101000a900460ff16151561077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077390611209565b60405180910390fd5b8261078b610b1e63ffffffff16565b101515156107ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c59061126e565b60405180910390fd5b6107e18362093a80610b2b63ffffffff16565b6107ef610b1e63ffffffff16565b11151515610832576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610829906112f9565b60405180910390fd5b600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166333daf5d48888886040518463ffffffff1660e01b81526004016108c89392919061135e565b6000604051808303816000875af11580156108e8573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061091191906113ab565b809450819250505080151561095b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095290611451565b60405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff1682600019167f73bcadb73827ad9a900198359278e77086ae03e9e17ef173ad7de9e7e39acaff8888886040516109aa9392919061107d565b60405180910390a350505b949350505050565b60016000505481565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506109f2565b90565b6212750081565b6201518081565b62093a8081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab7906114b6565b60405180910390fd5b610acf81610b9263ffffffff16565b5b50565b600260005060205280600052604060002060009150909054906101000a900460ff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000429050610b28565b90565b600060008284610b3b91906114f5565b9050838110151515610b82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b799061153b565b60405180910390fd5b80915050610b8c56505b92915050565b620151808110151515610bda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd19061157a565b60405180910390fd5b621275008111151515610c22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c19906115df565b60405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056611644565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610c935760006000fd5b5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715610d1657610d15610c99565b5b80604052505b919050565b600067ffffffffffffffff821115610d3c57610d3b610c99565b5b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160190505b919050565b6000610d80610d7b84610d21565b610cca565b9050828152838383011115610d955760006000fd5b828260208301376000602084830101525b9392505050565b600060006000600060808587031215610dc65760006000fd5b610dcf85610c68565b9350602085013567ffffffffffffffff80821115610ded5760006000fd5b818701915087601f8301121515610e045760006000fd5b610e1388833560208501610d6d565b94506040870135915080821115610e2a5760006000fd5b50808601905086601f8201121515610e425760006000fd5b610e5187823560208401610d6d565b925050606085013590505b92959194509250565b60006020820190508282525b92915050565b600060208284031215610e8a5760006000fd5b610e9382610c68565b90505b92915050565b60005b83811015610ebb5780820151818401525b602081019050610e9f565b83811115610eca576000848401525b505050505b565b60008151808452610ee9816020860160208601610e9c565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b602081526000610f316020830184610ed1565b90505b92915050565b60006020820190508282525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208284031215610f875760006000fd5b813590505b92915050565b600060208284031215610fa55760006000fd5b813590505b92915050565b600060208201905082151582525b92915050565b60208152603760208201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60408201527f6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000000606082015260006080820190505b919050565b73ffffffffffffffffffffffffffffffffffffffff851681526080602082015260006110586080830186610ed1565b828103604084015261106a8186610ed1565b9150508260608301525b95945050505050565b6060815260006110906060830186610ed1565b82810360208401526110a28186610ed1565b9150508260408301525b949350505050565b60208152603660208201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60408201527f206d75737420636f6d652066726f6d2061646d696e2e00000000000000000000606082015260006080820190505b919050565b60208152604960208201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960408201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360608201527f66792064656c61792e00000000000000000000000000000000000000000000006080820152600060a0820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160408201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000606082015260006080820190505b919050565b60208152603d60208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206861736e2774206265656e207175657565642e000000606082015260006080820190505b919050565b60208152604560208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060608201527f6c6f636b2e0000000000000000000000000000000000000000000000000000006080820152600060a0820190505b919050565b60208152603360208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206973207374616c652e00000000000000000000000000606082015260006080820190505b919050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061138d6060830185610ed1565b828103604084015261139f8185610ed1565b9150505b949350505050565b60006000604083850312156113c05760006000fd5b8251801515811415156113d35760006000fd5b80925050602083015167ffffffffffffffff8111156113f25760006000fd5b808401905084601f82011215156114095760006000fd5b805161141c61141782610d21565b610cca565b8181528660208385010111156114325760006000fd5b611443826020830160208601610e9c565b8093505050505b9250929050565b60208152603c60208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e20657865637574696f6e20726576657274656400000000606082015260006080820190505b919050565b60208152601d60208201527f43616c6c206d75737420636f6d652066726f6d206578656375746f722e000000604082015260006060820190505b919050565b6000821982111561152f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b82820190505b92915050565b60208152601160208201527f6164646974696f6e206f766572666c6f77000000000000000000000000000000604082015260006060820190505b919050565b60208152603460208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560408201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000606082015260006080820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60408201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000606082015260006080820190505b919050565bfea26469706673582212209f3fd7e463539c1727ca6f233c6cd11abeb0d7bd9f4607d9d1680aa979d4f2a964736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
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
    static createInterface(): TDaoTimelockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TDaoTimelock;
}
export {};
