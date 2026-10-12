const fs = require('fs');
const pages = ['Dashboard', 'LiveMapPage', 'NodesPage', 'NetworkPage', 'AlertsPage', 'AnalyticsPage', 'SettingsPage'];

pages.forEach(page => {
  fs.writeFileSync(`src/pages/${page}.tsx`, `import React from 'react';

export default function ${page}() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-100">${page}</h1>
      <p className="text-slate-400 mt-2">Content for ${page}</p>
    </div>
  );
}`);
});

console.log('Pages scaffolded.');
