const ga4 = require("dataform-ga4-sessions");

// Define your config
const config = {
    dataset: "analytics_286198289",
    incrementalTableName: "events_20240610",
};

const eventConfig = [
    {
        eventName: "contact_submit",
        eventParams: [{
            name: "page_location",
            type: "string"
        }],
    },
    {
        eventName: "email_subscribe",
        eventParams: [{
            name: "page_location",
            type: "string"
        }],
    },
    {
        eventName: "event_submit",
        eventParams: [{
            name: "title",
            type: "string"
        }],
    }
];

// Declare GA4 source tables
ga4.declareSources(config);
// Create sessions object
const sessions = new ga4.Session(config);
// Publish session table
sessions.publish();
// Publish session assertions
sessions.publishAssertions();

// Create event factory object
const ef = new ga4.EventFactory(config);
// Create all recommended form tracking events
let events = ef.createEvents(eventConfig);
// Publish events
events.forEach((event) => event.publish());
