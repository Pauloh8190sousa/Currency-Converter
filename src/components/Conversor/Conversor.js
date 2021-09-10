import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Conversor(props) {

    const [moedaA, setMoedaA] = useState("");
    const [moedaB, setMoedaB] = useState(0);
    const [select, setSelect] = useState([]);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

 

    useEffect(async () => {
        setSelect(["dados"]);

    }, []);

    return (
        <React.Fragment>
            <div className="Conversor">
                <h2>Converter moeda {props.moedaA} para {props.moedaB}</h2>
                <div>
                    <input
                        type="text"
                        placeholder="digite o valor"
                        value={input1}
                        onChange={(e) => { setInput2(e.target.value) }}
                    />
                    {select.map(item => {
                        <select>
                            <option value={item}>{item}</option>
                        </select>
                    })}
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
            </div>
        </React.Fragment>
    );
}