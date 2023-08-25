## Avail polkadot-js script
Sample scripts to send transactions to Avail using Polkadot JS. The following has been tested on `node v16.16.0 (npm v8.11.0)`. 

- Go to the js_api folder in avail/tests

    ```
    cd /src
    ```

- Install dependencies 

    ```
    npm i
    ```

- Install ts-node
    You can install globally or use `npx`. 
    ```
    npm i -g ts-node
    ```
- Create a `config.json` file
    ```
    touch config.json
    ```

    ```json

    {
    "mnemonic" : "clap laundry claw prosper comic book rabbit vacant captain indoor attitude initial",
    "size" : 10,
    "ApiURL" : "wss://kate.avail.tools/ws",
    "app_id" : 0,
    "batch" : 10, 
    "receiver": "5HQgW51Aad1L5dgXoNzA5PneB8hey16zFvywvh1YvPrNQnVC",
    "amount" : 1
}
    ```
Keep in mind that the fields `batch`(default is 0 and if its specified then it switches to batch transaction mode), `count`(if not specified the subscription will continue infinitely) and `amount`(if not specified default is `12345`) are optional. If you do not want to use them, you can leave them empty.
Do Keep in mind that the receiver address should be specified when you are using transfer calls. The data will be send from the mnemonic address to the receiver. 


    
- For submitting random blobs of data, use:
    ``` 
    ts-node data_submit.ts
    ```


- For balance transfer from one account to another use: 

    ```
    ts-node transfer.ts
    ```
    Script sends from the account whose mnemonic is mentioned on config to the receiver mentioned on config. 
