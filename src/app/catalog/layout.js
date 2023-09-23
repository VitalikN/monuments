import Product from "@/components/Product/Product";
import Link from "next/link";

export default function CatalogLayout({ children }) {
  return (
    <>
      <Product />

      {children}
    </>
  );
}
