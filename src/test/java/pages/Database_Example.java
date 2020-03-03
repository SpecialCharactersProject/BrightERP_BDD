package pages;

import java.sql.*;

public class Database_Example {

    public static void main(String[] args) {

        //username hr
        // password hr
        // SID xe
        // URL ec2-18-188-50-52.us-east-2.compute.amazonaws.com
        // PORT 1521

        String url = "jdbc:oracle:thin:@ec2-18-188-50-52.us-east-2.compute.amazonaws.com:1521:xe";
        String username = "hr";
        String password = "hr";

        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet resultSet = statement.executeQuery("select first_name,last_name from employees");

            resultSet.next();
            resultSet.next();
            resultSet.next();
            resultSet.next();
//        int number = 1;
//            while(resultSet.next()){
//                System.out.println(number+ " first name: " + resultSet.getObject(1) + " last name " + resultSet.getObject(2));
//                number++;
//            }
            System.out.println(resultSet.getObject(2));
            System.out.println(resultSet.getObject(3));

            System.out.println("Connection successful!");

            connection.close();
            statement.close();
            resultSet.close();

        } catch (SQLException e) {
            System.out.println(e.getLocalizedMessage());
            System.out.println("Connection failed");
        }
    }
}
