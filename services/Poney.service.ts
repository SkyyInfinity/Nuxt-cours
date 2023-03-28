export default class PoneyService {
    axios: any;

    constructor($axios: any) {
        this.axios = $axios;
    }

    async findAll() {
        return await this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response: any) => response.data);
    }
}
