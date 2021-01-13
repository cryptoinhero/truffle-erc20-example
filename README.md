<div align="center">  
  <h1>ERC20 Truffle Example</h1>      
  <p>  
    <strong>Easy example for deployment of openzeppelin based ERC20 tokens with truffle</strong>  
  </p>  
  <br/>  
</div>  

# Development
Modify the main token contract [./contracts/SampleToken.sol](./contracts/SampleToken.sol) to deploy a ERC20 token or replace it with a custom contract. 
Make sure the contract file name is referenced correctly in [./migrations/2_deploy_contract.js](./migrations/2_deploy_contract.js)

## Environment Variables

Each deployment environment has a different set of mandatory environment variables. Add the secrets required for the deployment environment to [.env](./.env)

Make sure to provide the 64 character long hexa-decimal `PRIVATE_KEY`. The associated address will inherit the tokens created by the contract deployment.

# Deployment

Deploy the smart contract to the desired environment with the provided commands. The address of the deployed contract will be
printed to the console output:

````

C:\www\truffle-erc20-example>npm run build && npm run deploy:development

> risingstar2018-deploy-token@1.0.0 prebuild C:\www\truffle-erc20-example
> rimraf ./build/contracts/*


> risingstar2018-deploy-token@1.0.0 build C:\www\truffle-erc20-example
> truffle compile


Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\SampleToken.sol
> Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20.sol
> Compiling openzeppelin-solidity\contracts\math\SafeMath.sol
> Compiling openzeppelin-solidity\contracts\token\ERC20\IERC20.sol
> Artifacts written to C:\www\truffle-erc20-example\build\contracts
> Compiled successfully using:
   - solc: 0.6.2+commit.bacdbe57.Emscripten.clang


> risingstar2018-deploy-token@1.0.0 deploy:development C:\www\truffle-erc20-example
> truffle migrate --network development


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 8000029 (0x7a121d)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xef73d859df0ef986801a5ff1012047a2877605a6a440c8dd1e54617970e3409c
   > Blocks: 2            Seconds: 85
   > contract address:    0x895Fa21B72774FA42EF81B246b4f042A21B0f1E1
   > block number:        9455321
   > block timestamp:     1610500924
   > account:             0x36eB45aBc8Cc719C6E594e582622A229ca98439E
   > balance:             11.901236767
   > gas used:            192159 (0x2ee9f)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00384318 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00384318 ETH


2_deploy_contract.js
====================

   Deploying 'SampleToken'
   ---------------------------
   > transaction hash:    0x6e7c078ec54cbe91036145afa4e559ef525fe2f9512083acc88408f483412d84
   > Blocks: 2            Seconds: 9
   > contract address:    0x57d8865bE8a294429A5FFdD55db0f29923Be67dA
   > block number:        9455326
   > block timestamp:     1610501034
   > account:             0x36eB45aBc8Cc719C6E594e582622A229ca98439E
   > balance:             11.875867947
   > gas used:            1226103 (0x12b577)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02452206 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02452206 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02836524 ETH
````

In this example the smart contract was deployed to the address `0x57d8865bE8a294429A5FFdD55db0f29923Be67dA` on the Ganache Development network. The address `0x36eB45aBc8Cc719C6E594e582622A229ca98439E` gained ownership to the smart contract and received 10000 tokens.


## Development network / Ganache 
Required environment variables
* PRIVATE_KEY

```
npm run build && npm run deploy:development
```

## Private network 
Required environment variables
* PRIVATE_KEY
* PRIVATE_NETWORK_URL
* PRIVATE_NETWORK_ID

Also make sure to verify the [truffle settings](./truffle-config.js) for `private` match the actual private network (gas, gasPrice, ...)

```
npm run build && npm run deploy:private
```

## Ropsten public testnet 
Required environment variables
* PRIVATE_KEY
* INFURA_KEY

Sign up for a free api key at https://infura.io/dashboard to deploy to public networks. Make sure the private key on ropsten has enough ether to fund the deployment transaction. 
Get free ether from a ropsten ethereum faucet https://faucet.ropsten.be/

```
npm run build && npm run deploy:ropsten
```

## Verify contract 
Required environment variables
* ETHERSCAN_API_KEY

```
truffle run verify <Contract Name> --network ropsten
```
