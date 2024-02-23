const appConstants = {
    arrayRoutes: [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Gallery',
            path: '/gallery'
        },
    ],
    routes:{
        Home: '/',
        Gallery: '/gallery',
        TremsOfUse: '/tremsOfUse',
        NotFound: '*'
    }

}

export default appConstants