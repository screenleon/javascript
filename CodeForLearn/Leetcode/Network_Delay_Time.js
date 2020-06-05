// 743. Network Delay Time

/*
There are N network nodes, labelled 1 to N.
Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.
Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Example 1:
Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2

Note:
N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.
*/

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTimeReference1 = (times, N, K) => {
    const time = Array(N + 1).fill(Infinity);
    time[K] = 0;
    for (let i = 0; i < N; i++) {
        for (const [u, v, t] of times) {
            if (time[u] === Infinity) continue;
            if (time[v] > time[u] + t) {
                time[v] = time[u] + t;
            }
            
        }
    }
    console.log(time)
    const res = Math.max(...time.splice(1, N));
    return res === Infinity ? -1 : res;
};

const test = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
console.log(Infinity > 1)
console.log(networkDelayTimeReference1(test, 4, 2));