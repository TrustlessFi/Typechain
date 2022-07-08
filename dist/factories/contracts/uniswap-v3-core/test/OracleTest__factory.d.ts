import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleTest, OracleTestInterface } from "../../../../contracts/uniswap-v3-core/test/OracleTest";
declare type OracleTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OracleTest__factory extends ContractFactory {
    constructor(...args: OracleTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleTest;
    connect(signer: Signer): OracleTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b612824806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100ef5760003560e01c8063761eb23e1161008d578063daf50f6b11610067578063daf50f6b14610255578063dbffe9ad14610271578063dd158c181461028f578063f7fd2cfa146102ad576100ef565b8063761eb23e146101ec578063883bdbfd14610208578063d81740db14610239576100ef565b80632986c0e5116100c95780632986c0e5146101645780633eaf5d9f1461018257806365829dc5146101a057806374e69cef146101bc576100ef565b806316ada547146100f55780631a68650214610113578063252c09d714610131576100ef565b60006000fd5b6100fd6102c9565b60405161010a9190611da7565b60405180910390f35b61011b6102e0565b6040516101289190611dbf565b60405180910390f35b61014b60048036038101906101469190611de3565b610303565b60405161015b9493929190611e01565b60405180910390f35b61016c610387565b6040516101799190611e49565b60405180910390f35b61018a61039c565b6040516101979190611e5f565b60405180910390f35b6101ba60048036038101906101b59190611e91565b6103b0565b005b6101d660048036038101906101d19190611eb7565b61052e565b6040516101e39190611f36565b60405180910390f35b61020660048036038101906102019190611f48565b610634565b005b610222600480360381019061021d9190611eb7565b61067f565b604051610230929190611f7b565b60405180910390f35b610253600480360381019061024e9190612025565b610759565b005b61026f600480360381019061026a91906120a4565b6109a0565b005b610279610b1e565b6040516102869190611e49565b60405180910390f35b610297610b33565b6040516102a49190611e49565b60405180910390f35b6102c760048036038101906102c291906120ca565b610b48565b005b61ffff60009054906101000a900463ffffffff1681565b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1681565b60006000508161ffff811061031757600080fd5b90900160005b915090508060000160009054906101000a900463ffffffff16908060000160049054906101000a900460060b9080600001600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600001601f9054906101000a900460ff16905084565b61ffff60179054906101000a900461ffff1681565b61ffff60049054906101000a900460020b81565b6103d18160000160208101906103c691906120ca565b610b4863ffffffff16565b61046761ffff60179054906101000a900461ffff1661ffff60009054906101000a900463ffffffff1661ffff60049054906101000a900460020b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60199054906101000a900461ffff1661ffff601b9054906101000a900461ffff166000600050610b8c909695949392919063ffffffff16565b61ffff601761ffff60198491906101000a81548161ffff021916908361ffff1602179055508391906101000a81548161ffff021916908361ffff16021790555050508060200160208101906104bc91906120ff565b61ffff60046101000a81548162ffffff021916908360020b62ffffff1602179055508060400160208101906104f19190612131565b61ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50565b6000600060006000600061ffff60009054906101000a900463ffffffff1661ffff60049054906101000a900460020b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60179054906101000a900461ffff16935093509350935060005a905061060f85898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086858761ffff60199054906101000a900461ffff166000600050610df8909695949392919063ffffffff16565b50505a8161061d91906121a3565b9550505050505061062e5650505050505b92915050565b61065e61ffff601b9054906101000a900461ffff16826000600050610fc29092919063ffffffff16565b61ffff601b6101000a81548161ffff021916908361ffff1602179055505b50565b6060606061074961ffff60009054906101000a900463ffffffff16858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061ffff60049054906101000a900460020b61ffff60179054906101000a900461ffff1661ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60199054906101000a900461ffff166000600050610df8909695949392919063ffffffff16565b91509150610752565b9250929050565b600061ffff60049054906101000a900460020b9050600061ffff60079054906101000a90046fffffffffffffffffffffffffffffffff169050600061ffff60179054906101000a900461ffff169050600061ffff60199054906101000a900461ffff169050600061ffff601b9054906101000a900461ffff169050600061ffff60009054906101000a900463ffffffff1690506000600090505b888890508110156108d9578888828181101515610813576108126121c2565b5b905060600201600001602081019061082b91906120ca565b8261083691906121f3565b9150815061085b8583898988886000600050610b8c909695949392919063ffffffff16565b80955081965050508888828181101515610878576108776121c2565b5b905060600201602001602081019061089091906120ff565b9650865088888281811015156108a9576108a86121c2565b5b90506060020160400160208101906108c19190612131565b955085505b80806108d190612222565b9150506107f3565b508561ffff60046101000a81548162ffffff021916908360020b62ffffff1602179055508461ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508361ffff60176101000a81548161ffff021916908361ffff1602179055508261ffff60196101000a81548161ffff021916908361ffff1602179055508061ffff60006101000a81548163ffffffff021916908363ffffffff1602179055505050505050505b5050565b600061ffff60199054906101000a900461ffff1661ffff161415156109fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f190612261565b60405180910390fd5b806000016020810190610a0d91906120ca565b61ffff60006101000a81548163ffffffff021916908363ffffffff160217905550806020016020810190610a4191906120ff565b61ffff60046101000a81548162ffffff021916908360020b62ffffff160217905550806040016020810190610a769190612131565b61ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610ad8816000016020810190610ac591906120ca565b60006000506110a490919063ffffffff16565b61ffff601961ffff601b8491906101000a81548161ffff021916908361ffff1602179055508391906101000a81548161ffff021916908361ffff16021790555050505b50565b61ffff60199054906101000a900461ffff1681565b61ffff601b9054906101000a900461ffff1681565b8061ffff60008282829054906101000a900463ffffffff16610b6a91906121f3565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b50565b600060006000898961ffff1661ffff81101515610bac57610bab6121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505090508763ffffffff16816000015163ffffffff161415610c9b5788859250925050610dec565b8461ffff168461ffff16118015610cc55750600185610cba91906122a0565b61ffff168961ffff16145b15610cd4578391508150610cda565b84915081505b8160018a610ce891906122cc565b610cf2919061232a565b92508250610d08818989896111e963ffffffff16565b8a8461ffff1661ffff81101515610d2257610d216121c2565b5b90900160005b5060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600001601f6101000a81548160ff021916908315150217905550905050505b97509795505050505050565b6060606060008361ffff16111515610e45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3c90612352565b60405180910390fd5b865167ffffffffffffffff811115610e6057610e5f612391565b5b604051908082528060200260200182016040528015610e8e5781602001602082028036833780820191505090505b5091508150865167ffffffffffffffff811115610eae57610ead612391565b5b604051908082528060200260200182016040528015610edc5781602001602082028036833780820191505090505b50905080506000600090505b8751811015610fb457610f228a8a8a84815181101515610f0b57610f0a6121c2565b5b60200260200101518a8a8a8a6112ed63ffffffff16565b8483815181101515610f3757610f366121c2565b5b602002602001018484815181101515610f5357610f526121c2565b5b6020026020010182909073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020015082909060060b60060b81526020015050505b8080610fac90612222565b915050610ee8565b505b97509795505050505050565b600060008361ffff1611151561100d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100490612352565b60405180910390fd5b8261ffff168261ffff161115156110265782905061109d565b60008390505b8261ffff168161ffff161015611094576001858261ffff1661ffff81101515611058576110576121c2565b5b90900160005b5060000160006101000a81548163ffffffff021916908363ffffffff1602179055505b808061108c906123c2565b91505061102c565b5081905061109d565b9392505050565b6000600060405180608001604052808463ffffffff168152602001600060060b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016001151581526020015084600061ffff81101515611107576111066121c2565b5b90900160005b5060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600001601f6101000a81548160ff02191690831515021790555090505060016001819150809050915091506111e2565b9250929050565b6111f1611d57565b600085600001518561120391906123e9565b905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b6112319190612417565b886020015161124091906124cb565b60060b81526020016000856fffffffffffffffffffffffffffffffff161161126957600161126b565b845b6fffffffffffffffffffffffffffffffff1660808463ffffffff1673ffffffffffffffffffffffffffffffffffffffff16901b6112a8919061253a565b88604001516112b79190612574565b73ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001509150506112e556505b949350505050565b6000600060008763ffffffff16141561142c576000898661ffff1661ffff8110151561131c5761131b6121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505090508863ffffffff16816000015163ffffffff1614151561141757611412818a89886111e963ffffffff16565b905080505b80602001518160400151925092505061159e56505b6000878961143a91906123e9565b9050600060006114558c8c858c8c8c8c6115aa63ffffffff16565b91509150816000015163ffffffff168363ffffffff16141561148b57816020015182604001519450945050505061159e5661159a565b806000015163ffffffff168363ffffffff1614156114bd57806020015181604001519450945050505061159e56611599565b6000826000015182600001516114d391906123e9565b905060008360000151856114e791906123e9565b90508063ffffffff168263ffffffff168560200151856020015161150b91906125b3565b6115159190612622565b61151f9190612417565b846020015161152e91906124cb565b8263ffffffff168263ffffffff1686604001518660400151611550919061269f565b73ffffffffffffffffffffffffffffffffffffffff1661157091906126dd565b61157a9190612722565b85604001516115899190612574565b96509650505050505061159e5650505b5b5050505b97509795505050505050565b6115b2611d57565b6115ba611d57565b888561ffff1661ffff811015156115d4576115d36121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050915081506116b68883600001518961196b63ffffffff16565b156116ff578663ffffffff16826000015163ffffffff1614156116e25781819150915061195f566116fe565b816116f5838989886111e963ffffffff16565b9150915061195f565b5b888360018761170e91906122cc565b611718919061232a565b61ffff1661ffff811015156117305761172f6121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505091508150816060015115156118ed5788600061ffff8110151561181f5761181e6121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050915081505b6119028883600001518961196b63ffffffff16565b1515611943576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193a90612740565b60405180910390fd5b6119568989898887611a4b63ffffffff16565b9150915061195f565b97509795505050505050565b60008363ffffffff168363ffffffff161115801561199557508363ffffffff168263ffffffff1611155b156119b1578163ffffffff168363ffffffff1611159050611a44565b60008463ffffffff168463ffffffff16116119e2576401000000008463ffffffff166119dd919061277f565b6119ea565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff1611611a24576401000000008463ffffffff16611a1f919061277f565b611a2c565b8363ffffffff165b64ffffffffff1690508082111592505050611a445650505b9392505050565b611a53611d57565b611a5b611d57565b600083600186611a6b91906122cc565b611a75919061232a565b61ffff169050600060018561ffff1683611a8f91906127af565b611a9991906121a3565b905060005b600115611d495760028284611ab391906127af565b611abd9190612722565b90508050898661ffff1682611ad291906127cf565b61ffff81101515611ae657611ae56121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff1615151515815260200150509450845084606001511515611bd457600181611bcb91906127af565b92508250611a9e565b898661ffff16600183611be791906127af565b611bf191906127cf565b61ffff81101515611c0557611c046121c2565b5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050935083506000611ce98a87600001518b61196b63ffffffff16565b9050808015611d095750611d088a8a876000015161196b63ffffffff16565b5b15611d145750611d49565b801515611d3157600182611d2891906121a3565b92508250611d43565b600182611d3e91906127af565b935083505b50611a9e565b5050505b9550959350505050565b6040518060800160405280600063ffffffff168152602001600060060b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020015090566127ed565b600060208201905063ffffffff831682525b92915050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b600060208284031215611df65760006000fd5b813590505b92915050565b600060808201905063ffffffff861682528460060b602083015273ffffffffffffffffffffffffffffffffffffffff8416604083015282151560608301525b95945050505050565b600060208201905061ffff831682525b92915050565b60006020820190508260020b82525b92915050565b600060608284031215611e875760006000fd5b8190505b92915050565b600060608284031215611ea45760006000fd5b611eae8383611e74565b90505b92915050565b6000600060208385031215611ecc5760006000fd5b823567ffffffffffffffff80821115611ee55760006000fd5b818501915085601f8301121515611efc5760006000fd5b813581811115611f0c5760006000fd5b8660208260051b8501011115611f225760006000fd5b6020830194508093505050505b9250929050565b60006020820190508282525b92915050565b600060208284031215611f5b5760006000fd5b813561ffff811681141515611f705760006000fd5b809150505b92915050565b600060408201604083528085518083526060850191506020925082870160005b82811015611fc057815160060b8452848401935084820191505b600181019050611f9b565b505050838103828501528085518083528383019150838701925060005b818110156120155773ffffffffffffffffffffffffffffffffffffffff8451168352848301925084840193505b600181019050611fdd565b50508093505050505b9392505050565b600060006020838503121561203a5760006000fd5b823567ffffffffffffffff808211156120535760006000fd5b818501915085601f830112151561206a5760006000fd5b81358181111561207a5760006000fd5b8660206060830285010111156120905760006000fd5b6020830194508093505050505b9250929050565b6000606082840312156120b75760006000fd5b6120c18383611e74565b90505b92915050565b6000602082840312156120dd5760006000fd5b813563ffffffff8116811415156120f45760006000fd5b809150505b92915050565b6000602082840312156121125760006000fd5b81358060020b811415156121265760006000fd5b809150505b92915050565b6000602082840312156121445760006000fd5b81356fffffffffffffffffffffffffffffffff8116811415156121675760006000fd5b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828210156121b6576121b5612172565b5b82820390505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b600063ffffffff80831681851680830382111561221357612212612172565b5b80820193505050505b92915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561225557612254612172565b5b6001820190505b919050565b60208152601360208201527f616c726561647920696e697469616c697a656400000000000000000000000000604082015260006060820190505b919050565b600061ffff8083168185169150818110156122be576122bd612172565b5b818103925050505b92915050565b600061ffff8083168185168083038211156122ea576122e9612172565b5b80820193505050505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b600061ffff808416801515612342576123416122f9565b5b8082851606925050505b92915050565b60208152600160208201527f4900000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b600061ffff808316818114156123db576123da612172565b5b60018101925050505b919050565b600063ffffffff80831681851691508181101561240957612408612172565b5b818103925050505b92915050565b60008160060b8360060b667fffffffffffff60008213600084138383048511828216161561244857612447612172565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffff80000000000000600085128682058612818416161561248457612483612172565b5b600087129250858205871284841616156124a1576124a0612172565b5b858505871281841616156124b8576124b7612172565b5b5050505050808202925050505b92915050565b60008160060b8360060b6000821282667fffffffffffff038213811516156124f6576124f5612172565b5b827fffffffffffffffffffffffffffffffffffffffffffffffffff8000000000000003821281161561252b5761252a612172565b5b50808201925050505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808416801515612564576125636122f9565b5b8082851604925050505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8083168185168083038211156125a4576125a3612172565b5b80820193505050505b92915050565b60008160060b8360060b60008112817fffffffffffffffffffffffffffffffffffffffffffffffffff80000000000000018312811516156125f7576125f6612172565b5b81667fffffffffffff01831381161561261357612612612172565b5b50808203925050505b92915050565b60008160060b8360060b80151561263c5761263b6122f9565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81147fffffffffffffffffffffffffffffffffffffffffffffffffff800000000000008314161561269157612690612172565b5b808205925050505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8083168185169150818110156126cf576126ce612172565b5b818103925050505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561271657612715612172565b5b82820290505b92915050565b6000821515612734576127336122f9565b5b82820490505b92915050565b60208152600360208201527f4f4c440000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b600064ffffffffff8083168185168083038211156127a05761279f612172565b5b80820193505050505b92915050565b600082198211156127c3576127c2612172565b5b82820190505b92915050565b60008215156127e1576127e06122f9565b5b82820690505b92915050565bfea26469706673582212202c780d839c6c09970c457654179458516f118da1e81813c2dc4b6560905891c264736f6c634300080c0033";
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
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): OracleTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleTest;
}
export {};
