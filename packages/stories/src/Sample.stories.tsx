import * as React from "react"
import { storiesOf } from "@storybook/react"
import { SampleButton } from "@nature/element/Sample/Button"

const stories = storiesOf('Components|Sample', module);

stories.add('Button', () => <SampleButton num={1} />);
