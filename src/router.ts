import { Route, Router } from '@vaadin/router';

export const outlet = document.getElementById('outlet');
export const router = new Router(outlet);

router.setRoutes([
  {
    path: process.env.NODE_ENV === 'production' ? '/ai-bots/' : '/',
    children: [
      { path: '/', component: 'home-component' },
      { path: '/poem', component: 'poet-bot', title: 'Poem Bot' },
      { path: '/notion', component: 'notion-bot', title: 'Notion Bot' },
      {
        path: '(.*)',
        component: 'not-found',
        action: () => console.log('Not found', location.pathname)
      }
    ]
  },
  {
    path: '(.*)',
    redirect: process.env.NODE_ENV === 'production' ? '/ai-bots/' : '/',
    action: () => console.log('Not found', location.pathname)
  }
] as Route[]);
