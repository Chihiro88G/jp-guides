type Page = {
  name: string;
  path: string;
}

export function getPages(): Page[] {
  const pages: Page[] = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]
  
  return pages;
};