import type { SiteDiary } from '@prisma/client'

import {
  siteDiaries,
  siteDiary,
  createSiteDiary,
  updateSiteDiary,
  deleteSiteDiary,
} from './siteDiaries'
import type { StandardScenario } from './siteDiaries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('siteDiaries', () => {
  scenario('returns all siteDiaries', async (scenario: StandardScenario) => {
    const result = await siteDiaries()

    expect(result.length).toEqual(Object.keys(scenario.siteDiary).length)
  })

  scenario('returns a single siteDiary', async (scenario: StandardScenario) => {
    const result = await siteDiary({ id: scenario.siteDiary.one.id })

    expect(result).toEqual(scenario.siteDiary.one)
  })

  scenario('creates a siteDiary', async () => {
    const result = await createSiteDiary({
      input: {
        updatedAt: '2024-12-04T05:02:32.582Z',
        date: '2024-12-04T05:02:32.582Z',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-12-04T05:02:32.582Z'))
    expect(result.date).toEqual(new Date('2024-12-04T05:02:32.582Z'))
  })

  scenario('updates a siteDiary', async (scenario: StandardScenario) => {
    const original = (await siteDiary({
      id: scenario.siteDiary.one.id,
    })) as SiteDiary
    const result = await updateSiteDiary({
      id: original.id,
      input: { updatedAt: '2024-12-05T05:02:32.582Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-12-05T05:02:32.582Z'))
  })

  scenario('deletes a siteDiary', async (scenario: StandardScenario) => {
    const original = (await deleteSiteDiary({
      id: scenario.siteDiary.one.id,
    })) as SiteDiary
    const result = await siteDiary({ id: original.id })

    expect(result).toEqual(null)
  })
})
