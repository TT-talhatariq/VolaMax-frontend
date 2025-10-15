'use client';

import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  const brandBlue = 'var(--brand-dark)';
  const inactiveGray = '#E2E7F4';
  const textGray = '#8181A5';

  return (
    <div className="flex items-center justify-start">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <React.Fragment key={stepNumber}>
            {/* Circle */}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                isActive ? 'text-white' : 'text-[#8181A5]'
              }`}
              style={{
                backgroundColor: isActive ? brandBlue : inactiveGray,
              }}
            >
              {stepNumber}
            </div>

            {/* Line between circles */}
            {stepNumber < totalSteps && (
              <div
                className="h-[2px] text-[#163B82] transition-all duration-300"
                style={{
                  backgroundColor:
                    stepNumber < currentStep ? brandBlue : brandBlue,
                  width: '222px',
                  margin: '0 -1px',
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
