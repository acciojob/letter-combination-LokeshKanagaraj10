function letterCombinations(input_digit) {
  const arr = input_digit.split("");
  //console.log(arr)
  const alp =["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  const ans = arr.map(num => alp[num])
if(ans.length == 2){
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
	else if(ans.length == 3){
		 let i
		let j
		let k
  const fans = []
  for(i=0;i<ans[0].length;i++)
  {
    for(j=0;j<ans[1].length;j++)
    {
		for(k=0;k<ans[2].length;k++){
      fans.push((ans[0][i] + ans[1][j] + ans[2][k]))
		}
    }
  }
  return fans
	}
}

module.exports = letterCombinations;
