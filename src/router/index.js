import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import TrainingSessions from '@/components/specific/TrainingSessions.vue';
import Plug from '@/components/specific/Plug.vue';

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/training-sessions',
    children: [
      {
        path: 'training-sessions',
        component: TrainingSessions,
      },
      {
        path: 'schedule',
        component: Plug,
      },
      {
        path: 'room-list',
        component: Plug,
      },
      {
        path: 'users',
        component: Plug,
      },
      {
        path: 'study-groups',
        component: Plug,
      },
      {
        path: 'device-list',
        component: Plug,
      },
      {
        path: 'system-settings',
        component: Plug,
      },
      {
        path: 'archive',
        component: Plug,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory('tasks'),
  routes,
});

export default router;
