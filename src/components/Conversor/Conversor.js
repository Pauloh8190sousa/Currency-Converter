import React, { useState } from "react";
import "./styles.css";

export default function Conversor(props) {

    const [moedaA, setMoedaA] = useState("");
    const [moedaB, setMoedaB] = useState(0);


    async function converter() {
        console.log(moedaA);

    }

    return (
        <React.Fragment>
            <div className="Conversor">
                <h2>Converter moeda {props.moedaA} para {props.moedaB}</h2>
                <div>
                    <input
                        type="text"
                        placeholder="digite o valor"
                        onChange={(e) => { setMoedaA(e.target.value) }}
                    />
                    <select>
                        <option value="Currency">Currency</option>
                    </select>
                </div>
                <span>=</span>
                <div>
                    <input
                        type="text"
                        placeholder="digite o valor"

                    />
                    <select>
                        <option value="Currency">Currency</option>
                    </select>
                </div>
                <button
                    type="button"
                    onClick={converter}
                >
                    Converter
                </button>
                <h2>Valor convertido</h2>
            </div>
        </React.Fragment>
    );
}