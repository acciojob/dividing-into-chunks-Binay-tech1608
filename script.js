const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  arr.sort((a,b) => b-a);
  let sum = 0;
  let result = [];
  let subarr = [];
  for(let el of arr){
	  while (sum<=n) {
	  	sum += el;
        subarr.push(el);
	  }
	  result.push(subarr);
	  sum=0;
	  subarr=[];
  }
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
