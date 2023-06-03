import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Task from "../components/Task";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  }); 
});
