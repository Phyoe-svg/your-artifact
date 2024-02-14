const Result = (result) => {
  const result_div = document.createElement("div");
  result_div.className = "result";
  result_div.innerHTML = `<label for="progress">${result.title}</label>
    <progress value="${result.progress}" max="100"></progress>${result.progress}%`;
  return result_div;
};

export default Result;
