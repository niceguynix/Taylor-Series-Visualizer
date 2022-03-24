let input = document.getElementById("func_input");
let calc = document.getElementById("calc");
let series = document.getElementById("series");
let terms = document.getElementById("no_of_terms");

calc.addEventListener("click", () => {
  console.log(typeof terms.value)
  //   console.log(input.value);
  //   console.log(math.derivative(input.value, "x").toString());
  //series.innerText = math.derivative(input.value, 'x').toString();
  taylor = get_taylor_terms(input.value, terms.value ? terms.value : 5  );
  katex.render(taylor, series, {
    throwOnError: false,
  });
  functionPlot({
    target: "#graph",
    data: [
      {
        fn: input.value,
        graphType: "polyline",
      },
      { fn: taylor, 
        // updateOnMouseMove: true, 
        graphType: "polyline"
       },
    ],
  });
});
