import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const propTypes = {
  teams: PropTypes.shape(),
}

const defaultProps = {
  teams: null,
}

class TeamsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [{
        name: 'hello'
      },{
        name: 'world'
      }],
    }
  }

  render() {
    const { teams } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Champions League Teams" subtitle="Ayudantía" className="text-sm-left" />
        </Row>

        {teams.map((team, index) => {
          console.log(team);
          return (
            <div
              key={index}
            > 
            {index}
            </div>
          )
        })}

      </Container>
    );
  }

}

export default TeamsList;