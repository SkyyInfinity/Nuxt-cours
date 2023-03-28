export default class CommentService {
    axios: any;

    constructor($axios: any) {
        this.axios = $axios;
    }

    async findAllByPostId(id: number) {
        return await this.axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res: any) => res.data);
    }

    async findOne(id: number) {
        return await this.axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then((res: any) => res.data);
    }
}
