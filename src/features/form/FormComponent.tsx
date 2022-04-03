import FieldInput from "../../shared/design/fieldInput/FieldInput";
import TitleSection from "../../shared/design/titleSection/TitleSection";
import dataUser, { UserData } from "./dataUser";
import dataJob from "./dataJob";
import users from "./dataForm";
import { useEffect, useState } from "react";

//interfaccia per ovviare al problema di tipizzazione
interface IIndexable {
  [key: string]: any;
}

interface UserApiFakeModel {
  id: number;
  name: string;
  username: string;
  email: string;
}


const FormComponent: React.FC = () => {
  const [selected, setSelected] = useState<any>(0);
  const [offPrev, setOffPrev] = useState(true);
  const [offNext, setOffNext] = useState(false);
  const [fakeData, setFakeData] = useState<UserApiFakeModel[]>([])


  useEffect(()=>{
    downloadData();

  },[])

  const downloadData = async () => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await api.json();
    console.log(data)
    setFakeData(data)
    
}

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
        selected === 0 ? setOffPrev(true) : setOffPrev(false);

        return 0;
      } else {
        setOffNext(false);
        return prevValue - 1;
      }
    });
  };

  return (
    <>
      <TitleSection title="Dati utente" icon="fa fa-address-card" />
      {/* Inserisco Il mio componente FieldInput ciclando tutti i dati mi ritorna quel componente passando le relative props */}
      <div className="row   align-items-center p-3">
        {/* {console.log(users[0].name)} */}

        {/* {console.log(Object.keys(users[0]))}
      {console.log(Object.entries(data[0]))} */}

        {/* ⁄provo piu modi di mappare l'array users[0] */}
        {/* {Object.keys(users[0]).map((ele,index) => ( */}

        {/* CON questo qui di seguito mi da il problema di tipizzazione */}



        {console.log(fakeData[0])}
        {dataUser.map((ele, index) => (
          <FieldInput
            key={index}
           
            input={users[selected]['name']}
            // input={users[selected][ele.stringName]}
            label={dataUser[index].label}
            icon={dataUser[index].iconClassUser}
            // classField={
            //   ele.id !== dataUser.length - 1 ? ["col-lg-4"] : ["col-lg-8"]
            // }
          ></FieldInput>
        ))}

        <div>{}</div>





        {/* {dataUser.map((ele: UserData) => {
          const { stringName, label, iconClassUser } = ele;
          const user: IIndexable = fakeData[selected];
          const input = user[stringName] as string;
          return (
            <FieldInput
              key={ele.stringName}
              input={input}
              // input={users[selected]['name']}
              label={label}
              icon={iconClassUser}
              // classField={
              //   ele.id !== dataUser.length - 1 ? ["col-lg-4"] : ["col-lg-8"]
              // }
            ></FieldInput>
          );
        })} */}
      </div>
      {/* Ripeto l'operazione per eventuali altri form, i componenti sono composti più nel dettaglio così da renderli riutilizzabili */}
      <TitleSection title="Dati lavoro" icon="fa fa-briefcase" />

      <div className="row   align-items-center p-3">
        {dataJob.map((ele: UserData) => {
          const { stringName, label, iconClassUser } = ele;
          const user: IIndexable = users[selected];
          const input = user[stringName] as string;
          return (
            <FieldInput
              key={ele.stringName}
              input={input}
              label={label}
              icon={iconClassUser}
            ></FieldInput>
          );
        })}
      </div>

      <div className="  text-center">
        <button
          className={`mx-3 ${
            selected === 0 ? "btn btn-disable btn-secondary" : "btn btn-primary"
          }`}
          type="button"
          onClick={prevView}
          disabled={offPrev}
        >
          Prev
        </button>
        <button
          className="mx-3 btn btn-primary"
          type="button"
          onClick={nextView}
          disabled={selected === users.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormComponent;
