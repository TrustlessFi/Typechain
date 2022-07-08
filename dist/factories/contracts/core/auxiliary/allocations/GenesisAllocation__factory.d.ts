import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenesisAllocation, GenesisAllocationInterface } from "../../../../../contracts/core/auxiliary/allocations/GenesisAllocation";
declare type GenesisAllocationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenesisAllocation__factory extends ContractFactory {
    constructor(...args: GenesisAllocationConstructorParams);
    deploy(params: GenesisAllocation.ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GenesisAllocation>;
    getDeployTransaction(params: GenesisAllocation.ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GenesisAllocation;
    connect(signer: Signer): GenesisAllocation__factory;
    static readonly bytecode = "0x60c0604052348015620000125760006000fd5b5060405162001e8d38038062001e8d83398181016040528101906200003891906200029e565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806040015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681526020015050620001196200010d82606001516200012160201b60201c565b6200016060201b60201c565b5b50620003f1565b6000620001568262000138620001dc60201b60201c565b67ffffffffffffffff16620001fe60201b62000b551790919060201c565b905080505b919050565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051620001d0919062000356565b60405180910390a15b50565b6000620001f6426200021c60201b62000b7017909060201c565b905080505b90565b600081836200020e919062000371565b905062000216565b92915050565b600068010000000000000000821015156200026e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026590620003b1565b60405180910390fd5b81905062000277565b91905056620003f0565b6001600160a01b038116811415156200029a5760006000fd5b505b565b600060808284031215620002b25760006000fd5b604051608081016001600160401b038282108183111715620002e457634e487b7160e01b600052604160045260246000fd5b8160405284519150620002f78262000281565b818352602085015191506200030c8262000281565b81602084015260408501519150620003248262000281565b8160408401526060850151915080821682141515620003435760006000fd5b5080606083015250809150505b92915050565b60006020820190506001600160401b03831682525b92915050565b60006001600160401b03808316818516808303821115620003a257634e487b7160e01b600052601160045260246000fd5b80820193505050505b92915050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b5b60805160a051611a5a6200043360003960008181610757015281816109d901528181610a150152610b3301526000818161038601526105600152611a5a6000f3fe60806040523480156100115760006000fd5b50600436106100ce5760003560e01c8063452a932011610082578063a3f4df7e1161005c578063a3f4df7e146101d0578063e643b524146101ee578063f00000ee1461020a576100ce565b8063452a9320146101525780636a0b0134146101705780636fca301e146101a0576100ce565b806329dcb0cf116100b357806329dcb0cf1461010e578063314e99a21461012c578063351b64f114610136576100ce565b806308805f75146100d45780632335c76b146100f0576100ce565b60006000fd5b6100ee60048036038101906100e991906110a3565b610228565b005b6100f8610384565b60405161010591906110dc565b60405180910390f35b6101166103a8565b6040516101239190611104565b60405180910390f35b6101346103c2565b005b610150600480360381019061014b9190611206565b61044a565b005b61015a6107ed565b60405161016791906110dc565b60405180910390f35b61018a60048036038101906101859190611368565b610813565b604051610197919061139b565b60405180910390f35b6101ba60048036038101906101b591906113af565b610848565b6040516101c791906113f2565b60405180910390f35b6101d86108c1565b6040516101e59190611439565b60405180910390f35b6102086004803603810190610203919061148d565b6108fd565b005b610212610b31565b60405161021f91906114b2565b60405180910390f35b610287600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bcc63ffffffff16565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166102b6610c1263ffffffff16565b67ffffffffffffffff16101515610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f9906114da565b60405180910390fd5b8067ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610370576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036790611519565b60405180910390fd5b61037f81610c2d63ffffffff16565b5b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060149054906101000a900467ffffffffffffffff1681565b610421600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bcc63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16610479610c1263ffffffff16565b67ffffffffffffffff161015156104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc906114da565b60405180910390fd5b6000815190506104d3611034565b600060003390506000600090505b848110156107385785818151811015156104fe576104fd611558565b5b602002602001015193508350600061055c61053661052b858860200151896040015161084863ffffffff16565b610ca763ffffffff16565b866000015160000151876000015160200151886000015160400151610cdc63ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156105b95750610725565b600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008660200151815260200190815260200160002060009054906101000a900460ff161561062c5750610725565b6001600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008760200151815260200190815260200160002060006101000a81548160ff0219169083151502179055506106c88560400151856fffffffffffffffffffffffffffffffff16610d1b90919063ffffffff16565b9350835084602001518373ffffffffffffffffffffffffffffffffffffffff167fe5aaaaece9a1bf6b24f1b99c8d79bbc51f548f6a81947bc3631c216a99ac4892876040015160405161071b9190611589565b60405180910390a3505b8080610730906115de565b9150506104e1565b506000826fffffffffffffffffffffffffffffffff161415156107e5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee482846040518363ffffffff1660e01b81526004016107b092919061161d565b600060405180830381600087803b1580156107cb5760006000fd5b505af11580156107e0573d600060003e3d6000fd5b505050505b505050505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60006040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e00000000000000000000815260200150463086868660405160200161089d9695949392919061165e565b6040516020818303038152906040528051906020012090506108ba565b9392505050565b6040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015081565b61095c600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bcc63ffffffff16565b61096a610c1263ffffffff16565b67ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff161015156109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce906116f4565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee47f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663262406de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a7f573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa39190611733565b836040518363ffffffff1660e01b8152600401610ac192919061161d565b600060405180830381600087803b158015610adc5760006000fd5b505af1158015610af1573d600060003e3d6000fd5b505050507fab66120f2ae5ab429499bbccd7be767f5037aa678a6550988dbcdcecc1c95f6881604051610b249190611589565b60405180910390a15b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008183610b63919061175c565b9050610b6a565b92915050565b60006801000000000000000082101515610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb69061178f565b60405180910390fd5b819050610bc7565b919050565b801515610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c05906117ce565b60405180910390fd5b5b50565b6000610c2542610b70909063ffffffff16565b905080505b90565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051610c9b9190611104565b60405180910390a15b50565b600081604051602001610cba919061180d565b604051602081830303815290604052805190602001209050610cd7565b919050565b600060006000610cf487878787610d3663ffffffff16565b91509150610d0781610e4a63ffffffff16565b8192505050610d135650505b949350505050565b60008183610d299190611845565b9050610d30565b92915050565b600060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610d72576000600391509150610e41565b601b8560ff1614158015610d8a5750601c8560ff1614155b15610d9c576000600491509150610e41565b600060018787878760405160008152602001604052604051610dc19493929190611880565b6020604051602081039080840390855afa158015610de4573d600060003e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e3357600060019250925050610e41565b8060009250925050610e4156505b94509492505050565b60006004811115610e5e57610e5d6118aa565b5b816004811115610e7157610e706118aa565b5b1415610e805761103156611030565b60016004811115610e9457610e936118aa565b5b816004811115610ea757610ea66118aa565b5b1415610eec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edf906118db565b60405180910390fd61102f565b60026004811115610f0057610eff6118aa565b5b816004811115610f1357610f126118aa565b5b1415610f58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4b9061191a565b60405180910390fd61102e565b60036004811115610f6c57610f6b6118aa565b5b816004811115610f7f57610f7e6118aa565b5b1415610fc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb790611959565b60405180910390fd61102d565b60046004811115610fd857610fd76118aa565b5b816004811115610feb57610fea6118aa565b5b141561102c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611023906119be565b60405180910390fd5b5b5b5b5b5b50565b6040518060600160405280611047611070565b81526020016000815260200160006fffffffffffffffffffffffffffffffff1681526020015090565b6040518060600160405280600060ff16815260200160006000191681526020016000600019168152602001509056611a23565b6000602082840312156110b65760006000fd5b813567ffffffffffffffff8116811415156110d15760006000fd5b809150505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b600060405190506060810181811067ffffffffffffffff8211171561117957611178611120565b5b80604052505b90565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156111ce576111cd611120565b5b80604052505b919050565b6000813590506fffffffffffffffffffffffffffffffff8116811415156112005760006000fd5b5b919050565b6000602080838503121561121a5760006000fd5b823567ffffffffffffffff808211156112335760006000fd5b818501915085601f830112151561124a5760006000fd5b81358181111561125d5761125c611120565b5b61126b848260051b01611182565b915081818352848301925060a08581840286010192508883111561128f5760006000fd5b85850194505b8285101561132f57848903818112156112af5760008081fd505b6112b7611151565b6060808312156112c85760008081fd505b6112d0611151565b9250873560ff8116811415156112e75760008081fd505b80845250888801358984015260408089013581850152838352818901358a84015261131460808a016111d9565b818401525050808652505085840193505b8085019450611295565b5080955050505050505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156113645760006000fd5b505b565b600060006040838503121561137d5760006000fd5b82356113888161133f565b80925050602083013590505b9250929050565b600060208201905082151582525b92915050565b600060006000606084860312156113c65760006000fd5b83356113d18161133f565b80935050602084013591506113e8604085016111d9565b90505b9250925092565b60006020820190508282525b92915050565b60005b838110156114235780820151818401525b602081019050611407565b83811115611432576000848401525b505050505b565b6020815260008251806020840152611458816040850160208701611404565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b6000602082840312156114a05760006000fd5b6114a9826111d9565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600f60208201527f446561646c696e65207061737365640000000000000000000000000000000000604082015260006060820190505b919050565b60208152600b60208201527f4d75737420657874656e64000000000000000000000000000000000000000000604082015260006060820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611611576116106115ad565b5b6001820190505b919050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b60008751611670818460208c01611404565b80830190508781527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808860601b166020830152808760601b166034830152508460488201527fffffffffffffffffffffffffffffffff000000000000000000000000000000008460801b166068820152607881019150505b979650505050505050565b60208152601360208201527f446561646c696e65206e6f742070617373656400000000000000000000000000604082015260006060820190505b919050565b6000602082840312156117465760006000fd5b81516117518161133f565b809150505b92915050565b600067ffffffffffffffff8083168185168083038211156117805761177f6115ad565b5b80820193505050505b92915050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000815281601c8201526000603c820190505b92915050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611871576118706115ad565b5b80820193505050505b92915050565b600060808201905085825260ff851660208301528360408301528260608301525b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b565b60208152601860208201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260006060820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565bfea2646970667358221220c7936a7c1a3548d9658ab9cd936f223cb124a46c961d4401e073b7d9d4699d6764736f6c634300080c0033";
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
            components: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): GenesisAllocationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenesisAllocation;
}
export {};