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
            type: "string",
            validation: (Rule) => Rule.required(),
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
            type: "text",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "description1",
            title: "Description 1",
            type: "text",
        }),
        defineField({
            name: "description2",
            title: "Description 2",
            type: "text",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
