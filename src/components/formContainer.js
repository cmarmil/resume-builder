import React from "react";
import PersonalForm from "components/formComponents/personalForm";
import { Button, Progress, Box } from "@chakra-ui/core";

class StyledInput extends React.Component {
  constructor(props) {
    super(props);
    this.renderActiveForm = this.renderActiveForm.bind(this);
    this.state = {
      activeForm: 0
    };
  }

  renderActiveForm() {
    switch (this.state.activeForm) {
      case 0:
        return <PersonalForm></PersonalForm>;
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Progress color="#80CBC4" size="lg" value={20} />
        {this.renderActiveForm()}
        <Box mb={"100px"} className="nextPrevButtons">
          <Button>Back</Button>
          <Button background="#80CBC4">Next</Button>
        </Box>
      </React.Fragment>
    );
  }
}

export default StyledInput;
