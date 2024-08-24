export type cardHelp = {
    title: string;
    description: string;
    type: string;
    image: string;
    author: {
        id: string;
        name: string;
        email: string;
        image: string;
    };
    supporters: string[];
  }