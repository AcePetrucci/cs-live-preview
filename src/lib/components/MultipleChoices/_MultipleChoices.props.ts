import type ChoiceProps from "../Choice/_Choice.props";

type MultipleChoicesProps = {
  choices: ChoiceProps[];
  type: 'checkbox' | 'radio'
}

export default MultipleChoicesProps;