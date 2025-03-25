import { defineType, defineField } from "sanity";

export default defineType({
    name: "emailSubscription",
    title: "Email Subscription",
    type: "document",
    fields: [
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "subscribedAt",
            title: "Subscribed At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],
});
