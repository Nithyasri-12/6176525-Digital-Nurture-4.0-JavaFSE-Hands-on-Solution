import static org.junit.Assert.*;
import org.junit.Test;
public class AssertionsTest {
    @Test
    public void testAssertEquals() {
        int expected = 10;
        int actual = 5 + 5;
        assertEquals("Expected and actual values should match", expected, actual);
    }
    @Test
    public void testAssertTrue() {
        boolean result = 10 > 5;
        assertTrue("10 should be greater than 5", result);
    }
    @Test
    public void testAssertFalse() {
        boolean result = 3 > 8;
        assertFalse("3 is not greater than 8", result);
    }
    @Test
    public void testAssertNull() {
        String str = null;
        assertNull("String should be null", str);
    }
    @Test
    public void testAssertNotNull() {
        String str = "JUnit";
        assertNotNull("String should not be null", str);
    }
}
