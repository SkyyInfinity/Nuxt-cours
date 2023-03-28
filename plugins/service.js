import PoneyService from "~/services/Poney.service";

export default (ctx, inject) => {
    const services = {
        posts: new PoneyService(ctx.$axios)
    }
    
    inject('services', services)
}
