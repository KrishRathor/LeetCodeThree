public class Main {
    public int[] TwoSum (int[] nums, int target) {
    int[] result = new int[2];
    int n = nums.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = i+1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    return result;
}

}