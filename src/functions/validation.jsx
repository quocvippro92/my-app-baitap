export const setValidateRule = (form) => {
  const { title, creator, description } = form;
  return [
    {
      label: "Title",
      placeholder: "Type title",
      name: "title",
      value: title,
      regExpattern: /^.{6,18}$/,
      messageError: "please type title, it has length form 6 to 18",
    },
    {
      label: "Creator",
      placeholder: "Type name of Creator",
      name: "creator",
      value: creator,
      regExpattern: /^.{6,12}$/,
      messageError: "please type title, it has length form 6 to 12",
    },
    {
      label: "Description",
      placeholder: "Type description details",
      name: "description",
      value: description,
      regExpattern: /^.{0,150}$/,
      messageError: "please type title, it has length form 0 to 150",
    },
  ];
};
