import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class JavaTasksVjezbanje {

    public static void main(String[] args) {

//        String word = "Java";
//        String word2 = "Java";
//        System.out.println( word.compareTo(word2));

//        for (int i = 0; i < 5; i *= 2) {
//            int j = 0;
//            System.out.println("milos");
//// statements
//        }

//        numOfLetters("boozzzzzzeeeee");

//        String name = "montenegro";
//
//        StringBuilder sb = new StringBuilder(name);
//
//        System.out.println(sb.reverse());

//          Scanner scanner = new Scanner(System.in);
//
//        System.out.println("how many names you want to enter ?");
//
//        int names = scanner.nextInt();
//
//        scanner.nextLine();
//
//        String [] arr = new String[names];
//
//        for (int i = 0 ; i < names ; i++) {
//            System.out.println("enter name " + (i + 1));
//            arr[i] = scanner.nextLine();
//        }
//        System.out.println(Arrays.toString(arr));

//        String arr [] = {"Jamesbond3@gmail.com", "notvalid@.com", "Adam5@yahoo.com", "Fran2113gmailcom", "JamieM@yahoo.com"};
//
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i].contains("@") && (arr[i].contains("gmail") || arr[i].contains("yahoo")) && arr[i].contains(".") && arr[i].contains("com") ) {
//                System.out.println(arr[i]);
//            }
//        }




//        name("orange","tis");


//        String str = "Java is programming langauge";
//
//        String [] arr = str.split(" ");
////        System.out.println(Arrays.toString(arr));
//        char [] aaa = str.toCharArray();
//        System.out.println(Arrays.toString(aaa));

//        String [] arr ={"b","g","h","f","a"};
////        Arrays.sort(arr);
//        System.out.println(Arrays.toString(arr));
//        System.out.println(Arrays.binarySearch(arr,"f"));

//

//        Scanner scanner = new Scanner(System.in);
////
////        System.out.println("Enre some number:");
////
////        int num = scanner.nextInt();
////
////        for (int i = 0; i < num; i++) {
////
////            for (int j = 0; j < num; j++) {
////                System.out.print("#");
////            }
////            System.out.println();
////        }

//        int[] arr = {-7, 1, 13, 7, -23, 224, 11, -3, 8};
//
//        MaxAndMin(arr);

//        int [] aaaa = {1,2,3,4,-8,-11, -8,4,3,2,1,7};
//        findNonDuplicate(aaaa);

//        System.out.println(isPalindrome("laughing"));

//        ArrayList<String> words = new ArrayList<>();
////        words.add("Talking");
////        words.add("civic");
////        words.add("kayak");
////        words.add("lol");
////        words.add("missing");
////        words.add("racecar");
////        words.add("smiling");
////        words.add("eeewwweee");
////
////
////        BiggestPalindrome(words);

//        int[] arr = {1, 4, 8, 2};
//
//        System.out.println(Arrays.toString(returnArrayWithResult(arr, 18)));

        String [] arr = {"milos","stela","butko"};

        System.out.println(Arrays.toString(returnArray2222(arr,"ojha",1)));

        System.out.println("AAAAAAEEEEEEEEEEEEE");

    }

//    public static String [] returnArray (String [] arr, String word) {
//
//        String [] bbb = Arrays.copyOf(arr,arr.length + 1);
//        bbb[bbb.length - 1 ] = word;
//
//        return bbb;
//    }


    public static String [] returnArray2222 (String [] eee, String word, int index) {

        String [] bbb = Arrays.copyOf(eee,eee.length + 1);
        bbb[bbb.length - 1 ] = word;

        bbb[index] = word;

        return bbb;



    }


//    public static void draw (String color, int size) {
//
//    }


    public static void name (String first, String second) {
        Scanner scanner = new Scanner ( System.in);
       if (first.contains(second)) {
           first = first.replace(second,"");
           System.out.println(first);
       } else {
           System.out.println("string not found, try again:");
           String third = scanner.nextLine();
           if (first.contains(third)) {
              first =  first.replace(third,"");
               System.out.println(first);
           }
       }
    }

    //    0, -3 ,-5 ,6 ,1

//    public static void MaxAndMin(int[] arr) {
//
//        int max = 0;
//        int min = 0;
//
//        for (int i = 0; i < arr.length; i++) {
//
//            if (arr[i] > max) {
//                max = arr[i];
//            }
//
//            if (arr[i] < min) {
//                min = arr[i];
//            }
//        }
//
//        System.out.println("Max " + max);
//
//        System.out.println("Min " + min);
//    }
//
//    public static void findNonDuplicate(int[] arr) {
//
//        //    1,4,5,3,3,1,4
//
//
//        for (int i = 0; i < arr.length; i++) {
//            int count = 0;
//            for (int j = 0; j < arr.length; j++) {
//                if (arr[i] == arr[j]) {
//                    count++;
//                }
//            }
//            if (count == 1) {
//                System.out.println(arr[i]);
//            }
//        }
//
//    }
//
//    public static void BiggestPalindrome(ArrayList<String> words) {
//
//
//        ArrayList<String> palindromes = new ArrayList<>();
//
//        for (String word : words) {
//
//            if (isPalindrome(word)) {
//
//                palindromes.add(word);
//
////                if (word.length() > max) {
////                    max = word.length();
////                }
//
//
//            }
//        }
//
//        System.out.println("Palindromes list " + palindromes);
//
//        int max = 0;
//
//        String str = "";
//
//        for (int i = 0; i < palindromes.size(); i++) {
//            if (palindromes.get(i).length() > max) {
//                max = palindromes.get(i).length();
//                str = palindromes.get(i);
//
//            }
//
//        }
//
//
//        System.out.println(str);
//
//    }
//
//
//    public static boolean isPalindrome(String word) {
//
//        String str = "";
//        for (int i = word.length() - 1; i >= 0; i--) {
//
//            str += word.charAt(i);
//
//        }
//
////        System.out.println("Str string " + str);
//        if (word.equals(str)) {
//            return true;
//        }
//
//        return false;
//    }
//
//    public static int[] returnArrayWithResult(int[] arr, int number) {
//
//        // 1,2,0,0        30     1200 + 30 = 1230
//
//        String str = "";
//
//        int sum = 0;
//
//        for (int i = 0; i < arr.length; i++) {
//            str += arr[i];
//        }
//        int firstArray = Integer.parseInt(str);
//
//        sum = firstArray + number;
//
//        String str2 = sum + "";
//
//        int[] finalArr = new int[str2.length()];
//
//        for (int i = 0; i < str2.length(); i++) {
//
//            finalArr[i] = Integer.parseInt(str2.charAt(i) + "");
//
//        }
//
//        return finalArr;

    public static void numOfLetters(String word) {

        String helper = "";    // apple
        int count = 0;

        for (int i = 0; i < word.length(); i++) {
            count = 0;
            if (!helper.contains(word.charAt(i) + "")) {
                helper += word.charAt(i);                       // helper = aple
                for (int j = 0; j < word.length(); j++) {
                    if (word.charAt(i) == word.charAt(j)) {
                        count++;    // 2

                    }
                }
                System.out.println(word.charAt(i) + "" + count);
            }
            //  a1  p2
        }
        System.out.println("helper " + helper);

        for (int i = 0; i < helper.length(); i++) {
            System.out.println("unique character " + helper.charAt(i));
        }

    }
}


