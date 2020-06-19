// ACM ICPC Team

/*
There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, you must determine the maximum number of topics a 2-person team can know. Also find out how many ways a team can be formed to know that many topics. Lists will be in the form of bit strings, where each string represents an attendee and each position in that string represents a field of knowledge, 1 if its a known field or 0 if not.
For example, given three attendees' data as follows:
10101
11110
00010

These are all possible teams that can be formed:
Members Subjects
(1,2)   [1,2,3,4,5]
(1,3)   [1,3,4,5]
(2,3)   [1,2,3,4]

In this case, the first team will know all 5 subjects. They are the only team that can be created knowing that many subjects.

Function Description
Complete the acmTeam function in the editor below. It should return an integer array with two elements: the maximum number of topics any team can know and the number of teams that can be formed that know that maximum number of topics.
acmTeam has the following parameter(s):
topic: a string of binary digits

Input Format
The first line contains two space-separated integers  and , where  represents the number of attendees and  represents the number of topics.
Each of the next  lines contains a binary string of length . If the th line's th character is , then the th person knows the th topic.

Output Format
On the first line, print the maximum number of topics a 2-person team can know.
On the second line, print the number of ways to form a 2-person team that knows the maximum number of topics.

Sample Input
4 5
10101
11100
11010
00101

Sample Output
5
2

Explanation
Calculating topics known for all permutations of 2 attendees we get:
(1,2)=> 4
(1,3)=> 5
(1,4)=> 3
(2,3)=> 4
(2,4)=> 4
(3,4)=> 5

The 2 teams (1, 3) and (3, 4) know all 5 topics which is maximal.
*/

function acmTeam(topic) {
    let maxValue = 0;
    let maxAmount = 0;

    for (let indexX = 0; indexX < topic.length; indexX++) {
        for (let indexY = indexX + 1; indexY < topic.length; indexY++) {
            // const teamTopics = (parseInt(topic[indexX], 2) | parseInt(topic[indexY], 2)).toString(2).match(/1/g).length;
            const teamTopics = bitOr(topic[indexX], topic[indexY]);
            if (maxValue === teamTopics)
                maxAmount++;
            else if (maxValue < teamTopics) {
                maxValue = teamTopics;
                maxAmount = 1;
            }

            console.log(teamTopics, maxValue, maxAmount);
        }
    }
    return [maxValue, maxAmount];
}

function bitOr(str1, str2) {
    let count = 0;
    for (let index = 0; index < str1.length; index++) {
        if (str1[index] === '1' || str2[index] === '1')
            count++;
    }
    return count;
}
// console.log(acmTeam(['10101', '11100', '11010', '00101']));
console.log(acmTeam(['11101', '10101', '11001', '10111', '10000', '01110']))

