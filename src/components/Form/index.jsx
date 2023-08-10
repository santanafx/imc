import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
    const [altura, setAltura] = React.useState("");
    const [peso, setPeso] = React.useState("");
    const [imc, setImc] = React.useState("");
    const [classificacaoImc, setClassificacaoImc] = React.useState("");

    React.useEffect(() => {
        if (altura && peso) {
            const novoImc = peso / (altura * altura);
            setImc(novoImc);

            if (novoImc <= 18.5) {
                setClassificacaoImc("Abaixo do peso");
            } else if (novoImc <= 24.9) {
                setClassificacaoImc("Peso ideal");
            } else if (novoImc <= 29.9) {
                setClassificacaoImc("Levemente acima do peso");
            } else if (novoImc <= 34.9) {
                setClassificacaoImc("Obesidade grau 1");
            } else if (novoImc <= 39.9) {
                setClassificacaoImc("Obesidade grau 2");
            } else {
                setClassificacaoImc("Obesidade 3");
            }
        }
    }, [altura, peso]);

    return (
        <section>
            <form>
                <h1>Calculadora de IMC</h1>
                <label htmlFor="altura">Altura:</label>
                <div>
                    <input
                        type="text"
                        id="altura"
                        placeholder="Informe a altura em m"
                        onChange={(e) => setAltura(parseFloat(e.target.value))}
                    />
                    <span> ( m ) </span>
                </div>
                <label htmlFor="peso">Peso:</label>
                <div>
                    <input
                        type="text"
                        id="peso"
                        placeholder="Informe o peso em kg"
                        onChange={(e) => setPeso(parseFloat(e.target.value))}
                    />{" "}
                    <span> ( kg ) </span>
                </div>
                {altura && peso ? (
                    <div>
                        IMC: {imc}
                        <br />
                        Classificação: {classificacaoImc}
                    </div>
                ) : (
                    <span>Insira o peso e altura</span>
                )}
            </form>
        </section>
    );
};
