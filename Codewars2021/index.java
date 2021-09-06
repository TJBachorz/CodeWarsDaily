import static java.util.Arrays.*;

public class isogram {
    public static boolean  isIsogram(String str) {
        if (str == null) return false;
        return str.length() == str.toLowerCase().chars().distinct().count();
    } 
}