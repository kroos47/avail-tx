import config from "./config";
import { getDecimals, initialize, formatNumberToBalance, getKeyringFromSeed, isValidAddress } from "avail-js-sdk"

/**
 * Example of transferring tokens from Alice to Bob.
 */
async function main() {
    // instantiate the api
    const api = await initialize("wss://kate.avail.tools/ws")    
    // add sender to our keyring with a hard-derivation path (empty phrase, so uses dev)
    const sender = getKeyringFromSeed(config.mnemonic);

    // amount we wesh to send
    const decimals = getDecimals(api);
    const amount = formatNumberToBalance(config.amount, decimals)
    console.log(config.amount);
    const transfer = api.tx.balances.transfer(config.receiver, amount)
    // sign and send the transaction using our account
    let x = await transfer
    .signAndSend(
        sender,  // sender
        (result) => {
            //uncomment the below line👇 to see the whole status flow of the transaction
            // console.log(`Tx status: ${result.status}`);
            if (result.status.isReady) {
                console.log(`result is ready`)
            }
            if (result.status.isInBlock) {
                console.log(`\nExtrinsic hash: ${result.txHash} is in block`);
                process.exit(0);
            }
        });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});