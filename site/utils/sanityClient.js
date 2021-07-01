const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'bv4fjll4',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

