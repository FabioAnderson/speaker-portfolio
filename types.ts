
export interface NavItem {
  name: string;
  href: string;
}

export interface Talk {
  title: string;
  event: string;
  year: number;
  status?: 'Coming soon';
}

export interface Company {
  name: string;
  logoUrl: string; // Path to the SVG logo
  role: string;
  impact: string;
  stack: string[];
}

export interface Skills {
  hard: string[];
  soft: string[];
}
