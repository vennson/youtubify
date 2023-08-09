import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: {
    [process.env.GRAFBASE_API_URL!]: {
      headers: {
        'x-api-key': process.env.GRAFBASE_API_KEY!,
      },
    },
  },
  documents: './graphql/*.ts',
  generates: {
    './gql/gql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
