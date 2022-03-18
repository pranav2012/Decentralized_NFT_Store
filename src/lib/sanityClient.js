import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'll4k1lkr',
    dataset: 'production',
    apiVersion: '2022-02-12',
    useCdn: false,
    token: 'skculpWGJceQHIGC8I3O3FdSF6PjyAWU9nmUaWjYw3NftSdnE9S1whNeQjwkGq9jGZL2raJWNtJvFN0ZUIdVnVCztx3is6fIdynbTnPpFvmJKYU5i1gQoBM3czeM8EE6gaSEB0UJyIJZenZ5kZeqm3WYYkojGaXhtirUkFZKqPjEiqWbCN4D'
})