import { PersonneI } from "../Interfaces/personne-I";

export class Clients  implements PersonneI{
  id!: number;
  nom!: string;
  prenom!: string;

  constructor(obj?: Partial<Clients>) {
    if (obj) {
      Object.assign(this, obj);
    }
    // Modif YBL
    console.log("---> Metier Clients instanced")
  }
}
