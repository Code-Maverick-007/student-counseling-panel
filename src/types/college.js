export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  type: string;
  rating: number;
  image: string;
  fees: string;
  cutoff: number[]; // [JEE, MH-CET, Direct] cutoff percentages
  about: string;
  courses: string[];
  examEligibility: {
    jee: boolean;
    mhtcet: boolean;
    direct: boolean;
  };
  placements: {
    averagePackage: string;
    highestPackage: string;
    placementRate: string;
  };
}
