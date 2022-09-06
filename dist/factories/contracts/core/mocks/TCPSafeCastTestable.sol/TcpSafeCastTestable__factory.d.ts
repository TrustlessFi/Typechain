import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { TcpSafeCastTestable, TcpSafeCastTestableInterface } from "../../../../../contracts/core/mocks/TCPSafeCastTestable.sol/TcpSafeCastTestable";
declare type TcpSafeCastTestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TcpSafeCastTestable__factory extends ContractFactory {
    constructor(...args: TcpSafeCastTestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TcpSafeCastTestable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TcpSafeCastTestable;
    connect(signer: Signer): TcpSafeCastTestable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61175c806100266000396000f3fe60806040523480156100115760006000fd5b506004361061017c5760003560e01c806387112273116100d9578063be0bdabc1161008d578063d142b87711610067578063d142b877146104e2578063e13450ca14610512578063fa514ee5146105425761017c565b8063be0bdabc14610452578063d093dc4e14610482578063d0dcdf7b146104b25761017c565b806393fcc268116100be57806393fcc268146103c2578063a8d43fc9146103f2578063b414a9be146104225761017c565b8063871122731461036257806391ab11b6146103925761017c565b806347af8c4a11610130578063668e8b4a11610115578063668e8b4a146102d25780636cabde0d146103025780636dc3c604146103325761017c565b806347af8c4a14610272578063529e9fea146102a25761017c565b80630dd3fd46116101615780630dd3fd46146101e257806322174fe7146102125780632e510f3f146102425761017c565b80630147e1e3146101825780630d2506e4146101b25761017c565b60006000fd5b61019c600480360381019061019791906110a9565b610572565b6040516101a991906110c7565b60405180910390f35b6101cc60048036038101906101c791906110a9565b61058f565b6040516101d991906110f2565b60405180910390f35b6101fc60048036038101906101f7919061110b565b6105ac565b6040516102099190611129565b60405180910390f35b61022c600480360381019061022791906110a9565b6105c9565b604051610239919061113e565b60405180910390f35b61025c6004803603810190610257919061110b565b6105e6565b6040516102699190611158565b60405180910390f35b61028c600480360381019061028791906110a9565b610603565b604051610299919061116d565b60405180910390f35b6102bc60048036038101906102b791906110a9565b610620565b6040516102c9919061118d565b60405180910390f35b6102ec60048036038101906102e791906110a9565b61063d565b6040516102f991906111a3565b60405180910390f35b61031c600480360381019061031791906110a9565b61065a565b60405161032991906111bb565b60405180910390f35b61034c600480360381019061034791906110a9565b610677565b60405161035991906111e5565b60405180910390f35b61037c600480360381019061037791906110a9565b610694565b604051610389919061120d565b60405180910390f35b6103ac60048036038101906103a7919061110b565b6106b1565b6040516103b9919061121f565b60405180910390f35b6103dc60048036038101906103d7919061110b565b6106ce565b6040516103e99190611234565b60405180910390f35b61040c600480360381019061040791906110a9565b6106eb565b6040516104199190611249565b60405180910390f35b61043c6004803603810190610437919061110b565b610708565b604051610449919061125e565b60405180910390f35b61046c6004803603810190610467919061110b565b610725565b6040516104799190611270565b60405180910390f35b61049c6004803603810190610497919061110b565b610742565b6040516104a99190611285565b60405180910390f35b6104cc60048036038101906104c791906110a9565b61075f565b6040516104d9919061129a565b60405180910390f35b6104fc60048036038101906104f791906110a9565b61077c565b60405161050991906112c9565b60405180910390f35b61052c600480360381019061052791906110a9565b610799565b60405161053991906112f5565b60405180910390f35b61055c600480360381019061055791906110a9565b6107b6565b6040516105699190611311565b60405180910390f35b6000610585826107d3909063ffffffff16565b905080505b919050565b60006105a28261083e909063ffffffff16565b905080505b919050565b60006105bf82610897909063ffffffff16565b905080505b919050565b60006105dc8261091a909063ffffffff16565b905080505b919050565b60006105f982610974909063ffffffff16565b905080505b919050565b600061061682610a03909063ffffffff16565b905080505b919050565b600061063382610a63909063ffffffff16565b905080505b919050565b600061065082610ab9909063ffffffff16565b905080505b919050565b600061066d82610b11909063ffffffff16565b905080505b919050565b600061068a82610b7b909063ffffffff16565b905080505b919050565b60006106a782610be3909063ffffffff16565b905080505b919050565b60006106c482610c56909063ffffffff16565b905080505b919050565b60006106e182610cd6909063ffffffff16565b905080505b919050565b60006106fe82610d58909063ffffffff16565b905080505b919050565b600061071b82610dad909063ffffffff16565b905080505b919050565b600061073882610e02909063ffffffff16565b905080505b919050565b600061075582610e89909063ffffffff16565b905080505b919050565b600061077282610f0a909063ffffffff16565b905080505b919050565b600061078f82610f79909063ffffffff16565b905080505b919050565b60006107ac82610fe5909063ffffffff16565b905080505b919050565b60006107c982611041909063ffffffff16565b905080505b919050565b60007701000000000000000000000000000000000000000000000082101515610831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082890611335565b60405180910390fd5b819050610839565b919050565b6000650100000000008210151561088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190611374565b60405180910390fd5b819050610892565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000000082121580156108cc5750638000000082125b151561090d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610904906113b3565b60405180910390fd5b819050610915565b919050565b6000660100000000000082101515610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e906113f2565b60405180910390fd5b81905061096f565b919050565b60007fffffffffffffffffffffffffffffffff8000000000000000000000000000000082121580156109b557506f8000000000000000000000000000000082125b15156109f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ed90611431565b60405180910390fd5b8190506109fe565b919050565b60006c0100000000000000000000000082101515610a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4d90611470565b60405180910390fd5b819050610a5e565b919050565b60006201000082101515610aac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa3906114af565b60405180910390fd5b819050610ab4565b919050565b600064010000000082101515610b04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afb906113b3565b60405180910390fd5b819050610b0c565b919050565b600076010000000000000000000000000000000000000000000082101515610b6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b65906114ee565b60405180910390fd5b819050610b76565b919050565b60007401000000000000000000000000000000000000000082101515610bd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcd9061152d565b60405180910390fd5b819050610bde565b919050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515610c49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c409061156c565b60405180910390fd5b819050610c51565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808212158015610c885750608082125b1515610cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc0906115ab565b60405180910390fd5b819050610cd1565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008212158015610d0a57506280000082125b1515610d4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d42906115ea565b60405180910390fd5b819050610d53565b919050565b600061010082101515610da0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d97906115ab565b60405180910390fd5b819050610da8565b919050565b600060008212151515610df5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dec90611629565b60405180910390fd5b819050610dfd565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffff80000000000000008212158015610e3b575067800000000000000082125b1515610e7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7390611668565b60405180910390fd5b819050610e84565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008212158015610ebc575061800082125b1515610efd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef4906114af565b60405180910390fd5b819050610f05565b919050565b60007b0100000000000000000000000000000000000000000000000000000082101515610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f63906116a7565b60405180910390fd5b819050610f74565b919050565b6000780100000000000000000000000000000000000000000000000082101515610fd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcf906116e6565b60405180910390fd5b819050610fe0565b919050565b60006801000000000000000082101515611034576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102b90611668565b60405180910390fd5b81905061103c565b919050565b600070010000000000000000000000000000000082101515611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108f90611431565b60405180910390fd5b8190506110a0565b91905056611725565b6000602082840312156110bc5760006000fd5b813590505b92915050565b600060208201905076ffffffffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905064ffffffffff831682525b92915050565b60006020828403121561111e5760006000fd5b813590505b92915050565b60006020820190508260030b82525b92915050565b600060208201905065ffffffffffff831682525b92915050565b600060208201905082600f0b82525b92915050565b60006020820190506bffffffffffffffffffffffff831682525b92915050565b600060208201905061ffff831682525b92915050565b600060208201905063ffffffff831682525b92915050565b600060208201905075ffffffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b60006020820190508260000b82525b92915050565b60006020820190508260020b82525b92915050565b600060208201905060ff831682525b92915050565b60006020820190508282525b92915050565b60006020820190508260070b82525b92915050565b60006020820190508260010b82525b92915050565b60006020820190507affffffffffffffffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905077ffffffffffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60208152601260208201527f6d6f7265207468616e2031383420626974730000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2034302062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2033322062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2034382062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f6d6f7265207468616e2031323820626974730000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2039362062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2031362062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f6d6f7265207468616e2031373620626974730000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f6d6f7265207468616e2031363020626974730000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f746f6f2062696720666f7220696e743235360000000000000000000000000000604082015260006060820190505b919050565b60208152601060208201527f6d6f7265207468616e2038206269747300000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2032342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f76616c7565206e6f7420706f7369746976650000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f6d6f7265207468616e2032313620626974730000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f6d6f7265207468616e2031393220626974730000000000000000000000000000604082015260006060820190505b919050565bfea26469706673582212202113482264eacaad1014c60d818145d4ddb9583ed7e99f40d046ddc62d81ba2e64736f6c63430008100033";
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
    static createInterface(): TcpSafeCastTestableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TcpSafeCastTestable;
}
export {};
