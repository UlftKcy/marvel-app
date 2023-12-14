export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
  };
}

export interface Comic {
  resourceURI: string;
  name: string;
}
