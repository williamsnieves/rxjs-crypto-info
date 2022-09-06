import { of, map, mergeMap, concat, mergeAll, merge } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { URL_ASSETS, URL_RATES } from "./utils/data";

const getCryptoAssets = () => {
  return fromFetch(URL_ASSETS).pipe(mergeMap((response) => response.json()));
};

const getCryptoAssetsDetail = (cryptoId) => {
  return fromFetch(`${URL_RATES}/${cryptoId}`).pipe(
    mergeMap((response) => response.json())
  );
};

export const cryptoRequest$ = getCryptoAssets().pipe(
  mergeMap((response) => {
    const [firstCrypto] = response.data;

    return getCryptoAssetsDetail(firstCrypto.id).pipe(
      map(({ data }) => ({ list: response.data, detail: data }))
    );
  })
);
