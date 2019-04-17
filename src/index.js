import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(req, res) {
  return (
    <div>
      <input type="text" name="amount" value="1" />

      <select name="crypto">
        <option value="BTC">Bitcoin</option>";
        <option value="LTC">Litecoin</option>";
        <option value="XMR">Monero</option>";
      </select>

      <select name="fiat">
        <option value="USD">USD</option>";
        <option value="EUR">EUR</option>";
        <option value="CZK">CZK</option>";
      </select>

      <button type="submit" name="button">
        Zjisti!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
