import { getPayload } from "payload"
import { importConfig } from "payload/node"

export default defineEventHandler(async () => {
  const awaitedConfig = await importConfig('../../payload.config.ts')
  const payload = await getPayload({ config: awaitedConfig })

  const users = await payload.find({
    collection: 'users',
  })

  return users
})