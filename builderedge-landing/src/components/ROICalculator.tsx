'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function ROICalculator() {
  const [homesPerYear, setHomesPerYear] = useState('');
  const [avgUpgradesPerHome, setAvgUpgradesPerHome] = useState('');

  const calculateROI = () => {
    const homes = parseFloat(homesPerYear) || 0;
    const upgrades = parseFloat(avgUpgradesPerHome) || 0;
    
    // Formula: upgradeRevenue = homes * avgUpgrades * 1500 * 0.12
    const upgradeRevenue = homes * upgrades * 1500 * 0.12;
    // Formula: warrantySavings = homes * 300
    const warrantySavings = homes * 300;
    
    return { upgradeRevenue, warrantySavings };
  };

  const { upgradeRevenue, warrantySavings } = calculateROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calculator className="w-12 h-12 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            ROI Calculator
          </h2>
          <p className="text-xl text-gray-600">
            See how BuilderEdge can impact your bottom line
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="homes" className="block text-sm font-medium text-gray-700 mb-2">
                Homes per Year
              </label>
              <input
                type="number"
                id="homes"
                value={homesPerYear}
                onChange={(e) => setHomesPerYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Enter number of homes"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="upgrades" className="block text-sm font-medium text-gray-700 mb-2">
                Average Upgrades per Home
              </label>
              <input
                type="number"
                id="upgrades"
                value={avgUpgradesPerHome}
                onChange={(e) => setAvgUpgradesPerHome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Enter average upgrades"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">Annual Upgrade Revenue</h3>
              </div>
              <div className="text-3xl font-bold text-green-600">
                {formatCurrency(upgradeRevenue)}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Additional revenue from upgrade opportunities
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">Warranty Cost Savings</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600">
                {formatCurrency(warrantySavings)}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Reduced costs through efficient warranty management
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-navy rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-2">Total Annual Impact</h3>
            <div className="text-3xl font-bold text-gold mb-2">
              {formatCurrency(upgradeRevenue + warrantySavings)}
            </div>
            <p className="text-navy-100">
              Combined upgrade revenue and warranty savings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}