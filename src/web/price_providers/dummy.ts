import { PriceProvider, Price, Token } from "./interface"

export class DummyPriceProvider implements PriceProvider {
  async price(): Promise<Price> {
    return { price: -1, decimals: 0 }
  }
  async supported(): Promise<Token[]> {
    return [
      {
        address: "tz1dummyaddress",
        name: "DUMMY-PRICE",
        decimals: 0,
        tokenId: 0,
        type: "dummy",
      } as any,
    ]
  }
}
