import {Maior} from "./Style";

const SolicitacaoCard = () => (
<Maior>
        <h1>
            <span> {props.id} </span>
            <span>{props.cliente} </span>
        </h1>
        <p id='tipo'> {props.Dosimetria} </p> 
        <p id='info'>
            <span> {props.dataSolicitacao} </span>
            <span> {props.status} </span>
        </p>

</Maior>
);
export default SolicitacaoCard;