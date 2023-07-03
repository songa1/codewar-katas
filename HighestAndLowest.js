function highAndLow(numbers) {

  let nums = numbers.split(" ");
  console.log(nums);

  let low = +nums[nums.length - 1];
  let high = +nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (+nums[i] >= high) high = +nums[i];
    if (+nums[i] <= low) low = +nums[i];
  }

  let final = `${high} ${low}`;
  console.log(final);
  return final;
  // ...
}

highAndLow("-2070 -2676 -2487 -1503 -1668 -1666 -3138 -3418 -2465 -839 -680 -2206 -1749 -505 -3182 -813 -1519 -391 -1431 -612 -1732");
