package com.example;
import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
public class CalculatorTest {
    private Calculator calculator;
    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();  
    }
    @After
    public void tearDown() {
        System.out.println("Test complete. Cleaning up...\n");
        calculator = null;
    }
    @Test
    public void testAddition() {
        int result = calculator.add(5, 3);
        assertEquals(8, result);
        System.out.println("Addition Test Passed. Result = " + result);
    }
    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
        System.out.println("Subtraction Test Passed. Result = " + result);
    }
    @Test
    public void testMultiplication() {
        int result = calculator.multiply(6, 7);
        assertEquals(42, result);
        System.out.println("Multiplication Test Passed. Result = " + result);
    }
}
