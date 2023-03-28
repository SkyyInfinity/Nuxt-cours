import Post from './../assets/data/Post.class';

export default class PostService {
    axios: any;

    constructor($axios: any) {
        this.axios = $axios;
    }

    async findAll() {
        return await this.axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => res.data);
    }

    async findOne(id: number) {
        return await this.axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res: any) => res.data);
    }

    async add(data: object) {
        return await this.axios.post('https://jsonplaceholder.typicode.com/posts', data, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((res: any) => res.statusText);
    }

    async delete(id: number) {
        return await this.axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res: any) => res.statusText);
    }
}
