const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "jsonlogs/",
  reportPath: "reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "110",
    },
    device: "Local test machine",
    platform: {
      name: "MacOs",
      version: "13.1",
    },
  },
  customData: {
    title: "Star Wars Search",
    data: [
      { label: "Project", value: "Search Functionality" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Feb 25th 2023, 02:31 PM EST" },
      { label: "Execution End Time", value: "Feb 25th 2023, 02:56 PM EST" },
    ],
  },
});