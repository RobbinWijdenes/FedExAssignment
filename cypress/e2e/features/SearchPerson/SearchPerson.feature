# Feature: duckduckgo.com
#   Scenario: visiting the frontpagex
#     When I visit duckduckgo.com
#     Then I should see a search bar


Feature: Search Person functionality
  Scenario: Search for Star Wars character 
    Given the user is on the star wars search website
    When the user searches for a character 
    Then the user should see the character properties gender, birth year, eye color and skin color

  Scenario: Search for invalid Star Wars character 
    Given the user is on the star wars search website
    When the user searches for an invalid character 
    Then the user should see a validation message of character not being found

  Scenario: Clear search form
    Given the user has searched for a valid character
    When the user clears the search form 
    Then the user should see no search results

  Scenario: Switch category
    Given the user has searched for a valid planet
    When the user switches category and searches for the same name
    Then the user should see a validation message of character not being found