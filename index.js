const{
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("solana/web3.js")

//Wallet object we use to airdrop tokens into
const wallet = new Keypair()

const publickey = new PublicKey (wallet._keypair.publickey)
const secretkey = wallet._keypair.secretkey

// console.log(publickey)
// console.log(secretkey)

const getWalletBalance = async() => {
    try {
        //Devnet is replica of mainnet and is a playground without using money
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const wallet = await connection.getBalance(publickey)
        console.log(`Wallet balance is ${walletBalance}`)
    } catch (err) {
        console.error(err)
    }
}