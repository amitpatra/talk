import React from "react";
import TestRenderer from "react-test-renderer";

import { UIContext, UIContextProps } from "talk-ui/components";

import Username from "./Username";

it("renders correctly on small screens", () => {
  const props = {
    children: "Marvin",
  };

  const context: UIContextProps = {
    mediaQueryValues: {
      width: 320,
    },
  };

  const testRenderer = TestRenderer.create(
    <UIContext.Provider value={context}>
      <Username {...props} />
    </UIContext.Provider>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it("renders correctly on big screens", () => {
  const props = {
    children: "Marvin",
  };

  const context: UIContextProps = {
    mediaQueryValues: {
      width: 1600,
    },
  };

  const testRenderer = TestRenderer.create(
    <UIContext.Provider value={context}>
      <Username {...props} />
    </UIContext.Provider>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
