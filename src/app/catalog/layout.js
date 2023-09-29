import Product from '@/components/Product/Product';

export default function CatalogLayout({ children }) {
  return (
    <>
      <Product />

      {children}
    </>
  );
}
