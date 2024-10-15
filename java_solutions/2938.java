/*
2938. Separate Black and White Balls
There are n balls on a table, each ball has a color black or white.
You are given a 0-indexed binary string s of length n, where 1 and 0 represent black and white balls, respectively.
In each step, you can choose two adjacent balls and swap them.
Return the minimum number of steps to group all the black balls to the right and all the white balls to the left.
*/

// Beats 100% on runtime!
class Solution {
    public long minimumSteps(String s) {
        long result = 0;
        long count = 0;
        for (int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '1'){
                count++;
            }
            else{
                result += count;
            }
        }
        return result;
    }
}