/**
 * @author  Mathias Brosens
 * @date    2024/02/22
 */

/**
 * 997. Find the Town Judge
 * https://leetcode.com/problems/find-the-town-judge/description/
 * 
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1.The town judge trusts nobody.
2.Everybody (except for the town judge) trusts the town judge.
3.There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 */

function findJudge(n: number, trust: number[][]): number {
  if (n === 1) {
    return 1;
  }
  const peopleWithTrust: Set<number> = new Set(
    trust.map((relation) => relation[0])
  );
  for (let i: number = 0; i <= n; i++) {
    if (!peopleWithTrust.has(i)) {
      const test = trust.filter((relation) => relation[1] === i);
      if (test.length === n - 1) {
        return i;
      }
    }
  }
  return -1;
}
