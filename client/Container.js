import React, { PropTypes } from 'react';

const Container = (props) => (
  <div>
    {props.header}
    <hr />
    {props.body}
    <hr />
    {props.footer}
  </div>
);

Container.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node
};

export default Container;
