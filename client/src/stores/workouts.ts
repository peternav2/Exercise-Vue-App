import { api } from './session'

export function getWorkouts() {
    return api<ListEnvelope<Workout>>('workouts');
}
export function getWorkout(id: number) {
    return api<Workout>(`workouts/${id}`);
}
//this sends an API call that would return a list of workouts that match the search
export function getFilteredWorkouts(search: string) {
    return api<ListEnvelope<Workout>>(`workouts/search/${search}`);
}

// export interface Workouts {
//     workouts: Workout[];
//     limit: number;
// }
export interface ListEnvelope<T> {
    workouts: T[];
    limit: number;
  }

export interface Workout {
    workoutId: number;
    name: string;
    description: string;
    muscle_group: string;
    category: string;
    image: string;
}