import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Carrito de la compra",
  description: "Contador de productos",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />

    </div>
  );
}