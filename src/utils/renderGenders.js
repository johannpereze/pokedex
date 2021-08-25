import genderMale from "@images/icons/gender_male.svg";
import genderFemale from "@images/icons/gender_female.svg";
import genderless from "@images/icons/genderless.svg";

const renderGenders = (possibleGenders) => {
  if (possibleGenders.length === 1) {
    if (possibleGenders[0] === "genderless")
      return `<img src="${genderless}" alt="genderless" title="Genderless">`;
    if (possibleGenders[0] === "male")
      return `<img src="${genderMale}" alt="gender male" title="male">`;
    if (possibleGenders[0] === "female")
      return `<img src="${genderFemale}" alt="gender female" title="female">`;
  } else {
    return `<img src="${genderMale}" alt="gender male" title="male"><img src="${genderFemale}" alt="gender female" title="female">`;
  }
};

export default renderGenders;
