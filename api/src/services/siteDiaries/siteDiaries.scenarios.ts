import type { Prisma, SiteDiary } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SiteDiaryCreateArgs>({
  siteDiary: {
    one: {
      data: {
        updatedAt: '2024-12-11T14:37:39.705Z',
        date: '2024-12-11T14:37:39.705Z',
      },
    },
    two: {
      data: {
        updatedAt: '2024-12-11T14:37:39.705Z',
        date: '2024-12-11T14:37:39.705Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SiteDiary, 'siteDiary'>
