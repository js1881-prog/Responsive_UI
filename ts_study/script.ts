function test(...v2: number[]): number {
    console.log(v2);
    return v2.length;
}

console.log(test(4,2,3,4,5,6))