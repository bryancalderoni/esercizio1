import React from "react";

// Creo la mia interfaccia con cui posso andare a tipizzare tutti miei attributi
interface FieldInputProp {
  input?: string;
  label?: string;
  icon?: string;
  classField?: string[];
}

// è importante la tipizzazione in quanto Typescript altrimenti andrebbe in errore, inoltre non basta tipizzare tutto a :any altrimenti non avrebbe senso,
//creando le interfacce ho modo di tipizzarle in questo stesso modo
const FieldInput: React.FC<FieldInputProp> = ({
  input = "Titolo" as string,
  label = "label",
  icon = "fa fa-question",
  classField = [],
}) => {
  const fieldClass = ["my-3", ...classField];
  return (
    
    <div className={fieldClass.join(" ")}>
      <div className="position-relative field rounded-3 p-3 border border-info">
        <div>{input}</div>
        <span className="label bg-white px-2 mx-2">{label}</span>
        <span className="icon bg-white px-2 mx-2">
          {" "}
          <i className={icon} />
        </span>
      </div>
    </div>
  );
};

export default FieldInput;
