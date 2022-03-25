import FieldInput from "../../shared/design/fieldInput/FieldInput";
import TitleSection from "../../shared/design/titleSection/TitleSection";
import dataUser from "./dataUser";
import dataJob from "./dataJob";
import users from "./dataIcon";
import { useState } from "react";

const FormComponent: React.FC = () => {
  const [data, setData] = useState([users]);
  const [selected, setSelected] = useState<any>(0);
  const [offPrev, setOffPrev] = useState(false);
  const [offNext, setOffNext] = useState(false);

  const nextView = () => {
    setSelected((prevValue: any) => {
      if (prevValue + 1 === users.length) {
        setOffNext(true);
        return users.length - 1;
      } else {
        setOffPrev(false);
        return prevValue + 1;
      }
    });
  };

  const prevView = () => {
    setSelected((prevValue: any) => {
      if (prevValue - 1 < 0) {
        setOffPrev(true);

        return 0;
      } else {
        setOffNext(false);
        return prevValue - 1;
      }
    });
  };

  return (
    //Inserisco il tag come se fosse React.fragment
    <>
      {/* Inserisco Il mio componente TitleSection a cui passo il titolo e l'icona tramite un fake dati */}
      <TitleSection title="Dati utente" icon="fa fa-address-card" />
      {/* Inserisco Il mio componente FieldInput ciclando tutti i dati mi ritorna quel componente passando le relative props */}
      <div className="row   align-items-center p-3">
        {/* {console.log(users[0].name)} */}

        {/* {console.log(Object.keys(users[0]))}
      {console.log(Object.entries(data[0]))} */}

        {/* ⁄provo piu modi di mappare l'array users[0] */}
        {/* {Object.keys(users[0]).map((ele,index) => ( */}
        {dataUser.map((ele, index) => (
          <FieldInput
            key={ele.input}
            input={users[selected][ele.stringName]}
            // input={users[selected]['name']}
            label={dataUser[index].label}
            icon={dataUser[index].iconClassUser}
            // classField={
            //   ele.id !== dataUser.length - 1 ? ["col-lg-4"] : ["col-lg-8"]
            // }
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
      <div className="  text-center">
        <button
          className={
            selected === 0 ? "btn btn-disable btn-secondary" : "btn btn-primary"
          }
          type="button"
          onClick={prevView}
          disabled={offPrev}
        >
          Clicca
        </button>
        <button
          className={
            selected === users.length - 1
              ? "btn btn-disable btn-secondary"
              : "btn btn-primary"
          }
          type="button"
          onClick={nextView}
          disabled={offNext}
        >
          Clicca
        </button>
      </div>
    </>
  );
};

export default FormComponent;
