import router from "../routes"

const resolveRoutes = () => {
    if(router.length <=3){
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`
}


export default resolveRoutes;