import { faker } from '@faker-js/faker'

export enum featureNames {
  USERS = 'users',
  SUBSCRIPTIONS = 'subscriptions',
  INVOICES = 'invoices'
}

export const features = [
  ...Object.values(featureNames).map(name => {
    return {
      id: name,
      name: name.charAt(0).toUpperCase()
        + name.slice(1),
      description: faker.lorem.lines(1),
      value: faker.number.int(1000)
    }
  })
]
