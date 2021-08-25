import test from 'ava'
import * as prismicM from '@prismicio/mock'

import { createMockCustomTypeModelWithFields } from './__testutils__/createMockCustomTypeModelWithFields'

import * as gatsbyPrismic from '../src'

test('normalizes Timestamp fields', (t) => {
  const model = createMockCustomTypeModelWithFields(t, {
    timestamp: prismicM.model.timestamp({ seed: t.title }),
  })
  const document = prismicM.value.document({
    seed: t.title,
    model,
  })

  const runtime = gatsbyPrismic.createRuntime()
  runtime.registerCustomTypeModel(model)

  const normalizedDocument = runtime.registerDocument(document)

  t.is(normalizedDocument.data.timestamp, document.data.timestamp)
})
