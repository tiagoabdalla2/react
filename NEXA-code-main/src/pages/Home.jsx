import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import dados from "../data/solicitacao.json";
import SolicitacaoCard from "../components/SolicitacaoCard/solitaçaocard";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  
  return (
    <Base>
      <h1>
     Aplicação React Base
      </h1>
     {solicitacaoes.map(
      (el , index) => (
        <SolicitacaoCard
        key={index}  
        id={el.id}

        />
      )
     
     )}
    </Base>
  )
}

export default Home