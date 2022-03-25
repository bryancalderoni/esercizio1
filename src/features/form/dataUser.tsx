//Devo implementare l'interfaccia altrimenti non tipizzandolo causa errore

export interface UserData {
  label: string;
  input: string;
  iconClassUser: string;
  stringName: string;
}

type DataUser = UserData[];


const dataUser = [
  {
    label: "Nome",
    input: "Bryan",
    iconClassUser: "fa fa-user",
    stringName: 'name'
  },
  {
    label: "Cognome",
    input: "Calderoni",
    iconClassUser: "fa fa-user",
    stringName: 'surname'
  },
  {
    label: "Email",
    input: "bryan.calderoni@gmail.com",
    iconClassUser: "fa fa-user",
    stringName: 'email'
  },
  {
    label: "Indirizzo",
    input: "Via delle Calcare Rocca di papa",
    iconClassUser: "fa fa-map",
    stringName: 'address'
  },
];

export default dataUser;
