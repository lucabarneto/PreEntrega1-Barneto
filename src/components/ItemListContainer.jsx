import PropTypes from "prop-types";

export const ItemListContainer = (props) => {
  return (
    <main>
      <h1>{props.greeting}</h1>
    </main>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
