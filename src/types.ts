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

export type ResumeConn = {
  resumesConnection: {
    edges: {
      node: {
        fullName: string;
        contact: {
          raw: any;
        };
        mainSkills: {
          raw: any;
        };
        jobTitle: string;
        summary: string;
        experiences: ExperienceT[];
        educations: EducationT[];
        professionalSkills: {
          raw: any;
        };
        volunteerExperiences: ExperienceT[];
        languages: {
          raw: any;
        };
      };
    }[];
  };
};

export type ExperienceT = {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  summary: string;
  bullets: {
    raw: any;
  };
};

export type EducationT = {
  id: string;
  school: string;
  city: string;
  country: string;
  degree: string;
  field: string;
  completionDate: string;
};

export type HygraphAssetT = {
  fileName: string;
  url: string;
};

export type ContactT = {
  id: string;
  title: string;
  link: string;
};

export type ContactsConn = {
  contactsConnection: {
    edges: {
      node: ContactT;
    }[];
  };
};
