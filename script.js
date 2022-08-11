const pxInput = document.querySelectorAll('input')[0];
const remInput = document.querySelectorAll('input')[1];

pxInput.focus();

pxInput.addEventListener('input', e => {
  const rem = e.target.value / 16;
  remInput.value = rem;
});

remInput.addEventListener('input', e => {
  const px = e.target.value * 16;
  pxInput.value = px;
});

// copy text when button clicked
function copyToClipboard(i) {
  if (i === 'rem') {
    remInput.select();
    remInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(remInput.value);
    const tooltip = document.getElementById('remTooltip');
    tooltip.innerHTML = 'Copied';
  } else {
    pxInput.select();
    pxInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pxInput.value);
    const tooltip = document.getElementById('pxTooltip');
    tooltip.innerHTML = 'Copied';
  }
}

function whenMouseOutBtn() {
  const pxTooltip = document.getElementById('pxTooltip');
  const remTooltip = document.getElementById('remTooltip');
  pxTooltip.innerHTML = 'Copy';
  remTooltip.innerHTML = 'Copy';
}
