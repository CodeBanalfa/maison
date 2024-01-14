export default class Maison {
  id: number;
  nom: string;
  ville: string;
  picture: string;

  constructor(id: number, nom: string, ville: string, picture: string) {
    this.id = id;
    this.nom = nom;
    this.ville = ville;
    this.picture = picture;
  }
}
