package com.example;

import com.example.dao.EmployeeDAO;
import com.example.model.Employee;

public class App {
    public static void main(String[] args) {
        
        Employee emp = new Employee();
        emp.setFirstName("John");
        emp.setLastName("Doe");
        emp.setEmail("john.doe@example.com");

        EmployeeDAO dao = new EmployeeDAO();
        Integer id = dao.addEmployee(emp);
        System.out.println("✅ Employee added with ID: " + id);
    }
}
