export interface Config
{
    mnemonic: String;
    size: number;
    ApiURL: String;
    app_id: number;
    batch?: number;
    amount?: number;
    receiver?: String;
}

export default{
    mnemonic: "gown cotton frame popular still animal short hour skull bomb biology cigar",
    size: 10,
    ApiURL: "wss://testnet.avail.tools/ws",
    app_id: 0,
    batch: 10,
    amount: 1,
    receiver: '5HQgW51Aad1L5dgXoNzA5PneB8hey16zFvywvh1YvPrNQnVC'
}