import { Metadata } from "next";
import Chatbot from "./_views/Chatbot";

export const metadata: Metadata = {
  title: "Chatbot",
  description: "Chat bot nguyen duc nam",
};

export default function Page() {
  return (
    <>
      <Chatbot />
    </>
  );
}
