function productOfTermsInSumOf2020(numbers, numberOfTerms) {
  return numbers
    .flatMap((expense, index) => getPermutations([expense], tailFromIndex(numbers, index + 1), numberOfTerms))
    .map(permutation => sumOfList(permutation) === 2020 ? productOfList(permutation) : 0)
    .find(product => product > 0);
}

const getPermutations = (head, tail, numberOfTerms) =>
  head.length < numberOfTerms - 1
    ? tail.flatMap((tailItem, index) => getPermutations(head.concat(tailItem), tailFromIndex(tail, index + 1), numberOfTerms))
    : tail.map(t => head.concat(t));

const tailFromIndex = (list, index) => list.slice(index, list.length);
const sumOfList = (list) => list.reduce((a, b) => a + b);
const productOfList = (list) => list.reduce((a, b) => a * b);

// Eg. productOfTermsInSumOf2020([2000, 12312412, 412412521, 5215, 123123125, 215215, 1, 32232215, 12144225, 11244212, 4, 51244211, 12435, 10, 124213, 1124425, 5], 5) => 400000