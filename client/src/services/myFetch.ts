const API_ROOT = import.meta.env.VITE_API_ROOT;

export default function myFetch<T>(url: string, data: any = null, method?: string ): Promise<T> {
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: { // whats the point of this
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined, // where does body come from
        
    };
    console.log("here2")
    return fetch(API_ROOT + url, options).then( x=>x.json() );
}
