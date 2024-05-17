import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import TrainingSessions from '@/components/specific/TrainingSessions.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'training-sessions',
        component: TrainingSessions,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory("tasks"),
  routes
});

export default router;