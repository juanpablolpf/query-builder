import {knex as knexConfig} from "knex"
import config from "../../knexfile"

export const kenx = knexConfig(config)