import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

/**
 * Named routes will help to prevent code repition as we can assess the route via name
 * scrollBehavior can be used to auto scroll to the previous postion of the previous page when the user 
 * clicks back button
 */

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
