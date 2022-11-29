import { api } from './session'

export function getWorkouts() {
    return api<ListEnvelope<Workout>>('workouts');
}
export function getWorkout(id: number) {
    return api<Workout>(`workouts/${id}`);
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
    id: number;
    name: string;
    description: string;
    muscle_group: string;
    category: string;
    image: string;
}