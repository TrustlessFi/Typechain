import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Liquidations, LiquidationsInterface, ConstructorParamsStruct } from "../Liquidations";
declare type LiquidationsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Liquidations__factory extends ContractFactory {
    constructor(...args: LiquidationsConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Liquidations>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Liquidations;
    connect(signer: Signer): Liquidations__factory;
    static readonly bytecode = "0x61014060405260016002600050909055666a94d74f430000600360006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555066b1a2bc2ec50000600360086101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550670e16011f4f058000600360106101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550670e4b4b8af6a70000600360186101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550610708600460006101000a81548163ffffffff021916908363ffffffff160217905550348015620001025760006000fd5b5060405162003d4538038062003d45833981810160405281019062000128919062000597565b5b610e105b816000015182602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b505060018167ffffffffffffffff16620001d0620004dc60201b60201c565b67ffffffffffffffff16811515620001e457fe5b040367ffffffffffffffff1660e08167ffffffffffffffff1660c01b815260080150508067ffffffffffffffff1660c08167ffffffffffffffff1660c01b815260080150505b50806040015173ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806060015173ffffffffffffffffffffffffffffffffffffffff166101208173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505060006040518060a0016040528063bd48ea4260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163c7bd8eee60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163b970112d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020016314f2f04760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163c433c80a60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020015090506000600090505b81506005811015620004d25760016001600050600084846005811015156200045b57fe5b60200201517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b808060010191505062000437565b50505b506200064a565b6000620004f642620004fe60201b62001d6517909060201c565b905080505b90565b6000680100000000000000008210151562000584576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506200058d565b9190505662000649565b600060808284031215620005a9578081fd5b604051608081018181106001600160401b0382111715620005c657fe5b80604052508251620005d8816200062c565b808252506020830151620005ec816200062c565b80602083015250604083015162000603816200062c565b8060408301525060608301516200061a816200062c565b80606083015250809150505b92915050565b6001600160a01b03811681141515620006455760006000fd5b5b50565b5b60805160601c60a05160601c60c05160c01c60e05160c01c6101005160601c6101205160601c61362c620007196000398061079c5280610a8b5280610c2a528061186b52508061096e52806109fe5280610ed1528061132652806113c7528061174e52806117de52806118fa5280611a1f528061255c5280612829525080611c8b5280611dfb525080611d435280611e1c525080611f1c528061226f52508061047a52806104e152806106215280610c6c528061102652806114d85280611e755280612302525061362c6000f3fe60806040523480156100115760006000fd5b50600436106101915760003560e01c806375f12b21116100e4578063b970112d1161008d578063c4e3a63b11610067578063c4e3a63b146103ce578063c7bd8eee146103ec578063d2ca21151461040857610191565b8063b970112d1461037a578063bd48ea4214610396578063c433c80a146103b257610191565b80639624e83e116100be5780639624e83e1461031f5780639672ff281461033d578063b6e6096d1461035b57610191565b806375f12b21146102c55780638b421eba146102e35780638c765e941461030157610191565b80631273c2ea116101465780633237417411610120578063323741741461026f5780633ebe07771461028d578063415f1240146102a957610191565b80631273c2ea1461022b57806314f2f0471461023557806326d895451461025157610191565b806307da68f51161017757806307da68f5146101d35780630c340a24146101dd578063113cf1ab146101fb57610191565b80627de4471461019757806306040618146101b557610191565b60006000fd5b61019f610426565b6040516101ac9190613524565b60405180910390f35b6101bd610440565b6040516101ca9190613524565b60405180910390f35b6101db610458565b005b6101e5610478565b6040516101f29190613234565b60405180910390f35b61021560048036038101906102109190612e46565b61049c565b60405161022291906131f8565b60405180910390f35b6102336104c1565b005b61024f600480360381019061024a919061304d565b610b66565b005b610259610c12565b604051610266919061350c565b60405180910390f35b610277610c28565b604051610284919061325c565b60405180910390f35b6102a760048036038101906102a29190612d8d565b610c4c565b005b6102c360048036038101906102be9190612fc8565b611473565b005b6102cd6119d6565b6040516102da91906131f8565b60405180910390f35b6102eb6119e9565b6040516102f89190613524565b60405180910390f35b610309611a03565b6040516103169190613524565b60405180910390f35b610327611a1d565b604051610334919061320c565b60405180910390f35b610345611a41565b6040516103529190613524565b60405180910390f35b610363611a5b565b604051610371929190613484565b60405180910390f35b610394600480360381019061038f919061304d565b611aa8565b005b6103b060048036038101906103ab919061304d565b611b72565b005b6103cc60048036038101906103c79190613026565b611c06565b005b6103d6611c89565b6040516103e39190613524565b60405180910390f35b6104066004803603810190610401919061304d565b611cad565b005b610410611d41565b60405161041d9190613524565b60405180910390f35b600360109054906101000a900467ffffffffffffffff1681565b6000610450611df763ffffffff16565b905080505b90565b610466611e7063ffffffff16565b610474611ed063ffffffff16565b5b5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6104cf611f1a63ffffffff16565b6104dd61202d63ffffffff16565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b1580156105465760006000fd5b505afa15801561055b573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190612eba565b73ffffffffffffffffffffffffffffffffffffffff1663fa42dcf4600460009054906101000a900463ffffffff166040518263ffffffff1660e01b81526004016105c9919061350c565b60206040518083038186803b1580156105e25760006000fd5b505afa1580156105f7573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b9190612fe4565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156106865760006000fd5b505afa15801561069b573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bf9190612e93565b73ffffffffffffffffffffffffffffffffffffffff1663eb6843ce60006040518263ffffffff1660e01b81526004016106f89190613284565b6101a060405180830381600087803b1580156107145760006000fd5b505af1158015610729573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074d9190612ee1565b905060008160400151111515610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f906132cb565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166375172a8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108015760006000fd5b505afa158015610816573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083a9190612fe4565b9050600081111515610881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087890613445565b60405180910390fd5b600060008360200151141561089e57826040015190508050610930565b60006108d985600360109054906101000a900467ffffffffffffffff1667ffffffffffffffff1686602001516120b89092919063ffffffff16565b9050808460400151111515610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091a90613349565b60405180910390fd5b8084604001510391508150505b61094382826121b990919063ffffffff16565b9050805061095e8184604001516121d790919063ffffffff16565b83604001909081815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf46000856040518363ffffffff1660e01b81526004016109c89291906132a0565b600060405180830381600087803b1580156109e35760006000fd5b505af11580156109f8573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a7ba1f7826040518263ffffffff1660e01b8152600401610a5591906134c1565b600060405180830381600087803b158015610a705760006000fd5b505af1158015610a85573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c59fb1ab826040518263ffffffff1660e01b8152600401610ae291906134c1565b600060405180830381600087803b158015610afd5760006000fd5b505af1158015610b12573d600060003e3d6000fd5b505050507fb397b210edc0d78ebf7fbbac5ccc5e284eb5ec9bbc6cbae2a2bdda56439072828482604051610b479291906134d3565b60405180910390a1505050505b5b610b6361226063ffffffff16565b5b565b610b74611e7063ffffffff16565b8067ffffffffffffffff16600360109054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610bad5760006000fd5b80600360186101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507ff1fccf01004863a033b4d86add53fcb8fa13706aff42f590ea040916d23969a281604051610c059190613524565b60405180910390a15b5b50565b600460009054906101000a900463ffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b610c5a611f1a63ffffffff16565b610c686122f263ffffffff16565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b158015610cd15760006000fd5b505afa158015610ce6573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a9190612eba565b73ffffffffffffffffffffffffffffffffffffffff1663fa42dcf4600460009054906101000a900463ffffffff166040518263ffffffff1660e01b8152600401610d54919061350c565b60206040518083038186803b158015610d6d5760006000fd5b505afa158015610d82573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da69190612fe4565b9050600060056000506040518060400160405290816000820160009054906101000a900477ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1681526020016000820160189054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001505090506000610e63611df763ffffffff16565b90506000600360009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050670de0b6b3a764000081108015610eb857508167ffffffffffffffff16836020015167ffffffffffffffff16105b15610fbf576040518060400160405280610f8a610f7d847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630dca59c16040518163ffffffff1660e01b815260040160206040518083038186803b158015610f365760006000fd5b505afa158015610f4b573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6f9190612fe4565b61241f90919063ffffffff16565b612445909063ffffffff16565b77ffffffffffffffffffffffffffffffffffffffffffffffff1681526020018367ffffffffffffffff16815260200150925082505b6000836000015177ffffffffffffffffffffffffffffffffffffffffffffffff16111515611022576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101990613406565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b15801561108b5760006000fd5b505afa1580156110a0573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c49190612e93565b905060006112446040518060a001604052808473ffffffffffffffffffffffffffffffffffffffff1663eb6843ce60006040518263ffffffff1660e01b81526004016111109190613284565b6101a060405180830381600087803b15801561112c5760006000fd5b505af1158015611141573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111659190612ee1565b815260200160008152602001876000015177ffffffffffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16635658c0126040518163ffffffff1660e01b815260040160206040518083038186803b1580156111dc5760006000fd5b505afa1580156111f1573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112159190612fe4565b81526020018473ffffffffffffffffffffffffffffffffffffffff1681526020015088886124e763ffffffff16565b905061125b8160400151612445909063ffffffff16565b856000019077ffffffffffffffffffffffffffffffffffffffffffffffff16908177ffffffffffffffffffffffffffffffffffffffffffffffff168152602001505084600560005060008201518160000160006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff021916908377ffffffffffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160186101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf4600083600001516040518363ffffffff1660e01b81526004016113849291906132a0565b600060405180830381600087803b15801561139f5760006000fd5b505af11580156113b4573d600060003e3d6000fd5b50505050600081602001511115611459577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663625021693383602001516040518363ffffffff1660e01b815260040161142492919061319a565b600060405180830381600087803b15801561143f5760006000fd5b505af1158015611454573d600060003e3d6000fd5b505050505b5050505050505b5b61146f61226063ffffffff16565b5b50565b611481611f1a63ffffffff16565b61148f61202d63ffffffff16565b6000811115156114d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cb90613388565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b15801561153d5760006000fd5b505afa158015611552573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115769190612e93565b73ffffffffffffffffffffffffffffffffffffffff1663eb6843ce60006040518263ffffffff1660e01b81526004016115af9190613284565b6101a060405180830381600087803b1580156115cb5760006000fd5b505af11580156115e0573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116049190612ee1565b90506000816040015111151561164f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611646906132cb565b60405180910390fd5b60008160200151111515611698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168f906133c7565b60405180910390fd5b806040015182111515156116e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d89061330a565b60405180910390fd5b600061170082602001518360400151856120b89092919063ffffffff16565b90506117198183602001516121d790919063ffffffff16565b826020019090818152602001505061173e8383604001516121d790919063ffffffff16565b82604001909081815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf46000846040518363ffffffff1660e01b81526004016117a89291906132a0565b600060405180830381600087803b1580156117c35760006000fd5b505af11580156117d8573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a7ba1f7846040518263ffffffff1660e01b815260040161183591906134c1565b600060405180830381600087803b1580156118505760006000fd5b505af1158015611865573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166379cc679033856040518363ffffffff1660e01b81526004016118c49291906131c9565b600060405180830381600087803b1580156118df5760006000fd5b505af11580156118f4573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636250216933836040518363ffffffff1660e01b815260040161195392919061319a565b600060405180830381600087803b15801561196e5760006000fd5b505af1158015611983573d600060003e3d6000fd5b505050507fa7c1efbe8c264edbfd86d7edf1a6b82896995680f966de445fc3b6e0531bf41a83826040516119b89291906134d3565b60405180910390a150505b5b6119d261226063ffffffff16565b5b50565b600060009054906101000a900460ff1681565b600360009054906101000a900467ffffffffffffffff1681565b600360189054906101000a900467ffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600360089054906101000a900467ffffffffffffffff1681565b60056000508060000160009054906101000a900477ffffffffffffffffffffffffffffffffffffffffffffffff16908060000160189054906101000a900467ffffffffffffffff16905082565b611ab6611e7063ffffffff16565b8067ffffffffffffffff16670de0b6b3a764000011158015611b015750600360189054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff16105b1515611b0d5760006000fd5b80600360106101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507ffb6278b64d20ff8d4dff7dc61ef28a96a02863b62d59560992b21c143827b6ed81604051611b659190613524565b60405180910390a15b5b50565b611b80611e7063ffffffff16565b670de0b6b3a76400008167ffffffffffffffff16101515611ba15760006000fd5b80600360006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fd01f35ff12ff3673364e94e574afbf379a1f14ef5846096eeef796ca37343efb81604051611bf99190613524565b60405180910390a15b5b50565b611c14611e7063ffffffff16565b61012c8163ffffffff1610151515611c2c5760006000fd5b80600460006101000a81548163ffffffff021916908363ffffffff1602179055507f961f58524be0d9222d4e0bf61ebaef889aac159bf9071158da8eff8f5cab1a6181604051611c7c919061350c565b60405180910390a15b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b611cbb611e7063ffffffff16565b670de0b6b3a76400008167ffffffffffffffff16101515611cdc5760006000fd5b80600360086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f41a4b38243b39797140fa4225d9e3da5229e59ebc192515cd52ba275b676139581604051611d349190613524565b60405180910390a15b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006801000000000000000082101515611dea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611df2565b919050565b60007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16611e5361292863ffffffff16565b67ffffffffffffffff16811515611e6657fe5b0403905080505b90565b611ecd7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461294363ffffffff16565b5b565b6001600060006101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611f835760006000fd5b505af1158015611f98573d600060003e3d6000fd5b5050505060026002600050541415151561201d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c50205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b600060009054906101000a900460ff161515156120b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f436f6e74726163742069732073746f707065640000000000000000000000000081526020015060200191505060405180910390fd5b5b565b60006000600060001985870985870292508281108382030391505060008114156120fb576000841115156120ec5760006000fd5b838204925082925050506121b2565b808411151561210a5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506121b25650505050505b9392505050565b60008183106121c857816121ca565b825b90506121d1565b92915050565b60008282840391508111151515612259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156122d65760006000fd5b505af11580156122eb573d600060003e3d6000fd5b505050505b565b61230061202d63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156123675760006000fd5b505afa15801561237c573d600060003e3d6000fd5b505050506040513d60208110156123935760006000fd5b810190808051906020019092919050505015151561241c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f50726f746f636f6c2073687574646f776e00000000000000000000000000000081526020015060200191505060405180910390fd5b5b565b600061243a8383670de0b6b3a76400006120b863ffffffff16565b905080505b92915050565b60007801000000000000000000000000000000000000000000000000821015156124da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203139322062697473000000000000000000000000000081526020015060200191505060405180910390fd5b8190506124e2565b919050565b6124ef612c0d565b6000835190506000600060006000612505612c5b565b60006000600090505b8781101561290a5760008c6040015114156125285761290a565b8a8181518110151561253657fe5b60200260200101519150815060008267ffffffffffffffff16141561255a576128fd565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636594da9f836040518263ffffffff1660e01b81526004016125b39190613524565b60406040518083038186803b1580156125cc5760006000fd5b505afa1580156125e1573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126059190613000565b8097508198505050600087141561261b576128fd565b612632878d606001516129bf90919063ffffffff16565b612645878c6129bf90919063ffffffff16565b101515612651576128fd565b8b6080015173ffffffffffffffffffffffffffffffffffffffff1663eb6843ce836040518263ffffffff1660e01b815260040161268e9190613524565b6101a060405180830381600087803b1580156126aa5760006000fd5b505af11580156126bf573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e39190612ee1565b92508250612747836040015184602001518c8f60400151600360189054906101000a900467ffffffffffffffff1667ffffffffffffffff16600360089054906101000a900467ffffffffffffffff1667ffffffffffffffff16612a5d63ffffffff16565b8e60400181909081526020015081965082975050505061277c83604001518d6000015160400151612b5e90919063ffffffff16565b8c6000015160400190908181526020015050600083604001909081815260200150506127b9848d6000015160200151612b5e90919063ffffffff16565b8c60000151602001909081815260200150506127f46127e18686612b5e90919063ffffffff16565b84602001516121d790919063ffffffff16565b8360200190908181526020015050612819858d60200151612b5e90919063ffffffff16565b8c602001909081815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf483856040518363ffffffff1660e01b8152600401612882929190613540565b600060405180830381600087803b15801561289d5760006000fd5b505af11580156128b2573d600060003e3d6000fd5b505050508167ffffffffffffffff167feedd1116ee4b172f8bd428c71ffa4da20e0bffc9e5b05e78bbacd0b4337c71bf88888d6040516128f4939291906134ec565b60405180910390a25b808060010191505061250e565b508a97505050505050505061292156505050505050505b9392505050565b600061293b42611d65909063ffffffff16565b905080505b90565b8015156129bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600060008214806129df575082828385029250828115156129dc57fe5b04145b1515612a56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000600060006000612a78858b61241f90919063ffffffff16565b9050612a8d8882612be790919063ffffffff16565b9350835088841115612ab6578893508350612ab1888561241f90919063ffffffff16565b905080505b612aef848a03612ae188612ad38c8f612be790919063ffffffff16565b61241f90919063ffffffff16565b6121b990919063ffffffff16565b925082506000612b08898561241f90919063ffffffff16565b90506000818c11612b1b578b8203612b1e565b60005b90506000612b358285612b5e90919063ffffffff16565b9050898111612b4657808a03612b49565b60005b94508450505050505b96509650969350505050565b60008282840191508110151515612be0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000612c0283670de0b6b3a7640000846120b863ffffffff16565b905080505b92915050565b6040518060a00160405280612c20612c5b565b8152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020015090565b604051806101a001604052806000815260200160008152602001600081526020016000815260200160008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600060020b8152602001600015158152602001600067ffffffffffffffff168152602001600063ffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020015090566135f5565b600081519050612d2281613596565b5b919050565b60008151905080151581141515612d3f5760006000fd5b5b919050565b6000815190508060020b81141515612d5d5760006000fd5b5b919050565b600081519050612d72816135bf565b5b919050565b600081519050612d87816135d8565b5b919050565b60006020808385031215612d9f578182fd5b823567ffffffffffffffff80821115612db6578384fd5b818501915085601f8301121515612dcb578384fd5b813581811115612dd757fe5b8381029150612de784830161356b565b8082825285820191508585018987868801011115612e03578788fd5b8795505b83861015612e355780359450612e1c856135d8565b848352868301925086810190505b600186019550612e07565b508096505050505050505b92915050565b600060208284031215612e57578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515612e88578182fd5b809150505b92915050565b600060208284031215612ea4578081fd5b8151612eaf81613596565b809150505b92915050565b600060208284031215612ecb578081fd5b8151612ed681613596565b809150505b92915050565b60006101a0808385031215612ef4578182fd5b612efd8161356b565b90508251815260208301516020820152604083015160408201526060830151606082015260808301516080820152612f3760a08401612d78565b60a0820152612f4860c08401612d78565b60c0820152612f5960e08401612d45565b60e0820152610100612f6c818501612d28565b8183015250610120612f7f818501612d78565b8183015250610140612f92818501612d63565b8183015250610160612fa5818501612d13565b8183015250610180612fb8818501612d78565b8183015250809150505b92915050565b600060208284031215612fd9578081fd5b813590505b92915050565b600060208284031215612ff5578081fd5b815190505b92915050565b6000600060408385031215613013578081fd5b82519150602083015190505b9250929050565b600060208284031215613037578081fd5b8135613042816135bf565b809150505b92915050565b60006020828403121561305e578081fd5b8135613069816135d8565b809150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811682525b5050565b80151582525b5050565b8060020b82525b5050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a08101516130e560a0840182613188565b5060c08101516130f860c0840182613188565b5060e081015161310b60e084018261309c565b506101008082015161311f82850182613092565b50506101208082015161313482850182613188565b5050610140808201516131498285018261317a565b50506101608082015161315e82850182613074565b50506101808082015161317382850182613188565b50505b5050565b63ffffffff811682525b5050565b67ffffffffffffffff811682525b5050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b60006101c08201905067ffffffffffffffff841682526132c360208301846130a7565b5b9392505050565b600060208252600760208301527f4e6f20646562740000000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601160208301527f496e73756666696369656e74206465627400000000000000000000000000000060408301526060820190505b919050565b600060208252601160208301527f456e6f75676820636f6c6c61746572616c00000000000000000000000000000060408301526060820190505b919050565b600060208252600460208301527f4e6f6f700000000000000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f4e6f20636f6c6c61746572616c0000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601460208301527f4e6f20726577617264732072656d61696e696e6700000000000000000000000060408301526060820190505b919050565b600060208252600b60208301527f4e6f20726573657276657300000000000000000000000000000000000000000060408301526060820190505b919050565b600060408201905077ffffffffffffffffffffffffffffffffffffffffffffffff8416825267ffffffffffffffff831660208301525b9392505050565b60006020820190508282525b92915050565b60006040820190508382528260208301525b9392505050565b60006060820190508482528360208301528260408301525b949350505050565b600060208201905063ffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b60006101c08201905067ffffffffffffffff8416825261356360208301846130a7565b5b9392505050565b6000604051905081810181811067ffffffffffffffff8211171561358b57fe5b80604052505b919050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156135bb5760006000fd5b5b50565b63ffffffff8116811415156135d45760006000fd5b5b50565b67ffffffffffffffff8116811415156135f15760006000fd5b5b50565bfea2646970667358221220b3ecda170b181ce8e2cbd83a7d5654d8aa5ec5e5d7df0fc07022ca319f07fe6264736f6c63430007060033";
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
    static createInterface(): LiquidationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Liquidations;
}
export {};
