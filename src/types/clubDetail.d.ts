export type knowledge_graph = {
  title: string;
  type: string;
  entity_type: string;
  kgmid: string;
  knowledge_graph_search_link: string;
  serpapi_knowledge_graph_search_link: string;
  image: string;
  description: string;
  source: Source;
  leagues: string;
  leagues_links: leaguesLinks;
  headquarters: string;
  headquarters_links: headQuartersLinks;
  founders: string;
  founders_links: FoundersLinks;
  founded: string;
  president: string;
  president_links: presidentLinks;
  ethnicity: string;
  ethnicity_links: ethnicityLinks;
};

type leaguesLinks = {
  text: string;
  link: string;
};

type headQuartersLinks = {
  text: string;
  link: string;
};

type Source = {
  name: string;
  link: string;
};

type ethnicityLinks = {
  text: string;
  link: string;
};

type presidentLinks = {
  text: string;
  link: string;
};

type FoundersLinks = {
  text: string;
  link: string;
};
