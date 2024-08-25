export type cardHelp = {
    id: string;
    title: string;
    description: string;
    type: string;
    image: string;
    urgent: boolean;
    gols: string
    author: {
        id: string;
        name: string;
        email: string;
        image: string;
    };
    supportes: string[];
    donate: string;
  }