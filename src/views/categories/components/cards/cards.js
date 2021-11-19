// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";

// custom components
import { Modal, ActionButton } from "shared/components";
import { CategoryCard, SubCategoryCard, SubCategoryForm } from "./components";

// styled components
import {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledInnerScroll,
  StyledScrollWrapper,
  StyledColumn,
  StyledColumnButton
} from "./styles";

const Cards = ({ data, getData, handleForm, setCategory, setIsEdit }) => {
  const [subcategory, setSubCategory] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEditSub, setIsEditSub] = useState(false);

  const handleSubCategoryForm = () => setIsOpen(!isOpen);

  const handleAddSubCategoryForm = (category) => {
    setSubCategory({ category });
    setIsEditSub(false);

    handleSubCategoryForm(category);
  };

  return (
    <StyledBoard container>
      <StyledGrid>
        <StyledScroll>
          <StyledScrollWrapper>
            {data.map((category, i) => (
              <StyledColumn item key={i}>
                <CategoryCard
                  getData={getData}
                  handleForm={handleForm}
                  category={category}
                  setCategory={setCategory}
                  setIsEdit={setIsEdit}
                />
                <Grid item>
                  <StyledInnerScroll>
                    {category.subCategories.map((el, i) => (
                      <SubCategoryCard
                        key={i}
                        getData={getData}
                        handleForm={handleSubCategoryForm}
                        category={category}
                        subcategory={el}
                        setSubCategory={setSubCategory}
                        setIsEditSub={setIsEditSub}
                      />
                    ))}
                  </StyledInnerScroll>
                </Grid>
                <Grid item xs={12}>
                  <StyledColumnButton>
                    <ActionButton
                      isAction={false}
                      icon={<PlusCircle />}
                      action={() => handleAddSubCategoryForm(category)}
                    />
                  </StyledColumnButton>
                </Grid>
              </StyledColumn>
            ))}
          </StyledScrollWrapper>
        </StyledScroll>
      </StyledGrid>
      <Modal
        name="sub-category"
        handleModal={handleSubCategoryForm}
        isOpen={isOpen}
        isEdit={isEditSub}
      >
        <SubCategoryForm
          subcategory={subcategory}
          handleForm={handleSubCategoryForm}
          getData={getData}
          isEdit={isEditSub}
        />
      </Modal>
    </StyledBoard>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;
