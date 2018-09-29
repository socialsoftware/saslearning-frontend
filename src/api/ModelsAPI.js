const models = [
  {
    id: 0,
    title: 'Scenario-Based Analysis of Software Architecture',
    description: 'Analyze architectures using scenarios with respect to achieving quality attributes.',
    createdAt: '',
    fields: [
      {
        title: 'Tactic',
        description: 'Mollit qui amet non excepteur proident.',
        required: true,
        fields: [
          {
            title: 'Source of stimulus',
            description: 'Culpa non irure culpa veniam do ex ad.',
            required: true,
            fields: []
          },
          {
            title: 'Stimulus',
            description: 'Id anim aliqua reprehenderit nostrud adipisicing dolor.',
            required: true,
            fields: []
          },
          {
            title: 'Environment',
            description: 'Non qui do deserunt et pariatur nisi quis fugiat dolor aliqua.',
            required: true,
            fields: []
          },
          {
            title: 'Artifacts',
            description: 'Et magna labore voluptate esse nulla.',
            required: true,
            fields: []
          },
          {
            title: 'Response',
            description: 'Culpa excepteur et exercitation id excepteur.',
            required: true,
            fields: []
          },
          {
            title: 'Response Measure',
            description: 'Ex voluptate qui reprehenderit elit aliquip dolore.',
            required: true,
            fields: []
          }
        ]
      }
    ]
  }
]

async function listModels () {
  return { models }
}

async function getModel ({ id }) {
  return { model: models.filter(model => model.id === id)[0] }
}

export default {
  getModel, listModels
}
