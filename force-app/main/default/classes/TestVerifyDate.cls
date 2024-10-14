@isTest
public class TestVerifyDate {
    @isTest
  static void testDates()
  {
     date myDate = date.newInstance(2024, 10, 01);
    date endDate = date.newInstance(2024, 10, 31);
     VerifyDate.CheckDates(myDate, endDate);
  }
     @isTest
  static void testDates1()
  {
     date myDate = date.newInstance(2024, 10, 01);
    date endDate = date.newInstance(2024, 10, 15);
     VerifyDate.CheckDates(myDate, endDate);
  }


}