import React from 'react';
import * as Stories from './Audit.story';
import { render } from 'design/utils/testing';

test('loaded', async () => {
  const { container, findByText } = render(<Stories.Loaded />);
  await findByText(/SHOWING/);
  expect(container.firstChild).toMatchSnapshot();
});
