let homeScore = 0
let awayScore = 0



function homeAdd() {
  homeScore ++
  console.log(homeScore)
  hscore.innerText = homeScore
  
  
  draw()
}
homeAdd()



function awayAdd() {
  awayScore ++
  console.log(ascore)
  ascore.innerText = awayScore
  
  draw()
  
}
awayAdd()

function homeSub() {
  homeScore --
  console.log(homeScore)
  hscore.innerText = homeScore
  draw()
}
homeSub()

function awaySub() {
  awayScore --
  console.log(awayScore)
  ascore.innerText = awayScore
  
  draw()
}
awaySub()

function draw(){
  let hscore = document.getElementById("hscore")
  let ascore = document.getElementById("ascore")
  console.log()
  
  
  
  
}
function resetScore(){
  
  homeScore = 0
  awayScore = 0
 console.log(homeScore)
 console.log(awayScore)
 ascore.innerText = awayScore
 hscore.innerText = homeScore
  
  document.getElementById("homeScore").reset()
}
resetScore()
draw()
