class Shuffling{
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        int n = arr.length;
        int[] shuffle = new int[n];
        int j = 0;
        int nu = n/2;
        for (int i =0; i<nu; i++){
            shuffle[j] = arr[i];
            shuffle[j+1] = arr[i+nu];
            j+=2;
            }
            System.out.println(shuffle);
        }
    }