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

export type LinkT = {
  id: string;
  title: string;
  url: string;
};

export type ProjectConn = {
  projectsConnection: {
    edges: {
      node: {
        id: string;
        title: string;
        description: string;
        frameworks: string;
        links: LinkT[];
      };
    }[];
  };
};

export type ProjectT = {
  id: string;
  title: string;
  description: string;
  frameworks: string;
  links: LinkT[];
};
