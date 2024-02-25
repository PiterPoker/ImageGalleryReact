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
        TremsOfUse: 'termsOfUse',
        NotFound: '*'
    }

}

export default appConstants