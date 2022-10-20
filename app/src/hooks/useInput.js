import React from 'react';

export default function useInputs(initialForm) {
  const [form, setForm] = React.useState(initialForm);
  
  // change
  const onChange = React.useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const reset = React.useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}