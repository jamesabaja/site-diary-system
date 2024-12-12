import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String5273474' } },
    two: { data: { email: 'String8136012' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
