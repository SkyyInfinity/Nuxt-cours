import PostService from "~/services/Post.service";
import CommentService from '~/services/Comment.service';

export default (ctx, inject) => {
    const services = {
        posts: new PostService(ctx.$axios),
        comments: new CommentService(ctx.$axios)
    }
    
    inject('services', services)
}
