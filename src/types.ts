export type NavItemType = {
  id: number;
  title: string;
  slug: string;
};

export type Bio = {
  biographiesConnection: {
    edges: {
      node: {
        content: {
          raw: any;
        };
      };
    }[];
  };
};
