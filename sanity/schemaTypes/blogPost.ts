import { defineType, defineField } from "sanity";

export default defineType({
    name: "blog",
    title: "Blog / Блог",
    type: "document",
    fields: [
        defineField({
            name: "id",
            title: "Id",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "object",
            fields: [
                {
                    name: "en",
                    title: "English",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "ru",
                    title: "Русский",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "az",
                    title: "Azərbaycan",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
            ],
        }),
        defineField({
            name: "image1",
            title: "Image 1",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "image2",
            title: "Image 2",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "shortDescription",
            title: "Short Description",
            type: "object",
            fields: [
                {
                    name: "en",
                    title: "English",
                    type: "text",
                    validation: (Rule) => Rule.max(200),
                },
                {
                    name: "ru",
                    title: "Русский",
                    type: "text",
                    validation: (Rule) => Rule.max(200),
                },
                {
                    name: "az",
                    title: "Azərbaycan",
                    type: "text",
                    validation: (Rule) => Rule.max(200),
                },
            ],
        }),
        defineField({
            name: "description1",
            title: "Description 1",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text" },
                { name: "ru", title: "Русский", type: "text" },
                { name: "az", title: "Azərbaycan", type: "text" },
            ],
        }),
        defineField({
            name: "description2",
            title: "Description 2",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text" },
                { name: "ru", title: "Русский", type: "text" },
                { name: "az", title: "Azərbaycan", type: "text" },
            ],
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
