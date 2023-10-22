import { useEffect, useState } from "react";
import PurchaseHistory from "../PurchaseHistory/PurchaseHistory";

const Purchase = () => {
  const [purchases, setPurchases] = useState([]);
  //   console.log(purchases);

  useEffect(() => {
    fetch("http://localhost:3000/purchase")
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  }, []);
  return (
    <div>
      {purchases.map((purchases) => (
        <PurchaseHistory
          key={purchases.id}
          purchases={purchases}
        ></PurchaseHistory>
      ))}
    </div>
  );
};

export default Purchase;
