import { queryField } from "@nexus/schema";

export const todos = queryField("todos", {
  type: "Todo",
  list: true,
  resolve: (_root, _args, _context) => {
    return [
      { id: 1, title: "Go to gym", finished: true },
      { id: 2, title: "Wash clothes", finished: true },
      { id: 3, title: "Write article for Techbook", finished: false },
    ];
  },
});
