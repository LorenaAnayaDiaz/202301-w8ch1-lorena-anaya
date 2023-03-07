import { APIStatus } from "../../shared/models/api-status";

export interface People {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  url: string;
  img: string;
}

export interface PeopleResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}

//PARA SACAR EL TOTAL (IMP PARA TRADUCCIONES QUE QUEDAN JEEJ)

export interface Characters {
  count: number;
  characters: Character[];
}

export interface CharactersState extends Characters {
  currentPage: number;
  status: APIStatus;
}

export interface Character extends People {
  imgUrl: string;
  id: string;
}
