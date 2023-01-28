function letterCombinations(input_digit) {
  const arr = input_digit.split("");
  //console.log(arr)
  const alp =["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  const ans = arr.map(num => alp[num])
  let i
  let j
  const fans = []
  for(i=0;i<ans[0].length;i++)
  {
    for(j=0;j<ans[1].length;j++)
    {
      fans.push((ans[0][i] + ans[1][j]))
    }
  }
  return fans
}

module.exports = letterCombinations;
