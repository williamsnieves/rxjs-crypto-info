import { fromEvent, mergeMap } from "rxjs";
import { cryptoRequest$ } from "../crypto-service";

const cryptoButton = document.getElementById("crypto-button");

export const getCryptoInformationButton$ = fromEvent(
  cryptoButton,
  "click"
).pipe(mergeMap(() => cryptoRequest$));

export const renderCryptos = (cryptos) => {
  const cryptosEl = document.getElementById("cryptos");
  cryptos.forEach((crypto) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <div class="item">
        <div>Name: ${crypto.name}</div>
        <div>Rank: ${crypto.rank}</div>
        <div>Symbol: ${crypto.symbol}</div>
        <div>Market Price: ${Math.floor(crypto.marketCapUsd)}</div>
        <div>Usd price: ${Math.floor(crypto.priceUsd)}</div>
      </div>
    `;
    return cryptosEl.appendChild(item);
  });
};
