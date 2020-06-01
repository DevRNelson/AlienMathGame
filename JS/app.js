function add() {
  /* Math calculations */
  var MATH1 = (Math.floor(Math.random() * 25));
  var MATH2 = (Math.floor(Math.random() * 9));

  var MATH3 = (Math.floor(Math.random() * 25));
  var MATH4 = (Math.floor(Math.random() * 9));

  var MATH5 = (Math.floor(Math.random() * 25));
  var MATH6 = (Math.floor(Math.random() * 9));

  var MATH7 = (Math.floor(Math.random() * 25));
  var MATH8 = (Math.floor(Math.random() * 9));

  const answer = MATH1 + MATH2;
  const answer2 = MATH3 + MATH4;
  const answer3 = MATH5 + MATH6;
  const answer4 = MATH7 + MATH8;

  /*  Assignment */
  var anspicker = (Math.floor(Math.random() * 3));
  
  if (anspicker == 0) {
    document.getElementById("cannon").innerHTML = `${answer}`;
} else if (anspicker == 1) {
   document.getElementById("cannon").innerHTML = `${answer2}`;
} else if (anspicker == 2) {
  document.getElementById("cannon").innerHTML = `${answer3}`;
} else {
  document.getElementById("cannon").innerHTML = `${answer4}`;
}  

  document.getElementById("p1").innerHTML = `${MATH1} + ${MATH2}`;
  document.getElementById("p2").innerHTML = `${MATH3} + ${MATH4}`;
  document.getElementById("p3").innerHTML = `${MATH5} + ${MATH6}`;
  document.getElementById("p4").innerHTML = `${MATH7} + ${MATH8}`;

}


add();

