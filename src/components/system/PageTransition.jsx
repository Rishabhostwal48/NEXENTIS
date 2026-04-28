import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const key = useMemo(() => location.pathname + location.search, [location.pathname, location.search]);
  const [animKey, setAnimKey] = useState(key);

  useEffect(() => {
    setAnimKey(key);
  }, [key]);

  return (
    <div key={animKey} className="animate-page-in">
      {children}
    </div>
  );
}

