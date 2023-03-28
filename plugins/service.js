import PostService from "~/services/Post.service";

export default (ctx, inject) => {
    const services = {
        posts: new PostService(ctx.$axios)
    }
    
    inject('services', services)
}
