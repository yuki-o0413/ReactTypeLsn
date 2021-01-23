export const updateFormId = (id) => {
  return {
      type: 'UPDATE_ID',
      payload: { id }
  };
}
export const updateFormName = (name) => {
  return {
      type: 'UPDATE_NAME',
      payload: { name }
  };
}
