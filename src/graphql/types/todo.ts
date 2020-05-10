import { objectType } from "@nexus/schema";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.int("id", { nullable: false });
    t.string("title", { nullable: false });
    t.string("description", { nullable: true });
    t.boolean("finished", { nullable: false });
  },
});
