import { GraphQLClient } from 'graphql-request';

const HYGRAPH_CONTENT_API = process.env.HYGRAPH_API;

export const hygraph = new GraphQLClient(`${HYGRAPH_CONTENT_API}`);
