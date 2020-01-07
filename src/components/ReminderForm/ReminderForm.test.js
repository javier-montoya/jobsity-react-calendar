import React from "react";
import ReminderForm from "./ReminderForm";
import { Provider } from "react-redux";
import { Input } from "@material-ui/core";

describe("Reminder Form Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<ReminderForm />);
    expect(wrapper).toBeDefined();
  });

  describe("Successful Reminder Submission", () => {
    let reminderCity = "London";
    let defaultColor = "#16a5a5";
    let reminderText = "Reminder Text";

    const saveFunction = jest.fn();

    afterEach(() => {
      // restore default values to avoid test pollution
      reminderCity = "London";
      defaultColor = "#16a5a5";
      reminderText = "Reminder Text";

      // clear mocks
      jest.clearAllMocks();
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should be able to add a reminder", () => {
      const wrapper = mount(<ReminderForm submitCallback={saveFunction} />);

      const reminderTextInput = wrapper.find("input#reminder-text");
      reminderTextInput.simulate("change", {
        target: { name: "value", value: reminderText }
      });

      const reminderCityInput = wrapper.find("input#reminder-city");
      reminderCityInput.simulate("change", {
        target: { name: "value", value: reminderCity }
      });

      wrapper.find("button#submit-button").simulate("click");

      expect(saveFunction).toHaveBeenCalledWith({
        text: reminderText,
        city: reminderCity,
        color: defaultColor,
        date: expect.any(Date),
        time: expect.any(Date),
        id: expect.anything() //just check if not null, its a uuid so we cant control what it'll be
      });
    });

    it("should only allow 30 characters in 'reminder text'", () => {
      const wrapper = mount(<ReminderForm submitCallback={saveFunction} />);

      const reminderText =
        "This is a reminder text with more than 30 characters of length.";

      const reminderTextInput = wrapper.find("input#reminder-text");
      reminderTextInput.simulate("change", {
        target: { name: "value", value: reminderText }
      });

      const reminderCityInput = wrapper.find("input#reminder-city");
      reminderCityInput.simulate("change", {
        target: { name: "value", value: reminderCity }
      });

      wrapper.find("button#submit-button").simulate("click");

      const functionParams = saveFunction.mock.calls[0][0];
      expect(functionParams.text.length).toEqual(30);
    });

    it("should NOT submit the form without the required fields", () => {
      const wrapper = mount(<ReminderForm submitCallback={saveFunction} />);

      const reminderText = "";
      const reminderCity = "";

      const reminderTextInput = wrapper.find("input#reminder-text");
      reminderTextInput.simulate("change", {
        target: { name: "value", value: reminderText }
      });

      const reminderCityInput = wrapper.find("input#reminder-city");
      reminderCityInput.simulate("change", {
        target: { name: "value", value: reminderCity }
      });

      wrapper.find("button#submit-button").simulate("click");

      expect(saveFunction).toHaveBeenCalledTimes(0);
    });
  });
});
