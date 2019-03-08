import EmbarkJS from '../embarkjs';
let ZAMyLib2JSONConfig = {"contract_name":{"className":"ZAMyLib2","args":[],"code":"60a861002f600b82828239805160001a6073146000811461001f57610021565bfe5b5030600052607381538281f300730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb10029","runtimeBytecode":"730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb10029","realRuntimeBytecode":"730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820","linkReferences":{},"swarmHash":"283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb1","gasEstimates":{"creation":{"codeDepositCost":"33600","executionCost":"134","totalCost":"33734"},"external":{"add(uint256,uint256)":"180"}},"functionHashes":{"add(uint256,uint256)":"771602f7"},"abiDefinition":[{"constant":true,"inputs":[{"name":"_a","type":"uint256"},{"name":"_b","type":"uint256"}],"name":"add","outputs":[{"name":"_c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x771602f7"}],"filename":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/app/contracts/zlib2.sol","originalFilename":"app/contracts/zlib2.sol","path":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/app/contracts/zlib2.sol","gas":"auto","type":"file","deploy":true,"_gasLimit":6000000,"error":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3","realArgs":[],"address":"0xED2eEe6F7ede991fA104fB235694F0fD3ad51F59","deployedAddress":"0xED2eEe6F7ede991fA104fB235694F0fD3ad51F59"},"address":"0xED2eEe6F7ede991fA104fB235694F0fD3ad51F59","code":"60a861002f600b82828239805160001a6073146000811461001f57610021565bfe5b5030600052607381538281f300730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb10029","runtime_bytecode":"730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb10029","real_runtime_bytecode":"730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f78114605a575b600080fd5b60666004356024356078565b60408051918252519081900360200190f35b01905600a165627a7a72305820","swarm_hash":"283a84d7664be7e8ae3930845aa8754f2c28b4901a539d322e73e178dc03fbb1","gas_estimates":{"creation":{"codeDepositCost":"33600","executionCost":"134","totalCost":"33734"},"external":{"add(uint256,uint256)":"180"}},"function_hashes":{"add(uint256,uint256)":"771602f7"},"abi":[{"constant":true,"inputs":[{"name":"_a","type":"uint256"},{"name":"_b","type":"uint256"}],"name":"add","outputs":[{"name":"_c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x771602f7"}]};
let ZAMyLib2 = new EmbarkJS.Blockchain.Contract(ZAMyLib2JSONConfig);
export default ZAMyLib2;
