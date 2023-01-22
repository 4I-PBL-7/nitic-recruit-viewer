import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../../../@types/wordpress'

const endpoint = process.env.GQL_ENDPOINT ?? ''
const client = new GraphQLClient(endpoint)

export const sdk = getSdk(client)
