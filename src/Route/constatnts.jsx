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
        Images: 'images',
        Gallery: '/gallery',
        TremsOfUse: 'tremsOfUse',
        NotFound: '*'
    }

}

export default appConstants