import FieldInput from "../../shared/design/fieldInput/FieldInput";
import TitleSection from "../../shared/design/titleSection/TitleSection";
import dataUser from "./dataUser";
import dataJob from "./dataJob";
import users from "./dataIcon";
import { useState } from "react";

const FormComponent: React.FC = () => {
  const [data, setData] = useState([users])
const[selected, setSelected] = useState(users[0])

  

  return (
    //Inserisco il tag come se fosse React.fragment
    <>
      {/* Inserisco Il mio componente TitleSection a cui passo il titolo e l'icona tramite un fake dati */}
      <TitleSection title="Dati utente" icon="fa fa-address-card" />
      {/* Inserisco Il mio componente FieldInput ciclando tutti i dati mi ritorna quel componente passando le relative props */}
      <div className="row   align-items-center p-3">
      {/* {console.log(users[0].name)} */}

      {console.log(Object.keys(users[0]))}
      {console.log(Object.entries(data[0]))}
  
    
     
        {dataUser.map((ele,index) => (
          
          <FieldInput
            key={ele.id}
            input={ele.input}
            label={dataUser[index].label}
            icon={dataUser[index].iconClassUser}
            classField={
              ele.id !== dataUser.length - 1 ? ["col-lg-4"] : ["col-lg-8"]
            }
          ></FieldInput>
        ))}
      </div>
      {/* Ripeto l'operazione per eventuali altri form, i componenti sono composti più nel dettaglio così da renderli riutilizzabili */}
      <TitleSection title="Dati lavoro" icon="fa fa-briefcase" />
      <div className="row   align-items-center p-3">
        {dataJob.map((job, index) => (
          <FieldInput
            key={index}
            input={job.input}
            label={job.label}
            icon={job.iconClassUser}
            classField={["col-lg-4"]}
          ></FieldInput>
        ))}
      </div>
    </>
  );
};

export default FormComponent;
