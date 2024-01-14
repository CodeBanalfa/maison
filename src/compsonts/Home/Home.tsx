/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import MaisonList from "../maisonList/maisonList";
import ClassA from "../../data/maisonData";

const Home = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [filteredMaisons, setFilteredMaisons] = useState(ClassA);

  const handleKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);

    const filteredByKeyword = ClassA.filter((maison) =>
      `${maison.id} ${maison.nom} ${maison.ville} ${maison.picture}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    setFilteredMaisons(filteredByKeyword);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Agence Maison</h1>
      <input
        style={{ display: "block", margin: "auto", flexFlow: "row wrap" }}
        type="text"
        id="nom"
        name="nom"
        placeholder="Mot à chercher"
        onChange={handleKeyword}
      />

      <MaisonList Maisons={filteredMaisons} handleMaisonChange={open} />
    </div>
  );
};

export default Home;
