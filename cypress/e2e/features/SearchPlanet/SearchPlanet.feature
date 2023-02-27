Feature: Search Planet functionality
    Scenario: Search for Star Wars planet
        Given the user is on the star wars search website
        When the user searches for a planet 
        Then the user should see the planet properties population, climate and gravity

    Scenario: Search for invalid Star Wars planet
        Given the user is on the star wars search website
        When the user searches for an invalid planet 
        Then the user should see a validation message of planet not being found
