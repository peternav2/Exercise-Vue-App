import { reactive, ref } from "vue";

interface Post {
    id?: number;
    workoutType?: string;
    image?: string;
    location?: string;
    date?: string;
    
}

export interface Posts {
    posts: Post[];
}

const posts = ref([] as Post[]);



export function addPost(post: Post) {
    posts.value.push(post);
}

export function getPosts() {
    return posts.value;
}
export default Post