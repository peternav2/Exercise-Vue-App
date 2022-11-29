import myFetch from '@/services/myFetch';
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export interface User {
    username: string;
    fullName: string;
    email: string;
    password: string;
}
const session = reactive({
    user: null as User | null,
    loading: 0
})

export default session;

export const useUserStore = defineStore('user', {
    state: () => ({userName: ref(''), fullName: ref('')}),
    actions: {
        setNames(setUserName:string, setFullName:string) {
            this.userName = setUserName;
            this.fullName = setFullName;
        },
    },
})

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    console.log(null);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error) {
        console.log(error as string);
    }finally{
        session.loading--;
    }
    return {} as T;
}