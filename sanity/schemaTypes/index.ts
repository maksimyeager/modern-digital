import { type SchemaTypeDefinition } from "sanity";
import blogPost from "./blogPost";
import emailSubscription from "./emailSubscription";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blogPost, emailSubscription],
};
