import { getCryptoInformationButton$ } from "./utils/ui";
import { renderCryptos } from "./utils/ui";
import "./styles/main.css";

const subscription = getCryptoInformationButton$.subscribe({
  next: (data) => {
    console.log("data", data);
    renderCryptos(data.list);
  },
  complete: () => {
    subscription.unsubscribe();
  },
});
