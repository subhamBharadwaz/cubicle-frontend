const base_url = 'https://newsapi.org/v2/';
const appid = `apiKey=${process.env.REACT_APP_NEWS_API}`;

// Top headings endpoint
export const topHeadings = () =>
  `${base_url}top-headlines?sources=bbc-news&${appid}&pageSize=10`;

export const searchHeadings = (news_search) =>
  `${base_url}top-headlines?q=${news_search}&${appid}&pageSize=10`;
