const leetCode = (((nums) => {
  let max = Math.max(...nums)
  console.log(nums.length)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1, sum; j < nums.length; j++) {
      if (j === i + 1){
        sum = nums[i] + nums[j];
        if (sum > max) max = sum;
        continue;
      }
      sum = sum + nums[j];
      if (sum > max) max = sum;
      console.log(sum)
    }
    console.log('max>'+i, max);
  }
}))([2,1]);
