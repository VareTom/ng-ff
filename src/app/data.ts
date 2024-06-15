import { faker } from '@faker-js/faker'

const featureNames = ['users', 'subscriptions', 'invoices']

export const features = [
  featureNames.map(name => {
    return {
      id: name,
      name: name.charAt(0).toUpperCase()
        + name.slice(1),
      description: faker.lorem.lines(1),
      value: faker.number.int(1000)
    }
  })
]
