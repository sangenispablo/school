import { createRoot } from "react-dom/client";

import { SchoolApp } from "./SchoolApp";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<SchoolApp />);
