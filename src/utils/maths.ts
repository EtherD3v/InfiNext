export {}

const toBinary = <T>(dividend: T, divisor: T):T[] => 
{
	let quotient:number = 1;
	let rest:number;
	let resultBin:number[] = [];
	while (quotient >= 1){
		quotient = Math.trunc(dividend/divisor);
		rest = dividend & divisor;
		resultBin += rest == 1 ? 1 : 0;
		
	}
	return resultBin;
}
