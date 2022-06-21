import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7ixpe10w901xmd31s2isc/master',
  cache: new InMemoryCache()
})