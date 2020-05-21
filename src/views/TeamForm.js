import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    FormInput,
  } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import teamsService from '../services/teams.service';

class AddNewPost extends Component {

  handleTeamSubmit(data) {
    teamsService.create(data);
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Add New Team" subtitle="Ayudantía" className="text-sm-left" />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <Form className="add-new-post">
                  <FormGroup>
                    <label>Team Name</label>
                    <FormInput size="lg" className="mb-3" placeholder="Tricolor de Paine" />
                  </FormGroup>
                  <FormGroup>
                    <label>Team Country</label>
                    <FormInput size="lg" className="mb-3" placeholder="Chile" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AddNewPost;
