let input = document.getElementById("func_input");
let calc = document.getElementById("calc");
let series = document.getElementById("series");

calc.addEventListener("click", () => {
  //   console.log(input.value);
  //   console.log(math.derivative(input.value, "x").toString());
  //series.innerText = math.derivative(input.value, 'x').toString();
  taylor = get_taylor_terms(input.value, 20);
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
