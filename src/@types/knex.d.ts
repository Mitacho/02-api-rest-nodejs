// eslint-disable-next-line no-unused-vars
import { Knex } from 'from'

declare module 'knex/types/table' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
