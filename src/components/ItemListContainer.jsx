import PropTypes from "prop-types";
import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {
  return (
    <main>
      <h1>{props.greeting}</h1>
      <ItemCount />
    </main>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
