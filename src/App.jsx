import Luxury from "./components/Luxury";
import Sedan from "./components/Sedan";
import Suv from "./components/Suv";

export default function App() {
  return (
    <div className="flex items-center justify-center py-28 bg-gray">
      <Sedan/>
      <Suv/>
      <Luxury/>
    </div>
  )
}