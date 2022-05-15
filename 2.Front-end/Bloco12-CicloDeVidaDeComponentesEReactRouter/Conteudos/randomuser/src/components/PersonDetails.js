import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
  state = {
    loading: true,
    person: [],
  };

  fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    this.setState({
      person: data.results,
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50;

    if (nextState.person[0].dob.age > age) {
      return false;
    }
    return true;
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  };

  render() {
    const { person, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        {person.map((person, index) => (
          <PersonCard key={index} person={this.getUserElements(person)} />
        ))}
      </div>
    );
  }
}

export default PersonDetails;
