import { queryField, intArg } from "@nexus/schema";

export const todo = queryField("todo", {
  type: "Todo",
  args: {
    id: intArg({ nullable: false }),
  },
  resolve: (_root, _args, _context) => {
    //  Fetch todo
    return {
      id: 1,
      title: "Abc",
      finished: false,
      description: "aa",
    };
  },
});
