//Devo implementare l'interfaccia altrimenti non tipizzandolo causa errore

export interface JobData {
  label: string;
  input: string;
  iconClassUser: string;
  stringName: string;
}



const dataJob = [
    {
      label: "Ore di lavoro",
      input: "200",
      iconClassUser: "fa fa-clock-o",
      stringName: 'hours'
    },
    {
      label: "Paga Orara",
      input: "10€",
      iconClassUser: "fa fa-money",
      stringName: 'hourlyWage'
    },
    {
      label: "Totale",
      input: "2000€",
      iconClassUser: "fa fa-money",
      stringName: 'salary',
    },
    {
      label: "Azienda",
      input: "LabForTraining",
      iconClassUser: "fa fa-building",
      stringName: "company"
    },
    {
      label: "Telefono",
      input: "123456789",
      iconClassUser: "fa fa-phone",
      stringName: "phone",
    },
    {
      label: "Città",
      input: "Roma",
      iconClassUser: "fa fa-location-arrow",
      stringName: "city"
    },
  ];

  export default dataJob