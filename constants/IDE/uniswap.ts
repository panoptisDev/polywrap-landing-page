import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`await client.invoke<TxReceipt>({
  uri: "wrap://ens/uniswap.eth:pool@1.2.3",
  method: "add_liquidity",
  args: {
    pool_address: "0x...",
    wei: "12...",
    ...
  }
});`,
  codegen:
`await uniswap.add_liquidity({
  pool_address: "0x...",
  wei: "12...",
  ...
});`
};

const py: CodeFormats = {
  client:
`await client.invoke(
  uri=Uri("wrap://ens/uniswap.eth:pool@1.2.3"),
  method="add_liquidity",
  args={
    "pool_address": "0x...",
    "wei": "12...",
    ...
  }
)`,
  codegen:
`await uniswap.add_liquidity(
  pool_address="0x...",
  wei="12...",
  ...
)`
};

const rust: CodeFormats = {
  client:
`client.invoke::<TxReceipt>(
    &Uri::from("wrap://ens/uniswap.eth:pool@1.2.3"),
    "add_liquidity",
    wrap::args!({
        "pool_address": "0x...",
        "wei": "12...",
        ...
    })
).await.unwrap();`,
  codegen:
`uniswap.add_liquidity(
    "0x...",
    "12..."
).await.unwrap();`
};

export default { ts, py, rust }
