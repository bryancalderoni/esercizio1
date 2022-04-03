//Devo implementare l'interfaccia altrimenti non tipizzandolo causa errore

export interface UserData {
  label: string;

  iconClassUser: string;
  stringName: string;
}

const dataUser = [
  {
    label: "Nome",
    iconClassUser: "fa fa-user",
    stringName: "name",
  },
  {
    label: "Cognome",
    iconClassUser: "fa fa-user",
    stringName: "surname",
  },
  {
    label: "Email",
    iconClassUser: "fa fa-user",
    stringName: "email",
  },
  {
    label: "Indirizzo",
    iconClassUser: "fa fa-map",
    stringName: "address",
  },
];

export default dataUser;
