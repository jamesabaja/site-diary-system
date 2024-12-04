import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const siteDiaries: QueryResolvers['siteDiaries'] = () => {
  return db.siteDiary.findMany()
}

export const siteDiary: QueryResolvers['siteDiary'] = ({ id }) => {
  return db.siteDiary.findUnique({
    where: { id },
  })
}

export const createSiteDiary: MutationResolvers['createSiteDiary'] = ({
  input,
}) => {
  return db.siteDiary.create({
    data: input,
  })
}

export const updateSiteDiary: MutationResolvers['updateSiteDiary'] = ({
  id,
  input,
}) => {
  return db.siteDiary.update({
    data: input,
    where: { id },
  })
}

export const deleteSiteDiary: MutationResolvers['deleteSiteDiary'] = ({
  id,
}) => {
  return db.siteDiary.delete({
    where: { id },
  })
}
