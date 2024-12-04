import type { Prisma, SiteDiary } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SiteDiaryCreateArgs>({
  siteDiary: {
    one: {
      data: {
        updatedAt: '2024-12-04T05:02:32.586Z',
        date: '2024-12-04T05:02:32.586Z',
      },
    },
    two: {
      data: {
        updatedAt: '2024-12-04T05:02:32.586Z',
        date: '2024-12-04T05:02:32.586Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SiteDiary, 'siteDiary'>
