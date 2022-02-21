// Breadth First Search finds shortest path, but NOT cheapest

// Big O(V + E) - vertices + edges 

const graph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],  
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [], // find shortest path to mangoseller
  'jonny': [],
}


function findShortestPath(search) {
  let searchQueue = [...graph[search]]
  let alreadySearched = []

  while(searchQueue.length) {
    const person = searchQueue.shift()
    if(!alreadySearched.includes(person)) {
      if(person.includes('m')) {
        return {person, path: alreadySearched}
      }
      searchQueue = [...searchQueue, ...graph[person]]
      alreadySearched.push(person)
    }
  }

  return false
}

console.log(findShortestPath('you'))

