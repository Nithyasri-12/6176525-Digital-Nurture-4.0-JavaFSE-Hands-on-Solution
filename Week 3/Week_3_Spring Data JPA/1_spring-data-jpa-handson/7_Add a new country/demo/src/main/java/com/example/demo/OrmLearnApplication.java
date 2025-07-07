package com.example.demo;

import com.example.demo.entity.Country;
import com.example.demo.service.CountryService;
import com.example.demo.service.exception.CountryNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @PostConstruct
    public void init() {
        testFindCountryByCode();
        testAddCountry(); // ✅ New test
    }

    private void testFindCountryByCode() {
        try {
            LOGGER.info("Start");
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country: {}", country);
            LOGGER.info("End");
        } catch (CountryNotFoundException e) {
            LOGGER.error("Exception: {}", e.getMessage());
        }
    }

    private void testAddCountry() {
        LOGGER.info("Start - testAddCountry");

        Country newCountry = new Country();
        newCountry.setCode("JP");
        newCountry.setName("Japan");

        countryService.addCountry(newCountry);

        try {
            Country country = countryService.findCountryByCode("JP");
            LOGGER.debug("Added Country: {}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country not found after insertion: {}", e.getMessage());
        }

        LOGGER.info("End - testAddCountry");
    }
}
