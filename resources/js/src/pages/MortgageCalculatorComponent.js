import React from "react";
import MortgageCalculator from "mortgage-calculator-react";

export default function MortgageCalculatorComponent() {
    return (
        <div className="container py-5">
            <h1 className="text-center py-5">Mortgage Calculator</h1>
            <MortgageCalculator />
        </div>
    );
}
