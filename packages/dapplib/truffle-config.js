require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note rifle unknown hockey clinic surge gesture'; 
let testAccounts = [
"0xe4810dd6aa03fb8b429329b3d668e8f86f0fe4a4cc875183cdb8111efd0643c2",
"0x7a0df51c1d05438464b4c8b3efdf55bd239a3c87618756e659be038557b599cb",
"0x93cc76af4e268c194ef869a33acc0f760064f9a580a679cb17a444db01ced306",
"0x1621f0ffe3c3cb825c84e9a5ff12f558f3a48bdc6d576d84dae47c297aa45487",
"0xd9881da194733e8166e705ff445c07a7058dff117c1d67d07e7f8410f39cf6b4",
"0x6d644c4fe4327b5a4bf94068351de85796744c4ac623fd8cc6f7e765bfa3862d",
"0x77d6b5e2c18ecd71a442669ac40596237fdda20c4956cf22363e5ba775e39def",
"0x819422ee70300ff05195087b9fdfba902529bc0f16cef75a78f62215a4211d96",
"0x05d955d68d983bc1d431388cbb86bd63212225db778430140dcb8ff06cd57d75",
"0x3837958b2a81381b25a61a2575fd01786954f7a887e91ecad325f7b38af9a066"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


