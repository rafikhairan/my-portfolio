export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  iconLists: string[];
  github?: string;
  live?: string;
};

export type WorkExperience = {
  id: string;
  role: string;
  company: string;
  responsibilities: string[];
  time: string;
};
