const documents = [
  {
    title: 'A Continuous Integration System',
    authors: ['Malini Das'],
    url: 'http://www.aosabook.org/en/500L/a-continuous-integration-system.html',
    uploadedAt: ''
  }, {
    title: 'An Event-Driven Web Framework',
    authors: ['Leo Zovic'],
    url: 'http://www.aosabook.org/en/500L/an-event-driven-web-framework.html',
    uploadedAt: ''
  }, {
    title: 'Applying Optimization Principle Patterns to Component Deployment and Configuration Tools ',
    authors: [
      'Doug C. Schmidt',
      'William R. Otte',
      'Aniruddha Gokhale'
    ],
    url: 'www.aosabook.org/en/posa/applying-optimization-principle-patterns-to-component-deployment-and-configuration-tools.html',
    uploadedAt: ''
  }, {
    title: 'High Performance Networking in Chrome',
    authors: ['Ilya Grigorik'],
    url: 'http://www.aosabook.org/en/posa/high-performance-networking-in-chrome.html',
    uploadedAt: ''
  }, {
    title: 'Firefox Release Engineering',
    authors: [
      'Chris AtLee',
      'Lukas Blakk',
      "John O'Duinn",
      'Armen Zambrano Gasparnian'
    ],
    url: 'http://www.aosabook.org/en/ffreleng.html',
    uploadedAt: ''
  }, {
    title: ' 	LLVM',
    authors: ['Chris Lattner'],
    url: 'http://www.aosabook.org/en/llvm.html',
    uploadedAt: ''
  }, {
    title: 'The Hadoop Distributed File System',
    authors: [
      'Robert Chansler',
      'Hairong Kuang',
      'Sanjay Radia',
      'Konstantin Shvachko', 
      'Suresh Srinivas'
    ],
    url: 'http://www.aosabook.org/en/hdfs.html',
    uploadedAt: ''
  }
]

async function listDocuments () {
  return { documents }
}

export default {
  listDocuments
}