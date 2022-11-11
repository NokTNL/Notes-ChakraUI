import { Text, Square, Center, Button } from "@chakra-ui/react";
import { Header } from "./components/Header";
import "./App.css";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";

// assets/Icons.tsx for defining SVG comoponents
// components/Features & Pricing for examples on how to use them as components

export default function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}
