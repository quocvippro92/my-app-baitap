
import { localStoregeUlti } from "../functions/localStorage";
import { LIST_TO_DO_KEY, ROUTE,STATUS,FEATURES,ALERT } from "../const";
import { useEffect, useState,useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../components/InputText";
import { RadioCheckboxButton } from "../components/RadioCheckboxButton";
import Button from "../components/Button";
import { setValidateRule } from "../functions/validation";
import { initMessage } from "../functions/shared";
import AlertContext from "../context/AlertContext";
const radioList = [
  {
    title: STATUS.NEW,
    value: STATUS.NEW,
  },
  {
    title: STATUS.DOING,
    value: STATUS.DOING,
  },
  {
    title: STATUS.DONE,
    value: STATUS.DONE,
  },
];
const { get, set } = localStoregeUlti(LIST_TO_DO_KEY, []);
const EditAddNew = ({ isEditTask }) => {
  const [form, setForm] = useState({
    title: "",
    creator: "",
    description: "",
    status: STATUS.NEW,
  });
  const [validData, setValiData] = useState({
    title: false,
    creator: false,
    description: false,
  });
  useEffect(() => {
    if (isEditTask) setDefaultValue();
  }, []);

  useEffect(() => {
    const { creator, description, title } = form;
    setValiData({
      title: formField[0].regExpattern.test(title),
      creator: formField[1].regExpattern.test(creator),
      description: formField[2].regExpattern.test(description),
    });
  }, [form]);

  const formField = setValidateRule(form);
  const navigate = useNavigate();
  const { idTask } = useParams();
  const setDefaultValue = (e) => {
    e && e.preventDefault();
    setForm(get()[idTask]);
  };
  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      status: STATUS.NEW,
    };
    set([data, ...get()]);
    navigate(ROUTE.ALL);
  };
  const handleChangeTask = (e, isDelete) => {
    e.preventDefault();
    const todoItemLocalStorage = get();
    if (!isDelete) {
      todoItemLocalStorage.splice(idTask, 1, form);
    } else {
      todoItemLocalStorage.splice(idTask, 1);
    }
    set([...todoItemLocalStorage]);
    navigate(ROUTE.ALL);
  };
  const renderForm = () => {
    return formField.map((item, index) => {
      return (
        <InputText
          {...item}
          lable = {item.label}
          key={`${item.name}_${index}`}
          onChange={handleChangeForm}
          error={!item.value || validData[item.name] ? "" : item.messageError}
        />
      );
    });
  };
  const checkValidate = () =>
    validData.title && validData.creator && validData.description;

  const renderRadioButton = () => {
    return radioList.map((item) => (
      <RadioCheckboxButton
        key={`${item.value}`}
        title={item.title}
        type="radio"
        onClick={handleChangeForm}
        name="status"
        value={item.value}
        isChecked={form.status === item.value}
      />
    ));
  };
  return (
    <form className={`formClassContainer`}>
      {renderForm()}
      {isEditTask ? (
        <>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            {renderRadioButton()}
          </div>
          <div
            style={{
              display: "flex",
              width: "324",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Save"
              disabled={!checkValidate()}
              onClick={handleChangeTask}
            />
            <Button title="Reset" onClick={setDefaultValue} />
            <Button
              title="Delete"
              onClick={(e) => handleChangeTask(e, true)}
            />
          </div>
        </>
      ) : (
        <div>
          <Button
            title="Save"
            type={"submit"}
            disabled={!checkValidate()}
            onClick={handleSubmit}
          />
        </div>
      )}
    </form>
  );
};

export default EditAddNew;
