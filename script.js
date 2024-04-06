const calc = () => {
  let sumEl = document.querySelector('#sum').value;
  let procEl = document.querySelector('#proc').value;

  let totalProcEl = document.querySelector('#total_proc');
  let totalSumEl = document.querySelector('#total_sum');

  let resTotalProc = (sumEl * procEl) / 100;

  totalProcEl.innerHTML = `Sum % : ${resTotalProc} `;
  totalSumEl.innerHTML = `Total Amount : ${+resTotalProc + +sumEl}`;
};

const reset = () => {
  let sumEl = document.querySelector('#sum');
  let procEl = document.querySelector('#proc');

  let totalProcEl = document.querySelector('#total_proc');
  let totalSumEl = document.querySelector('#total_sum');

  sumEl.value = '';
  procEl.value = '';
  totalProcEl.innerHTML = 'Sum % : ';
  totalSumEl.innerHTML = 'Total Amount : ';
};
