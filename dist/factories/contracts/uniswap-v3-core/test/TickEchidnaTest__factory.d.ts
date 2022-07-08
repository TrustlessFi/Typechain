import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickEchidnaTest, TickEchidnaTestInterface } from "../../../../contracts/uniswap-v3-core/test/TickEchidnaTest";
declare type TickEchidnaTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TickEchidnaTest__factory extends ContractFactory {
    constructor(...args: TickEchidnaTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TickEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TickEchidnaTest;
    connect(signer: Signer): TickEchidnaTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6106c3806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063858027e51461003657610030565b60006000fd5b610050600480360381019061004b91906102fc565b610052565b005b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761861007c9061035f565b60020b8160020b131515156100915760006000fd5b60008160020b1315156100a45760006000fd5b600081827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276186100d391906103d4565b6100dd9190610451565b9050600082837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761861010d9061035f565b61011791906103d4565b6101219190610451565b905060006101348461021d63ffffffff16565b9050826101409061035f565b60020b8260020b14151561015757610156610501565b5b60008260020b13151561016d5761016c610501565b5b600084848461017c9190610532565b610186919061059d565b60020b14151561019957610198610501565b5b600060018585856101aa9190610532565b6101b491906103d4565b60020b6101c191906105c3565b90506fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff1681836fffffffffffffffffffffffffffffffff1661020491906105e3565b1115151561021557610214610501565b5b505050505b50565b6000600082837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761861024e91906103d4565b6102589190610451565b9050600083847ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276186102889061035f565b61029291906103d4565b61029c9190610451565b9050600060018584846102af9190610532565b6102b991906103d4565b6102c39190610628565b90508062ffffff166fffffffffffffffffffffffffffffffff6102e69190610656565b93505050506102f3565050505b9190505661068c565b60006020828403121561030f5760006000fd5b81358060020b811415156103235760006000fd5b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008114156103965761039561032e565b5b806000039150505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b60008160020b8360020b8015156103ee576103ed6103a3565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000831416156104435761044261032e565b5b808205925050505b92915050565b60008160020b8360020b627fffff60008213600084138383048511828216161561047e5761047d61032e565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000060008512868205861281841616156104ba576104b961032e565b5b600087129250858205871284841616156104d7576104d661032e565b5b858505871281841616156104ee576104ed61032e565b5b5050505050808202925050505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b565b60008160020b8360020b60008112817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000018312811516156105765761057561032e565b5b81627fffff01831381161561058e5761058d61032e565b5b50808203925050505b92915050565b60008260020b8015156105b3576105b26103a3565b5b808360020b079150505b92915050565b600082198211156105d7576105d661032e565b5b82820190505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561061c5761061b61032e565b5b82820290505b92915050565b600062ffffff8083168185168083038211156106475761064661032e565b5b80820193505050505b92915050565b60006fffffffffffffffffffffffffffffffff80841680151561067c5761067b6103a3565b5b8082851604925050505b92915050565bfea26469706673582212203a8140e131c8ad7a31b91bfe03c5cba6c217be3ff6f19bc470bad3d4ef9b89ea64736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): TickEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TickEchidnaTest;
}
export {};
