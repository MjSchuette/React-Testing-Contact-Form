import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//Arrange
//Act
//Assert

test("renders App without crashing", () => {
  render(<App />);
});

test("renders each component ", () => {
  const { getByText } = render(<App/>);
  
  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

test("makes sure inputs can be filled in",  () => {
  async () => {const {getByLabelText, getByTestId} = render(<ContactForm />)

  const firstName = getByLabelText(/First name/i);
  const lastName = getByLabelText(/Last name/i);
  const email = getByLabelText(/Email/i);
  const message = getByLabelText(/Message/i);

  fireEvent.change(firstName, {target: {value:"Matthew"}});
  fireEvent.change(lastName, {target: {value:"Schuette"}});
  fireEvent.change(email, {target: {value:"email@email.com"}})
  fireEvent.change(message, {target: {value:"Hi i'm Joe"}})

 expect(firstNameInput.value).toBe("Matthew");
 expect(lastNameInput.value).toBe("Schuette");
 expect(emailInput.value).toBe("email@email.com");
 expect(messageInput.value).toBe("Hi i'm Joe");

 fireEvent.click(getByTestId("submit"));}
})