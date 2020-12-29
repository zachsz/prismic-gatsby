import * as RTE from 'fp-ts/ReaderTaskEither'

import { FieldConfigCreator } from '../types'

export const createNumberFieldConfig: FieldConfigCreator = () => RTE.of('Float')