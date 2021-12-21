import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenesisAllocation, GenesisAllocationInterface, ConstructorParamsStruct } from "../GenesisAllocation";
declare type GenesisAllocationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenesisAllocation__factory extends ContractFactory {
    constructor(...args: GenesisAllocationConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GenesisAllocation>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GenesisAllocation;
    connect(signer: Signer): GenesisAllocation__factory;
    static readonly bytecode = "0x60c0604052348015620000125760006000fd5b506040516200211538038062002115833981810160405281019062000038919062000287565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806040015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150506200011f6200011382606001516200012760201b60201c565b6200016660201b60201c565b5b50620003ef565b60006200015c826200013e620001e260201b60201c565b67ffffffffffffffff166200020460201b62000c531790919060201c565b905080505b919050565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051620001d6919062000378565b60405180910390a15b50565b6000620001fc426200022260201b62000c6e17909060201c565b905080505b90565b6000818362000214919062000393565b90506200021c565b92915050565b6000680100000000000000008210151562000274576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026b9062000339565b60405180910390fd5b8190506200027d565b91905056620003ee565b60006080828403121562000299578081fd5b604051608081016001600160401b038282108183111715620002c957634e487b7160e01b84526041600452602484fd5b8160405284519150620002dc82620003d1565b81835260208501519150620002f182620003d1565b816020840152604085015191506200030982620003d1565b816040840152606085015191508082168214151562000326578384fd5b5080606083015250809150505b92915050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60006020820190506001600160401b03831682525b92915050565b60006001600160401b03808316818516808303821115620003c257634e487b7160e01b84526011600452602484fd5b80820193505050505b92915050565b6001600160a01b03811681141515620003ea5760006000fd5b505b565b5b60805160601c60a05160601c611cde62000437600039600081816105dd01528181610619015281816107470152610bbd015260008181610386015261091e0152611cde6000f3fe60806040523480156100115760006000fd5b50600436106100ce5760003560e01c8063a3f4df7e11610082578063f00000ee1161005c578063f00000ee146101be578063f22122e3146101dc578063f5fa0d731461020c576100ce565b8063a3f4df7e14610154578063bea676cd14610172578063e643b524146101a2576100ce565b806329dcb0cf116100b357806329dcb0cf1461010e578063314e99a21461012c578063452a932014610136576100ce565b806308805f75146100d45780632335c76b146100f0576100ce565b60006000fd5b6100ee60048036038101906100e99190611592565b610228565b005b6100f8610384565b60405161010591906116ba565b60405180910390f35b6101166103a8565b6040516101239190611a96565b60405180910390f35b6101346103c2565b005b61013e61044a565b60405161014b91906116ba565b60405180910390f35b61015c610470565b604051610169919061179b565b60405180910390f35b61018c600480360381019061018791906113fa565b6104ac565b6040516101999190611723565b60405180910390f35b6101bc60048036038101906101b7919061156f565b610501565b005b6101c6610745565b6040516101d39190611773565b60405180910390f35b6101f660048036038101906101f191906113b2565b610769565b6040516102039190611737565b60405180910390f35b61022660048036038101906102219190611446565b6107e2565b005b610287600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cca63ffffffff16565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166102b6610d1063ffffffff16565b67ffffffffffffffff16101515610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f9906119f4565b60405180910390fd5b8067ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610370576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610367906119b5565b60405180910390fd5b61037f81610d2b63ffffffff16565b5b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060149054906101000a900467ffffffffffffffff1681565b610421600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cca63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015081565b600160005060205283600052604060002060005060205282600052604060002060005060205281600052604060002060005060205280600052604060002060009350935050509054906101000a900460ff1681565b610560600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cca63ffffffff16565b61056e610d1063ffffffff16565b67ffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff161015156105db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d290611976565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee47f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663262406de6040518163ffffffff1660e01b815260040160206040518083038186803b15801561067e5760006000fd5b505afa158015610693573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b7919061138b565b836040518363ffffffff1660e01b81526004016106d59291906116e2565b600060405180830381600087803b1580156106f05760006000fd5b505af1158015610705573d600060003e3d6000fd5b505050507fab66120f2ae5ab429499bbccd7be767f5037aa678a6550988dbcdcecc1c95f68816040516107389190611a72565b60405180910390a15b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006040518060400160405280601681526020017f5463702047656e6573697320416c6c6f636174696f6e0000000000000000000081526020015046308686866040516020016107be969594939291906115c7565b6040516020818303038152906040528051906020012090506107db565b9392505050565b600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff16610811610d1063ffffffff16565b67ffffffffffffffff1610151561085d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610854906119f4565b60405180910390fd5b60008151905061086b6112ae565b600060003390506000600090505b84811015610b9e5785818151811015156108bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015193508350600061091a6108f46108e9858860200151896040015161076963ffffffff16565b610da563ffffffff16565b866000015160000151876000015160200151886000015160400151610dda63ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156109775750610b8b565b600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600086600001516000015160ff1660ff16815260200190815260200160002060005060008660000151602001516000191660001916815260200190815260200160002060005060008660000151604001516000191660001916815260200190815260200160002060009054906101000a900460ff1615610a3c5750610b8b565b6001600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600087600001516000015160ff1660ff16815260200190815260200160002060005060008760000151602001516000191660001916815260200190815260200160002060005060008760000151604001516000191660001916815260200190815260200160002060006101000a81548160ff021916908315150217905550610b2a8560400151856fffffffffffffffffffffffffffffffff16610e1990919063ffffffff16565b93508350846020015161ffff168373ffffffffffffffffffffffffffffffffffffffff167f11edbb07a13b9bf33e7b6f1d08ebaf3bf42049dece1a89868d3d1ef7fa7cae088760400151604051610b819190611a72565b60405180910390a3505b8080610b9690611bdd565b915050610879565b506000826fffffffffffffffffffffffffffffffff16141515610c4b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ee5f1ee433846040518363ffffffff1660e01b8152600401610c169291906116e2565b600060405180830381600087803b158015610c315760006000fd5b505af1158015610c46573d600060003e3d6000fd5b505050505b505050505b50565b60008183610c619190611b75565b9050610c68565b92915050565b60006801000000000000000082101515610cbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb490611a33565b60405180910390fd5b819050610cc5565b919050565b801515610d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d03906118d2565b60405180910390fd5b5b50565b6000610d2342610c6e909063ffffffff16565b905080505b90565b80600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f4f9cd54e7c3589d8772371faadbfc749621246794485e3bd944fdb91c5a3257e600060149054906101000a900467ffffffffffffffff16604051610d999190611a96565b60405180910390a15b50565b600081604051602001610db89190611682565b604051602081830303815290604052805190602001209050610dd5565b919050565b600060006000610df287878787610e3463ffffffff16565b91509150610e0581610f4863ffffffff16565b8192505050610e115650505b949350505050565b60008183610e279190611b3a565b9050610e2e565b92915050565b600060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610e70576000600391509150610f3f565b601b8560ff1614158015610e885750601c8560ff1614155b15610e9a576000600491509150610f3f565b600060018787878760405160008152602001604052604051610ebf9493929190611749565b6020604051602081039080840390855afa158015610ee2573d600060003e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f3157600060019250925050610f3f565b8060009250925050610f3f56505b94509492505050565b60006004811115610f82577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115610fbb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610fca576112ab566112aa565b60016004811115611004577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561103d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415611082576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611075906117ef565b60405180910390fd6112a9565b600260048111156110bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156110f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561113a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112d9061182e565b60405180910390fd6112a8565b60036004811115611174577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156111ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156111f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e59061186d565b60405180910390fd6112a7565b6004600481111561122c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115611265577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156112a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129d90611911565b60405180910390fd5b5b5b5b5b5b50565b60405180606001604052806112c16112ee565b8152602001600061ffff16815260200160006fffffffffffffffffffffffffffffffff1681526020015090565b6040518060600160405280600060ff16815260200160006000191681526020016000600019168152602001509056611ca7565b6000813590506fffffffffffffffffffffffffffffffff8116811415156113485760006000fd5b5b919050565b60008135905061ffff8116811415156113675760006000fd5b5b919050565b60008135905060ff8116811415156113855760006000fd5b5b919050565b60006020828403121561139c578081fd5b81516113a781611c7e565b809150505b92915050565b600060006000606084860312156113c7578182fd5b83356113d281611c7e565b809350506113e26020850161134e565b91506113f060408501611321565b90505b9250925092565b600060006000600060808587031215611411578081fd5b843561141c81611c7e565b8094505061142c6020860161136d565b925060408501359150606085013590505b92959194509250565b60006020808385031215611458578182fd5b823567ffffffffffffffff8082111561146f578384fd5b818501915085601f8301121515611484578384fd5b81358181111561149757611496611c4d565b5b6114a5848260051b01611ae3565b915081818352848301925084840160a0898782860288010111156114c7578788fd5b8795505b8386101561155e57818a03818112156114e2578889fd5b6114ea611ab2565b6060808312156114f8578a8bfd5b611500611ab2565b925061150b8561136d565b8352898501358a8401526040808601358185015283835261152d82870161134e565b8b84015261153d60808701611321565b8184015250508087525050868501945080820191505b6001860195506114cb565b505080955050505050505b92915050565b600060208284031215611580578081fd5b61158982611321565b90505b92915050565b6000602082840312156115a3578081fd5b813567ffffffffffffffff8116811415156115bc578182fd5b809150505b92915050565b600087516115d9818460208c01611ba8565b80830190508781527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808860601b166020830152808760601b166034830152507fffff0000000000000000000000000000000000000000000000000000000000008560f01b1660488201527fffffffffffffffffffffffffffffffff000000000000000000000000000000008460801b16604a820152605a81019150505b979650505050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000815281601c8201526000603c820190505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b600060808201905085825260ff851660208301528360408301528260608301525b95945050505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152600082518060208401526117ba816040850160208701611ba8565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565b60208152601860208201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260006060820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602260208201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60408201527f7565000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601360208201527f446561646c696e65206e6f742070617373656400000000000000000000000000604082015260006060820190505b919050565b60208152600b60208201527f4d75737420657874656e64000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600f60208201527f446561646c696e65207061737365640000000000000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b600060405190506060810181811067ffffffffffffffff82111715611ada57611ad9611c4d565b5b80604052505b90565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611b2f57611b2e611c4d565b5b80604052505b919050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611b6657611b65611c1c565b5b80820193505050505b92915050565b600067ffffffffffffffff808316818516808303821115611b9957611b98611c1c565b5b80820193505050505b92915050565b60005b83811015611bc75780820151818401525b602081019050611bab565b83811115611bd6576000848401525b505050505b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c1057611c0f611c1c565b5b6001820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff811681141515611ca35760006000fd5b505b565bfea26469706673582212209a7a55c728566d0a8298571dfd27c99c9660db0e1d55a2a2c529d87c84acdc4864736f6c63430008040033";
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
