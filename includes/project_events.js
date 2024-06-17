const config = [
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

module.exports = { config };