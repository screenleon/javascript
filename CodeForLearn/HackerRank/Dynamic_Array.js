// Dynamic Array

/*
Create a list, seqList, of N empty sequences, where each sequence is indexed from 0 to N-1. The elements within each of the N sequences also use 0-indexing.
Create an integer, lastAnswer, and initialize it to 0.
The 2 types of queries that can be performed on your list of sequences (seqList) are described below:
Query: 1 x y
Find the sequence, seq, at index ((x⊕lastAnswer)%N) in seqList.
Append integer y to sequence seq.
Query: 2 x y
Find the sequence, seq, at index ((x⊕lastAnswer)%N) in seqList.
Find the value of element y%size in seq (where size is the size of seq) and assign it to lastAnswer.
Print the new value of lastAnswer on a new line

Task
Given N, Q, and Q queries, execute each query.
Note: ⊕ is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.

Input Format
The first line contains two space-separated integers, N (the number of sequences) and Q (the number of queries), respectively.
Each of the Q subsequent lines contains a query in the format defined above.

Output Format
For each type 2 query, print the updated value of lastAnswer on a new line.

Sample Input
2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1

Sample Output
7
3

Explanation
Initial Values:
N=2
lastAnswer=0
S0 = [ ]
S1 = [ ]

Query 0: Append 5 to sequence ((0⊕0)%2)=0.
lastAnswer=0
S0 = [5]
S1 = [ ]

Query 1: Append 7 to sequence ((1⊕0)%2)=1.
S0 = [5]
S1 = [7]

Query 2: Append 3 to sequence ((0⊕0)%2)=0.
lastAnswer=0
S0 = [5, 3]
S1 = [7]

Query 3: Assign the value at index 0 of sequence ((1⊕0)%2)=0 to , print .
lastAnswer=7
S0 = [5, 3]
S1 = [7]
7

Query 4: Assign the value at index 1 of sequence ((1⊕7)%2)=0 to , print .
lastAnswer=3
S0 = [5, 3]
S1 = [7]
3
*/

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

 // Runtime Error
 function dynamicArray(n, queries) {
    // Write your code here
    const arrays = [];
    const printer = [];
    for (let index = 0; index < n; index++) {
        arrays[index] = [];
    }
    console.log(arrays)

    for (let index = 0; index < queries.length; index++) {
        const query = queries[index];
        switch (query[0]) {
            case 1:
                arrays[query[1]].push(query[2]);
                console.log(arrays);
                break;
            case 2:
                const printArrayIndex = (query[1] || query[2]) && !(query[1] && query[2]) % n;
                printer.push(arrays[printArrayIndex][arrays[printArrayIndex].length - 1]);
        }
    }
    return printer;
}

function XOR(a, b) {
    return (a || b) && !(a && b);
}

dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]])

