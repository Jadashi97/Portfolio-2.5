import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import { visionTool } from "@sanity/vision";
import {schemaTypes} from "./schemas";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
    basePath: "/studio",
    name : "MY_PORTFOLIO_studio",
    title: "My Portfolio-2.0",

    projectId,
    dataset,

    plugins: [deskTool(), visionTool()],


    schema: {
        types: schemaTypes,
    },

});