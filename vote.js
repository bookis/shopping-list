var vote = {results: {}, question: "Who will win?"}

vote.cast = function(name) {
  if (this.results[name] === undefined) {
    this.results[name] = 0
  }
  this.results[name]++
}

vote.cast("Bernie")
vote.cast("Bernie")
vote.cast("Bernie")
vote.cast("Bernie")
vote.cast("Trump")

console.log(vote);
