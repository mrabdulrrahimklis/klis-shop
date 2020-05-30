import React from "react";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { filterItem } from "../../redux/shop/shop.actions";

import "./collection.styles.scss";

const CollectionPage = ({
  collection,
  filteredItems,
  filterItem,
  ...props
}) => {
  // const [filteredItems, setFilteredItems] = React.useState([]);

  const { title } = collection;
  let items = filteredItems.length <= 0 ? collection.items : filteredItems;

  React.useEffect(() => {
    filterItem("", props.location.pathname);
  }, []);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  filteredItems: state.shop.filteredItems,
});
const mapDispatchProps = (dispatch) => ({
  filterItem: (item, category) => dispatch(filterItem(item, category)),
});

export default connect(mapStateToProps, mapDispatchProps)(CollectionPage);
