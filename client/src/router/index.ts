import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeRouter.vue'
import SignIn from './SignInRouter.vue'
import YourPosts from './YourPostsRouter.vue'
import WorkoutWeek from './WorkoutWeekRouter.vue'
import WorkoutDay from './WorkoutDayRouter.vue'
import Workouts from './WorkoutsRouter.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //what is this for?
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'Login',
      component: SignIn
    },
    {
      path: '/yourposts',
      name: 'YourPosts',
      component: YourPosts
    },
    {
      path: '/workoutweek',
      name: 'WorkoutWeek',
      component: WorkoutWeek
    },
    {
      path: '/workoutday',
      name: 'WorkoutDay',
      component: WorkoutDay
    },
    {
      path: '/workouts',
      name: 'Workouts',
      component: Workouts
    }
  ]
})

export default router
