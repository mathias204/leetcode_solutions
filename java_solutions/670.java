/*
670. Maximum Swap
You are given an integer num. You can swap two digits at most once to get the maximum valued number.
Return the maximum valued number you can get.
 */


import java.util.Arrays;

class Solution {
    public int maximumSwap(int num) {
        return Integer.parseInt(maximumSwapStr(String.valueOf(num)));
    }

    public String maximumSwapStr(String num){
        char[] numberStr = num.toCharArray();
        if (numberStr.length <= 1 )
            return num;
        char currentNumber = numberStr[0];
        int maxAt = 0;
        if (currentNumber == '9')
            return currentNumber + maximumSwapStr(new String(Arrays.copyOfRange(numberStr, 1, numberStr.length)));

        for (int i = 1; i < numberStr.length; i++){
            if(numberStr[i] > currentNumber)
                maxAt = numberStr[i] >= numberStr[maxAt] ? i : maxAt;
        }
        if (maxAt != 0){
            numberStr[0] = numberStr[maxAt];
            numberStr[maxAt] = currentNumber;
            return new String(numberStr);
        } else {
            return currentNumber + maximumSwapStr(new String(Arrays.copyOfRange(numberStr, 1, numberStr.length)));
        }
    }
}