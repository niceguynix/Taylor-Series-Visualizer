function get_taylor_terms(func, n) {
  taylor_terms = [];
  der_terms=[]
  taylor_terms.push(math.evaluate(func, { x: 0 }).toString());
  der_terms.push(func);
//   console.log(taylor_terms);
  for (let i = 1; i < n; i++) {
      // console.log(der_terms);
      der = math.derivative(der_terms[i-1], "x").toString();
      der_terms.push(der);
      der_evaluated = math.evaluate(`${der}/${i}!`,{x:0}).toString();
      taylor_terms.push(`${der_evaluated} * x^${i}`);
      func = taylor_terms[taylor_terms.length - 1];
    //   console.log(taylor_terms,i);
    }
  console.log(taylor_terms);
  return taylor_terms.join("+");
}
