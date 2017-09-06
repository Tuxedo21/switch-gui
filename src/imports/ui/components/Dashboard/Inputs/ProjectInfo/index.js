import { Row, Card, CardHeader, CardBlock } from 'reactstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import BarChart from './BarChart';
import Map from '../../../../containers/Dashboard/Inputs/ProjectInfo/Map';

const data = gql`
query uploadPP {
  getPowerPlants
}
`;

const ProjectInfo = props =>
  <div style={{ marginTop: `${60}px`, width: `${100}%`, height: `${100}%` }}>
    <Row style={{ height: `${50}%` }}>
      <Card style={{ marginBottom: `${10}px` }}>
        <CardHeader>Project Information </CardHeader>
        <CardBlock className="card-body">
          <Map />
        </CardBlock>
      </Card>
    </Row>
    <Row style={{ height: `${45}%` }}>
      <Card style={{ marginBottom: `${20}px`, width: `${100}%` }}>
        <CardHeader>Installed Capacity per Load Zone [MW]</CardHeader>
        <BarChart data={props.loadZone} color={props.color} />
      </Card>
    </Row>
  </div>;

const ProjectInfoWithData = graphql(data)(ProjectInfo);

export default ProjectInfoWithData;
