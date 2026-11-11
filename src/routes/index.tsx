import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "اللغة العربية والإنجليزية — تعلّم الإنجليزية خطوة بخطوة" },
      {
        name: "description",
        content: "دروس إنجليزية قصيرة للناطقين بالعربية: استماع، نطق، قواعد وتركيب جمل للمستوى A1.",
      },
      { property: "og:title", content: "اللغة العربية والإنجليزية" },
      {
        property: "og:description",
        content: "دروس إنجليزية قصيرة للناطقين بالعربية: استماع، نطق، قواعد وتركيب جمل للمستوى A1.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
