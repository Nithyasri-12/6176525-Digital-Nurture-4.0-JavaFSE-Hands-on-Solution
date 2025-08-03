import React from 'react';

class Getuser extends React.Component {
  state = {
    loading: true,
    user: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.randomuser.me/');
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      const result = data.results && data.results[0];
      if (!result) {
        throw new Error('No user data received');
      }

      this.setState({
        user: {
          title: result.name.title,
          firstName: result.name.first,
          picture: result.picture.large,
        },
        loading: false,
      });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    const { loading, user, error } = this.state;

    if (loading) return <div>Loading user...</div>;
    if (error) return <div style={{ color: 'crimson' }}>Error: {error}</div>;
    if (!user) return null;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          border: '1px solid #ccc',
          padding: 20,
          borderRadius: 8,
          maxWidth: 400,
        }}
      >
        <img
          src={user.picture}
          alt={`${user.firstName}`}
          style={{ borderRadius: '50%', width: 100, height: 100 }}
        />
        <div>
          <div style={{ fontSize: 18, fontWeight: '600' }}>
            {user.title} {user.firstName}
          </div>
        </div>
      </div>
    );
  }
}

export default Getuser;
