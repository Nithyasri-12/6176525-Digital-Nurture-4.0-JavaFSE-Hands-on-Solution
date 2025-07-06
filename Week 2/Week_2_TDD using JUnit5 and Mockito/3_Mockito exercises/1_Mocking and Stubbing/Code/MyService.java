package com.example;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        String data = api.getData();
        System.out.println("Data fetched: " + data); 
        return data;
    }
}
