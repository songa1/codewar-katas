// complete the function
function solution(string) {
  let arr = string.split("");

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].toUpperCase() === arr[i]) {
      arr.splice(i, 0, " ");
      i++;
    }
  }

  return arr.join("");
}

console.log(solution("camelCase"));
