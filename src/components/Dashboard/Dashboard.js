import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardContainer,
  DashboardTabList,
  DashboardTabItem,
} from './Dashboard.styled';

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardTabList>
          <DashboardTabItem>
            <Link to="/news">
              News
            </Link>
          </DashboardTabItem>
          <DashboardTabItem>Favourite</DashboardTabItem>
        </DashboardTabList>

        {this.props.children}

      </DashboardContainer>
    );
  }
}

export default Dashboard;