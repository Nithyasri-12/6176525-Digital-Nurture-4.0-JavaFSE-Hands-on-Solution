package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Dummy");
        MyService service = new MyService(mockApi);
        service.fetchData(); 
        verify(mockApi).getData(); 
        System.out.println("Verified: getData() was called");
    }
}
