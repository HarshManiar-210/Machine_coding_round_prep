import { useEffect, useRef, useState } from "react";

export default function InfiniteScrollObserver() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMore = () => {
    setItems((prev) => [...prev, ...Array.from({ length: 20 })]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Infinite Scroll with Observer</h1>
      {items.map((_, index) => (
        <div key={index} className="p-4 border-b">
          Item {index + 1}
        </div>
      ))}
      <div ref={loader} className="p-4 text-center">
        <p>Loading page {page}...</p>
      </div>
    </div>
  );
}
