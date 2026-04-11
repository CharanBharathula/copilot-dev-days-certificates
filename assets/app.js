'use strict';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  // Bootstrap sequence — implemented in plan 01-04
}

// === Config Loader ===

async function fetchConfig() {
  const res = await fetch('config/certificate.config.json');
  if (!res.ok) throw new Error(`Config fetch failed: ${res.status}`);
  return res.json();
}

function validateConfig(config) {
  const required = ['org_name', 'primary_color', 'certificate_title'];
  for (const field of required) {
    if (!config[field]) throw new Error(`Invalid config: missing required field "${field}"`);
  }
}
