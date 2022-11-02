// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export interface User {
//     userName: string;
//     fullName: string;
// }

// export function createUser(userName: string, fullName: string ) {
//     const User = {userName, fullName}
//     console.log(User.fullName)
//     console.log(User.userName)
// }
// export const getFull = function (user: User): string {
//     return user.fullName as string
// }


// export default User;
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({userName: '', fullName: ''}),
    actions: {
        setNames(setUserName:string, setFullName:string) {
            this.userName = setUserName;
            this.fullName = setFullName;
        },
    },
})
