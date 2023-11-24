//Basic test 

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

const airDropSol = async() => {
    try {
        //Devnet is replica of mainnet and is a playground without using money
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const fromAirDropSig = await connection.requestAirdrop(publickey, 3 * LAMPORTS_PER_SOL)//Unit is in lamports not Sol. 1->mill
        await connection.confirmTransaction(fromAirDropSig)
    } catch (err) {
        console.error(err)
    }
}

const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}

main()