import { useState } from "react";
import "./WaterBillCalculator.css";

function WaterBillCalculator() {
  const [manjeera, setManjeera] = useState();
  const [borewell, setBorewell] = useState();

  const [manjeeraBill, setManjeeraBill] = useState(0);
  const [borewellBill, setBorewellBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  const calculateBill = () => {
    const manjeeraRate = 25 / 1000;
    const borewellRate = 10 / 1000;

    const manjeeraCost = manjeera * manjeeraRate;
    const borewellCost = borewell * borewellRate;

    setManjeeraBill(manjeeraCost);
    setBorewellBill(borewellCost);
    setTotalBill(manjeeraCost + borewellCost);
  };

  return (
    <div className="container">

      <div className="header">
        <h1>Apartment Water Bill Calculator</h1>
      </div>

      <p className="subtitle">
        Standalone Building - 5 Floors, Each Floor 3BHK
      </p>

      <div className="usage-container">

        {/* Manjeera */}
        <div className="card">
          <h3>Manjeera Water Usage</h3>

          <label>Manjeera Water Usage (in Liters):</label>

          <div className="input-group">
            <input
              type="number"
              min="0"
              value={manjeera}
              placeholder="0liters"
              onChange={(e) => setManjeera(e.target.value)}
            />
            <span>L</span>
          </div>

          <p className="rate">Rate: ₹ 25 per 1000 Liters</p>
        </div>

        {/* Borewell */}
        <div className="card">
          <h3>Borewell Water Usage</h3>

          <label>Borewell Water Usage (in Liters):</label>

          <div className="input-group">
            <input
              type="number"
              min="0"
              value={borewell}
              placeholder="0liters"
              onChange={(e) => setBorewell(e.target.value)}
            />
            <span>L</span>
          </div>

          <p className="rate">Rate: ₹ 10 per 1000 Liters</p>
        </div>

      </div>

      <button className="calculate-btn" onClick={calculateBill}>
        Calculate Bill
      </button>

      {/* Billing Summary */}

      <div className="summary">

        <h2>Billing Summary</h2>

        <div className="bill-row">
          <span>Manjeera Water Charge:</span>
          <span>₹ {manjeeraBill.toFixed(2)}</span>
        </div>

        <div className="bill-row">
          <span>Borewell Water Charge:</span>
          <span>₹ {borewellBill.toFixed(2)}</span>
        </div>

        <div className="bill-row total">
          <span>Total Water Bill:</span>
          <span>₹ {totalBill.toFixed(2)}</span>
        </div>

      </div>

      <p className="footer">
        Standalone Building – 5 Floors, 3 BHK Apartments on Each Floor
      </p>

    </div>
  );
}

export default WaterBillCalculator;