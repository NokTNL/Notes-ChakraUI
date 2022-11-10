import { Text, Square, Center, Button } from "@chakra-ui/react";
import { Header } from "./components/Header";
import "./App.css";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}
