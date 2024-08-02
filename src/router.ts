import { Route, Router } from '@vaadin/router';

export const outlet = document.getElementById('outlet');
export const router = new Router(outlet);

router.setRoutes([
  {
    path: '/',
    children: [
      { path: '/', component: 'home-component' },
      { path: '/poem', component: 'poet-bot', title: 'Poem Bot' },
      { path: '/notion', component: 'notion-bot', title: 'Notion Bot' },
      {
        path: '/callback',
        component: 'notion-bot',
        action: async foo => {
          console.log('foo', foo);
        }
      },
      { path: '(.*)', component: 'not-found' }
    ]
  }
] as Route[]);
