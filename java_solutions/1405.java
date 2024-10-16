/*
1405. Longest Happy String

A string s is called happy if it satisfies the following conditions:
s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.
 */
class Solution{
    public String longestDiverseString(int a, int b, int c) {
        String result = "";
        while (a != 0 || b != 0 || c!= 0){
            //Find the maximum of the three value
            char currentChar = 'a';
            if (b > a &&  b > c){
                currentChar = 'b';
            }else if (c > a){
                currentChar = 'c';
            }
            if (result.length() == 1 || result.isEmpty()){
                result += currentChar;
            }else {
                if (result.charAt(result.length() - 1) == result.charAt(result.length() - 2) && result.charAt(result.length() - 1) == currentChar){
                    char newCurrentChar = 'd';
                    if (a > 0 && currentChar != 'a')
                        newCurrentChar = 'a';
                    if (newCurrentChar == 'd' && b > 0 && currentChar != 'b' || b < a && currentChar != 'b' && b > 0)
                        newCurrentChar = 'b';
                    if (newCurrentChar == 'd' && c > 0 && currentChar != 'c' || c < b && c < a && currentChar != 'c' && c > 0)
                        newCurrentChar = 'c';


                    if (newCurrentChar == 'd')
                        return result;

                    currentChar = newCurrentChar;
                    result += currentChar;
                }else{
                    result += currentChar;
                }
            }
            if (currentChar == 'a'){
                a -= 1;
            } else if (currentChar == 'b'){
                b -= 1;
            }else {
                c -= 1;
            }

        }
        return result;
    }
}


