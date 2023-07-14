import { useState } from "react";

function App() {
  const [itens, setItens] = useState([]);
  const [preco, setPreco] = useState("");
  const [item, setItem] = useState("");
  const [totalPrevisto, setTotalPrevisto] = useState(0);

  function adicionarItem() {
    if (item) {
      if (preco) {
        const parsedPreco = parseFloat(preco);
        if (!isNaN(parsedPreco)) {
          const novoItem = {
            nome: item,
            preco: parsedPreco,
          };

          setItens([...itens, novoItem]);
          setTotalPrevisto(totalPrevisto + parsedPreco);
          setItem("");
          setPreco("");
        } else {
          alert("Informe um preço válido");
        }
      } else {
        alert("Informe o preço do item");
      }
    } else {
      alert("Informe o nome do item");
    }
  }

  return (
    <>
      <header className="d-flex justify-content-center bg-primary text-white">
        <h1 className="my-2">Controle de compras</h1>
      </header>
      <main className="container m-5">
        <div className="d-flex main">
          <div className="mx-5">
            <img src="../images/main.png" alt="Imagem principal" />
          </div>
          <div>
            <div className="d-flex justify-content-around">
              <input
                className="w-50 m-2 p-3"
                placeholder="Nome do item"
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <input
                className="w-50 m-2 p-3"
                placeholder="Preço R$"
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
              <input
                className=" w-25 btn btn-primary p-3"
                type="button"
                value="Adicionar"
                onClick={adicionarItem}
              />
            </div>
            <div className="d-flex justify-content-around mt-4 border border-1 border-black p-2">
              <h3 className="mx-5">Lista dos produtos adicionados</h3>
            </div>
            <div className="border border-black py-3 px-1">
              <ul>
                {itens.map((item, index) => (
                  <li key={index}>
                    {item.nome} - R${item.preco.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <h3 className="text-black">Total previsto:</h3>
              <h3 className="text-primary mx-2">
                R${totalPrevisto.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
