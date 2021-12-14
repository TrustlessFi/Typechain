import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Prices, PricesInterface, ConstructorParamsStruct } from "../Prices";
declare type PricesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Prices__factory extends ContractFactory {
    constructor(...args: PricesConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Prices>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Prices;
    connect(signer: Signer): Prices__factory;
    static readonly bytecode = "0x610140604052600160026000509090553480156200001d5760006000fd5b5060405162003f7e38038062003f7e833981810160405281019062000043919062000223565b5b80600001515b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50806020015173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806040015173ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806060015173ffffffffffffffffffffffffffffffffffffffff166101208173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806080015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060a0015173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50620002f856620002f7565b6000815190506200021d81620002da565b5b919050565b600060c0828403121562000235578081fd5b60405160c081018181106001600160401b03821117156200025257fe5b806040525082516200026481620002da565b8082525060208301516200027881620002da565b8060208301525060408301516200028f81620002da565b80604083015250620002a4606084016200020c565b6060820152620002b7608084016200020c565b6080820152620002ca60a084016200020c565b60a0820152809150505b92915050565b6001600160a01b03811681141515620002f35760006000fd5b5b50565b5b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c613bc1620003bd60003980610a065280610e455280610e7a5280611900528061195052508061094d5280610a2a5280610f195280610f4e5250806108b25280610d0e5280610eaf5280610ee452806111b45250806109a752806111e4528061120d528061192f52508061090c52806118df528061198452806119dc5250806104d05280610d3252806110a152806112565280611a035250613bc16000f3fe60806040523480156100115760006000fd5b50600436106101875760003560e01c806375f12b21116100d9578063d5f394881161008d578063fa42dcf411610067578063fa42dcf414610430578063fcebd71c14610460578063ff0eccf61461049057610187565b8063d5f39488146103d8578063d97e6400146103f6578063e1c7392a1461042657610187565b80638396cf69116100be5780638396cf691461035a5780638d02a08a14610378578063ce403c13146103a857610187565b806375f12b21146103205780637c5b90111461033e57610187565b806336fc02f41161013b578063407431f711610115578063407431f71461029f578063532cec7c146102bb5780636d048d53146102eb57610187565b806336fc02f4146102335780633c63a9cd146102515780633fc8cef31461028157610187565b8063113cf1ab1161016c578063113cf1ab146101b55780631fab230e146101e5578063323741741461021557610187565b806307da68f51461018d5780630c340a241461019757610187565b60006000fd5b6101956104ae565b005b61019f6104ce565b6040516101ac9190613850565b60405180910390f35b6101cf60048036038101906101ca919061350e565b6104f2565b6040516101dc919061383c565b60405180910390f35b6101ff60048036038101906101fa919061360c565b610517565b60405161020c9190613a6e565b60405180910390f35b61021d610a04565b60405161022a91906137c0565b60405180910390f35b61023b610a28565b60405161024891906137c0565b60405180910390f35b61026b600480360381019061026691906135d0565b610a4c565b6040516102789190613a6e565b60405180910390f35b610289610d0c565b60405161029691906137c0565b60405180910390f35b6102b960048036038101906102b491906135a9565b610d30565b005b6102d560048036038101906102d091906135a9565b610f94565b6040516102e2919061383c565b60405180910390f35b610305600480360381019061030091906135a9565b610ff8565b60405161031796959493929190613a9c565b60405180910390f35b61032861108c565b604051610335919061383c565b60405180910390f35b610358600480360381019061035391906135a9565b61109f565b005b6103626111e2565b60405161036f9190613878565b60405180910390f35b610392600480360381019061038d919061377a565b611206565b60405161039f9190613a6e565b60405180910390f35b6103c260048036038101906103bd91906135a9565b611244565b6040516103cf9190613a6e565b60405180910390f35b6103e0611811565b6040516103ed91906137c0565b60405180910390f35b610410600480360381019061040b91906136ad565b611837565b60405161041d9190613a6e565b60405180910390f35b61042e611856565b005b61044a6004803603810190610445919061377a565b61197d565b6040516104579190613a6e565b60405180910390f35b61047a600480360381019061047591906136ad565b6119bb565b60405161048791906138a0565b60405180910390f35b6104986119da565b6040516104a59190613878565b60405180910390f35b6104bc6119fe63ffffffff16565b6104ca611a5e63ffffffff16565b5b5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60006000600360005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff16151515158152602001505090506106428160a00151611aa863ffffffff16565b600061065388611aee63ffffffff16565b9050600060006106878361066c8b611aee63ffffffff16565b61067b8b611aee63ffffffff16565b8a611f8563ffffffff16565b915091506000846080015161069c578161069e565b825b9050610799856080015161071d576107186106ee8673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1661209b90919063ffffffff16565b7801000000000000000000000000000000000000000000000000866121399092919063ffffffff16565b61078a565b61078978010000000000000000000000000000000000000000000000006107798773ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1661209b90919063ffffffff16565b856121399092919063ffffffff16565b5b8261223a90919063ffffffff16565b905080506000856080015161082d578c73ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156107ef5760006000fd5b505afa158015610804573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610828919061340b565b6108ae565b8c73ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156108745760006000fd5b505afa158015610889573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad919061340b565b5b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561094b576109466109377f00000000000000000000000000000000000000000000000000000000000000008a6122c363ffffffff16565b8361239290919063ffffffff16565b915081505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109e6576109e16109d27f00000000000000000000000000000000000000000000000000000000000000008a6122c363ffffffff16565b8361239290919063ffffffff16565b915081505b8196505050505050506109fa565050505050505b9695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006000600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff1615151515815260200150509050610b778160a00151611aa863ffffffff16565b6000610b876123b863ffffffff16565b90508067ffffffffffffffff16826000015167ffffffffffffffff16101515610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc906139f0565b60405180910390fd5b60008573ffffffffffffffffffffffffffffffffffffffff1663883bdbfd610c116123d363ffffffff16565b6040518263ffffffff1660e01b8152600401610c2d91906137e8565b60006040518083038186803b158015610c465760006000fd5b505afa158015610c5b573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c849190613432565b509050610cd9610cc98460200151836000815181101515610ca157fe5b6020026020010151610cbe8760000151870361245463ffffffff16565b6124b663ffffffff16565b846080015161252563ffffffff16565b9350835084610ce85783610cf9565b610cf8848461256063ffffffff16565b5b9350505050610d06565050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b158015610d975760006000fd5b505afa158015610dac573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd09190613582565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e36906138f4565b60405180910390fd5b610e6f817f00000000000000000000000000000000000000000000000000000000000000006125f563ffffffff16565b15610ea957610ea4817f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b610f90565b610ed9817f00000000000000000000000000000000000000000000000000000000000000006125f563ffffffff16565b15610f1357610f0e817f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b610f8f565b610f43817f00000000000000000000000000000000000000000000000000000000000000006125f563ffffffff16565b15610f7d57610f78817f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b610f8e565b610f8d6000611aa863ffffffff16565b5b5b5b5b50565b6000600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160149054906101000a900460ff169050610ff3565b919050565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460060b9080600001600f9054906101000a900460020b908060000160129054906101000a900460ff16908060000160139054906101000a900460ff16908060000160149054906101000a900460ff16905086565b600060009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111065760006000fd5b505afa15801561111b573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113f919061355b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a5906138f4565b60405180910390fd5b6111de817f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006112387f0000000000000000000000000000000000000000000000000000000000000000836122c363ffffffff16565b905061123f565b919050565b6000611254612cbb63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112bb5760006000fd5b505afa1580156112d0573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f4919061355b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135a906138f4565b60405180910390fd5b6000600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff161515151581526020015050905061148c8160a00151611aa863ffffffff16565b600061149c6123b863ffffffff16565b90508067ffffffffffffffff16826000015167ffffffffffffffff161015156114fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f190613933565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd6115266123d363ffffffff16565b6040518263ffffffff1660e01b815260040161154291906137e8565b60006040518083038186803b15801561155b5760006000fd5b505afa158015611570573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906115999190613432565b5090506115db83602001518260008151811015156115b357fe5b60200260200101516115d08660000151860361245463ffffffff16565b6124b663ffffffff16565b836040019060020b908160020b815260200150508060008151811015156115fe57fe5b6020026020010151836020019060060b908160060b8152602001505081836000019067ffffffffffffffff16908167ffffffffffffffff168152602001505082600360005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600f6101000a81548162ffffff021916908360020b62ffffff16021790555060608201518160000160126101000a81548160ff021916908360ff16021790555060808201518160000160136101000a81548160ff02191690831515021790555060a08201518160000160146101000a81548160ff021916908315150217905550905050600061179761178b8560400151866080015161252563ffffffff16565b8561256063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff167f4aec2babed558ca204f263d79ac04efaccd05cd4b7bebfa21beeb221330062d38286604001516040516117e5929190613a80565b60405180910390a2809450505050506117fd56505050505b61180b612d4c63ffffffff16565b5b919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061184983836122c363ffffffff16565b9050611850565b92915050565b6118b5600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612d5c63ffffffff16565b600460006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905561192a7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b61197a7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061276763ffffffff16565b5b565b60006119af7f0000000000000000000000000000000000000000000000000000000000000000836122c363ffffffff16565b90506119b6565b919050565b60006119cd8383612dd863ffffffff16565b90506119d4565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b611a5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612d5c63ffffffff16565b5b565b6001600060006101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b801515611aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae190613a2f565b60405180910390fd5b5b50565b6000600060008360020b12611b06578260020b611b0e565b8260020b6000035b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b8111151515611bb1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f540000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b60006000600183161415611bd657700100000000000000000000000000000000611be8565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600060028316141515611c265760806ffff97272373d413259a46990580e213a8202901c905080505b600060048316141515611c4f5760806ffff2e50f5f656932ef12357cf3c7fdcc8202901c905080505b600060088316141515611c785760806fffe5caca7e10e4e61c3624eaa0941cd08202901c905080505b600060108316141515611ca15760806fffcb9843d60f6159c9db58835c9266448202901c905080505b600060208316141515611cca5760806fff973b41fa98c081472e6896dfb254c08202901c905080505b600060408316141515611cf35760806fff2ea16466c96a3843ec78b326b528618202901c905080505b600060808316141515611d1c5760806ffe5dee046a99a2a811c461f1969c30538202901c905080505b60006101008316141515611d465760806ffcbe86c7900a88aedcffc83b479aa3a48202901c905080505b60006102008316141515611d705760806ff987a7253ac413176f2b074cf7815e548202901c905080505b60006104008316141515611d9a5760806ff3392b0822b70005940c7a398e4b70f38202901c905080505b60006108008316141515611dc45760806fe7159475a2c29b7443b29c7fa6e889d98202901c905080505b60006110008316141515611dee5760806fd097f3bdfd2022b8845ad8f792aa58258202901c905080505b60006120008316141515611e185760806fa9f746462d870fdf8a65dc1f90e061e58202901c905080505b60006140008316141515611e425760806f70d869a156d2a1b890bb3df62baf32f78202901c905080505b60006180008316141515611e6c5760806f31be135f97d08fd981231505542fcfa68202901c905080505b6000620100008316141515611e975760806f09aa508b5b7a84e1c677de54f3e99bc98202901c905080505b6000620200008316141515611ec15760806e5d6af8dedb81196699c329225ee6048202901c905080505b6000620400008316141515611eea5760806d2216e584f5fa1ea926041bedfe988202901c905080505b6000620800008316141515611f115760806b048a170391f7dc42444e8fa28202901c905080505b60008460020b1315611f4e57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811515611f4857fe5b04905080505b600064010000000082811515611f6057fe5b0614611f6d576001611f70565b60005b60ff16602082901c019250825050505b919050565b600060008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161115611fc857838580955081965050505b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161115156120175761200e858585612fb063ffffffff16565b91508150612091565b8373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16101561207a5761205c868585612fb063ffffffff16565b9150815061207185878561307863ffffffff16565b90508050612090565b61208b85858561307863ffffffff16565b905080505b5b5b94509492505050565b600060008214806120bb575082828385029250828115156120b857fe5b04145b1515612132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600060006000600019858709858702925082811083820303915050600081141561217c5760008411151561216d5760006000fd5b83820492508292505050612233565b808411151561218b5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506122335650505050505b9392505050565b600082828401915081101515156122bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000600061233b6122da8585612dd863ffffffff16565b600360005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160139054906101000a900460ff1661252563ffffffff16565b9050600081111515612382576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612379906139b1565b60405180910390fd5b8091505061238c56505b92915050565b60006123ad8383670de0b6b3a764000061213963ffffffff16565b905080505b92915050565b60006123cb4261310f909063ffffffff16565b905080505b90565b6060600167ffffffffffffffff811180156123ee5760006000fd5b5060405190808252806020026020018201604052801561241d5781602001602082028036833780820191505090505b5090508050600081600081518110151561243357fe5b602002602001019063ffffffff16908163ffffffff16815260200150505b90565b60006401000000008267ffffffffffffffff161015156124a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124a090613972565b60405180910390fd5b8190506124b1565b919050565b60006000848403905060008363ffffffff168260060b8115156124d557fe5b05905060008260060b128015612503575060008463ffffffff168360060b8115156124fc57fe5b0760060b14155b15612512578080600190039150505b809250505061251e5650505b9392505050565b600061255361254883612538578461253d565b846000035b611aee63ffffffff16565b6131a163ffffffff16565b905061255a565b92915050565b6000601260ff16826060015160ff16141561257d578290506125ef565b6000601260ff16836060015160ff161090506000816125a35760128460600151036125ac565b83606001516012035b9050816125d1576125cc8160ff16600a0a8661209b90919063ffffffff16565b6125e4565b8060ff16600a0a858115156125e257fe5b045b925050506125ef5650505b92915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156126555760006000fd5b505afa15801561266a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061268e919061340b565b73ffffffffffffffffffffffffffffffffffffffff16148061275a57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156127095760006000fd5b505afa15801561271e573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612742919061340b565b73ffffffffffffffffffffffffffffffffffffffff16145b9050612761565b92915050565b61278561277a83836125f563ffffffff16565b611aa863ffffffff16565b600060008373ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156127d05760006000fd5b505afa1580156127e5573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061280991906136e5565b50505050509150915061283a60008373ffffffffffffffffffffffffffffffffffffffff1611611aa863ffffffff16565b60008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd6128666123d363ffffffff16565b6040518263ffffffff1660e01b815260040161288291906137e8565b60006040518083038186803b15801561289b5760006000fd5b505afa1580156128b0573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906128d99190613432565b50905060008473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561293c5760006000fd5b505afa158015612951573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612975919061340b565b73ffffffffffffffffffffffffffffffffffffffff161490506040518060c001604052806129a76123b863ffffffff16565b67ffffffffffffffff1681526020018360008151811015156129c557fe5b602002602001015160060b81526020018460020b815260200182612a68578773ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015612a2a5760006000fd5b505afa158015612a3f573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a63919061340b565b612ae9565b8773ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015612aaf5760006000fd5b505afa158015612ac4573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae8919061340b565b5b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612b2f5760006000fd5b505afa158015612b44573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b68919061379d565b60ff168152602001821515815260200160011515815260200150600360005060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600f6101000a81548162ffffff021916908360020b62ffffff16021790555060608201518160000160126101000a81548160ff021916908360ff16021790555060808201518160000160136101000a81548160ff02191690831515021790555060a08201518160000160146101000a81548160ff021916908315150217905550905050505050505b5050565b600260026000505414151515612d3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c43205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b600160026000508190909055505b565b801515612dd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600060008263ffffffff16111515612e25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e1c906138b5565b60405180910390fd5b6000600267ffffffffffffffff81118015612e405760006000fd5b50604051908082528060200260200182016040528015612e6f5781602001602082028036833780820191505090505b50905082816000815181101515612e8257fe5b602002602001019063ffffffff16908163ffffffff16815260200150506000816001815181101515612eb057fe5b602002602001019063ffffffff16908163ffffffff168152602001505060008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd836040518263ffffffff1660e01b8152600401612f0891906137e8565b60006040518083038186803b158015612f215760006000fd5b505afa158015612f36573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612f5f9190613432565b509050612f9f816000815181101515612f7457fe5b6020026020010151826001815181101515612f8b57fe5b6020026020010151866124b663ffffffff16565b92505050612faa5650505b92915050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115612ff157828480945081955050505b8373ffffffffffffffffffffffffffffffffffffffff16613060606060ff16846fffffffffffffffffffffffffffffffff16901b86860373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff166131fe63ffffffff16565b81151561306957fe5b049050613071565b9392505050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1611156130b957828480945081955050505b613101826fffffffffffffffffffffffffffffffff1685850373ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000006131fe63ffffffff16565b9050613108565b9392505050565b60006801000000000000000082101515613194576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b81905061319c565b919050565b600060006131db6c010000000000000000000000008473ffffffffffffffffffffffffffffffffffffffff166132ff90919063ffffffff16565b90506131f0818261239290919063ffffffff16565b9150506131f956505b919050565b6000600060006000198587098587029250828110838203039150506000811415613241576000841115156132325760006000fd5b838204925082925050506132f8565b80841115156132505760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506132f85650505050505b9392505050565b600061331a83670de0b6b3a76400008461213963ffffffff16565b905080505b9291505056613b8a565b600082601f830112151561333b578081fd5b8151602061335061334b83613b13565b613ae8565b8083825282820191508286018784858702890101111561336e578586fd5b855b8581101561339d57815161338381613b36565b80855250848401935084820191505b600181019050613370565b5050809450505050505b92915050565b60008151905061ffff8116811415156133c65760006000fd5b5b919050565b60008135905063ffffffff8116811415156133e75760006000fd5b5b919050565b60008151905060ff8116811415156134055760006000fd5b5b919050565b60006020828403121561341c578081fd5b815161342781613b36565b809150505b92915050565b6000600060408385031215613445578081fd5b825167ffffffffffffffff8082111561345c578283fd5b818501915085601f8301121515613471578283fd5b8151602061348661348183613b13565b613ae8565b8083825282820191508286018a8485870289010111156134a4578788fd5b8796505b848710156134dc5780518060060b811415156134c2578889fd5b80845250838301925083810190505b6001870196506134a8565b5080975050508087015193505050808211156134f6578283fd5b5061350385828601613329565b9150505b9250929050565b60006020828403121561351f578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515613550578182fd5b809150505b92915050565b60006020828403121561356c578081fd5b815161357781613b36565b809150505b92915050565b600060208284031215613593578081fd5b815161359e81613b36565b809150505b92915050565b6000602082840312156135ba578081fd5b81356135c581613b36565b809150505b92915050565b60006000604083850312156135e3578182fd5b82356135ee81613b36565b80925050602083013561360081613b5f565b809150505b9250929050565b60006000600060006000600060c08789031215613627578182fd5b863561363281613b36565b80965050602087013561364481613b74565b80955050604087013561365681613b74565b80945050606087013561366881613b74565b8093505060808701356fffffffffffffffffffffffffffffffff811681141515613690578283fd5b809250506136a060a088016133cc565b90505b9295509295509295565b60006000604083850312156136c0578182fd5b82356136cb81613b36565b809250506136db602084016133cc565b90505b9250929050565b600060006000600060006000600060e0888a031215613702578485fd5b875161370d81613b36565b80975050602088015161371f81613b74565b8096505061372f604089016133ad565b945061373d606089016133ad565b935061374b608089016133ad565b925061375960a089016133ed565b915060c088015161376981613b5f565b809150505b92959891949750929550565b60006020828403121561378b578081fd5b613794826133cc565b90505b92915050565b6000602082840312156137ae578081fd5b6137b7826133ed565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208083018184528085518083526040860191508387019250845b8181101561382d5763ffffffff8451168352848301925084840193505b600181019050613805565b50508093505050505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508260020b82525b92915050565b600060208252601260208301527f496e7374616e74207469636b206572726f72000000000000000000000000000060408301526060820190505b919050565b600060208252600e60208301527f4e6f7420417574686f72697a656400000000000000000000000000000000000060408301526060820190505b919050565b600060208252600260208301527f544500000000000000000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f626967676572207468616e20333220626974730000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f496e7374616e74207072696365206572726f720000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f54776170706564207072696365206572726f720000000000000000000000000060408301526060820190505b919050565b600060208252600c60208301527f496e76616c696420706f6f6c000000000000000000000000000000000000000060408301526060820190505b919050565b60006020820190508282525b92915050565b60006040820190508382528260020b60208301525b9392505050565b600060c08201905067ffffffffffffffff881682528660060b60208301528560020b604083015260ff85166060830152831515608083015282151560a08301525b979650505050505050565b6000604051905081810181811067ffffffffffffffff82111715613b0857fe5b80604052505b919050565b600067ffffffffffffffff821115613b2757fe5b6020602083020190505b919050565b73ffffffffffffffffffffffffffffffffffffffff811681141515613b5b5760006000fd5b5b50565b80151581141515613b705760006000fd5b5b50565b8060020b81141515613b865760006000fd5b5b50565bfea264697066735822122078042ae21847ad2053ae892880cf45fc87967f9bf44183283deeedad74869d6264736f6c63430007060033";
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
    static createInterface(): PricesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Prices;
}
export {};
