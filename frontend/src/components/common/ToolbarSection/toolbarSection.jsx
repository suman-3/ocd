

import React from 'react';

const ToolbarSection = ({ title, content }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>

    </div>
  );
};

export default ToolbarSection;
