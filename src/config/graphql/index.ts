import { ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';

export const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache()
});
