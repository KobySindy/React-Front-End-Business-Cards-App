export default function validateCard(cardToValidate) {
  let error = "";
  if (
    cardToValidate.bizName.length < 2 ||
    cardToValidate.bizName.length > 200
  ) {
    error = `Unvalid Business Name *`;
  }
  if (
    cardToValidate.bizDescription.length < 2 ||
    cardToValidate.bizDescription.length > 200
  ) {
    error += `Unvalid Business Description *`;
  }
  if (
    cardToValidate.bizAddress.length < 2 ||
    cardToValidate.bizAddress.length > 200
  ) {
    error += `Unvalid Business Address *`;
  }
  if (cardToValidate.bizPhone) {
    let reges = /^0[2-9]\d{7,8}$/;
    let res = reges.test(cardToValidate.bizPhone);
    if (!res) {
      error += `Unvalid Phone Number *`;
    }
  } else {
    error += `Unvalid Phone Number *`;
  }

  return error || cardToValidate;
}
