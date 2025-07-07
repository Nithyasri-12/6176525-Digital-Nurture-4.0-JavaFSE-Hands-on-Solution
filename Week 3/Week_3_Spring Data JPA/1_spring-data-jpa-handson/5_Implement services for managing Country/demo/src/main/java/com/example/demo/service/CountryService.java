package com.example.demo.service;

import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public Country getCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public Country updateCountry(String code, Country updatedCountry) {
        Optional<Country> existing = countryRepository.findById(code);
        if (existing.isPresent()) {
            Country c = existing.get();
            c.setCoName(updatedCountry.getCoName());
            return countryRepository.save(c);
        }
        return null;
    }

    public boolean deleteCountry(String code) {
        if (countryRepository.existsById(code)) {
            countryRepository.deleteById(code);
            return true;
        }
        return false;
    }

    public List<Country> searchCountries(String partialName) {
        return countryRepository.findByCoNameContainingIgnoreCase(partialName);
    }
}
