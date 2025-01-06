package com;

//DatabaseConnection.java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
 private static final String URL = "jdbc:mysql://localhost:3306/TimeTrackingSystem";
 private static final String USER = "yourUsername";
 private static final String PASSWORD = "yourPassword";

 public static Connection getConnection() throws SQLException {
     return DriverManager.getConnection(URL, USER, PASSWORD);
 }
}