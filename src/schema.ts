import * as path from "path";
import { makeSchema } from "@nexus/schema";
import * as types from "./graphql";

export const schema = makeSchema({
  types: [...Object.values(types)],
  outputs: {
    schema: path.resolve(__dirname, "./generated/schema.graphql"),
    typegen: path.resolve(__dirname, "./generated/typings.ts"),
  },
});
