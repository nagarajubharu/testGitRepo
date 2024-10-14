public class PromiseController{

   
// Static variable to hold the value between method calls
public static String staticValue = 'Initial Value';


@AuraEnabled
public static String methodOne() {
    // Set a static variable
    staticValue = 'Value from Method One';
    System.debug('1.StaticValue:'+staticValue);
    return staticValue;
    
}

@AuraEnabled
public static String methodTwo() {
    // Use the static variable
    System.debug('1.StaticValue:'+staticValue);
    return 'Result from Method Two using staticValue: ' + staticValue;
}

@AuraEnabled
public static void resetStaticValue() {
    staticValue = null; // Optional: reset the static variable
}
}