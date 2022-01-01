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
    static readonly bytecode = "0x610140604052600160026000509090553480156200001d5760006000fd5b506040516200460238038062004602833981810160405281019062000043919062000231565b5b80600001515b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50806020015173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806040015173ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806060015173ffffffffffffffffffffffffffffffffffffffff166101208173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806080015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060a0015173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50620002ef56620002ee565b6000815190506001600160a01b038116811415156200022b5760006000fd5b5b919050565b600060c0828403121562000243578081fd5b60405160c081018181106001600160401b03821117156200027257634e487b7160e01b83526041600452602483fd5b806040525062000282836200020c565b815262000292602084016200020c565b6020820152620002a5604084016200020c565b6040820152620002b8606084016200020c565b6060820152620002cb608084016200020c565b6080820152620002de60a084016200020c565b60a0820152809150505b92915050565b5b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c61421e620003e460003960008181610a0601528181610e7b01528181610eb00152818161199901526119e901526000818161094d01528181610a2a01528181610f4f0152610f840152600081816108b201528181610d4401528181610ee501528181610f1a01526111ea0152600081816109a70152818161121a0152818161124301526119c801526000818161090c0152818161197801528181611a1d0152611a750152600081816104d001528181610d68015281816110d70152818161128c0152611a9c015261421e6000f3fe60806040523480156100115760006000fd5b50600436106101875760003560e01c806375f12b21116100d9578063d5f394881161008d578063fa42dcf411610067578063fa42dcf414610430578063fcebd71c14610460578063ff0eccf61461049057610187565b8063d5f39488146103d8578063d97e6400146103f6578063e1c7392a1461042657610187565b80638396cf69116100be5780638396cf691461035a5780638d02a08a14610378578063ce403c13146103a857610187565b806375f12b21146103205780637c5b90111461033e57610187565b806336fc02f41161013b578063407431f711610115578063407431f71461029f578063532cec7c146102bb5780636d048d53146102eb57610187565b806336fc02f4146102335780633c63a9cd146102515780633fc8cef31461028157610187565b8063113cf1ab1161016c578063113cf1ab146101b55780631fab230e146101e5578063323741741461021557610187565b806307da68f51461018d5780630c340a241461019757610187565b60006000fd5b6101956104ae565b005b61019f6104ce565b6040516101ac91906138a1565b60405180910390f35b6101cf60048036038101906101ca919061355f565b6104f2565b6040516101dc919061388d565b60405180910390f35b6101ff60048036038101906101fa919061365d565b610517565b60405161020c9190613b7c565b60405180910390f35b61021d610a04565b60405161022a9190613811565b60405180910390f35b61023b610a28565b6040516102489190613811565b60405180910390f35b61026b60048036038101906102669190613621565b610a4c565b6040516102789190613b7c565b60405180910390f35b610289610d42565b6040516102969190613811565b60405180910390f35b6102b960048036038101906102b491906135fa565b610d66565b005b6102d560048036038101906102d091906135fa565b610fca565b6040516102e2919061388d565b60405180910390f35b610305600480360381019061030091906135fa565b61102e565b60405161031796959493929190613baa565b60405180910390f35b6103286110c2565b604051610335919061388d565b60405180910390f35b610358600480360381019061035391906135fa565b6110d5565b005b610362611218565b60405161036f91906138c9565b60405180910390f35b610392600480360381019061038d91906137cb565b61123c565b60405161039f9190613b7c565b60405180910390f35b6103c260048036038101906103bd91906135fa565b61127a565b6040516103cf9190613b7c565b60405180910390f35b6103e06118aa565b6040516103ed9190613811565b60405180910390f35b610410600480360381019061040b91906136fe565b6118d0565b60405161041d9190613b7c565b60405180910390f35b61042e6118ef565b005b61044a600480360381019061044591906137cb565b611a16565b6040516104579190613b7c565b60405180910390f35b61047a600480360381019061047591906136fe565b611a54565b60405161048791906138f1565b60405180910390f35b610498611a73565b6040516104a591906138c9565b60405180910390f35b6104bc611a9763ffffffff16565b6104ca611af763ffffffff16565b5b5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60006000600360005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff16151515158152602001505090506106428160a00151611b4163ffffffff16565b600061065388611b8763ffffffff16565b9050600060006106878361066c8b611b8763ffffffff16565b61067b8b611b8763ffffffff16565b8a6120aa63ffffffff16565b915091506000846080015161069c578161069e565b825b9050610799856080015161071d576107186106ee8673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff166121c090919063ffffffff16565b7801000000000000000000000000000000000000000000000000866121db9092919063ffffffff16565b61078a565b61078978010000000000000000000000000000000000000000000000006107798773ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff166121c090919063ffffffff16565b856121db9092919063ffffffff16565b5b826122ff90919063ffffffff16565b905080506000856080015161082d578c73ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156107ef5760006000fd5b505afa158015610804573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610828919061345b565b6108ae565b8c73ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156108745760006000fd5b505afa158015610889573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad919061345b565b5b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561094b576109466109377f00000000000000000000000000000000000000000000000000000000000000008a61231a63ffffffff16565b836123e990919063ffffffff16565b915081505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109e6576109e16109d27f00000000000000000000000000000000000000000000000000000000000000008a61231a63ffffffff16565b836123e990919063ffffffff16565b915081505b8196505050505050506109fa565050505050505b9695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006000600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff1615151515815260200150509050610b778160a00151611b4163ffffffff16565b6000610b8761240f63ffffffff16565b90508067ffffffffffffffff16826000015167ffffffffffffffff16101515610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc90613abf565b60405180910390fd5b60008573ffffffffffffffffffffffffffffffffffffffff1663883bdbfd610c1161242a63ffffffff16565b6040518263ffffffff1660e01b8152600401610c2d9190613839565b60006040518083038186803b158015610c465760006000fd5b505afa158015610c5b573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c849190613482565b509050610d0f610cff8460200151836000815181101515610cce577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610cf4876000015187610ce99190613f7d565b6124ff63ffffffff16565b61256163ffffffff16565b84608001516125d963ffffffff16565b9350835084610d1e5783610d2f565b610d2e848461261a63ffffffff16565b5b9350505050610d3c565050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b158015610dcd5760006000fd5b505afa158015610de2573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0691906135d3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6c90613984565b60405180910390fd5b610ea5817f00000000000000000000000000000000000000000000000000000000000000006126cd63ffffffff16565b15610edf57610eda817f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b610fc6565b610f0f817f00000000000000000000000000000000000000000000000000000000000000006126cd63ffffffff16565b15610f4957610f44817f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b610fc5565b610f79817f00000000000000000000000000000000000000000000000000000000000000006126cd63ffffffff16565b15610fb357610fae817f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b610fc4565b610fc36000611b4163ffffffff16565b5b5b5b5b50565b6000600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160149054906101000a900460ff169050611029565b919050565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460060b9080600001600f9054906101000a900460020b908060000160129054906101000a900460ff16908060000160139054906101000a900460ff16908060000160149054906101000a900460ff16905086565b600060009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113c5760006000fd5b505afa158015611151573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117591906135ac565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111db90613984565b60405180910390fd5b611214817f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061126e7f00000000000000000000000000000000000000000000000000000000000000008361231a63ffffffff16565b9050611275565b919050565b600061128a612dc063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112f15760006000fd5b505afa158015611306573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132a91906135ac565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139090613984565b60405180910390fd5b6000600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460060b60060b60060b815260200160008201600f9054906101000a900460020b60020b60020b81526020016000820160129054906101000a900460ff1660ff1660ff1681526020016000820160139054906101000a900460ff161515151581526020016000820160149054906101000a900460ff16151515158152602001505090506114c28160a00151611b4163ffffffff16565b60006114d261240f63ffffffff16565b90508067ffffffffffffffff16826000015167ffffffffffffffff16101515611530576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611527906139c3565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd61155c61242a63ffffffff16565b6040518263ffffffff1660e01b81526004016115789190613839565b60006040518083038186803b1580156115915760006000fd5b505afa1580156115a6573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906115cf9190613482565b5090506116478360200151826000815181101515611616577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161163c8660000151866116319190613f7d565b6124ff63ffffffff16565b61256163ffffffff16565b836040019060020b908160020b81526020015050806000815181101515611697577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836020019060060b908160060b8152602001505081836000019067ffffffffffffffff16908167ffffffffffffffff168152602001505082600360005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600f6101000a81548162ffffff021916908360020b62ffffff16021790555060608201518160000160126101000a81548160ff021916908360ff16021790555060808201518160000160136101000a81548160ff02191690831515021790555060a08201518160000160146101000a81548160ff0219169083151502179055509050506000611830611824856040015186608001516125d963ffffffff16565b8561261a63ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff167f4aec2babed558ca204f263d79ac04efaccd05cd4b7bebfa21beeb221330062d382866040015160405161187e929190613b8e565b60405180910390a28094505050505061189656505050505b6118a4612e1b63ffffffff16565b5b919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006118e2838361231a63ffffffff16565b90506118e9565b92915050565b61194e600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612e2b63ffffffff16565b600460006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556119c37f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b611a137f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061283f63ffffffff16565b5b565b6000611a487f00000000000000000000000000000000000000000000000000000000000000008361231a63ffffffff16565b9050611a4f565b919050565b6000611a668383612e7163ffffffff16565b9050611a6d565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b611af47f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612e2b63ffffffff16565b5b565b6001600060006101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b801515611b83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b7a90613b3d565b60405180910390fd5b5b50565b6000600060008360020b12611b9f578260020b611bad565b8260020b611bac906140c2565b5b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff27618611bd99061407f565b62ffffff168111151515611c22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1990613a02565b60405180910390fd5b60006000600183161415611c4757700100000000000000000000000000000000611c59565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600060028316141515611ca05760806ffff97272373d413259a46990580e213a82611c999190613e8c565b901c905080505b600060048316141515611cd25760806ffff2e50f5f656932ef12357cf3c7fdcc82611ccb9190613e8c565b901c905080505b600060088316141515611d045760806fffe5caca7e10e4e61c3624eaa0941cd082611cfd9190613e8c565b901c905080505b600060108316141515611d365760806fffcb9843d60f6159c9db58835c92664482611d2f9190613e8c565b901c905080505b600060208316141515611d685760806fff973b41fa98c081472e6896dfb254c082611d619190613e8c565b901c905080505b600060408316141515611d9a5760806fff2ea16466c96a3843ec78b326b5286182611d939190613e8c565b901c905080505b600060808316141515611dcc5760806ffe5dee046a99a2a811c461f1969c305382611dc59190613e8c565b901c905080505b60006101008316141515611dff5760806ffcbe86c7900a88aedcffc83b479aa3a482611df89190613e8c565b901c905080505b60006102008316141515611e325760806ff987a7253ac413176f2b074cf7815e5482611e2b9190613e8c565b901c905080505b60006104008316141515611e655760806ff3392b0822b70005940c7a398e4b70f382611e5e9190613e8c565b901c905080505b60006108008316141515611e985760806fe7159475a2c29b7443b29c7fa6e889d982611e919190613e8c565b901c905080505b60006110008316141515611ecb5760806fd097f3bdfd2022b8845ad8f792aa582582611ec49190613e8c565b901c905080505b60006120008316141515611efe5760806fa9f746462d870fdf8a65dc1f90e061e582611ef79190613e8c565b901c905080505b60006140008316141515611f315760806f70d869a156d2a1b890bb3df62baf32f782611f2a9190613e8c565b901c905080505b60006180008316141515611f645760806f31be135f97d08fd981231505542fcfa682611f5d9190613e8c565b901c905080505b6000620100008316141515611f985760806f09aa508b5b7a84e1c677de54f3e99bc982611f919190613e8c565b901c905080505b6000620200008316141515611fcb5760806e5d6af8dedb81196699c329225ee60482611fc49190613e8c565b901c905080505b6000620400008316141515611ffd5760806d2216e584f5fa1ea926041bedfe9882611ff69190613e8c565b901c905080505b600062080000831614151561202d5760806b048a170391f7dc42444e8fa2826120269190613e8c565b901c905080505b60008460020b131561206a57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6120659190613d14565b905080505b60006401000000008261207d9190614061565b1461208957600161208c565b60005b60ff16602082901c61209e9190613c77565b9250825050505b919050565b600060008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1611156120ed57838580955081965050505b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1611151561213c5761213385858561312463ffffffff16565b915081506121b6565b8373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16101561219f5761218186858561312463ffffffff16565b915081506121968587856131f563ffffffff16565b905080506121b5565b6121b08585856131f563ffffffff16565b905080505b5b5b94509492505050565b600081836121ce9190613e8c565b90506121d5565b92915050565b600060006000600019858709858702925082811083820303915050600081141561221e5760008411151561220f5760006000fd5b838204925082925050506122f8565b808411151561222d5760006000fd5b60008486880990508281118203915080830392506000856001877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0301169050805080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855050849450505050506122f856505050505b9392505050565b6000818361230d9190613c77565b9050612314565b92915050565b600060006123926123318585612e7163ffffffff16565b600360005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160139054906101000a900460ff166125d963ffffffff16565b90506000811115156123d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123d090613a80565b60405180910390fd5b809150506123e356505b92915050565b60006124048383670de0b6b3a76400006121db63ffffffff16565b905080505b92915050565b600061242242613295909063ffffffff16565b905080505b90565b6060600167ffffffffffffffff81111561246d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561249b5781602001602082028036833780820191505090505b509050805060008160008151811015156124de577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019063ffffffff16908163ffffffff16815260200150505b90565b60006401000000008267ffffffffffffffff16101515612554576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161254b90613a41565b60405180910390fd5b81905061255c565b919050565b6000600084846125719190613ed1565b905060008363ffffffff1690506000818361258c9190613c97565b905060008360060b1280156125b05750600082846125aa919061403b565b60060b14155b156125c45780806125c090613fd8565b9150505b8093505050506125d2565050505b9392505050565b600061260d612602836125ec57846125f7565b846125f69061407f565b5b611b8763ffffffff16565b6132f163ffffffff16565b9050612614565b92915050565b6000601260ff16826060015160ff161415612637578290506126c7565b6000601260ff16836060015160ff1610905060008161266657601284606001516126619190613faf565b612678565b836060015160126126779190613faf565b5b9050816126a35761269e81600a61268f9190613da1565b866121c090919063ffffffff16565b6126bc565b80600a6126b09190613da1565b856126bb9190613d14565b5b925050506126c75650505b92915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561272d5760006000fd5b505afa158015612742573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612766919061345b565b73ffffffffffffffffffffffffffffffffffffffff16148061283257508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156127e15760006000fd5b505afa1580156127f6573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061281a919061345b565b73ffffffffffffffffffffffffffffffffffffffff16145b9050612839565b92915050565b61285d61285283836126cd63ffffffff16565b611b4163ffffffff16565b600060008373ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156128a85760006000fd5b505afa1580156128bd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e19190613736565b50505050509150915061291260008373ffffffffffffffffffffffffffffffffffffffff1611611b4163ffffffff16565b60008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd61293e61242a63ffffffff16565b6040518263ffffffff1660e01b815260040161295a9190613839565b60006040518083038186803b1580156129735760006000fd5b505afa158015612988573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906129b19190613482565b50905060008473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015612a145760006000fd5b505afa158015612a29573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4d919061345b565b73ffffffffffffffffffffffffffffffffffffffff161490506040518060c00160405280612a7f61240f63ffffffff16565b67ffffffffffffffff168152602001836000815181101515612aca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160060b81526020018460020b815260200182612b6d578773ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015612b2f5760006000fd5b505afa158015612b44573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b68919061345b565b612bee565b8773ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015612bb45760006000fd5b505afa158015612bc9573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bed919061345b565b5b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612c345760006000fd5b505afa158015612c49573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c6d91906137ee565b60ff168152602001821515815260200160011515815260200150600360005060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600f6101000a81548162ffffff021916908360020b62ffffff16021790555060608201518160000160126101000a81548160ff021916908360ff16021790555060808201518160000160136101000a81548160ff02191690831515021790555060a08201518160000160146101000a81548160ff021916908315150217905550905050505050505b5050565b600260026000505414151515612e0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e0290613906565b60405180910390fd5b600260026000508190909055505b565b600160026000508190909055505b565b801515612e6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e6490613984565b60405180910390fd5b5b50565b600060008263ffffffff16111515612ebe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612eb590613945565b60405180910390fd5b6000600267ffffffffffffffff811115612f01577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612f2f5781602001602082028036833780820191505090505b50905082816000815181101515612f6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019063ffffffff16908163ffffffff16815260200150506000816001815181101515612fca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019063ffffffff16908163ffffffff168152602001505060008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd836040518263ffffffff1660e01b81526004016130229190613839565b60006040518083038186803b15801561303b5760006000fd5b505afa158015613050573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906130799190613482565b5090506131138160008151811015156130bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518260018151811015156130ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518661256163ffffffff16565b9250505061311e5650505b92915050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111561316557828480945081955050505b8373ffffffffffffffffffffffffffffffffffffffff166131dd606060ff16846fffffffffffffffffffffffffffffffff16901b86866131a59190613f3f565b73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff166121db63ffffffff16565b6131e79190613d14565b90506131ee565b9392505050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111561323657828480945081955050505b613287826fffffffffffffffffffffffffffffffff1685856132589190613f3f565b73ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000006121db63ffffffff16565b905061328e565b9392505050565b600068010000000000000000821015156132e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132db90613afe565b60405180910390fd5b8190506132ec565b919050565b6000600061332b6c010000000000000000000000008473ffffffffffffffffffffffffffffffffffffffff1661334e90919063ffffffff16565b905061334081826123e990919063ffffffff16565b91505061334956505b919050565b600061336983670de0b6b3a7640000846121db63ffffffff16565b905080505b92915050566141e7565b600082601f830112151561338a578081fd5b8151602061339f61339a83613c4d565b613bf6565b80838252828201915082860187848660051b89010111156133be578586fd5b855b858110156133ed5781516133d381614193565b80855250848401935084820191505b6001810190506133c0565b5050809450505050505b92915050565b60008151905061ffff8116811415156134165760006000fd5b5b919050565b60008135905063ffffffff8116811415156134375760006000fd5b5b919050565b60008151905060ff8116811415156134555760006000fd5b5b919050565b60006020828403121561346c578081fd5b815161347781614193565b809150505b92915050565b6000600060408385031215613495578081fd5b825167ffffffffffffffff808211156134ac578283fd5b818501915085601f83011215156134c1578283fd5b815160206134d66134d183613c4d565b613bf6565b8083825282820191508286018a848660051b89010111156134f5578788fd5b8796505b8487101561352d5780518060060b81141515613513578889fd5b80845250838301925083810190505b6001870196506134f9565b508097505050808701519350505080821115613547578283fd5b5061355485828601613378565b9150505b9250929050565b600060208284031215613570578081fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811415156135a1578182fd5b809150505b92915050565b6000602082840312156135bd578081fd5b81516135c881614193565b809150505b92915050565b6000602082840312156135e4578081fd5b81516135ef81614193565b809150505b92915050565b60006020828403121561360b578081fd5b813561361681614193565b809150505b92915050565b6000600060408385031215613634578182fd5b823561363f81614193565b809250506020830135613651816141bc565b809150505b9250929050565b60006000600060006000600060c08789031215613678578182fd5b863561368381614193565b809650506020870135613695816141d1565b8095505060408701356136a7816141d1565b8094505060608701356136b9816141d1565b8093505060808701356fffffffffffffffffffffffffffffffff8116811415156136e1578283fd5b809250506136f160a0880161341c565b90505b9295509295509295565b6000600060408385031215613711578182fd5b823561371c81614193565b8092505061372c6020840161341c565b90505b9250929050565b600060006000600060006000600060e0888a031215613753578485fd5b875161375e81614193565b809750506020880151613770816141d1565b80965050613780604089016133fd565b945061378e606089016133fd565b935061379c608089016133fd565b92506137aa60a0890161343d565b915060c08801516137ba816141bc565b809150505b92959891949750929550565b6000602082840312156137dc578081fd5b6137e58261341c565b90505b92915050565b6000602082840312156137ff578081fd5b6138088261343d565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208083018184528085518083526040860191508387019250845b8181101561387e5763ffffffff8451168352848301925084840193505b600181019050613856565b50508093505050505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508260020b82525b92915050565b60208152600d60208201527f4c43205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601260208201527f496e7374616e74207469636b206572726f720000000000000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600260208201527f5445000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600160208201527f5400000000000000000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601360208201527f626967676572207468616e203332206269747300000000000000000000000000604082015260006060820190505b919050565b60208152601360208201527f496e7374616e74207072696365206572726f7200000000000000000000000000604082015260006060820190505b919050565b60208152601360208201527f54776170706564207072696365206572726f7200000000000000000000000000604082015260006060820190505b919050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152600c60208201527f496e76616c696420706f6f6c0000000000000000000000000000000000000000604082015260006060820190505b919050565b60006020820190508282525b92915050565b60006040820190508382528260020b60208301525b9392505050565b600060c08201905067ffffffffffffffff881682528660060b60208301528560020b604083015260ff85166060830152831515608083015282151560a08301525b979650505050505050565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715613c4257613c41614162565b5b80604052505b919050565b600067ffffffffffffffff821115613c6857613c67614162565b5b60208260051b0190505b919050565b60008219821115613c8b57613c8a614100565b5b82820190505b92915050565b60008160060b8360060b801515613cb157613cb0614131565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81147fffffffffffffffffffffffffffffffffffffffffffffffffff8000000000000083141615613d0657613d05614100565b5b808205925050505b92915050565b6000821515613d2657613d25614131565b5b82820490505b92915050565b6000600060018092508391505b80851115613d9857817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613d7a57613d79614100565b5b80851615613d885781830292505b818202915084811c94505b613d3f565b505b9250929050565b6000613db060ff841683613db9565b90505b92915050565b6000821515613dcb5760019050613e86565b811515613ddb5760009050613e86565b8160018114613df15760028114613dff57613e1d565b6001915050613e8656613e1d565b60ff841115613e1157613e10614100565b5b6001841b915050613e86565b5060208310610133831016604e8410600b8410161715613e415782820a9050613e86565b613e4b8383613d32565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613e7e57613e7d614100565b5b808202925050505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613ec557613ec4614100565b5b82820290505b92915050565b60008160060b8360060b828112817fffffffffffffffffffffffffffffffffffffffffffffffffff8000000000000001831281151615613f1457613f13614100565b5b81667fffffffffffff018313811615613f3057613f2f614100565b5b50808203925050505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808316818516915081811015613f6f57613f6e614100565b5b818103925050505b92915050565b600067ffffffffffffffff808316818516915081811015613fa157613fa0614100565b5b818103925050505b92915050565b600060ff821660ff841680821015613fca57613fc9614100565b5b808203925050505b92915050565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000081141561400f5761400e614100565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019150505b919050565b60008260060b80151561405157614050614131565b5b808360060b079150505b92915050565b600082151561407357614072614131565b5b82820690505b92915050565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008114156140b6576140b5614100565b5b8082039150505b919050565b60007f80000000000000000000000000000000000000000000000000000000000000008214156140f5576140f4614100565b5b81810390505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff8116811415156141b85760006000fd5b505b565b801515811415156141cd5760006000fd5b505b565b8060020b811415156141e35760006000fd5b505b565bfea2646970667358221220cfba45306e0ca266da018da1901767f3b1a3c8b9bfe4419800b1c2a4e390e48364736f6c63430008040033";
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
