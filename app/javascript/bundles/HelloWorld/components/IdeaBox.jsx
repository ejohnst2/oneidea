import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4%;
  border: 1px solid #ddd;
  background-color: white;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  margin-left: 0;
  color: #444;
`;

const CreatedAt = styled.span`
  margin-left: 35%;
  color: #bbb;
`;

const UserName = styled.span`margin-left: 2%;`;

const IdeaText = styled.p`color: black;`;

const Idea = ({ user, idea }) => {
  return (
    <Container>
      <Header>
        <span>
          <strong>
            {user.name}
          </strong>
        </span>
        <UserName>
          @{user.username}
        </UserName>
        <CreatedAt>
          {idea.createdAt.split('T')[0]}
        </CreatedAt>
      </Header>
      <IdeaText>
        {idea.name}
      </IdeaText>
    </Container>
  );
};

Idea.propTypes = {
  user: PropTypes.object.isRequired,
  idea: PropTypes.object.isRequired
};

export default Idea;
