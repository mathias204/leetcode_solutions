import java.util.Arrays;

// This solution is not accepted, due to it being too slow.
// A possible solution would be to sort the array once and then use a binary search method to find the insertion place of the new value
class Solution {
    public long maxKelements(int[] nums, int k) {
        long result = 0;
        if (nums.length == 0){
            return result;
        }
        for (int i = 0;i<k; i++){
            nums = Arrays.stream(nums).sorted().toArray();
            int value = nums[nums.length-1];
            nums[nums.length -1] = (int) Math.ceil((double) value /3);
            result += value;
        }
        return result;
    }
}
